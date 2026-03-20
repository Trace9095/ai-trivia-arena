import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
          borderRadius: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Question mark */}
        <div
          style={{
            color: '#ffffff',
            fontSize: 100,
            fontWeight: 900,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
            display: 'flex',
            paddingBottom: 10,
          }}
        >
          ?
        </div>
        {/* Subtle label */}
        <div
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18,
            fontWeight: 700,
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: 3,
            display: 'flex',
          }}
        >
          TRIVIA
        </div>
      </div>
    ),
    { ...size }
  )
}
