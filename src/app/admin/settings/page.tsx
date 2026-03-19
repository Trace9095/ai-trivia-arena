import { Card } from '@/components/ui/card'
import { Settings } from 'lucide-react'
import { CATEGORIES } from '@/lib/utils'

export const dynamic = 'force-dynamic'

const MODELS = [
  { id: 'claude-haiku-4-5', label: 'Claude Haiku 4.5', cost: '$0.25/$1.25 per 1M tokens', active: true },
  { id: 'claude-sonnet-4-6', label: 'Claude Sonnet 4.6', cost: '$3/$15 per 1M tokens', active: false },
  { id: 'claude-opus-4-6', label: 'Claude Opus 4.6', cost: '$15/$75 per 1M tokens', active: false },
]

const DIFFICULTY_CONFIG = [
  { id: 'easy', label: 'Easy', basePoints: 100, timeLimit: '15s', description: 'Common knowledge' },
  { id: 'medium', label: 'Medium', basePoints: 200, timeLimit: '15s', description: 'Moderate challenge' },
  { id: 'hard', label: 'Hard', basePoints: 300, timeLimit: '15s', description: 'Expert-level knowledge' },
]

export default function AdminSettingsPage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Settings className="w-6 h-6 text-muted-foreground" />
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground text-sm">App configuration and category management</p>
        </div>
      </div>

      {/* AI Model */}
      <Card className="p-5 mb-6">
        <h2 className="font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wide">
          AI Model
        </h2>
        <div className="space-y-2">
          {MODELS.map((m) => (
            <div
              key={m.id}
              className={`flex items-center justify-between p-3 rounded-md border ${
                m.active
                  ? 'border-primary/50 bg-primary/5'
                  : 'border-border bg-muted/20 opacity-60'
              }`}
            >
              <div>
                <div className="font-medium text-sm">{m.label}</div>
                <div className="font-mono text-xs text-muted-foreground mt-0.5">{m.id}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">{m.cost}</div>
                {m.active && (
                  <span className="text-xs text-emerald-400 font-medium mt-0.5 block">Active</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Change active model in{' '}
          <code className="bg-muted px-1 py-0.5 rounded">src/lib/claude.ts</code> → const model
        </p>
      </Card>

      {/* Scoring */}
      <Card className="p-5 mb-6">
        <h2 className="font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wide">
          Scoring & Difficulty
        </h2>
        <div className="space-y-2">
          {DIFFICULTY_CONFIG.map((d) => (
            <div key={d.id} className="flex items-center justify-between p-3 rounded-md border border-border">
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs px-2 py-0.5 rounded font-mono capitalize ${
                    d.id === 'easy'
                      ? 'bg-green-500/10 text-green-400'
                      : d.id === 'hard'
                        ? 'bg-red-500/10 text-red-400'
                        : 'bg-yellow-500/10 text-yellow-400'
                  }`}
                >
                  {d.label}
                </span>
                <span className="text-sm text-muted-foreground">{d.description}</span>
              </div>
              <div className="text-right text-xs text-muted-foreground">
                <div>
                  <span className="font-mono text-foreground">{d.basePoints}</span> base pts
                </div>
                <div>+ time bonus (max 150)</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Edit scoring in{' '}
          <code className="bg-muted px-1 py-0.5 rounded">src/lib/utils.ts</code> →{' '}
          <code className="bg-muted px-1 py-0.5 rounded">calculatePoints()</code>
        </p>
      </Card>

      {/* Categories */}
      <Card className="p-5">
        <h2 className="font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wide">
          Categories ({CATEGORIES.length} total)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="flex items-center justify-between p-3 rounded-md border border-border"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{cat.icon}</span>
                <div>
                  <div className="text-sm font-medium">{cat.name}</div>
                  <div className="text-xs text-muted-foreground">{cat.description}</div>
                </div>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded font-mono ${
                  cat.isPremium
                    ? 'bg-yellow-500/10 text-yellow-400'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {cat.isPremium ? 'premium' : 'free'}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Edit categories in{' '}
          <code className="bg-muted px-1 py-0.5 rounded">src/lib/utils.ts</code> →{' '}
          <code className="bg-muted px-1 py-0.5 rounded">CATEGORIES</code>
        </p>
      </Card>
    </div>
  )
}
