import React from 'react'
import { Button } from '../ui/button'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const GetInTouch = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out to me.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-14 md:gap-8 py-8 md:grid-cols-2">
            <div className="flex text-left flex-col items-start gap-2">
              <h3 className="text-xl text-left font-bold">Contact Information</h3>
              <p className="text-muted-foreground">Feel free to contact me through any of these channels:</p>
              <div className="mt-4 grid gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>rickyzatnika91@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">

                  <Link href="https://linkedin.com" className="hover:underline">
                    linkedin.com/in/yourname
                  </Link>
                </div>
                <div className="flex items-center gap-2">

                  <Link href="https://github.com" className="hover:underline">
                    github.com/rickyzatnika
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Send Me a Message</h3>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch