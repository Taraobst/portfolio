import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      worksImage1: z.object({
        url: z.string(),
        alt: z.string()
      }).optional(),
      worksImage2: z.object({
        url: z.string(),
        alt: z.string()
      }).optional(),
      worksVideo1: z.object({
        url: z.string()
      }).optional(),
      platform: z.string().optional(),
      stack: z.string().optional(),
      website: z.string().optional(),
      github: z.string().optional(),
    })
});

export const collections = {
  projects: projectsCollection,
};

