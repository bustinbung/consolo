import { z } from 'astro:content';

export const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    isDraft: z.boolean().optional(),
})