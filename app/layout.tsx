import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import "./globals.css"

export const metadata: Metadata = {
  title: "Blockchain & AI Engineer Portfolio",
  description: "Professional portfolio showcasing blockchain and AI engineering projects",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
font-family: ${GeistSans.style.fontFamily};
--font-sans: ${GeistSans.variable};
--font-mono: ${GeistMono.variable};
}
      `}</style>
      </head>
      <body>
        <ThemeProvider defaultTheme="dark">
          <CustomCursor />
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
