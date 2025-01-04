import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const work = defineCollection({
    loader: glob({
        pattern: ["**/*.md", "**/*.mdoc"],
        base: "./src/content/work"
    }),
    schema: ({image}) => z.object({
        title: z.string(),
        roles: z.array(z.string()),
        date: z.coerce.date(),
        updateDate: z.coerce.date().optional(),
        outboundLink: z.string().url(),
        thumbnail: image(),
        isDraft: z.boolean().optional().default(false),
    })
});

const blog = defineCollection({
    loader: glob({
        pattern: ["**/*.md", "**/*.mdoc"],
        base: "./src/content/blog"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        updateDate: z.coerce.date().optional(),
        isDraft: z.boolean().optional(),
    })
});

export const collections = { work, blog };