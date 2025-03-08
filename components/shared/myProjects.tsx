/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { getProjectAction } from '@/lib/action'

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string | null;
  sourceCodeUrl?: string | null;
  technologies: string[];
}


export default async function MyProjects() {

  const projects: Project[] = await getProjectAction();

  return (
    <section id="projects" className="w-full ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of my recent projects. Each project represents a unique challenge and solution.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project: Project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={project.imageUrl}
                    alt={`Image - ${project.title}`}
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((item: string) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}

                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.demoUrl || "#"}>View Demo</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.sourceCodeUrl || "#"}>Source Code</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
