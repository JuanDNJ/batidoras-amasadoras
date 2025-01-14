import { defineCollection, z } from "astro:content"
export const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    marca: z.string(),
    description: z.string(),
    urlProduct: z.string(),
    image: z.string(),
  })
})