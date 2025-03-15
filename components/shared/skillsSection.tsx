import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

const SkillSection = () => {
  return (
    <section id="skills" className="w-full  py-6 md:py-12 lg:py-24 bg-muted/50 dark:bg-muted/10">
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked with a variety of technologies and tools throughout my career.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>REST API</Badge>
                  <Badge>GraphQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>Docker</Badge>
                  <Badge>VS Code</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Responsive Design</Badge>
                  <Badge>SEO</Badge>
                  <Badge>Performance Optimization</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="items-center w-full pt-12">
          <svg
            className="absolute inset-0 blur-[80px]"
            style={{ zIndex: -1 }}
            fill="none"
            viewBox="0 0 200 200"
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_10_20)">
              <g filter="url(#filter0_f_10_20)">
                <path
                  d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                  fill="#03cdff89"
                ></path>
                <path
                  d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                  fill="#3543ffa9"
                ></path>
                <path
                  d="M320 400H400V78.75L106.2 134.75L320 400Z"
                  fill="#7e0dffae"
                ></path>
                <path
                  d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                  fill="#d400a657"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="720.666"
                id="filter0_f_10_20"
                width="720.666"
                x="-160.333"
                y="-160.333"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_10_20"
                  stdDeviation="80.1666"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default SkillSection