import { getDb } from '@/db'
import { errorLogs } from '@/db/schema'

export interface ErrorLogParams {
  errorType: 'api' | 'auth' | 'db' | 'client' | 'ai'
  message: string
  stackTrace?: string
  userId?: string
  gameId?: string
  endpoint?: string
  method?: string
  statusCode?: number
  userAgent?: string
  ipAddress?: string
}

export async function logError(params: ErrorLogParams): Promise<void> {
  try {
    const db = getDb()
    await db.insert(errorLogs).values({
      errorType: params.errorType,
      message: params.message,
      stackTrace: params.stackTrace ?? null,
      userId: params.userId ?? null,
      gameId: params.gameId ?? null,
      endpoint: params.endpoint ?? null,
      method: params.method ?? null,
      statusCode: params.statusCode ?? null,
      userAgent: params.userAgent ?? null,
      ipAddress: params.ipAddress ?? null,
    })
  } catch {
    // Never throw from error logger — logging must not crash the app
  }
}
