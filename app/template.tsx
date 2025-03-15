"use client";

import { animatePageIn } from "@/lib/animation";
import React, { useEffect } from "react";



export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div className="w-full flex">
      <div
        id="banner-1"
        className="text-3xl font-bold bg-background z-[50] flex items-center justify-center mx-auto  fixed top-0 left-0  w-1/4 min-h-screen"
      ></div>
      <div
        id="banner-2"
        className="text-3xl font-bold bg-background z-[50]  flex items-center justify-center mx-auto fixed top-0 left-1/4 w-1/4 min-h-screen"
      ></div>
      <div
        id="banner-3"
        className="text-3xl font-bold bg-background z-[50] flex items-center justify-center mx-auto  fixed top-0 left-2/4  w-1/4 min-h-screen"
      ></div>
      <div
        id="banner-4"
        className="text-3xl font-bold bg-background z-[50] flex items-center justify-center mx-auto  fixed top-0 left-3/4  w-1/4 min-h-screen"
      ></div>

      {children}
    </div>
  );
}
