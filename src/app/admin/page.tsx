import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { getDb } from '@/db'
import { users, games, questions, answers } from '@/db/schema'
import { count } from 'drizzle-orm'
import { Card } from '@/components/ui/card'
import { Users, Gamepad2, Brain, Target } from 'lucide-react'

export const dynamic = 'force-dynamic'

const ADMIN_EMAILS = ['trace@epicai.ai', 'ceo@epicai.ai']

export default async function AdminPage() {
  const session = await getSession()
  if (!session || !ADMIN_EMAILS.includes(session.email)) {
    redirect('/')
  }

  const db = getDb()
  const [userCount] = await db.select({ count: count() }).from(users)
  const [gameCount] = await db.select({ count: count() }).from(games)
  const [questionCount] = await db.select({ count: count() }).from(questions)
  const [answerCount] = await db.select({ count: count() }).from(answers)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-muted-foreground mb-8">AI Trivia Arena metrics</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Users', value: userCount.count, icon: Users, color: 'text-blue-400' },
          { label: 'Total Games', value: gameCount.count, icon: Gamepad2, color: 'text-purple-400' },
          { label: 'Questions Generated', value: questionCount.count, icon: Brain, color: 'text-green-400' },
          { label: 'Answers Submitted', value: answerCount.count, icon: Target, color: 'text-yellow-400' },
        ].map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="p-5 text-center">
            <Icon className={`w-6 h-6 mx-auto mb-2 ${color}`} />
            <div className="text-3xl font-bold font-mono">{value.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="font-bold mb-4">Recent Users</h2>
        <p className="text-muted-foreground text-sm">Full user management coming in Phase 2.</p>
      </Card>
    </div>
  )
}
