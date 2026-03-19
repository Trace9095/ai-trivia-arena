import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/utils'
import { getSession } from '@/lib/auth'

export default async function CategoriesPage() {
  const session = await getSession()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Categories</h1>
      <p className="text-muted-foreground mb-8">11 categories of AI-generated trivia questions</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map((cat) => (
          <Card key={cat.id} className="p-5 hover:border-blue-500/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <span className="text-4xl">{cat.icon}</span>
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
                    <Button variant="outline" size="sm" className="w-full text-xs capitalize">
                      {diff}
                    </Button>
                  </Link>
                ) : (
                  <Link key={diff} href="/auth/login" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full text-xs capitalize">
                      {diff}
                    </Button>
                  </Link>
                )
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
