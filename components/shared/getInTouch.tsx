"use client"

import React from 'react'
import { Button } from '../ui/button'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { Label } from '../ui/label'
import { useForm } from "react-hook-form"
import { CreateSubscriptionAction } from '@/lib/action'
import { toast } from 'sonner'
import { motion } from 'framer-motion'


const GetInTouch = () => {

  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm<{
    name: string;
    email: string;
    message: string;

  }>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: { name: string; email: string; message: string; }) => {

    try {
      await CreateSubscriptionAction(null, {
        ...data
      })
      reset()
      toast.success("Message sent successfully", {
        duration: 5000,
        icon: "🚀",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },

      })
    } catch (error) {
      console.error("🚨 Error:", error);
      toast.error("Failed to send message")
    }
  }

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        damping: 50,
        delay: 0.2,
      }} id="contact" className="w-full py-6 md:py-12 lg:py-24">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  <Link href="https://www.linkedin.com/in/ricky-zatnika-375436254" target='_blank' className="hover:underline">
                    linkedin.com/in/ricky-zatnika
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  <Link href="https://github.com/rickyzatnika" target='_blank' className="hover:underline">
                    github.com/rickyzatnika
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Send Me a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </Label>
                  <input
                    id="name"
                    {...register("name", { required: true })}
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                  {errors.name && <span className="text-red-500 text-left text-sm">*This field is required</span>}
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </Label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                  {errors.email && <span className="text-red-500 text-left text-sm">*This field is required</span>}
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </Label>
                  <textarea
                    id="message"
                    {...register("message", { required: true })}
                    className="flex min-h-[120px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                  {errors.message && <span className="text-red-500 text-left text-sm">*This field is required</span>}
                </div>
                <Button type="submit">{isSubmitting ? "Submitting..." : "Submit"}</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default GetInTouch