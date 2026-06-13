import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    selected: z.boolean().default(false),
    pub: z.string().optional().default(''),
    pub_date: z.string(),
    pub_pre: z.string().optional(),
    pub_post: z.string().optional(),
    pub_last: z.string().optional(),
    abstract: z.string().optional(),
    cover: z.string().optional(),
    authors: z.array(z.string()),
    links: z.record(z.union([z.string(), z.object({ url: z.string(), target: z.string().optional() })])).optional(),
  }),
});

export const collections = { publications };
