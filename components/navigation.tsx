"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function Navigation() {
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Portfolio
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="text-sm hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection("reviews")} className="text-sm hover:text-primary transition-colors">
            Reviews
          </button>
          <button onClick={() => scrollToSection("blog")} className="text-sm hover:text-primary transition-colors">
            Blog
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-primary transition-colors">
            Contact
          </button>
        </div>

        <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </div>
    </nav>
  )
}
