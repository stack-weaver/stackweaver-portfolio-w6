"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <img
                src="/professional-developer-avatar.png"
                alt="Profile Avatar"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Blockchain & AI
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Building the future with decentralized systems and intelligent solutions
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full" onClick={scrollToAbout}>
              Explore My Work
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              Download CV
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={scrollToAbout}>
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div
          className="absolute top-1/2 right-20 w-2 h-2 bg-accent rounded-full animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </section>
  )
}
