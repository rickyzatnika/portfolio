"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { DarkModeToggle } from './darkModeToggle'



const links = [
  {
    id: 1,
    title: "About",
    url: '/about',
  },
  {
    id: 2,
    title: "Projects",
    url: '/projects',
  },
  {
    id: 3,
    title: "Skills",
    url: '/skills',
  },
  {
    id: 4,
    title: "Contact",
    url: '/contact',
  }
]



const Header = () => {

  const pathname = usePathname();

  return (
    <header className='w-full bg-primary/5 fixed left-0 right-0 top-0 z-50 backdrop-blur-md'>
      <nav className='flex items-center px-4 sm:px-14 md:px-24 lg:px-32 justify-between border-b py-4'>
        <Link className='text-lg md:text-2xl font-bold' href="/" >RYZA</Link>
        <ul className='hidden md:flex gap-x-10 items-center'>
          {links.map((item) => (
            <li key={item.id} className={` text-md font-semibold ${pathname === item.url ? "text-purple-500" : "text-foreground"}`}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <DarkModeToggle />
      </nav>
    </header>
  )
}

export default Header