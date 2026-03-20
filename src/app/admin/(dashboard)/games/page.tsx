import type { Metadata } from 'next'
import { getDb } from '@/db'
import { games, answers, questions } from '@/db/schema'
import { count, desc, sum } from 'drizzle-orm'
import { Card } from '@/components/ui/card'
import { Gamepad2 } from 'lucide-react'
import { CategoryChart } from '@/components/admin/CategoryChart'

export const metadata: Metadata = {
  title: 'Games — Admin',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function AdminGamesPage() {
  const db = getDb()

  const [gameCount] = await db.select({ count: count() }).from(games)
  const [questionCount] = await db.select({ count: count() }).from(questions)
  const [answerCount] = await db.select({ count: count() }).from(answers)

  const categoryStats = await db
    .select({ category: games.category, count: count() })
    .from(games)
    .groupBy(games.category)
    .orderBy(desc(count()))

  const difficultyStats = await db
    .select({ difficulty: games.difficulty, count: count() })
    .from(games)
    .groupBy(games.difficulty)
    .orderBy(desc(count()))

  const recentGames = await db
    .select({
      id: games.id,
      category: games.category,
      difficulty: games.difficulty,
      status: games.status,
      createdAt: games.createdAt,
    })
    .from(games)
    .orderBy(desc(games.createdAt))
    .limit(30)

  const completedCount = recentGames.filter((g) => g.status === 'completed').length
  const completionRate =
    recentGames.length > 0 ? Math.round((completedCount / recentGames.length) * 100) : 0

  // Avg score per game (if answers table has data)
  let avgScore = 0
  try {
    const [scoreData] = await db.select({ total: sum(answers.pointsEarned), calls: count() }).from(answers)
    avgScore = scoreData.calls > 0 ? Math.round(Number(scoreData.total ?? 0) / scoreData.calls) : 0
  } catch {
    // ignore
  }

  const chartData = categoryStats.map((s) => ({
    category: s.category.replace('_', ' '),
    count: s.count,
  }))

  function formatDate(d: Date): string {
    return new Date(d).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center gap-3 mb-8">
        <Gamepad2 className="w-6 h-6 text-amber-400" />
        <div>
          <h1 className="text-2xl font-bold">Games</h1>
          <p className="text-muted-foreground text-sm">Analytics and game history</p>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Total Games', value: gameCount.count.toLocaleString() },
          { label: 'Questions Generated', value: questionCount.count.toLocaleString() },
          { label: 'Completion Rate', value: `${completionRate}%` },
          { label: 'Avg Pts / Answer', value: avgScore.toLocaleString() },
        ].map(({ label, value }) => (
          <Card key={label} className="p-4 text-center">
            <div className="text-2xl font-bold font-mono">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </Card>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-5 lg:col-span-2">
          <h2 className="font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wide">
            Games by Category
          </h2>
          <CategoryChart data={chartData} />
        </Card>

        <Card className="p-5">
          <h2 className="font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wide">
            By Difficulty
          </h2>
          {difficultyStats.length === 0 ? (
            <p className="text-muted-foreground text-sm">No data yet.</p>
          ) : (
            <div className="space-y-3">
              {difficultyStats.map((d) => {
                const pct =
                  gameCount.count > 0 ? Math.round((d.count / gameCount.count) * 100) : 0
                const color =
                  d.difficulty === 'easy'
                    ? 'bg-green-500'
                    : d.difficulty === 'hard'
                      ? 'bg-red-500'
                      : 'bg-yellow-500'
                return (
                  <div key={d.difficulty}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize">{d.difficulty}</span>
                      <span className="font-mono text-muted-foreground">
                        {d.count} ({pct}%)
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </Card>
      </div>

      {/* Recent games table */}
      <Card className="overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Recent Games
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Category
                </th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Difficulty
                </th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Status
                </th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Started
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentGames.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                    No games yet.
                  </td>
                </tr>
              ) : (
                recentGames.map((g) => (
                  <tr key={g.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 capitalize">{g.category.replace('_', ' ')}</td>
                    <td className="px-4 py-3 capitalize text-muted-foreground">{g.difficulty}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs px-2 py-0.5 rounded font-mono ${
                          g.status === 'completed'
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-yellow-500/10 text-yellow-400'
                        }`}
                      >
                        {g.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {formatDate(g.createdAt)}
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
