import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const recommendationSchema = z.object({
  ID: z.string(),
  Name: z.string(),
  Duration: z.string(),
  Language: z.string(),
  Genre: z.string(),
  Platform: z.string(),
  Category: z.string(),
  Type: z.string(),
  Story: z.string(),
  Rating: z.string(),
})

export type Recommendation = z.infer<typeof recommendationSchema>