import type { Metadata } from 'next'
import { Trophy, Crown, Flame, Medal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leaderboard',
  description: 'See the top trivia players competing on AI Trivia Arena. All-time champions and weekly leaders.',
}

import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getDb } from '@/db'
import { users, liveAnswers } from '@/db/schema'
import { desc, sql } from 'drizzle-orm'

export const dynamic = 'force-dynamic'

async function getAllTimeLeaderboard() {
  const db = getDb()
  return db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      totalScore: users.totalScore,
      gamesPlayed: users.gamesPlayed,
      streak: users.streak,
    })
    .from(users)
    .orderBy(desc(users.totalScore))
    .limit(50)
}

async function getWeeklyLeaderboard() {
  const db = getDb()
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  return db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      weekScore: sql<number>`coalesce(sum(${liveAnswers.pointsEarned})::int, 0)`,
    })
    .from(users)
    .leftJoin(liveAnswers, sql`${liveAnswers.createdAt} > ${weekAgo}`)
    .groupBy(users.id, users.name, users.email)
    .orderBy(desc(sql`coalesce(sum(${liveAnswers.pointsEarned})::int, 0)`))
    .limit(50)
}

function getDisplayName(user: { name: string | null; email: string }) {
  return user.name ?? user.email.split('@')[0]
}

// Rank badge — top 3 get icons + coloured rings, rest get plain numbers
function RankBadge({ rank }: { rank: number }) {
  if (rank === 1)
    return (
      <div className="w-10 h-10 rounded-full bg-yellow-500/15 border border-yellow-500/40 flex items-center justify-center shrink-0">
        <Crown className="w-5 h-5 text-yellow-400" />
      </div>
    )
  if (rank === 2)
    return (
      <div className="w-10 h-10 rounded-full bg-zinc-500/15 border border-zinc-500/40 flex items-center justify-center shrink-0">
        <Medal className="w-5 h-5 text-zinc-300" />
      </div>
    )
  if (rank === 3)
    return (
      <div className="w-10 h-10 rounded-full bg-amber-700/15 border border-amber-700/40 flex items-center justify-center shrink-0">
        <Medal className="w-5 h-5 text-amber-600" />
      </div>
    )
  return (
    <div className="w-10 h-10 flex items-center justify-center shrink-0">
      <span className="font-mono text-zinc-500 text-sm font-bold">{rank}</span>
    </div>
  )
}

// Avatar colour based on rank
function getAvatarStyle(rank: number): string {
  if (rank === 1) return 'bg-yellow-950/60 text-yellow-400 border-yellow-700/40'
  if (rank === 2) return 'bg-zinc-800 text-zinc-300 border-zinc-600/40'
  if (rank === 3) return 'bg-amber-950/60 text-amber-600 border-amber-700/40'
  return 'bg-blue-950/60 text-blue-400 border-blue-700/20'
}

function LeaderboardRow({
  rank,
  name,
  score,
  sub,
  streak,
}: {
  rank: number
  name: string
  score: number
  sub?: string
  streak?: number
}) {
  const isTop3 = rank <= 3
  return (
    <div
      className={`flex items-center gap-3 px-3 py-3.5 rounded-xl transition-all min-h-[52px] ${
        rank === 1
          ? 'bg-yellow-950/20 border border-yellow-900/30'
          : rank === 2
          ? 'bg-zinc-900/40 border border-zinc-700/20'
          : rank === 3
          ? 'bg-amber-950/15 border border-amber-900/20'
          : 'border border-transparent hover:bg-white/3 hover:border-white/6'
      }`}
    >
      <RankBadge rank={rank} />
      <Avatar className="w-9 h-9 shrink-0">
        <AvatarFallback className={`font-bold text-sm border ${getAvatarStyle(rank)}`}>
          {name[0]?.toUpperCase() ?? '?'}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold truncate text-sm ${isTop3 ? 'text-white' : 'text-zinc-300'}`}>
          {name}
        </p>
        {sub && <p className="text-xs text-zinc-600">{sub}</p>}
      </div>
      {streak != null && streak >= 3 && (
        <div className="flex items-center gap-1 text-orange-400 text-xs font-bold bg-orange-950/50 border border-orange-800/40 rounded-full px-2 py-0.5">
          <Flame className="w-3 h-3" />
          {streak}
        </div>
      )}
      <div className="text-right shrink-0">
        <p className={`font-mono font-black text-base tabular-nums ${rank === 1 ? 'text-amber-400' : rank <= 3 ? 'text-zinc-300' : 'text-blue-400'}`}>
          {score.toLocaleString()}
        </p>
        <p className="text-xs text-zinc-600">pts</p>
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <Card className="p-12 text-center border-white/8 bg-card/50">
      <Trophy className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
      <p className="text-zinc-500 text-sm font-medium">No data yet — be the first to play!</p>
    </Card>
  )
}

export default async function LeaderboardPage() {
  const [allTime, weekly] = await Promise.all([
    getAllTimeLeaderboard(),
    getWeeklyLeaderboard().catch(() => []),
  ])

  const weeklyFiltered = weekly.filter((u) => u.weekScore > 0)

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center shrink-0 shadow-lg shadow-yellow-500/10">
          <Trophy className="w-7 h-7 text-yellow-400" />
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Leaderboard</h1>
          <p className="text-zinc-500 text-sm mt-1">Top trivia players worldwide</p>
        </div>
      </div>

      <Tabs defaultValue="week">
        <TabsList className="w-full mb-6 bg-card border border-white/8 p-1 rounded-xl">
          <TabsTrigger
            value="week"
            className="flex-1 data-[state=active]:bg-amber-500/15 data-[state=active]:text-amber-300 data-[state=active]:border-amber-500/25 text-zinc-500 rounded-lg transition-all"
          >
            This Week
          </TabsTrigger>
          <TabsTrigger
            value="alltime"
            className="flex-1 data-[state=active]:bg-amber-500/15 data-[state=active]:text-amber-300 data-[state=active]:border-amber-500/25 text-zinc-500 rounded-lg transition-all"
          >
            All Time
          </TabsTrigger>
        </TabsList>

        <TabsContent value="week">
          {weeklyFiltered.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-1.5">
              {weeklyFiltered.map((u, i) => (
                <LeaderboardRow
                  key={u.id}
                  rank={i + 1}
                  name={getDisplayName(u)}
                  score={u.weekScore}
                  sub="This week"
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="alltime">
          {allTime.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-1.5">
              {allTime.map((u, i) => (
                <LeaderboardRow
                  key={u.id}
                  rank={i + 1}
                  name={getDisplayName(u)}
                  score={u.totalScore}
                  sub={`${u.gamesPlayed} games played`}
                  streak={u.streak}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
