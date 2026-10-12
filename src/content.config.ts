import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    context: z.string(), // e.g. "Professional · Compliance tooling" or "Volunteer · Identity"
    summary: z.string(), // one or two sentences for the index and the page lede
    call: z.string(), // the one-line decision shown on the index
    role: z.string(),
    builtWith: z.string(),
    principle: z.string(),
    differently: z.string(), // "What I'd do differently", shown as the closing pull quote
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
