import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: 22,
            fontWeight: 900,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
            display: 'flex',
            paddingBottom: 3,
          }}
        >
          ?
        </div>
      </div>
    ),
    { ...size }
  )
}
