import type { Metadata } from "next";

import "./globals.css";


import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/shared/footer";

import Header from "@/components/shared/header";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorProvider } from "@/context/CursorContex";
import CustomCursor from "@/components/shared/customCursor";




export const metadata: Metadata = {
  title: "Ricky Zatnika",
  description: "a freelance web developer, creating beautiful and functional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning translate="no" >
      <body
        className={`antialiased`}
      >
        <CursorProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <CustomCursor />
            <div className="px-4 sm:px-14 md:px-24 lg:px-32 pt-[80px]">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </CursorProvider>
        <Toaster />
      </body>
    </html>
  );
}
