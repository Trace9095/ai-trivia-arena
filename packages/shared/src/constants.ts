export const APP_NAME = "AI Trivia Arena";
export const APP_DOMAIN = "aitriviaarena.com";
export const API_BASE_URL = `https://${APP_DOMAIN}`;

export const COLORS = {
  bg: "#0A0A14",
  card: "#12121F",
  cardHover: "#1A1A2E",
  border: "#1E1E35",
  blue: "#3B82F6",
  blueDim: "#1D4ED8",
  purple: "#8B5CF6",
  gold: "#F59E0B",
  green: "#10B981",
  red: "#EF4444",
  white: "#F8FAFC",
  muted: "#94A3B8",
  dim: "#64748B",
} as const;

export const CATEGORIES = [
  { id: "general", name: "General Knowledge", icon: "🎯", description: "A bit of everything" },
  { id: "science", name: "Science", icon: "🔬", description: "Physics, chemistry, biology" },
  { id: "history", name: "History", icon: "📜", description: "World history and events" },
  { id: "geography", name: "Geography", icon: "🌍", description: "Countries, capitals, landmarks" },
  { id: "pop_culture", name: "Pop Culture", icon: "🎬", description: "Movies, TV, music, celebs" },
  { id: "sports", name: "Sports", icon: "⚽", description: "Athletes and championships" },
  { id: "food_drink", name: "Food & Drink", icon: "🍕", description: "Cuisine and culinary arts" },
  { id: "technology", name: "Technology", icon: "💻", description: "Tech, gadgets, software" },
  { id: "movies_tv", name: "Movies & TV", icon: "🎥", description: "Cinema and television" },
  { id: "music", name: "Music", icon: "🎵", description: "Artists, songs, and genres" },
  { id: "colorado", name: "Colorado & Local", icon: "🏔️", description: "Royal Gorge region trivia" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const FREE_CATEGORIES: CategoryId[] = ["general", "pop_culture", "food_drink"];
