import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { getDb } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Trophy, Flame, Gamepad2, Star } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function ProfilePage() {
  const session = await getSession()
  if (!session) redirect('/auth/login')

  const db = getDb()
  const [user] = await db.select().from(users).where(eq(users.id, session.userId)).limit(1)
  if (!user) redirect('/auth/login')

  const displayName = user.name ?? user.email.split('@')[0]

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>

      {/* Profile header */}
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-blue-950 text-blue-400 text-2xl font-bold">
              {displayName[0]?.toUpperCase() ?? '?'}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{displayName}</h2>
            <p className="text-muted-foreground text-sm">{user.email}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Member since{' '}
              {user.createdAt.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Score', value: user.totalScore.toLocaleString(), icon: Trophy, color: 'text-yellow-400' },
          { label: 'Games Played', value: user.gamesPlayed, icon: Gamepad2, color: 'text-blue-400' },
          { label: 'Current Streak', value: user.streak, icon: Flame, color: 'text-orange-400' },
          { label: 'Best Streak', value: user.longestStreak, icon: Star, color: 'text-purple-400' },
        ].map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="p-4 text-center">
            <Icon className={`w-5 h-5 mx-auto mb-2 ${color}`} />
            <div className="text-2xl font-bold font-mono">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </Card>
        ))}
      </div>

      {/* Recent activity placeholder */}
      <Card className="p-6">
        <h3 className="font-bold mb-4">Recent Activity</h3>
        <p className="text-muted-foreground text-sm text-center py-8">
          Play some games to see your activity here!
        </p>
      </Card>
    </div>
  )
}
