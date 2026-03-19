import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatScore(score: number): string {
  return score.toLocaleString()
}

export function calculatePoints(isCorrect: boolean, timeMs: number, difficulty: string): number {
  if (!isCorrect) return 0
  const basePoints = difficulty === 'easy' ? 100 : difficulty === 'hard' ? 300 : 200
  const timeBonus = Math.max(0, Math.floor((15000 - timeMs) / 100))
  return basePoints + timeBonus
}

export const CATEGORIES = [
  { id: 'general', name: 'General Knowledge', icon: '🎯', description: 'A bit of everything', isPremium: false },
  { id: 'science', name: 'Science', icon: '🔬', description: 'Physics, chemistry, biology', isPremium: false },
  { id: 'history', name: 'History', icon: '📜', description: 'World history and events', isPremium: false },
  { id: 'geography', name: 'Geography', icon: '🌍', description: 'Countries, capitals, landmarks', isPremium: false },
  { id: 'pop_culture', name: 'Pop Culture', icon: '🎬', description: 'Movies, TV, music, celebrities', isPremium: false },
  { id: 'sports', name: 'Sports', icon: '⚽', description: 'Athletes and championships', isPremium: true },
  { id: 'food_drink', name: 'Food & Drink', icon: '🍕', description: 'Cuisine and culinary arts', isPremium: true },
  { id: 'technology', name: 'Technology', icon: '💻', description: 'Tech, gadgets, software', isPremium: true },
  { id: 'movies_tv', name: 'Movies & TV', icon: '🎥', description: 'Cinema and television', isPremium: true },
  { id: 'music', name: 'Music', icon: '🎵', description: 'Artists, songs, and genres', isPremium: true },
  { id: 'colorado', name: 'Colorado & Local', icon: '🏔️', description: 'Royal Gorge region trivia', isPremium: false },
] as const

export type CategoryId = (typeof CATEGORIES)[number]['id']
