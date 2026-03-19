import { getDb } from '@/db'
import { aiUsageLogs, revenueEvents, costEvents } from '@/db/schema'
import { count, sum, gte, desc } from 'drizzle-orm'
import { Card } from '@/components/ui/card'
import { DollarSign, TrendingDown, TrendingUp, AlertCircle } from 'lucide-react'

export const dynamic = 'force-dynamic'

function formatUsd(n: number): string {
  if (n === 0) return '$0.00'
  if (n < 0.01) return `$${n.toFixed(4)}`
  return `$${n.toFixed(2)}`
}

export default async function AdminRevenuePage() {
  const db = getDb()

  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)

  let totalAiCost = 0
  let monthAiCost = 0
  let totalRevenue = 0
  let monthRevenue = 0
  let revenueList: { id: string; eventType: string; amountUsd: number; provider: string; createdAt: Date }[] = []
  let costList: { id: string; category: string; amountUsd: number; description: string; createdAt: Date }[] = []
  let manualCostTotal = 0

  try {
    const [allCost] = await db.select({ cost: sum(aiUsageLogs.costUsd) }).from(aiUsageLogs)
    totalAiCost = Number(allCost?.cost ?? 0)

    const [mCost] = await db
      .select({ cost: sum(aiUsageLogs.costUsd) })
      .from(aiUsageLogs)
      .where(gte(aiUsageLogs.createdAt, monthStart))
    monthAiCost = Number(mCost?.cost ?? 0)
  } catch {
    // ai_usage_logs may not exist yet
  }

  try {
    const [rev] = await db.select({ total: sum(revenueEvents.amountUsd) }).from(revenueEvents)
    totalRevenue = Number(rev?.total ?? 0)

    const [mRev] = await db
      .select({ total: sum(revenueEvents.amountUsd) })
      .from(revenueEvents)
      .where(gte(revenueEvents.createdAt, monthStart))
    monthRevenue = Number(mRev?.total ?? 0)

    revenueList = await db
      .select({
        id: revenueEvents.id,
        eventType: revenueEvents.eventType,
        amountUsd: revenueEvents.amountUsd,
        provider: revenueEvents.provider,
        createdAt: revenueEvents.createdAt,
      })
      .from(revenueEvents)
      .orderBy(desc(revenueEvents.createdAt))
      .limit(20)

    const [manualCost] = await db.select({ total: sum(costEvents.amountUsd) }).from(costEvents)
    manualCostTotal = Number(manualCost?.total ?? 0)

    costList = await db
      .select({
        id: costEvents.id,
        category: costEvents.category,
        amountUsd: costEvents.amountUsd,
        description: costEvents.description,
        createdAt: costEvents.createdAt,
      })
      .from(costEvents)
      .orderBy(desc(costEvents.createdAt))
      .limit(20)
  } catch {
    // Tables may not exist yet
  }

  const totalCost = totalAiCost + manualCostTotal
  const netProfit = totalRevenue - totalCost
  const isProfit = netProfit >= 0

  function formatDate(d: Date): string {
    return new Date(d).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center gap-3 mb-8">
        <DollarSign className="w-6 h-6 text-emerald-400" />
        <div>
          <h1 className="text-2xl font-bold">Revenue</h1>
          <p className="text-muted-foreground text-sm">Cost vs. revenue — P&amp;L overview</p>
        </div>
      </div>

      {/* P&L summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {[
          {
            label: 'Total Revenue',
            value: formatUsd(totalRevenue),
            icon: TrendingUp,
            color: 'text-emerald-400',
          },
          {
            label: 'Revenue (this month)',
            value: formatUsd(monthRevenue),
            icon: TrendingUp,
            color: 'text-emerald-400',
          },
          {
            label: 'Total AI Cost',
            value: formatUsd(totalAiCost),
            icon: TrendingDown,
            color: 'text-red-400',
          },
          {
            label: 'Net P&L',
            value: `${isProfit ? '+' : ''}${formatUsd(netProfit)}`,
            icon: DollarSign,
            color: isProfit ? 'text-emerald-400' : 'text-red-400',
          },
        ].map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="p-4 text-center">
            <Icon className={`w-5 h-5 mx-auto mb-2 ${color}`} />
            <div className={`text-xl font-bold font-mono ${color}`}>{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </Card>
        ))}
      </div>

      {/* Stripe/RevenueCat placeholder */}
      {revenueList.length === 0 && (
        <Card className="p-6 mb-6 border-dashed">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm mb-1">Revenue integrations not connected</h3>
              <p className="text-muted-foreground text-sm">
                Revenue events will appear here once Stripe or RevenueCat is integrated. The{' '}
                <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">revenue_events</code>{' '}
                table is ready — just wire up the webhook handlers to insert rows.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap text-xs font-mono text-muted-foreground">
                <span className="bg-muted px-2 py-1 rounded">Stripe webhooks → /api/webhooks/stripe</span>
                <span className="bg-muted px-2 py-1 rounded">RevenueCat → /api/webhooks/revenuecat</span>
              </div>
            </div>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue events */}
        <Card className="overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              Revenue Events
            </h2>
          </div>
          {revenueList.length === 0 ? (
            <div className="px-5 py-8 text-center text-muted-foreground text-sm">
              No revenue events yet.
            </div>
          ) : (
            <div className="divide-y divide-border">
              {revenueList.map((r) => (
                <div key={r.id} className="px-5 py-3 flex items-center justify-between text-sm">
                  <div>
                    <span className="capitalize">{r.eventType.replace('_', ' ')}</span>
                    <span className="text-xs text-muted-foreground ml-2">via {r.provider}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-emerald-400">{formatUsd(r.amountUsd)}</span>
                    <div className="text-xs text-muted-foreground">{formatDate(r.createdAt)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Cost events */}
        <Card className="overflow-hidden">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              Manual Cost Entries
            </h2>
            {manualCostTotal > 0 && (
              <span className="font-mono text-xs text-red-400">{formatUsd(manualCostTotal)} total</span>
            )}
          </div>
          {costList.length === 0 ? (
            <div className="px-5 py-8 text-center text-muted-foreground text-sm">
              No manual cost entries. Add hosting, domain, and API costs via the{' '}
              <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">cost_events</code> table.
            </div>
          ) : (
            <div className="divide-y divide-border">
              {costList.map((c) => (
                <div key={c.id} className="px-5 py-3 flex items-center justify-between text-sm">
                  <div>
                    <span>{c.description}</span>
                    <span className="text-xs text-muted-foreground ml-2 capitalize">
                      {c.category.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-red-400">{formatUsd(c.amountUsd)}</span>
                    <div className="text-xs text-muted-foreground">{formatDate(c.createdAt)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
