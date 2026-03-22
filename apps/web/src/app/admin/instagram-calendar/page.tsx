'use client'

import { useState } from 'react'
import Image from 'next/image'
import { instagramCalendar, BRAND_CONFIG } from '@/lib/data/instagram-calendar'

type StatusFilter = 'all' | 'draft' | 'ready' | 'posted'

export default function InstagramCalendarPage() {
  const [filter, setFilter] = useState<StatusFilter>('all')

  const filtered = instagramCalendar.posts.filter(
    p => filter === 'all' || p.status === filter
  )

  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ color: '#D4A853', fontSize: '28px', fontWeight: 800, margin: 0 }}>
            Instagram Calendar
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginTop: '6px' }}>
            {BRAND_CONFIG.name} · {instagramCalendar.totalPosts} posts · {BRAND_CONFIG.instagramHandle}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
          {(['all', 'draft', 'ready', 'posted'] as StatusFilter[]).map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              style={{
                padding: '6px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer',
                fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em',
                background: filter === s ? '#D4A853' : '#161B22',
                color: filter === s ? '#0D1117' : 'rgba(255,255,255,0.5)',
              }}
            >
              {s === 'all' ? `All (${instagramCalendar.posts.length})` : s}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {filtered.map(post => (
            <div
              key={post.id}
              style={{
                background: '#161B22', borderRadius: '8px', overflow: 'hidden',
                border: '1px solid #30363D',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '1', background: '#0D1117' }}>
                <Image
                  src={`/images/instagram/feed/${post.id}.png`}
                  alt={post.headline}
                  fill
                  sizes="280px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{post.date}</span>
                  <span style={{
                    padding: '2px 8px', borderRadius: '3px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                    background: post.status === 'posted' ? 'rgba(63,185,80,0.15)' : post.status === 'ready' ? 'rgba(212,168,83,0.2)' : '#30363D',
                    color: post.status === 'posted' ? '#3FB950' : post.status === 'ready' ? '#D4A853' : '#8B949E',
                  }}>
                    {post.status}
                  </span>
                </div>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: '14px', margin: '0 0 4px' }}>
                  {post.headline}
                </p>
                {post.subheadline && (
                  <p style={{ color: '#D4A853', fontSize: '12px', margin: '0 0 6px' }}>{post.subheadline}</p>
                )}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{ background: '#0D1117', color: 'rgba(255,255,255,0.4)', fontSize: '11px', padding: '2px 6px', borderRadius: '3px' }}>{post.template}</span>
                  <span style={{ background: '#0D1117', color: 'rgba(255,255,255,0.4)', fontSize: '11px', padding: '2px 6px', borderRadius: '3px' }}>{post.bestTime}</span>
                </div>
                {post.caption && (
                  <p style={{
                    color: 'rgba(255,255,255,0.5)', fontSize: '12px', lineHeight: '1.4', margin: 0,
                    overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                  }}>
                    {post.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
