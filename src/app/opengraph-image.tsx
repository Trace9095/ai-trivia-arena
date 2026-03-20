import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AI Trivia Arena — Questions That Never Repeat'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0f23 0%, #0d1117 50%, #0f0f23 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '20%',
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              letterSpacing: -2,
            }}
          >
            AI Trivia Arena
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 400,
            }}
          >
            Questions That Never Repeat
          </div>
          <div style={{ display: 'flex', gap: 24, marginTop: 20 }}>
            {['11 Categories', 'Daily Challenges', 'Global Leaderboard'].map((tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(59,130,246,0.15)',
                  border: '1px solid rgba(59,130,246,0.4)',
                  borderRadius: 8,
                  padding: '8px 20px',
                  color: '#60A5FA',
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            fontSize: 14,
            color: 'rgba(255,255,255,0.3)',
            display: 'flex',
          }}
        >
          Powered by Epic AI
        </div>
      </div>
    ),
    { ...size }
  )
}
