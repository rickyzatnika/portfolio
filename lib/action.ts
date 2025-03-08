/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import prisma from "./db";
import { projectSchema } from "./zodSchema";
import { revalidatePath } from "next/cache";

export async function AddProjectAction(prevState: any, formData: any) {
  console.log("🔥 AddProjectAction triggered", formData);


  const parsedTechnologies = formData.technologies || [];

  // ✅ Validasi dengan Zod
  const submission = projectSchema.safeParse({
    ...formData,
    technologies: parsedTechnologies,
  });

  if (!submission.success) {
    console.log("❌ Validation failed:", submission.error);
    return { error: submission.error.format() };
  }

  // ✅ Destructure data yang udah lolos validasi
  const { title, description, imageUrl, demoUrl, sourceCodeUrl, technologies } = submission.data;

  try {
    await prisma.project.create({
      data: {
        title,
        description,
        imageUrl,
        demoUrl,
        sourceCodeUrl,

        technologies: {
          create: technologies.map((tech) => ({
            technology: {
              connectOrCreate: {
                where: { name: tech.name },
                create: { name: tech.name },
              },
            },
          })),
        },
      },

    });

    return revalidatePath("/owner");
  } catch (error) {
    console.error("❌ Database error:", error);
    return { error: "Failed to add project" };
  }
}

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string | null;
  sourceCodeUrl?: string | null;
  technologies: string[];
}

export async function getProjectAction(): Promise<Project[]> {
  try {
    const projects: {
      id: string;
      title: string;
      description: string;
      imageUrl: string;
      demoUrl?: string | null;
      sourceCodeUrl?: string | null;
      technologies: { technology: { name: string } }[];
    }[] = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        technologies: {
          select: {
            technology: {
              select: { name: true },
            },
          },
        },
      },
    });

    return projects.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      demoUrl: project.demoUrl ?? null,
      sourceCodeUrl: project.sourceCodeUrl ?? null,
      technologies: project.technologies.map((tech) => tech.technology.name), // ✅ Fix tipe
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}



