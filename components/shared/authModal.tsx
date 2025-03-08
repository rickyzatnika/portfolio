"use server"

import { auth, signIn, signOut } from "@/auth";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { GoogleButton } from "./submitButton";
import { requireUser } from "@/lib/hooks";
import { Button } from "../ui/button";



export async function AuthModal() {

  const session = await auth();

  return (
    <Dialog >
      <DialogTrigger asChild >
        <p>.</p>
      </DialogTrigger>
      <DialogContent aria-describedby="modal-content" className="sm:max-w-[360px]">
        <DialogTitle >Admin Only</DialogTitle>
        {!session ?
          (
            <div className="flex gap-3 flex-col mt-5">
              {/*--------- GOOGLE --------*/}
              <form className="w-full" action={async () => {
                "use server"
                await signIn('google', {
                  redirectTo: "/owner"
                });
              }}>
                <GoogleButton />
              </form>
            </div>
          ) :
          (
            <div className="flex gap-3 flex-col mt-5">
              {/*--------- GOOGLE --------*/}
              <form className="w-full" action={async () => {
                "use server"
                await signOut();
              }}>
                <Button variant="outline" className="w-full" type="submit">Sign out</Button>
              </form>
            </div>
          )
        }
      </DialogContent>
    </Dialog>
  )
}