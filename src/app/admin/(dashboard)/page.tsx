import { getDb } from '@/db'
import { users, games, questions, answers, aiUsageLogs, errorLogs, liveGames, livePlayers } from '@/db/schema'
import { count, sum, gte, desc, sql } from 'drizzle-orm'
import { Card } from '@/components/ui/card'
import {
  Users,
  Gamepad2,
  Brain,
  Target,
  DollarSign,
  ShieldAlert,
  TrendingUp,
  Activity,
  Tv,
  MonitorPlay,
} from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

function formatCost(usd: number): string {
  if (usd === 0) return '$0.00'
  if (usd < 0.001) return `$${usd.toFixed(5)}`
  if (usd < 1) return `$${usd.toFixed(4)}`
  return `$${usd.toFixed(2)}`
}

export default async function AdminPage() {
  const db = getDb()

  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const dayStart = new Date(now.getTime() - 24 * 60 * 60 * 1000)

  // Core counts
  const [userCount] = await db.select({ count: count() }).from(users)
  const [gameCount] = await db.select({ count: count() }).from(games)
  const [questionCount] = await db.select({ count: count() }).from(questions)
  const [answerCount] = await db.select({ count: count() }).from(answers)

  // AI costs & errors
  let totalAiCost = 0
  let monthAiCost = 0
  let totalAiCalls = 0
  let weekErrors = 0
  let recentUsers: { email: string; gamesPlayed: number; createdAt: Date }[] = []
  let recentGames: { id: string; category: string; difficulty: string; status: string; createdAt: Date }[] = []

  try {
    const [allCost] = await db.select({ total: sum(aiUsageLogs.costUsd), calls: count() }).from(aiUsageLogs)
    totalAiCost = Number(allCost?.total ?? 0)
    totalAiCalls = allCost?.calls ?? 0

    const [mCost] = await db
      .select({ total: sum(aiUsageLogs.costUsd) })
      .from(aiUsageLogs)
      .where(gte(aiUsageLogs.createdAt, monthStart))
    monthAiCost = Number(mCost?.total ?? 0)

    const [errCount] = await db
      .select({ count: count() })
      .from(errorLogs)
      .where(gte(errorLogs.createdAt, weekStart))
    weekErrors = errCount.count
  } catch {
    // Tables may not exist yet on first deploy
  }

  try {
    recentUsers = await db
      .select({ email: users.email, gamesPlayed: users.gamesPlayed, createdAt: users.createdAt })
      .from(users)
      .orderBy(desc(users.createdAt))
      .limit(8)

    recentGames = await db
      .select({
        id: games.id,
        category: games.category,
        difficulty: games.difficulty,
        status: games.status,
        createdAt: games.createdAt,
      })
      .from(games)
      .orderBy(desc(games.createdAt))
      .limit(8)
  } catch {
    // ignore
  }

  // TV game stats
  let tvTotal = 0
  let tvToday = 0
  let tvActive = 0
  let totalPlayers = 0
  let recentTvGames: {
    id: string
    gameCode: string
    status: string
    theme: string
    playerCount: number
    createdAt: Date
  }[] = []

  try {
    const [tvAllCount] = await db.select({ count: count() }).from(liveGames)
    tvTotal = tvAllCount.count

    const [tvTodayCount] = await db
      .select({ count: count() })
      .from(liveGames)
      .where(gte(liveGames.createdAt, dayStart))
    tvToday = tvTodayCount.count

    const [tvActiveCount] = await db
      .select({ count: count() })
      .from(liveGames)
      .where(sql`${liveGames.status} NOT IN ('waiting','finished')`)
    tvActive = tvActiveCount.count

    const [playerTotal] = await db.select({ count: count() }).from(livePlayers)
    totalPlayers = playerTotal.count

    const tvGamesList = await db
      .select({
        id: liveGames.id,
        gameCode: liveGames.gameCode,
        status: liveGames.status,
        theme: liveGames.theme,
        createdAt: liveGames.createdAt,
      })
      .from(liveGames)
      .orderBy(desc(liveGames.createdAt))
      .limit(8)

    // Get player counts for each game
    recentTvGames = await Promise.all(
      tvGamesList.map(async (g) => {
        const [{ count: pc }] = await db
          .select({ count: count() })
          .from(livePlayers)
          .where(sql`${livePlayers.gameId} = ${g.id}`)
        return { ...g, playerCount: pc }
      })
    )
  } catch {
    // Live tables may not exist
  }

  const topMetrics = [
    { label: 'Total Users', value: userCount.count.toLocaleString(), icon: Users, color: 'text-blue-400' },
    { label: 'Solo Games', value: gameCount.count.toLocaleString(), icon: Gamepad2, color: 'text-purple-400' },
    { label: 'Questions Generated', value: questionCount.count.toLocaleString(), icon: Brain, color: 'text-green-400' },
    { label: 'Answers Submitted', value: answerCount.count.toLocaleString(), icon: Target, color: 'text-yellow-400' },
  ]

  const aiMetrics = [
    { label: 'AI Cost (all time)', value: formatCost(totalAiCost), icon: DollarSign, color: 'text-emerald-400' },
    { label: 'AI Cost (this month)', value: formatCost(monthAiCost), icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Total AI Calls', value: totalAiCalls.toLocaleString(), icon: Activity, color: 'text-sky-400' },
    { label: 'Errors (7d)', value: weekErrors.toLocaleString(), icon: ShieldAlert, color: weekErrors > 0 ? 'text-red-400' : 'text-muted-foreground' },
  ]

  const tvMetrics = [
    { label: 'TV Games Total', value: tvTotal.toLocaleString(), icon: Tv, color: 'text-purple-400' },
    { label: 'TV Games Today', value: tvToday.toLocaleString(), icon: MonitorPlay, color: 'text-blue-400' },
    { label: 'Active Now', value: tvActive.toLocaleString(), icon: Activity, color: tvActive > 0 ? 'text-green-400' : 'text-muted-foreground' },
    { label: 'Total TV Players', value: totalPlayers.toLocaleString(), icon: Users, color: 'text-yellow-400' },
  ]

  function formatDate(d: Date): string {
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  const statusBadge = (s: string) => {
    const map: Record<string, string> = {
      waiting: 'bg-yellow-500/10 text-yellow-400',
      active: 'bg-green-500/10 text-green-400',
      picking: 'bg-blue-500/10 text-blue-400',
      showing_answer: 'bg-purple-500/10 text-purple-400',
      showing_leaderboard: 'bg-purple-500/10 text-purple-400',
      finished: 'bg-muted text-muted-foreground',
    }
    return map[s] ?? 'bg-muted text-muted-foreground'
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Overview</h1>
        <p className="text-muted-foreground text-sm mt-1">AI Trivia Arena — system metrics</p>
      </div>

      {/* Core metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {topMetrics.map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="p-4 text-center">
            <Icon className={`w-5 h-5 mx-auto mb-2 ${color}`} />
            <div className="text-2xl font-bold font-mono">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </Card>
        ))}
      </div>

      {/* AI & error metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {aiMetrics.map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="p-4 text-center">
            <Icon className={`w-5 h-5 mx-auto mb-2 ${color}`} />
            <div className="text-2xl font-bold font-mono">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </Card>
        ))}
      </div>

      {/* TV Mode section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold flex items-center gap-2">
            <Tv className="w-4 h-4 text-purple-400" />
            TV Mode
          </h2>
          <Link href="/tv" className="text-xs text-blue-400 hover:underline">
            Open TV Mode →
          </Link>
        </div>

        {/* TV metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {tvMetrics.map(({ label, value, icon: Icon, color }) => (
            <Card key={label} className="p-4 text-center">
              <Icon className={`w-5 h-5 mx-auto mb-2 ${color}`} />
              <div className="text-2xl font-bold font-mono">{value}</div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </Card>
          ))}
        </div>

        {/* Recent TV games */}
        <Card className="overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Recent TV Games</h3>
          </div>
          {recentTvGames.length === 0 ? (
            <div className="px-5 py-8 text-center text-muted-foreground text-sm">No TV games yet.</div>
          ) : (
            <div className="divide-y divide-border">
              {recentTvGames.map((g) => (
                <div key={g.id} className="px-5 py-3 flex items-center gap-4 text-sm hover:bg-muted/10">
                  <code className="font-mono text-lg font-bold text-white w-14">{g.gameCode}</code>
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-mono capitalize shrink-0 ${statusBadge(g.status)}`}
                  >
                    {g.status.replace('_', ' ')}
                  </span>
                  <span className="text-muted-foreground capitalize text-xs">{g.theme}</span>
                  <span className="text-muted-foreground text-xs">{g.playerCount} players</span>
                  <span className="text-muted-foreground text-xs ml-auto">{formatDate(g.createdAt)}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Recent solo activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-5">
          <h2 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
            Recent Users
          </h2>
          {recentUsers.length === 0 ? (
            <p className="text-muted-foreground text-sm">No users yet.</p>
          ) : (
            <div className="space-y-2">
              {recentUsers.map((u) => (
                <div key={u.email} className="flex items-center justify-between text-sm">
                  <span className="font-mono text-xs truncate max-w-[200px]">{u.email}</span>
                  <span className="text-muted-foreground text-xs">{u.gamesPlayed} games</span>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="p-5">
          <h2 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
            Recent Solo Games
          </h2>
          {recentGames.length === 0 ? (
            <p className="text-muted-foreground text-sm">No games yet.</p>
          ) : (
            <div className="space-y-2">
              {recentGames.map((g) => (
                <div key={g.id} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="capitalize">{g.category.replace('_', ' ')}</span>
                    <span className="text-xs text-muted-foreground capitalize">({g.difficulty})</span>
                  </div>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded font-mono ${
                      g.status === 'completed'
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}
                  >
                    {g.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
