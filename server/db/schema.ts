import { integer, pgTable, text, varchar } from 'drizzle-orm/pg-core'

export const logEntriesTable = pgTable('LogEntries', {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  content: text()
})
