import { useDrizzle } from '#server/utils/drizzle'
import { logEntriesTable } from '#server/db/schema'

export default defineEventHandler(async (event) => {
  return useDrizzle()
    .select()
    .from(logEntriesTable)
})
