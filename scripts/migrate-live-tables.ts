/**
 * Migration: recreate live game tables with updated schema.
 * Run with: npx dotenv-cli -e .env.local -- npx tsx scripts/migrate-live-tables.ts
 */
import { neon } from '@neondatabase/serverless'

async function migrate() {
  const sql = neon(process.env.DATABASE_URL!)

  console.log('Dropping old live tables...')
  await sql`DROP TABLE IF EXISTS live_answers CASCADE`
  await sql`DROP TABLE IF EXISTS live_players CASCADE`
  await sql`DROP TABLE IF EXISTS live_games CASCADE`

  console.log('Creating live_games...')
  await sql`
    CREATE TABLE live_games (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      game_code TEXT NOT NULL UNIQUE,
      host_user_id UUID REFERENCES users(id),
      theme TEXT NOT NULL DEFAULT 'classic',
      category_mode TEXT NOT NULL DEFAULT 'single',
      single_category TEXT,
      difficulty TEXT NOT NULL DEFAULT 'medium',
      round_count INTEGER NOT NULL DEFAULT 1,
      questions_per_round INTEGER NOT NULL DEFAULT 10,
      time_per_question INTEGER NOT NULL DEFAULT 20,
      status TEXT NOT NULL DEFAULT 'waiting',
      current_round INTEGER NOT NULL DEFAULT 0,
      current_question_index INTEGER NOT NULL DEFAULT 0,
      question_started_at TIMESTAMPTZ,
      picker_player_index INTEGER NOT NULL DEFAULT 0,
      category_pick_deadline TIMESTAMPTZ,
      rounds_json JSONB NOT NULL DEFAULT '[]',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      started_at TIMESTAMPTZ,
      finished_at TIMESTAMPTZ
    )
  `
  await sql`CREATE INDEX live_games_game_code_idx ON live_games(game_code)`
  await sql`CREATE INDEX live_games_status_idx ON live_games(status)`

  console.log('Creating live_players...')
  await sql`
    CREATE TABLE live_players (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      game_id UUID NOT NULL REFERENCES live_games(id),
      display_name TEXT NOT NULL,
      user_id UUID REFERENCES users(id),
      score INTEGER NOT NULL DEFAULT 0,
      correct_count INTEGER NOT NULL DEFAULT 0,
      streak INTEGER NOT NULL DEFAULT 0,
      joined_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
  await sql`CREATE INDEX live_players_game_id_idx ON live_players(game_id)`

  console.log('Creating live_answers...')
  await sql`
    CREATE TABLE live_answers (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      game_id UUID NOT NULL REFERENCES live_games(id),
      player_id UUID NOT NULL REFERENCES live_players(id),
      question_index INTEGER NOT NULL,
      round_index INTEGER NOT NULL DEFAULT 0,
      selected_answer TEXT NOT NULL,
      is_correct BOOLEAN NOT NULL,
      time_ms INTEGER NOT NULL,
      points_earned INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
  await sql`CREATE INDEX live_answers_game_player_idx ON live_answers(game_id, player_id, question_index)`

  console.log('Migration complete')
}

migrate().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
