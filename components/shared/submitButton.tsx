"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

interface iAppProps {
  text: string,
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
  className?: string
}

export function SubmitButton({ text, variant, className }: iAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant="outline" className={cn("w-fit", className)} disabled><Loader2 className="size-4 animate-spin mr-2" />please wait..</Button>
      ) : (
        <Button variant={variant} className={cn("w-fit", className)} type="submit">{text}</Button>
      )}
    </>

  )
}


export function GoogleButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant="outline" className="w-full" disabled><Loader2 className="size-4 animate-spin mr-2 " />Connecting..</Button>
      ) : (
        <Button variant="outline" className="w-full" type="submit">Sign in</Button>
      )}
    </>
  )

}



