import { z } from "zod";

export const projectSchema = z.object({
    id: z.string().optional(), // Optional buat update
    title: z.string().min(1).max(50),
    description: z.string().min(1).max(50),
    imageUrl: z.string(),
    demoUrl: z.string(),
    sourceCodeUrl: z.string(),
    technologies: z.array(z.object({ name: z.string() })),
});

export type Project = z.infer<typeof projectSchema>;