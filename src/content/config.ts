import { z, defineCollection } from 'astro:content';

const visualCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        description: z.string().optional(),
        hide: z.boolean().optional(),
    })
});

const repoCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        description: z.string().optional(),
        hide: z.boolean().optional(),
    })
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        hide: z.boolean().optional(),
    })
});

export const collections = {
    'visual': visualCollection,
    'repos': repoCollection,
    'blog': blogCollection,
}