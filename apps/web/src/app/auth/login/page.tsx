'use client'

import { useState, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Brain, Mail, Loader2, CheckCircle2, Zap } from 'lucide-react'
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
    <div className="min-h-screen flex items-center justify-center px-4 bg-grid-pattern">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #D4A853 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative w-full max-w-sm animate-fade-in-up">
        {/* Brand mark */}
        <div className="text-center mb-8">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-amber-500 items-center justify-center mb-5 shadow-2xl shadow-amber-500/30">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">AI Trivia Arena</h1>
          <p className="text-zinc-500 mt-2 text-sm">Sign in to play and track your scores</p>
        </div>

        {/* Error param banner */}
        {errorParam && (
          <div className="bg-red-950/60 border border-red-800/60 rounded-xl p-4 mb-5 text-red-400 text-sm text-center">
            {errorParam === 'expired'
              ? 'That login link expired. Request a new one.'
              : 'Invalid login link. Try again.'}
          </div>
        )}

        <Card className="p-7 border-white/8 bg-card shadow-xl shadow-black/40">
          {status === 'sent' ? (
            <div className="text-center py-2">
              <div className="w-14 h-14 rounded-full bg-green-950/60 border border-green-700/40 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-green-400" />
              </div>
              <h2 className="text-lg font-bold mb-2 text-white">Check your email</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We sent a sign-in link to{' '}
                <strong className="text-zinc-300">{email}</strong>.
                <br />
                It expires in 15 minutes.
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="mt-5 text-zinc-500 hover:text-zinc-300"
                onClick={() => setStatus('idle')}
              >
                Use a different email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block text-zinc-300">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base bg-white/5 border-white/10 focus:border-amber-500/60 focus:ring-amber-500/20 placeholder:text-zinc-600"
                  autoFocus
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              <Button
                type="submit"
                disabled={status === 'loading' || !email}
                className="w-full h-12 text-base font-bold bg-amber-500 hover:bg-amber-400 text-zinc-900 disabled:opacity-50 shadow-lg shadow-amber-500/20 transition-all"
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

              <p className="text-center text-xs text-zinc-600">
                No password needed. We&apos;ll email you a magic link.
              </p>
            </form>
          )}
        </Card>

        {/* Feature footnote */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-zinc-700">
          <Zap className="w-3 h-3 text-amber-500" />
          AI-generated questions that never repeat
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-amber-400" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  )
}
