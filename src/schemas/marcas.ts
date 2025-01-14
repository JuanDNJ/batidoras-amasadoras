import { defineCollection, z } from "astro:content"
export const marcas = defineCollection({
  type: 'content',
  schema: z.object({
    marca: z.string().optional(),
    description: z.string().optional(),
    url: z.string().optional()
  })
})