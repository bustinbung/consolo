import { z, defineCollection } from 'astro:content';
import { postSchema } from '../schemas/postSchema';

const projectsCollection = defineCollection({
    type: 'content',
    schema: postSchema,
});

const reposCollection = defineCollection({
    type: 'content',
    schema: postSchema,
});

const blogCollection = defineCollection({
    type: 'content',
    schema: postSchema,
});

export const collections = {
    'projects': projectsCollection,
    'repos': reposCollection,
    'blog': blogCollection,
}