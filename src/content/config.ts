import { z, defineCollection } from 'astro:content';
import { postSchema } from '../schemas/postSchema';

const projectsCollection = defineCollection({
    type: 'content',
    schema: postSchema,
});

export const collections = {
    'projects': projectsCollection,
}