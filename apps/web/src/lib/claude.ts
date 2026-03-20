import Anthropic from '@anthropic-ai/sdk'
import { getDb } from '@/db'
import { aiUsageLogs } from '@/db/schema'

let _client: Anthropic | null = null

function getClient(): Anthropic {
  if (!_client) {
    _client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })
  }
  return _client
}

export interface GeneratedQuestion {
  questionText: string
  correctAnswer: string
  wrongAnswers: string[]
  explanation: string
}

export interface QuestionContext {
  userId?: string
  gameId?: string
  promptType?: string
}

// Cost rates per 1M tokens (as of March 2026)
const COST_RATES: Record<string, { input: number; output: number }> = {
  'claude-haiku-4-5': { input: 0.25, output: 1.25 },
  'claude-haiku-4-5-20251001': { input: 0.25, output: 1.25 },
  'claude-sonnet-4-6': { input: 3.0, output: 15.0 },
  'claude-opus-4-6': { input: 15.0, output: 75.0 },
}

function computeCostUsd(model: string, inputTokens: number, outputTokens: number): number {
  const rates = COST_RATES[model] ?? { input: 0.25, output: 1.25 }
  return (inputTokens * rates.input + outputTokens * rates.output) / 1_000_000
}

async function logUsage(params: {
  model: string
  inputTokens: number
  outputTokens: number
  costUsd: number
  promptType: string
  latencyMs: number
  success: boolean
  errorMessage?: string
  userId?: string | null
  gameId?: string | null
}): Promise<void> {
  try {
    const db = getDb()
    await db.insert(aiUsageLogs).values({
      model: params.model,
      inputTokens: params.inputTokens,
      outputTokens: params.outputTokens,
      totalTokens: params.inputTokens + params.outputTokens,
      costUsd: params.costUsd,
      promptType: params.promptType,
      latencyMs: params.latencyMs,
      success: params.success,
      errorMessage: params.errorMessage ?? null,
      userId: params.userId ?? null,
      gameId: params.gameId ?? null,
    })
  } catch {
    // Never throw from usage logger — tracking must not break the app
  }
}

export async function generateQuestions(
  category: string,
  difficulty: string,
  count: number = 10,
  context?: QuestionContext
): Promise<GeneratedQuestion[]> {
  const client = getClient()
  const model = 'claude-haiku-4-5'

  const difficultyDesc =
    difficulty === 'easy'
      ? 'common knowledge that most people would know'
      : difficulty === 'hard'
        ? 'expert-level knowledge in the field'
        : 'moderately challenging, requiring some specific knowledge'

  const prompt = `Generate ${count} trivia questions for the category "${category}" at ${difficulty} difficulty (${difficultyDesc}).

Rules:
- Each question must have exactly 3 wrong answers (plausible but clearly wrong to someone knowledgeable)
- Include a 1-2 sentence explanation of the correct answer
- Questions must be factually accurate as of 2026
- No offensive, controversial, or politically divisive content
- Vary question formats: "Which...", "What...", "Who...", "In what year..."
- Wrong answers must be different from the correct answer

Return ONLY a valid JSON array with no other text:
[{
  "questionText": "...",
  "correctAnswer": "...",
  "wrongAnswers": ["...", "...", "..."],
  "explanation": "..."
}]`

  const startMs = Date.now()
  let inputTokens = 0
  let outputTokens = 0

  try {
    const message = await client.messages.create({
      model,
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    })

    inputTokens = message.usage.input_tokens
    outputTokens = message.usage.output_tokens
    const latencyMs = Date.now() - startMs
    const costUsd = computeCostUsd(model, inputTokens, outputTokens)

    await logUsage({
      model,
      inputTokens,
      outputTokens,
      costUsd,
      promptType: context?.promptType ?? 'question_generation',
      latencyMs,
      success: true,
      userId: context?.userId,
      gameId: context?.gameId,
    })

    const content = message.content[0]
    if (content.type !== 'text') throw new Error('Unexpected response type')

    const jsonMatch = content.text.match(/\[[\s\S]*\]/)
    if (!jsonMatch) throw new Error('No JSON array in response')

    const parsed = JSON.parse(jsonMatch[0]) as GeneratedQuestion[]
    return parsed.slice(0, count)
  } catch (err) {
    const latencyMs = Date.now() - startMs
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'

    await logUsage({
      model,
      inputTokens,
      outputTokens,
      costUsd: computeCostUsd(model, inputTokens, outputTokens),
      promptType: context?.promptType ?? 'question_generation',
      latencyMs,
      success: false,
      errorMessage,
      userId: context?.userId,
      gameId: context?.gameId,
    })

    throw err
  }
}
