import { pgTable, text, integer, boolean, timestamp, date, jsonb, uuid } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  name: text('name'),
  avatarUrl: text('avatar_url'),
  totalScore: integer('total_score').notNull().default(0),
  gamesPlayed: integer('games_played').notNull().default(0),
  streak: integer('streak').notNull().default(0),
  longestStreak: integer('longest_streak').notNull().default(0),
  lastPlayedAt: timestamp('last_played_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const games = pgTable('games', {
  id: uuid('id').primaryKey().defaultRandom(),
  hostUserId: uuid('host_user_id').references(() => users.id),
  category: text('category').notNull(),
  difficulty: text('difficulty').notNull().default('medium'),
  status: text('status').notNull().default('waiting'),
  maxPlayers: integer('max_players').notNull().default(1),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const gamePlayers = pgTable('game_players', {
  id: uuid('id').primaryKey().defaultRandom(),
  gameId: uuid('game_id').notNull().references(() => games.id),
  userId: uuid('user_id').notNull().references(() => users.id),
  score: integer('score').notNull().default(0),
  rank: integer('rank'),
  joinedAt: timestamp('joined_at').defaultNow().notNull(),
})

export const questions = pgTable('questions', {
  id: uuid('id').primaryKey().defaultRandom(),
  gameId: uuid('game_id').references(() => games.id),
  category: text('category').notNull(),
  difficulty: text('difficulty').notNull().default('medium'),
  questionText: text('question_text').notNull(),
  correctAnswer: text('correct_answer').notNull(),
  wrongAnswers: jsonb('wrong_answers').notNull().$type<string[]>(),
  explanation: text('explanation'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const answers = pgTable('answers', {
  id: uuid('id').primaryKey().defaultRandom(),
  questionId: uuid('question_id').notNull().references(() => questions.id),
  userId: uuid('user_id').notNull().references(() => users.id),
  selectedAnswer: text('selected_answer').notNull(),
  isCorrect: boolean('is_correct').notNull(),
  timeMs: integer('time_ms'),
  pointsEarned: integer('points_earned').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const dailyChallenges = pgTable('daily_challenges', {
  id: uuid('id').primaryKey().defaultRandom(),
  date: date('date').notNull().unique(),
  category: text('category').notNull(),
  questions: jsonb('questions').notNull().$type<Array<{
    questionText: string
    correctAnswer: string
    wrongAnswers: string[]
    explanation: string
  }>>(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const leaderboards = pgTable('leaderboards', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id),
  period: text('period').notNull(),
  score: integer('score').notNull().default(0),
  rank: integer('rank'),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const categories = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull().unique(),
  icon: text('icon').notNull(),
  description: text('description').notNull(),
  isPremium: boolean('is_premium').notNull().default(false),
})

export const magicLinks = pgTable('magic_links', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull(),
  token: text('token').notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  usedAt: timestamp('used_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const sessions = pgTable('sessions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id),
  token: text('token').notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  gamePlayers: many(gamePlayers),
  answers: many(answers),
  sessions: many(sessions),
  leaderboards: many(leaderboards),
}))

export const gamesRelations = relations(games, ({ one, many }) => ({
  host: one(users, { fields: [games.hostUserId], references: [users.id] }),
  players: many(gamePlayers),
  questions: many(questions),
}))

export const gamePlayersRelations = relations(gamePlayers, ({ one }) => ({
  game: one(games, { fields: [gamePlayers.gameId], references: [games.id] }),
  user: one(users, { fields: [gamePlayers.userId], references: [users.id] }),
}))

export const questionsRelations = relations(questions, ({ one, many }) => ({
  game: one(games, { fields: [questions.gameId], references: [games.id] }),
  answers: many(answers),
}))

export const answersRelations = relations(answers, ({ one }) => ({
  question: one(questions, { fields: [answers.questionId], references: [questions.id] }),
  user: one(users, { fields: [answers.userId], references: [users.id] }),
}))

export const leaderboardsRelations = relations(leaderboards, ({ one }) => ({
  user: one(users, { fields: [leaderboards.userId], references: [users.id] }),
}))

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}))
