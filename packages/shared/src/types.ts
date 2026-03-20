import type { CategoryId } from "./constants";

export type Plan = "free" | "pro";
export type Difficulty = "easy" | "medium" | "hard";
export type GameStatus = "waiting" | "active" | "finished";

export interface User {
  id: string;
  email: string;
  name: string | null;
  plan: Plan;
  totalScore: number;
  gamesPlayed: number;
  createdAt: string;
}

export interface Question {
  id: string;
  category: CategoryId;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string | null;
}

export interface GameSession {
  id: string;
  userId: string;
  category: CategoryId;
  difficulty: Difficulty;
  status: GameStatus;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  startedAt: string;
  completedAt: string | null;
}
