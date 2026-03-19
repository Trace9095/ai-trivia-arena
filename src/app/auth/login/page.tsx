'use client'

import { useState, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Brain, Mail, Loader2, CheckCircle2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const searchParams = useSearchParams()
  const errorParam = searchParams.get('error')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/auth/magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = (await res.json()) as { error?: string }
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Failed to send link')
        setStatus('error')
      } else {
        setStatus('sent')
      }
    } catch {
      setErrorMsg('Network error — please try again')
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex p-4 rounded-2xl bg-blue-950 border border-blue-800 mb-4">
            <Brain className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold">AI Trivia Arena</h1>
          <p className="text-muted-foreground mt-2">Sign in to play and track your scores</p>
        </div>

        {errorParam && (
          <div className="bg-red-950/50 border border-red-800 rounded-xl p-4 mb-6 text-red-400 text-sm text-center">
            {errorParam === 'expired'
              ? 'That login link expired. Request a new one.'
              : 'Invalid login link. Try again.'}
          </div>
        )}

        <Card className="p-8">
          {status === 'sent' ? (
            <div className="text-center">
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Check your email</h2>
              <p className="text-muted-foreground">
                We sent a sign-in link to <strong>{email}</strong>.
                <br />
                It expires in 15 minutes.
              </p>
              <Button variant="ghost" className="mt-4" onClick={() => setStatus('idle')}>
                Use a different email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base"
                  autoFocus
                />
              </div>

              {status === 'error' && <p className="text-red-400 text-sm">{errorMsg}</p>}

              <Button
                type="submit"
                disabled={status === 'loading' || !email}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-base font-bold"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" /> Send Login Link
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                No password needed. We&apos;ll email you a magic link.
              </p>
            </form>
          )}
        </Card>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  )
}
