import { getDb } from '@/db'
import { users } from '@/db/schema'
import { desc } from 'drizzle-orm'
import { Card } from '@/components/ui/card'
import { Users } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AdminUsersPage() {
  const db = getDb()

  const allUsers = await db
    .select({
      id: users.id,
      email: users.email,
      name: users.name,
      totalScore: users.totalScore,
      gamesPlayed: users.gamesPlayed,
      streak: users.streak,
      longestStreak: users.longestStreak,
      lastPlayedAt: users.lastPlayedAt,
      createdAt: users.createdAt,
    })
    .from(users)
    .orderBy(desc(users.createdAt))
    .limit(200)

  function formatDate(d: Date | null): string {
    if (!d) return '—'
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="p-8 max-w-6xl">
      <div className="flex items-center gap-3 mb-8">
        <Users className="w-6 h-6 text-blue-400" />
        <div>
          <h1 className="text-2xl font-bold">Users</h1>
          <p className="text-muted-foreground text-sm">{allUsers.length} total users</p>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Email
                </th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Name
                </th>
                <th className="text-right px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Score
                </th>
                <th className="text-right px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Games
                </th>
                <th className="text-right px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Streak
                </th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Last Played
                </th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {allUsers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                    No users yet.
                  </td>
                </tr>
              ) : (
                allUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">{u.email}</td>
                    <td className="px-4 py-3 text-muted-foreground">{u.name ?? '—'}</td>
                    <td className="px-4 py-3 text-right font-mono">
                      {u.totalScore.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right">{u.gamesPlayed}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="font-mono">{u.streak}</span>
                      {u.longestStreak > u.streak && (
                        <span className="text-xs text-muted-foreground ml-1">
                          ({u.longestStreak} best)
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {formatDate(u.lastPlayedAt)}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {formatDate(u.createdAt)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
