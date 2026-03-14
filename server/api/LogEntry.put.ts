import { useDrizzle } from '#server/utils/drizzle'
import { logEntriesTable } from '#server/db/schema'

export default defineEventHandler(async (event) => {
  const body = readBody(event)

  const data = await body

  return useDrizzle().insert(logEntriesTable).values({ title: data.title, content: data.content })
})
