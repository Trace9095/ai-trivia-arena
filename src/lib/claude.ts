import Anthropic from '@anthropic-ai/sdk'

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

export async function generateQuestions(
  category: string,
  difficulty: string,
  count: number = 10
): Promise<GeneratedQuestion[]> {
  const client = getClient()

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

  const message = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  })

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('Unexpected response type')

  // Extract JSON from response
  const jsonMatch = content.text.match(/\[[\s\S]*\]/)
  if (!jsonMatch) throw new Error('No JSON array in response')

  const parsed = JSON.parse(jsonMatch[0]) as GeneratedQuestion[]
  return parsed.slice(0, count)
}
