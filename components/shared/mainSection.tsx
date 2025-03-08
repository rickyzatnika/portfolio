import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'


const MainSection = () => {
  return (

    <section className="relative flex flex-col items-center justify-center py-6 lg:py-10">
      <div className="text-center">
        <span className="text-sm text-black/90 font-medium tracking-tight bg-gradient-to-tl from-purple-200/40 to-cyan-100/40 dark:from-purple-200/80 dark:to-cyan-100/80 shadow px-4 py-2 rounded-full">
          Hi, I&apos;m Ricky Zatnika
        </span>

        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium ">
          A passionate <span className='font-bold text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-400 bg-clip-text capitalize'>web developer</span>
        </h1>

        <p className="max-w-xl mx-auto mt-4   lg:text-lg text-muted-foreground ">
          creating beautiful and functional digital experiences
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row py-8">
        <Button asChild>
          <Link href="/projects">View My Work</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>

      <div className="relative items-center w-full py-12 mx-auto mt-12">
        <svg
          className="absolute inset-0 -mt-24 blur-3xl"
          style={{ zIndex: -1 }}
          fill="none"
          viewBox="0 0 400 400"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_10_20)">
            <g filter="url(#filter0_f_10_20)">
              <path
                d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                fill="#03FFE0"
              ></path>
              <path
                d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                fill="#3543ff"
              ></path>
              <path
                d="M320 400H400V78.75L106.2 134.75L320 400Z"
                fill="#7e0dff"
              ></path>
              <path
                d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                fill="#d400a6"
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

    </section>
  )
}

export default MainSection