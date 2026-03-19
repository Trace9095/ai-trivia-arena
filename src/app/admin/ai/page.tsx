import { getDb } from '@/db'
import { aiUsageLogs } from '@/db/schema'
import { count, sum, avg, desc, gte, sql } from 'drizzle-orm'
import { Card } from '@/components/ui/card'
import { Brain } from 'lucide-react'
import { DailyUsageChart } from '@/components/admin/DailyUsageChart'

export const dynamic = 'force-dynamic'

function formatCost(usd: number): string {
  if (usd === 0) return '$0.00'
  if (usd < 0.0001) return `$${usd.toFixed(6)}`
  if (usd < 0.01) return `$${usd.toFixed(4)}`
  if (usd < 1) return `$${usd.toFixed(3)}`
  return `$${usd.toFixed(2)}`
}

function formatTokens(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return n.toLocaleString()
}

export default async function AdminAIPage() {
  const db = getDb()

  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

  let totalCost = 0
  let totalCalls = 0
  let totalInputTokens = 0
  let totalOutputTokens = 0
  let todayCost = 0
  let monthCost = 0
  let avgLatency = 0
  let successRate = 100
  let dailyData: { date: string; cost: number; calls: number }[] = []
  let modelBreakdown: { model: string; calls: number; cost: number; tokens: number }[] = []
  let recentCalls: {
    id: string
    model: string
    promptType: string
    totalTokens: number
    costUsd: number
    latencyMs: number | null
    success: boolean
    errorMessage: string | null
    createdAt: Date
  }[] = []

  try {
    const [allTime] = await db
      .select({
        cost: sum(aiUsageLogs.costUsd),
        calls: count(),
        inputTokens: sum(aiUsageLogs.inputTokens),
        outputTokens: sum(aiUsageLogs.outputTokens),
        avgLatency: avg(aiUsageLogs.latencyMs),
      })
      .from(aiUsageLogs)

    totalCost = Number(allTime?.cost ?? 0)
    totalCalls = allTime?.calls ?? 0
    totalInputTokens = Number(allTime?.inputTokens ?? 0)
    totalOutputTokens = Number(allTime?.outputTokens ?? 0)
    avgLatency = Math.round(Number(allTime?.avgLatency ?? 0))

    const [today] = await db
      .select({ cost: sum(aiUsageLogs.costUsd) })
      .from(aiUsageLogs)
      .where(gte(aiUsageLogs.createdAt, todayStart))
    todayCost = Number(today?.cost ?? 0)

    const [month] = await db
      .select({ cost: sum(aiUsageLogs.costUsd) })
      .from(aiUsageLogs)
      .where(gte(aiUsageLogs.createdAt, monthStart))
    monthCost = Number(month?.cost ?? 0)

    // Success rate
    const [successes] = await db
      .select({ count: count() })
      .from(aiUsageLogs)
      .where(sql`${aiUsageLogs.success} = true`)
    successRate =
      totalCalls > 0 ? Math.round((successes.count / totalCalls) * 100) : 100

    // Daily usage for last 30 days
    const dailyRows = await db
      .select({
        day: sql<string>`(${aiUsageLogs.createdAt})::date`,
        cost: sum(aiUsageLogs.costUsd),
        calls: count(),
      })
      .from(aiUsageLogs)
      .where(gte(aiUsageLogs.createdAt, thirtyDaysAgo))
      .groupBy(sql`(${aiUsageLogs.createdAt})::date`)
      .orderBy(sql`(${aiUsageLogs.createdAt})::date`)

    dailyData = dailyRows.map((r) => ({
      date: r.day,
      cost: Number(r.cost ?? 0),
      calls: r.calls,
    }))

    // Model breakdown
    const modelRows = await db
      .select({
        model: aiUsageLogs.model,
        calls: count(),
        cost: sum(aiUsageLogs.costUsd),
        tokens: sum(aiUsageLogs.totalTokens),
      })
      .from(aiUsageLogs)
      .groupBy(aiUsageLogs.model)
      .orderBy(desc(count()))

    modelBreakdown = modelRows.map((r) => ({
      model: r.model,
      calls: r.calls,
      cost: Number(r.cost ?? 0),
      tokens: Number(r.tokens ?? 0),
    }))

    // Recent calls
    recentCalls = await db
      .select({
        id: aiUsageLogs.id,
        model: aiUsageLogs.model,
        promptType: aiUsageLogs.promptType,
        totalTokens: aiUsageLogs.totalTokens,
        costUsd: aiUsageLogs.costUsd,
        latencyMs: aiUsageLogs.latencyMs,
        success: aiUsageLogs.success,
        errorMessage: aiUsageLogs.errorMessage,
        createdAt: aiUsageLogs.createdAt,
      })
      .from(aiUsageLogs)
      .orderBy(desc(aiUsageLogs.createdAt))
      .limit(25)
  } catch {
    // Table may not exist yet on first deploy
  }

  const topMetrics = [
    { label: 'Total Cost', value: formatCost(totalCost) },
    { label: 'Today', value: formatCost(todayCost) },
    { label: 'This Month', value: formatCost(monthCost) },
    { label: 'Total Calls', value: totalCalls.toLocaleString() },
    { label: 'Input Tokens', value: formatTokens(totalInputTokens) },
    { label: 'Output Tokens', value: formatTokens(totalOutputTokens) },
    { label: 'Avg Latency', value: avgLatency > 0 ? `${avgLatency}ms` : '—' },
    { label: 'Success Rate', value: `${successRate}%` },
  ]

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center gap-3 mb-8">
        <Brain className="w-6 h-6 text-green-400" />
        <div>
          <h1 className="text-2xl font-bold">AI Usage</h1>
          <p className="text-muted-foreground text-sm">Token consumption and cost tracking</p>
        </div>
      </div>

      {/* Summary grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {topMetrics.map(({ label, value }) => (
          <Card key={label} className="p-4 text-center">
            <div className="text-xl font-bold font-mono">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </Card>
        ))}
      </div>

      {/* Daily cost chart */}
      <Card className="p-5 mb-6">
        <h2 className="font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wide">
          Daily Cost — Last 30 Days
        </h2>
        <DailyUsageChart data={dailyData} />
      </Card>

      {/* Model breakdown */}
      <Card className="p-5 mb-6">
        <h2 className="font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wide">
          By Model
        </h2>
        {modelBreakdown.length === 0 ? (
          <p className="text-muted-foreground text-sm">No data yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-2 text-xs text-muted-foreground font-medium">Model</th>
                  <th className="text-right pb-2 text-xs text-muted-foreground font-medium">Calls</th>
                  <th className="text-right pb-2 text-xs text-muted-foreground font-medium">Tokens</th>
                  <th className="text-right pb-2 text-xs text-muted-foreground font-medium">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {modelBreakdown.map((m) => (
                  <tr key={m.model}>
                    <td className="py-2.5 font-mono text-xs">{m.model}</td>
                    <td className="py-2.5 text-right font-mono">{m.calls.toLocaleString()}</td>
                    <td className="py-2.5 text-right font-mono">{formatTokens(m.tokens)}</td>
                    <td className="py-2.5 text-right font-mono text-emerald-400">
                      {formatCost(m.cost)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Recent calls */}
      <Card className="overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Recent API Calls
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {['Model', 'Type', 'Tokens', 'Cost', 'Latency', 'Status', 'Time'].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide first:text-left"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentCalls.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                    No API calls logged yet.
                  </td>
                </tr>
              ) : (
                recentCalls.map((c) => (
                  <tr key={c.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-2.5 font-mono text-xs">{c.model}</td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">
                      {c.promptType.replace('_', ' ')}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs">{c.totalTokens.toLocaleString()}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-emerald-400">
                      {formatCost(c.costUsd)}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                      {c.latencyMs != null ? `${c.latencyMs}ms` : '—'}
                    </td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded font-mono ${
                          c.success
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-red-500/10 text-red-400'
                        }`}
                      >
                        {c.success ? 'ok' : 'err'}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">
                      {new Date(c.createdAt).toLocaleTimeString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
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
