import type { Metadata } from 'next'
import { getDb } from '@/db'
import { errorLogs } from '@/db/schema'
import { count, desc, sql } from 'drizzle-orm'
import { Card } from '@/components/ui/card'
import { ShieldAlert } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Error Logs — Admin',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

const ERROR_TYPE_COLORS: Record<string, string> = {
  api: 'bg-orange-500/10 text-orange-400',
  auth: 'bg-yellow-500/10 text-yellow-400',
  db: 'bg-red-500/10 text-red-400',
  client: 'bg-blue-500/10 text-blue-400',
  ai: 'bg-amber-500/10 text-amber-400',
}

export default async function AdminErrorsPage() {
  const db = getDb()

  let totalErrors = 0
  let typeBreakdown: { errorType: string; count: number }[] = []
  let recentErrors: {
    id: string
    errorType: string
    message: string
    endpoint: string | null
    method: string | null
    statusCode: number | null
    createdAt: Date
  }[] = []

  try {
    const [total] = await db.select({ count: count() }).from(errorLogs)
    totalErrors = total.count

    const typeRows = await db
      .select({ errorType: errorLogs.errorType, count: count() })
      .from(errorLogs)
      .groupBy(errorLogs.errorType)
      .orderBy(desc(count()))
    typeBreakdown = typeRows.map((r) => ({ errorType: r.errorType, count: r.count }))

    recentErrors = await db
      .select({
        id: errorLogs.id,
        errorType: errorLogs.errorType,
        message: errorLogs.message,
        endpoint: errorLogs.endpoint,
        method: errorLogs.method,
        statusCode: errorLogs.statusCode,
        createdAt: errorLogs.createdAt,
      })
      .from(errorLogs)
      .orderBy(desc(errorLogs.createdAt))
      .limit(100)
  } catch {
    // Table may not exist yet on first deploy
  }

  function formatDate(d: Date): string {
    return new Date(d).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center gap-3 mb-8">
        <ShieldAlert className={`w-6 h-6 ${totalErrors > 0 ? 'text-red-400' : 'text-muted-foreground'}`} />
        <div>
          <h1 className="text-2xl font-bold">Errors</h1>
          <p className="text-muted-foreground text-sm">
            {totalErrors === 0 ? 'No errors logged' : `${totalErrors.toLocaleString()} total errors`}
          </p>
        </div>
      </div>

      {/* Type breakdown */}
      {typeBreakdown.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-8">
          {typeBreakdown.map(({ errorType, count: c }) => (
            <Card key={errorType} className="px-4 py-3 flex items-center gap-3">
              <span
                className={`text-xs px-2 py-0.5 rounded font-mono uppercase ${
                  ERROR_TYPE_COLORS[errorType] ?? 'bg-muted text-muted-foreground'
                }`}
              >
                {errorType}
              </span>
              <span className="font-mono font-bold">{c.toLocaleString()}</span>
            </Card>
          ))}
        </div>
      )}

      {/* Error log table */}
      <Card className="overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Recent Errors (last 100)
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {['Type', 'Message', 'Endpoint', 'Status', 'Time'].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-xs text-muted-foreground font-medium uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentErrors.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                    No errors logged yet. The app is healthy.
                  </td>
                </tr>
              ) : (
                recentErrors.map((e) => (
                  <tr key={e.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-2.5">
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded font-mono uppercase ${
                          ERROR_TYPE_COLORS[e.errorType] ?? 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {e.errorType}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-xs max-w-[280px] truncate" title={e.message}>
                      {e.message}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                      {e.method && e.endpoint ? (
                        <>
                          <span className="text-yellow-400">{e.method}</span>{' '}
                          {e.endpoint}
                        </>
                      ) : (
                        e.endpoint ?? '—'
                      )}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs">
                      {e.statusCode != null ? (
                        <span
                          className={
                            e.statusCode >= 500
                              ? 'text-red-400'
                              : e.statusCode >= 400
                                ? 'text-yellow-400'
                                : 'text-muted-foreground'
                          }
                        >
                          {e.statusCode}
                        </span>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground whitespace-nowrap">
                      {formatDate(e.createdAt)}
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
