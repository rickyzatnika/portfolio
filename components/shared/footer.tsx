import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Mail } from 'lucide-react'
import { AuthModal } from './authModal'

const Footer = () => {
  return (
    <footer className="w-full border-t py-6 md:py-0 px-4 sm:px-14 md:px-24 lg:px-32">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <div className='flex items-end'>
          <p className="text-sm">© {new Date().getFullYear()} Ricky Zatnika. All rights reserved</p><AuthModal />
        </div>
        <div className="flex gap-4">
          <Link href="#" target="_blank" rel="noreferrer">
            <Button variant="ghost" >
              GitHub
            </Button>
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <Button variant="ghost" >
              LinkedIn
            </Button>
          </Link>
          <Link href="#">
            <Button variant="ghost" >
              <Mail className="h-4 w-4" />
              Email
            </Button>
          </Link>

        </div>
      </div>
    </footer>
  )
}

export default Footer