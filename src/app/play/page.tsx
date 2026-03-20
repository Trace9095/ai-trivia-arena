import type { Metadata } from 'next'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Game Lobby',
  description: 'Choose your trivia challenge — daily questions, custom games, or live multiplayer.',
}
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Calendar, Users, Star } from 'lucide-react'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/utils'

export default async function PlayPage() {
  const session = await getSession()
  if (!session) redirect('/auth/login')

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Game Lobby</h1>
      <p className="text-muted-foreground mb-8">Choose your challenge, {today}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daily Challenge */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 border-blue-800 bg-gradient-to-br from-blue-950/50 to-purple-950/50">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-blue-400" />
              <Badge className="bg-blue-950 text-blue-400 border-blue-800">Daily Challenge</Badge>
            </div>
            <h2 className="text-2xl font-bold mb-2">Today&apos;s Challenge</h2>
            <p className="text-muted-foreground mb-6">10 AI-generated questions. One attempt. Compete globally.</p>
            <Link href="/play/daily">
              <Button size="lg" className="w-full h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700">
                <Zap className="w-5 h-5 mr-2" />
                Start Daily Challenge
              </Button>
            </Link>
          </Card>

          {/* Quick Play by category */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Play by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {CATEGORIES.filter((c) => !c.isPremium).map((cat) => (
                <Link key={cat.id} href={`/play/game?category=${cat.id}&difficulty=medium`}>
                  <Card className="p-4 text-center hover:border-blue-500 transition-all hover:scale-[1.02] cursor-pointer min-h-[80px] flex flex-col items-center justify-center gap-1">
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="text-sm font-medium">{cat.name}</span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card className="p-5">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              Pro Categories
            </h3>
            <div className="space-y-2">
              {CATEGORIES.filter((c) => c.isPremium).map((cat) => (
                <div
                  key={cat.id}
                  className="flex items-center gap-3 p-2 rounded-lg bg-card hover:bg-muted/50 transition-colors"
                >
                  <span className="text-xl">{cat.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{cat.name}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    Pro
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              Multiplayer
            </h3>
            <p className="text-sm text-muted-foreground mb-3">Head-to-head games coming in Phase 2!</p>
            <Button variant="outline" className="w-full" disabled>
              Coming Soon
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
