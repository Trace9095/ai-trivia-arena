import { Trophy, Medal, Crown } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { getDb } from '@/db'
import { users } from '@/db/schema'
import { desc } from 'drizzle-orm'

export const dynamic = 'force-dynamic'

export default async function LeaderboardPage() {
  const db = getDb()
  const leaderboard = await db
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

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-400" />
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />
    return <span className="font-mono text-muted-foreground w-5 text-center text-sm">{rank}</span>
  }

  const getDisplayName = (user: { name: string | null; email: string }) =>
    user.name ?? user.email.split('@')[0]

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Trophy className="w-8 h-8 text-yellow-400" />
        <div>
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">Top trivia players of all time</p>
        </div>
      </div>

      {leaderboard.length === 0 ? (
        <Card className="p-12 text-center">
          <Trophy className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No players yet. Be the first!</p>
        </Card>
      ) : (
        <div className="space-y-2">
          {leaderboard.map((user, i) => {
            const rank = i + 1
            const name = getDisplayName(user)
            return (
              <Card
                key={user.id}
                className={`p-4 flex items-center gap-4 ${rank <= 3 ? 'border-yellow-800/50 bg-yellow-950/10' : ''}`}
              >
                <div className="w-8 flex justify-center">{getRankIcon(rank)}</div>
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-blue-950 text-blue-400 font-bold">
                    {name[0]?.toUpperCase() ?? '?'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{name}</p>
                  <p className="text-xs text-muted-foreground">{user.gamesPlayed} games played</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-blue-400">{user.totalScore.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">pts</p>
                </div>
                {user.streak > 0 && <div className="text-orange-400 text-sm font-bold">🔥 {user.streak}</div>}
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
