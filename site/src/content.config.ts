
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const components = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/components" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  components
};