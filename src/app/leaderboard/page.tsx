import { Trophy, Crown, Flame } from 'lucide-react'
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
  // Players with most points in live games this week
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

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <div className="w-9 h-9 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center"><Crown className="w-5 h-5 text-yellow-400" /></div>
  if (rank === 2) return <div className="w-9 h-9 rounded-full bg-gray-500/20 border border-gray-500/50 flex items-center justify-center"><span className="text-sm font-bold text-gray-300">2</span></div>
  if (rank === 3) return <div className="w-9 h-9 rounded-full bg-amber-700/20 border border-amber-700/50 flex items-center justify-center"><span className="text-sm font-bold text-amber-600">3</span></div>
  return <div className="w-9 h-9 flex items-center justify-center"><span className="font-mono text-muted-foreground text-sm">{rank}</span></div>
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
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
        isTop3 ? 'bg-yellow-950/10 border border-yellow-900/30' : 'hover:bg-muted/20'
      }`}
    >
      <RankBadge rank={rank} />
      <Avatar className="w-9 h-9 shrink-0">
        <AvatarFallback className="bg-blue-950 text-blue-400 font-bold text-sm">
          {name[0]?.toUpperCase() ?? '?'}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="font-semibold truncate text-sm">{name}</p>
        {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
      </div>
      {streak != null && streak >= 3 && (
        <div className="flex items-center gap-1 text-orange-400 text-xs font-bold">
          <Flame className="w-3 h-3" />
          {streak}
        </div>
      )}
      <div className="text-right shrink-0">
        <p className="font-mono font-bold text-blue-400 text-sm">{score.toLocaleString()}</p>
        <p className="text-xs text-muted-foreground">pts</p>
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <Card className="p-10 text-center">
      <Trophy className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
      <p className="text-muted-foreground text-sm">No data yet. Start playing!</p>
    </Card>
  )
}

export default async function LeaderboardPage() {
  const [allTime, weekly] = await Promise.all([
    getAllTimeLeaderboard(),
    getWeeklyLeaderboard().catch(() => []),
  ])

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Trophy className="w-8 h-8 text-yellow-400" />
        <div>
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground text-sm">Top trivia players</p>
        </div>
      </div>

      <Tabs defaultValue="week">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="week" className="flex-1">This Week</TabsTrigger>
          <TabsTrigger value="alltime" className="flex-1">All Time</TabsTrigger>
        </TabsList>

        <TabsContent value="week">
          {weekly.filter((u) => u.weekScore > 0).length === 0 ? <EmptyState /> : (
            <div className="space-y-1">
              {weekly.filter((u) => u.weekScore > 0).map((u, i) => (
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
          {allTime.length === 0 ? <EmptyState /> : (
            <div className="space-y-1">
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
