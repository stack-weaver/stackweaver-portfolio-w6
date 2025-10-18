"use client"

import type React from "react"
import { scrollToSection } from "@/utils/scrollToSection" // Import scrollToSection function
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle2 } from "lucide-react"

import { useState, useEffect, useRef } from "react"
import {
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Target,
  Shield,
  Send,
  Zap,
  Activity,
  Cpu,
  Database,
  Globe,
} from "lucide-react"

export default function Portfolio() {
  // Keep dark theme applied, no visible toggle
  const [darkMode] = useState(true)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [typewriterText, setTypewriterText] = useState("")
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isTransmitting, setIsTransmitting] = useState(false)
  const [transmissionStatus, setTransmissionStatus] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [vw, setVw] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1024)

  // Typewriter effect (gentle)
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setTypewriterText("Frontend Developer")
      return
    }
    const fullText = "Frontend Developer"
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  // Enforce dark class on html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Static tactical grid background (no continuous animation)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const drawGrid = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1)
      const w = (canvas.width = Math.floor(window.innerWidth * dpr))
      const h = (canvas.height = Math.floor(window.innerHeight * dpr))
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, w, h)

      const gridSize = 50
      ctx.strokeStyle = "rgba(59, 130, 246, 0.08)"
      ctx.lineWidth = 1

      for (let x = 0; x <= window.innerWidth; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, window.innerHeight)
        ctx.stroke()
      }
      for (let y = 0; y <= window.innerHeight; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(window.innerWidth, y)
        ctx.stroke()
      }
    }

    drawGrid()
    const handleResize = () => drawGrid()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track viewport width
  useEffect(() => {
    const update = () => setVw(window.innerWidth)
    update()
    window.addEventListener("resize", update)
    window.addEventListener("orientationchange", update)
    return () => {
      window.removeEventListener("resize", update)
      window.removeEventListener("orientationchange", update)
    }
  }, [])

  // Reveal on view (minimal, premium stagger)
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const sections = document.querySelectorAll<HTMLElement>("[data-animate]")
    if (prefersReduced) {
      sections.forEach((s) => s.classList.add("reveal-in"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            el.classList.add("reveal-in")
            // stagger children with data-stagger
            const children = el.querySelectorAll<HTMLElement>("[data-stagger]")
            children.forEach((child, idx) => {
              child.style.transitionDelay = `${Math.min(idx * 60, 360)}ms`
              child.classList.add("reveal-in")
            })
            observer.unobserve(el)
            if (el.id) {
              setIsVisible((prev) => ({ ...prev, [el.id]: true }))
            }
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    )

    sections.forEach((section) => {
      // initialize hidden state
      section.classList.add("reveal-base")
      const stagger = section.querySelectorAll<HTMLElement>("[data-stagger]")
      stagger.forEach((child) => child.classList.add("reveal-base"))
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsTransmitting(true)
    setTransmissionStatus("Sending...")

    setTimeout(() => setTransmissionStatus("Encrypting..."), 600)
    setTimeout(() => setTransmissionStatus("Transmitting..."), 1200)
    setTimeout(() => {
      setTransmissionStatus("Delivered ✔")
      setIsTransmitting(false)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setTransmissionStatus(""), 2000)
      setShowSuccess(true)
    }, 2200)
  }

  const projects = [
    {
      title: "TACTICAL E-COMMERCE",
      description:
        "Military-grade e-commerce platform with encrypted transactions and tactical inventory management systems.",
      image: "/tactical-ecommerce.png",
      github: "#",
      demo: "#",
    },
    {
      title: "OPERATION TASK FORCE",
      description: "Strategic task management system with squad coordination and mission-critical deadline tracking.",
      image: "/tactical-task-manager.png",
      github: "#",
      demo: "#",
    },
    {
      title: "WEATHER RECON HUB",
      description: "Battlefield weather intelligence with satellite feeds and tactical environmental analysis.",
      image: "/tactical-weather-hub.png",
      github: "#",
      demo: "#",
    },
    {
      title: "OPERATOR PORTFOLIO",
      description: "Tactical portfolio deployment with HUD interface and biometric security protocols.",
      image: "/tactical-portfolio.png",
      github: "#",
      demo: "#",
    },
  ]

  const skills = [
    { name: "HTML5 ASSAULT", level: 95, icon: Globe, category: "FRONTEND" },
    { name: "CSS3 TACTICAL", level: 90, icon: Zap, category: "STYLING" },
    { name: "JS WARFARE", level: 88, icon: Cpu, category: "LOGIC" },
    { name: "REACT OPS", level: 85, icon: Activity, category: "FRAMEWORK" },
    { name: "TAILWIND STRIKE", level: 92, icon: Shield, category: "UTILITY" },
    { name: "GIT RECON", level: 80, icon: Database, category: "VERSION" },
  ]

  const skillRadius = vw < 640 ? 120 : vw < 768 ? 160 : vw < 1024 ? 200 : 220
  const skillHeight = vw < 640 ? 420 : vw < 768 ? 500 : 560

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""} cursor-default overflow-x-hidden`}>
      {/* Static Tactical Grid Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{ background: "transparent" }}
      />

      {/* Smooth Navigation Menu (subtle) */}
      <nav className="hidden md:flex fixed top-1/2 right-3 md:right-6 -translate-y-1/2 z-40 md:space-y-3">
        {["about", "projects", "skills", "contact"].map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="block h-2 w-2 rounded-full bg-blue-400/30 border border-blue-400/40 hover:bg-blue-400/70 transition-colors duration-200"
            style={{ willChange: "transform, opacity" }}
            title={section.toUpperCase()}
            aria-label={`Go to ${section}`}
            data-stagger
          />
        ))}
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-blue-950 relative overflow-hidden"
        data-animate
      >
        {/* Character Background (subtle, premium look) */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/60 to-blue-950/60" />
          <img
            src="/tactical-soldier-silhouette.png"
            alt="Tactical operator background"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto object-contain opacity-15 hidden sm:block"
            style={{ filter: "grayscale(100%) contrast(110%)", willChange: "opacity, transform" }}
            aria-hidden="true"
          />
          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(1200px 600px at 70% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 100%)",
            }}
          />
        </div>

        <div className="text-center z-10 px-4 max-w-4xl mx-auto relative">
          <div
            className="relative bg-black/50 backdrop-blur-sm border border-blue-400/30 p-8"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
            }}
            data-stagger
          >
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mb-4 font-mono"
              data-stagger
            >
              OPERATOR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                AYUSH_KUMAR
              </span>
            </h1>
            <h2
              className="text-2xl md:text-4xl text-blue-200/90 mb-6 h-12 flex items-center justify-center font-mono"
              data-stagger
            >
              <span className="pr-2 border-r border-blue-300/40">{typewriterText}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300/90 mb-8 max-w-2xl mx-auto leading-relaxed" data-stagger>
              Deploying <span className="text-blue-300">tactical interfaces</span> and{" "}
              <span className="text-blue-200">strategic solutions</span>. Executing{" "}
              <span className="text-blue-400">mission-critical applications</span> with precision and efficiency.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-700 border border-blue-500/40 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.03]"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                willChange: "transform, box-shadow",
              }}
              data-stagger
            >
              <Target className="inline mr-2" size={18} />
              INITIATE CONTACT
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="text-blue-300/70" size={28} aria-hidden="true" />
          <span className="sr-only">Scroll</span>
        </div>
      </section>

      {/* About */}
      <section id="about" data-animate className="py-20 bg-gradient-to-b from-slate-950 to-black relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2
            className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mb-16 font-mono"
            data-stagger
          >
            OPERATOR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">PROFILE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative" data-stagger>
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto relative">
                <div
                  className="absolute inset-0 border border-blue-400/30 bg-black/20 backdrop-blur-sm"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
                  }}
                />
                <img
                  src="/tactical-operator.png"
                  alt="Operator Ayush Kumar"
                  className="relative w-full h-full object-cover"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
                  }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-200 font-mono" data-stagger>
                OPERATOR.INITIALIZE("AYUSH_KUMAR")
              </h3>
              <p className="text-slate-300 leading-relaxed" data-stagger>
                Elite <span className="text-blue-300">Frontend Operative</span> specializing in tactical interface
                deployment and strategic digital warfare. Expertise in{" "}
                <span className="text-blue-200">mission-critical architectures</span> and advanced combat-ready web
                technologies for high-stakes operations.
              </p>
              <p className="text-slate-300 leading-relaxed" data-stagger>
                When not engaged in active deployment, I conduct <span className="text-blue-400">reconnaissance</span>{" "}
                on emerging technologies, contribute to open-source tactical operations, and train new recruits through
                knowledge transfer protocols. Committed to continuous skill advancement and tactical superiority.
              </p>
              <div className="flex flex-wrap gap-3" data-stagger>
                <span
                  className="px-4 py-2 bg-blue-900/20 border border-blue-400/30 text-blue-300 text-sm font-mono"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  }}
                >
                  TACTICAL ARCHITECT
                </span>
                <span
                  className="px-4 py-2 bg-blue-900/20 border border-blue-400/30 text-blue-300 text-sm font-mono"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  }}
                >
                  SQUAD LEADER
                </span>
                <span
                  className="px-4 py-2 bg-blue-900/20 border border-blue-400/30 text-blue-300 text-sm font-mono"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  }}
                >
                  RAPID DEPLOYMENT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" data-animate className="py-20 bg-gradient-to-b from-black to-slate-950 relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2
            className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mb-16 font-mono"
            data-stagger
          >
            MISSION{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">PORTFOLIO</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-900/30"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                  willChange: "transform, box-shadow, border-color",
                }}
                data-stagger
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=192&width=384&query=project+preview"}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 lg:h-52 object-cover"
                  />
                  <div className="absolute top-2 right-2 text-blue-300 font-mono text-xs bg-black/60 px-2 py-1 border border-blue-400/30">
                    CLASSIFIED
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold text-blue-200 mb-3 font-mono">{project.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 border border-blue-400/30 text-blue-300 hover:bg-slate-900/80 transition-colors duration-200"
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                        willChange: "transform",
                      }}
                    >
                      <Code size={16} />
                      SOURCE
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 transition-colors duration-200"
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                        willChange: "transform",
                      }}
                    >
                      <ExternalLink size={16} />
                      DEPLOY
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" data-animate className="py-20 bg-gradient-to-b from-slate-950 to-black relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2
            className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mb-16 font-mono"
            data-stagger
          >
            TACTICAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">ARSENAL</span>
          </h2>

          <div className="relative">
            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 z-20" data-stagger>
              <div
                className="absolute inset-4 bg-gradient-to-br from-blue-900/40 to-black/70 border border-blue-400/30 flex items-center justify-center"
                style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
              >
                <div className="text-center">
                  <div className="text-blue-200 font-mono text-sm font-bold">CORE</div>
                  <div className="text-blue-300 font-mono text-xs">MATRIX</div>
                  <div className="text-green-400/90 font-mono text-xs mt-1">ONLINE</div>
                </div>
              </div>
            </div>

            {/* Nodes */}
            <div className="relative w-full flex items-center justify-center" style={{ height: `${skillHeight}px` }}>
              {skills.map((skill, index) => {
                const angle = index * 60 - 90
                const radius = skillRadius
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                const IconComponent = skill.icon

                return (
                  <div
                    key={index}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                    data-stagger
                  >
                    <div
                      className="relative w-28 h-28 transition-transform duration-200 hover:scale-[1.03]"
                      style={{ willChange: "transform" }}
                    >
                      {/* Ring */}
                      <svg
                        className="absolute inset-0 w-full h-full -rotate-90"
                        viewBox="0 0 120 120"
                        aria-hidden="true"
                      >
                        <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="4" />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="url(#ring)"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 50}`}
                          strokeDashoffset={`${2 * Math.PI * 50 * (1 - (isVisible.skills ? skill.level / 100 : 0))}`}
                          className="transition-[stroke-dashoffset] duration-700 ease-out"
                          style={{ transitionDelay: `${index * 80}ms` }}
                        />
                        <defs>
                          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#93C5FD" />
                            <stop offset="100%" stopColor="#3B82F6" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Hex node */}
                      <div
                        className="absolute inset-3 bg-gradient-to-br from-blue-900/40 to-black/70 border border-blue-400/30 flex flex-col items-center justify-center"
                        style={{
                          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                        }}
                      >
                        <IconComponent className="text-blue-200" size={22} />
                        <div className="text-blue-300 font-mono text-xs font-bold mt-1">{skill.level}%</div>
                        <div className="text-blue-400/80 font-mono text-[10px] mt-1">{skill.category}</div>
                      </div>

                      {/* Connection line */}
                      <div
                        className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-blue-400/30 to-transparent origin-left"
                        style={{
                          width: `${radius - 56}px`,
                          transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                          transformOrigin: "left center",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dashboard */}
          <div className="mt-20 grid md:grid-cols-4 gap-6">
            <div
              className="bg-black/50 backdrop-blur-sm border border-green-400/30 p-4 font-mono"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
              data-stagger
            >
              <div className="text-green-300 text-sm mb-2 flex items-center gap-2">
                <Activity size={16} />
                SYSTEM STATUS
              </div>
              <div className="text-green-300/90 text-xs">ALL SYSTEMS OPERATIONAL</div>
              <div className="text-green-400/90 text-xs mt-1">COMBAT READY: 100%</div>
            </div>

            <div
              className="bg-black/50 backdrop-blur-sm border border-yellow-400/30 p-4 font-mono"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
              data-stagger
            >
              <div className="text-yellow-300 text-sm mb-2 flex items-center gap-2">
                <Shield size={16} />
                THREAT LEVEL
              </div>
              <div className="text-yellow-300/90 text-xs">MODERATE</div>
              <div className="text-yellow-400/90 text-xs mt-1">DEFCON: 3</div>
            </div>

            <div
              className="bg-black/50 backdrop-blur-sm border border-blue-400/30 p-4 font-mono"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
              data-stagger
            >
              <div className="text-blue-300 text-sm mb-2 flex items-center gap-2">
                <Cpu size={16} />
                PERFORMANCE
              </div>
              <div className="text-blue-300/90 text-xs">OPTIMAL</div>
              <div className="text-blue-400/90 text-xs mt-1">CPU: 89% | RAM: 67%</div>
            </div>

            <div
              className="bg-black/50 backdrop-blur-sm border border-purple-400/30 p-4 font-mono"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
              data-stagger
            >
              <div className="text-purple-300 text-sm mb-2 flex items-center gap-2">
                <Database size={16} />
                MISSION TIMER
              </div>
              <div className="text-purple-300/90 text-xs">{new Date().toLocaleTimeString()}</div>
              <div className="text-purple-400/90 text-xs mt-1">UPTIME: 24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        data-animate
        className="py-20 bg-gradient-to-b from-black via-blue-950/20 to-slate-950 relative"
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2
            className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mb-16 font-mono"
            data-stagger
          >
            ESTABLISH{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">COMMS</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Channels */}
            <div className="lg:col-span-1 space-y-6" data-stagger>
              <div
                className="bg-black/50 backdrop-blur-sm border border-blue-400/30 p-6"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))",
                }}
              >
                <h3 className="text-xl font-semibold text-blue-200 mb-4 font-mono flex items-center gap-2">
                  <Activity size={20} />
                  COMM.CHANNELS
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:ayush@tactical.ops"
                    className="flex items-center gap-4 p-3 bg-blue-900/20 border border-blue-400/30 hover:bg-blue-900/30 transition-colors duration-200"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                    }}
                  >
                    <div
                      className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center"
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                      }}
                    >
                      <Mail className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="text-blue-200 font-medium font-mono text-sm">SECURE.MAIL</p>
                      <p className="text-slate-400 font-mono text-xs">ayush@tactical.ops</p>
                    </div>
                    <div className="ml-auto text-green-400 text-xs font-mono">ENCRYPTED</div>
                  </a>

                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-4 p-3 bg-blue-900/20 border border-blue-400/30 hover:bg-blue-900/30 transition-colors duration-200"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                    }}
                  >
                    <div
                      className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center"
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                      }}
                    >
                      <Phone className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="text-blue-200 font-medium font-mono text-sm">TACTICAL.COMM</p>
                      <p className="text-slate-400 font-mono text-xs">+91 12345 67890</p>
                    </div>
                    <div className="ml-auto text-yellow-300 text-xs font-mono">SECURE</div>
                  </a>

                  <div
                    className="flex items-center gap-4 p-3 bg-blue-900/20 border border-blue-400/30"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                    }}
                  >
                    <div
                      className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center"
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))",
                      }}
                    >
                      <MapPin className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="text-blue-200 font-medium font-mono text-sm">BASE.LOCATION</p>
                      <p className="text-slate-400 font-mono text-xs">Warzone Alpha, India</p>
                    </div>
                    <div className="ml-auto text-blue-300 text-xs font-mono">ACTIVE</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-blue-400/20">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400">COMM STATUS:</span>
                    <span className="text-green-400">ONLINE</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono mt-2">
                    <span className="text-slate-400">RESPONSE TIME:</span>
                    <span className="text-blue-300">{"< 24H"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2" data-stagger>
              <div
                className="bg-black/50 backdrop-blur-sm border border-blue-400/30 p-6"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-blue-200 font-mono flex items-center gap-2">
                    <Send size={20} />
                    MISSION.BRIEFING()
                  </h3>
                  <div className="text-xs font-mono text-slate-400">ENCRYPTION: AES-256</div>
                </div>

                {(isTransmitting || transmissionStatus) && (
                  <div
                    className="mb-6 p-3 bg-blue-950/40 border border-blue-400/30 font-mono text-sm text-blue-200"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                    }}
                  >
                    {transmissionStatus}
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-blue-200 font-mono text-sm mb-2">OPERATOR.NAME</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-black/60 border border-blue-400/30 focus:border-blue-400/60 outline-none transition-colors duration-200 text-blue-100 placeholder-slate-500"
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                        }}
                        placeholder="Enter callsign..."
                        required
                        disabled={isTransmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-blue-200 font-mono text-sm mb-2">SECURE.EMAIL</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-black/60 border border-blue-400/30 focus:border-blue-400/60 outline-none transition-colors duration-200 text-blue-100 placeholder-slate-500"
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                        }}
                        placeholder="encrypted@channel.ops"
                        required
                        disabled={isTransmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-blue-200 font-mono text-sm mb-2">MISSION.BRIEFING</label>
                    <textarea
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-black/60 border border-blue-400/30 focus:border-blue-400/60 outline-none transition-colors duration-200 resize-none text-blue-100 placeholder-slate-500"
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                      }}
                      placeholder="Transmit your tactical requirements, project specifications, or collaboration proposals."
                      required
                      disabled={isTransmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isTransmitting}
                    className={`w-full py-4 font-semibold border border-blue-400/40 font-mono flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] ${
                      isTransmitting
                        ? "bg-slate-800/60 text-slate-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600"
                    }`}
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                      willChange: "transform",
                    }}
                  >
                    {isTransmitting ? (
                      "TRANSMITTING..."
                    ) : (
                      <>
                        <Send size={18} />
                        TRANSMIT.MISSION()
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Protocols */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div
              className="bg-black/50 backdrop-blur-sm border border-green-400/30 p-4 font-mono text-center"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
              data-stagger
            >
              <div className="text-green-300 text-sm mb-2 flex items-center justify-center gap-2">
                <Shield size={16} />
                SECURITY PROTOCOL
              </div>
              <div className="text-green-300/90 text-xs">END-TO-END ENCRYPTION</div>
              <div className="text-green-400/90 text-xs mt-1">ZERO-LOG POLICY</div>
            </div>

            <div
              className="bg-black/50 backdrop-blur-sm border border-blue-400/30 p-4 font-mono text-center"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
              data-stagger
            >
              <div className="text-blue-300 text-sm mb-2 flex items-center justify-center gap-2">
                <Zap size={16} />
                RESPONSE TIME
              </div>
              <div className="text-blue-300/90 text-xs">PRIORITY: HIGH</div>
              <div className="text-blue-400/90 text-xs mt-1">ETA: {"< 24 HOURS"}</div>
            </div>

            <div
              className="bg-black/50 backdrop-blur-sm border border-purple-400/30 p-4 font-mono text-center"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
              data-stagger
            >
              <div className="text-purple-300 text-sm mb-2 flex items-center justify-center gap-2">
                <Activity size={16} />
                AVAILABILITY
              </div>
              <div className="text-purple-300/90 text-xs">24/7 MONITORING</div>
              <div className="text-purple-400/90 text-xs mt-1">GLOBAL COVERAGE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-400/20 text-white py-12 relative">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-blue-800/5 to-blue-400/5"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0" data-animate>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mb-2 font-mono">
                OPERATOR.AYUSH_KUMAR
              </h3>
              <p className="text-slate-400 font-mono">TACTICAL.FRONTEND.SPECIALIST</p>
            </div>

            <div className="flex gap-6" data-animate>
              <a
                href="#"
                className="h-12 w-12 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center border border-blue-400/30 hover:border-blue-400/50 transition-colors duration-200 hover:scale-[1.03]"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                  willChange: "transform",
                }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="h-12 w-12 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center border border-blue-400/30 hover:border-blue-400/50 transition-colors duration-200 hover:scale-[1.03]"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                  willChange: "transform",
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="h-12 w-12 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center border border-blue-400/30 hover:border-blue-400/50 transition-colors duration-200 hover:scale-[1.03]"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                  willChange: "transform",
                }}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-blue-800/30 mt-8 pt-8 text-center">
            <p className="text-slate-400 font-mono">
              © 2024 OPERATOR.AYUSH_KUMAR.EXE | POWERED BY REACT & TAILWIND | BUILD v2.1.0
            </p>
          </div>
        </div>
      </footer>

      {/* Global animations and accessibility */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        /* Reveal base + in states (transform/opacity only) */
        .reveal-base { opacity: 0; transform: translateY(16px); }
        .reveal-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 520ms cubic-bezier(0.22, 1, 0.36, 1), transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .reveal-base, .reveal-in { opacity: 1; transform: none; transition: none; }
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md bg-black/80 border border-blue-400/30 backdrop-blur-md text-slate-200">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-blue-200">
              <CheckCircle2 className="text-green-400" size={20} />
              Message sent successfully
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Your transmission has been received. I’ll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <button
              onClick={() => setShowSuccess(false)}
              className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 border border-blue-400/40 text-white hover:from-blue-500 hover:to-blue-600 transition-colors duration-200"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
