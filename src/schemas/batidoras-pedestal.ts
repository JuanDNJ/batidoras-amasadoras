import { defineCollection, z } from "astro:content"
export const batidorasDePestal = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().optional(),
        href: z.string().optional(),
        marca: z.string().optional(),
        description: z.string().optional(),
        urlProduct: z.string().optional(),
        video: z.string().optional(),
        photoProduct: z.string().optional(),
        aboutProduct: z.object({
            title: z.string(),
            list: z.array(z.string()),
        }).optional(),
        details: z.object({
            title: z.string(),
            list: z.array(z.object({
                name: z.string(),
                text: z.string(),
            })),
        }).optional(),
        additionalInformation: z.object({
            title: z.string(),
            list: z.array(z.object({
                name: z.string(),
                text: z.string(),
            })),
        }).optional(),

    })
})