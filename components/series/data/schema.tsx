import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const seriesSchema = z.object({
  ID: z.string(),
  Name: z.string(),
  Release: z.string(),
  Duration: z.string(),
  Language: z.string(),
  Genre: z.string(),
  Platform: z.string(),
  Progress: z.string(),
  Season: z.string(),
  Rating: z.string(),
})

export type Series = z.infer<typeof seriesSchema>