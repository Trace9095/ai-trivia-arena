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
  { id: 'general', name: 'General Knowledge', icon: 'Target', description: 'A bit of everything', isPremium: false },
  { id: 'science', name: 'Science', icon: 'FlaskConical', description: 'Physics, chemistry, biology', isPremium: false },
  { id: 'history', name: 'History', icon: 'Scroll', description: 'World history and events', isPremium: false },
  { id: 'geography', name: 'Geography', icon: 'Globe', description: 'Countries, capitals, landmarks', isPremium: false },
  { id: 'pop_culture', name: 'Pop Culture', icon: 'Clapperboard', description: 'Movies, TV, music, celebrities', isPremium: false },
  { id: 'sports', name: 'Sports', icon: 'Trophy', description: 'Athletes and championships', isPremium: true },
  { id: 'food_drink', name: 'Food & Drink', icon: 'UtensilsCrossed', description: 'Cuisine and culinary arts', isPremium: true },
  { id: 'technology', name: 'Technology', icon: 'Laptop', description: 'Tech, gadgets, software', isPremium: true },
  { id: 'movies_tv', name: 'Movies & TV', icon: 'Film', description: 'Cinema and television', isPremium: true },
  { id: 'music', name: 'Music', icon: 'Music', description: 'Artists, songs, and genres', isPremium: true },
  { id: 'colorado', name: 'Colorado & Local', icon: 'Mountain', description: 'Royal Gorge region trivia', isPremium: false },
] as const

export type CategoryId = (typeof CATEGORIES)[number]['id']
