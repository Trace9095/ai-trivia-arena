import type { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Choose from 11 AI-generated trivia categories — Science, History, Sports, Pop Culture, and more.',
}
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Lock,
  Target, FlaskConical, Scroll, Globe, Clapperboard, Trophy,
  UtensilsCrossed, Laptop, Film, Music, Mountain,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/utils'
import { getSession } from '@/lib/auth'

const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  Target, FlaskConical, Scroll, Globe, Clapperboard,
  Trophy, UtensilsCrossed, Laptop, Film, Music, Mountain,
}

const CATEGORY_COLORS: Record<string, string> = {
  general:     'text-blue-400 bg-blue-500/10',
  science:     'text-green-400 bg-green-500/10',
  history:     'text-amber-400 bg-amber-500/10',
  geography:   'text-teal-400 bg-teal-500/10',
  pop_culture: 'text-pink-400 bg-pink-500/10',
  sports:      'text-orange-400 bg-orange-500/10',
  food_drink:  'text-red-400 bg-red-500/10',
  technology:  'text-cyan-400 bg-cyan-500/10',
  movies_tv:   'text-violet-400 bg-violet-500/10',
  music:       'text-fuchsia-400 bg-fuchsia-500/10',
  colorado:    'text-yellow-400 bg-yellow-500/10',
}

export default async function CategoriesPage() {
  const session = await getSession()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Categories</h1>
      <p className="text-muted-foreground mb-8">11 categories of AI-generated trivia questions</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map((cat) => {
          const CatIcon = CATEGORY_ICON_MAP[cat.icon] ?? Target
          const colorCls = CATEGORY_COLORS[cat.id] ?? 'text-blue-400 bg-blue-500/10'
          return (
            <Card key={cat.id} className="p-5 hover:border-blue-500/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorCls}`}>
                  <CatIcon className="w-6 h-6" />
                </div>
                {cat.isPremium && (
                  <Badge variant="secondary" className="text-xs">
                    <Lock className="w-3 h-3 mr-1" />
                    Pro
                  </Badge>
                )}
              </div>
              <h3 className="font-bold text-lg mb-1">{cat.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>

              <div className="flex gap-2">
                {(['easy', 'medium', 'hard'] as const).map((diff) =>
                  session ? (
                    <Link key={diff} href={`/play/game?category=${cat.id}&difficulty=${diff}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full text-xs capitalize min-h-[44px]">
                        {diff}
                      </Button>
                    </Link>
                  ) : (
                    <Link key={diff} href="/auth/login" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full text-xs capitalize min-h-[44px]">
                        {diff}
                      </Button>
                    </Link>
                  )
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
