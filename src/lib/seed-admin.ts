import bcrypt from 'bcryptjs'
import { getDb } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

let seeded = false

export async function seedAdminIfNeeded(): Promise<void> {
  if (seeded) return

  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD
  const adminName = process.env.ADMIN_NAME || 'Trace Hildebrand'

  if (!adminEmail || !adminPassword) return

  const db = getDb()

  // Check if admin exists
  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.email, adminEmail))
    .limit(1)

  if (existing && existing.passwordHash) {
    seeded = true
    return
  }

  const passwordHash = await bcrypt.hash(adminPassword, 12)

  if (existing) {
    // Update existing user with password hash
    await db
      .update(users)
      .set({ passwordHash, name: adminName })
      .where(eq(users.email, adminEmail))
  } else {
    // Create admin user
    await db.insert(users).values({
      email: adminEmail,
      name: adminName,
      passwordHash,
    })
  }

  seeded = true
}
