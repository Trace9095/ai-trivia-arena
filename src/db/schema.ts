import { pgTable, text, integer, boolean, timestamp, date, jsonb, uuid, real, index } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  name: text('name'),
  avatarUrl: text('avatar_url'),
  passwordHash: text('password_hash'),
  totalScore: integer('total_score').notNull().default(0),
  gamesPlayed: integer('games_played').notNull().default(0),
  streak: integer('streak').notNull().default(0),
  longestStreak: integer('longest_streak').notNull().default(0),
  lastPlayedAt: timestamp('last_played_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  // Stripe billing
  stripeCustomerId: text('stripe_customer_id'),
  isPro: boolean('is_pro').notNull().default(false),
  proExpiresAt: timestamp('pro_expires_at'),
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

// AI usage tracking — every Claude API call is logged here
export const aiUsageLogs = pgTable('ai_usage_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  gameId: uuid('game_id').references(() => games.id),
  model: text('model').notNull(),
  inputTokens: integer('input_tokens').notNull().default(0),
  outputTokens: integer('output_tokens').notNull().default(0),
  totalTokens: integer('total_tokens').notNull().default(0),
  costUsd: real('cost_usd').notNull().default(0),
  promptType: text('prompt_type').notNull().default('question_generation'),
  latencyMs: integer('latency_ms'),
  success: boolean('success').notNull().default(true),
  errorMessage: text('error_message'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// API errors, auth failures, DB errors — all logged here
export const errorLogs = pgTable('error_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  errorType: text('error_type').notNull(), // 'api' | 'auth' | 'db' | 'client' | 'ai'
  message: text('message').notNull(),
  stackTrace: text('stack_trace'),
  userId: uuid('user_id').references(() => users.id),
  gameId: uuid('game_id').references(() => games.id),
  endpoint: text('endpoint'),
  method: text('method'),
  statusCode: integer('status_code'),
  userAgent: text('user_agent'),
  ipAddress: text('ip_address'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Revenue scaffold — populated when Stripe/RevenueCat is added
export const revenueEvents = pgTable('revenue_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  eventType: text('event_type').notNull(), // 'subscription' | 'iap' | 'ad_impression'
  amountUsd: real('amount_usd').notNull().default(0),
  currency: text('currency').notNull().default('usd'),
  provider: text('provider').notNull(), // 'stripe' | 'revenuecat' | 'admob'
  providerEventId: text('provider_event_id'),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Manual cost entries — hosting, domain, API credits, etc.
export const costEvents = pgTable('cost_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  category: text('category').notNull(), // 'ai_tokens' | 'hosting' | 'api_calls' | 'domain'
  amountUsd: real('amount_usd').notNull().default(0),
  description: text('description').notNull(),
  project: text('project').notNull().default('ai-trivia-arena'),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Pre-generated question pool — checked before calling Claude
export const questionPool = pgTable('question_pool', {
  id: uuid('id').primaryKey().defaultRandom(),
  category: text('category').notNull(),
  difficulty: text('difficulty').notNull().default('medium'),
  questionText: text('question_text').notNull(),
  correctAnswer: text('correct_answer').notNull(),
  wrongAnswers: jsonb('wrong_answers').notNull().$type<string[]>(),
  explanation: text('explanation').notNull(),
  timesUsed: integer('times_used').notNull().default(0),
  lastUsedAt: timestamp('last_used_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => [
  index('question_pool_category_difficulty_idx').on(t.category, t.difficulty),
])

// Live multiplayer games (TV/Kahoot mode)
// status flow: waiting → picking → active → showing_answer → showing_leaderboard → (loop) → finished
// Always-on games: active → showing_leaderboard → active → ... (loops forever, never finished)
export const liveGames = pgTable('live_games', {
  id: uuid('id').primaryKey().defaultRandom(),
  gameCode: text('game_code').notNull().unique(), // 4-char uppercase, e.g. "A7KR"
  hostUserId: uuid('host_user_id').references(() => users.id), // nullable — guests can host

  // ── Always-on (BWW bar trivia mode) ──
  isAlwaysOn: boolean('is_always_on').notNull().default(false),
  alwaysOnDate: text('always_on_date'), // 'YYYY-MM-DD' — one always-on game per day
  globalQuestionCount: integer('global_question_count').notNull().default(1), // Q# shown on TV

  // ── Game settings (chosen on /tv setup screen) ──
  theme: text('theme').notNull().default('classic'), // classic | neon | royalgorge | sportsbar
  categoryMode: text('category_mode').notNull().default('single'), // single | rotating | random | always_on
  singleCategory: text('single_category'), // used when categoryMode === 'single'
  difficulty: text('difficulty').notNull().default('medium'),
  roundCount: integer('round_count').notNull().default(1),
  questionsPerRound: integer('questions_per_round').notNull().default(10),
  timePerQuestion: integer('time_per_question').notNull().default(20), // seconds

  // ── Game state ──
  status: text('status').notNull().default('waiting'),
  currentRound: integer('current_round').notNull().default(0),        // 0-indexed
  currentQuestionIndex: integer('current_question_index').notNull().default(0), // within round
  questionStartedAt: timestamp('question_started_at'),
  // Category picking state
  pickerPlayerIndex: integer('picker_player_index').notNull().default(0),
  categoryPickDeadline: timestamp('category_pick_deadline'),

  // Category voting state (always-on mode: every 5 questions a vote is held)
  votingOptions: jsonb('voting_options').$type<string[] | null>().default(null),

  // Rounds stored inline for fast polling — [{category, questions:[...]}]
  roundsJson: jsonb('rounds_json').notNull().default('[]').$type<Array<{
    category: string
    questions: Array<{
      questionText: string
      correctAnswer: string
      wrongAnswers: string[]
      explanation: string
    }>
  }>>(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  startedAt: timestamp('started_at'),
  finishedAt: timestamp('finished_at'),
}, (t) => [
  index('live_games_game_code_idx').on(t.gameCode),
  index('live_games_status_idx').on(t.status),
])

// Players who joined a live game
export const livePlayers = pgTable('live_players', {
  id: uuid('id').primaryKey().defaultRandom(),
  gameId: uuid('game_id').notNull().references(() => liveGames.id),
  displayName: text('display_name').notNull(),
  userId: uuid('user_id').references(() => users.id), // nullable for guests
  score: integer('score').notNull().default(0),
  correctCount: integer('correct_count').notNull().default(0),
  streak: integer('streak').notNull().default(0),
  joinedAt: timestamp('joined_at').defaultNow().notNull(),
}, (t) => [
  index('live_players_game_id_idx').on(t.gameId),
])

// Category votes cast during a voting phase (between questions every 5 rounds)
export const liveVotes = pgTable('live_votes', {
  id: uuid('id').primaryKey().defaultRandom(),
  gameId: uuid('game_id').notNull().references(() => liveGames.id),
  playerId: uuid('player_id').notNull().references(() => livePlayers.id),
  category: text('category').notNull(),
  questionNumber: integer('question_number').notNull(), // globalQuestionCount at time of vote
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => [
  index('live_votes_game_player_q_idx').on(t.gameId, t.playerId, t.questionNumber),
])

// Answers submitted in live games
export const liveAnswers = pgTable('live_answers', {
  id: uuid('id').primaryKey().defaultRandom(),
  gameId: uuid('game_id').notNull().references(() => liveGames.id),
  playerId: uuid('player_id').notNull().references(() => livePlayers.id),
  questionIndex: integer('question_index').notNull(),
  roundIndex: integer('round_index').notNull().default(0),
  selectedAnswer: text('selected_answer').notNull(),
  isCorrect: boolean('is_correct').notNull(),
  timeMs: integer('time_ms').notNull(),
  pointsEarned: integer('points_earned').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => [
  index('live_answers_game_player_idx').on(t.gameId, t.playerId, t.questionIndex),
])

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

export const aiUsageLogsRelations = relations(aiUsageLogs, ({ one }) => ({
  user: one(users, { fields: [aiUsageLogs.userId], references: [users.id] }),
  game: one(games, { fields: [aiUsageLogs.gameId], references: [games.id] }),
}))

export const errorLogsRelations = relations(errorLogs, ({ one }) => ({
  user: one(users, { fields: [errorLogs.userId], references: [users.id] }),
  game: one(games, { fields: [errorLogs.gameId], references: [games.id] }),
}))

export const revenueEventsRelations = relations(revenueEvents, ({ one }) => ({
  user: one(users, { fields: [revenueEvents.userId], references: [users.id] }),
}))

export const liveGamesRelations = relations(liveGames, ({ one, many }) => ({
  host: one(users, { fields: [liveGames.hostUserId], references: [users.id] }),
  players: many(livePlayers),
  answers: many(liveAnswers),
  votes: many(liveVotes),
}))

export const liveVotesRelations = relations(liveVotes, ({ one }) => ({
  game: one(liveGames, { fields: [liveVotes.gameId], references: [liveGames.id] }),
  player: one(livePlayers, { fields: [liveVotes.playerId], references: [livePlayers.id] }),
}))

export const livePlayersRelations = relations(livePlayers, ({ one, many }) => ({
  game: one(liveGames, { fields: [livePlayers.gameId], references: [liveGames.id] }),
  user: one(users, { fields: [livePlayers.userId], references: [users.id] }),
  answers: many(liveAnswers),
}))

export const liveAnswersRelations = relations(liveAnswers, ({ one }) => ({
  game: one(liveGames, { fields: [liveAnswers.gameId], references: [liveGames.id] }),
  player: one(livePlayers, { fields: [liveAnswers.playerId], references: [livePlayers.id] }),
}))
