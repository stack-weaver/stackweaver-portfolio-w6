"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const skills = [
  { name: "React", percentage: 98, icon: "react", color: "from-cyan-400 to-blue-500" },
  { name: "Redux", percentage: 95, icon: "redux", color: "from-purple-400 to-purple-600" },
  { name: "Next.js", percentage: 90, icon: "nextdotjs", color: "from-gray-700 to-black" },
  { name: "Vue.js", percentage: 80, icon: "vuedotjs", color: "from-green-400 to-green-600" },
  { name: "Three.js", percentage: 83, icon: "threedotjs", color: "from-gray-700 to-black" },
  { name: "Nuxt.js", percentage: 85, icon: "nuxtdotjs", color: "from-green-400 to-teal-500" },
  { name: "Nest.js", percentage: 86, icon: "nestjs", color: "from-red-500 to-pink-600" },
  { name: "Node.js", percentage: 95, icon: "nodedotjs", color: "from-green-500 to-green-700" },
  { name: "Express.js", percentage: 96, icon: "express", color: "from-gray-600 to-gray-800" },
  { name: "MongoDB", percentage: 90, icon: "mongodb", color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", percentage: 94, icon: "postgresql", color: "from-blue-400 to-blue-600" },
  { name: "Python", percentage: 90, icon: "python", color: "from-blue-400 to-yellow-400" },
  { name: "PyTorch", percentage: 85, icon: "pytorch", color: "from-orange-500 to-red-600" },
  { name: "FastAPI", percentage: 87, icon: "fastapi", color: "from-teal-400 to-teal-600" },
  { name: "Go", percentage: 86, icon: "go", color: "from-cyan-400 to-blue-500" },
  { name: "C#", percentage: 90, icon: "csharp", color: "from-purple-500 to-purple-700" },
  { name: "Ethereum", percentage: 98, icon: "ethereum", color: "from-gray-600 to-gray-800" },
  { name: "Solana", percentage: 95, icon: "solana", color: "from-purple-400 to-green-400" },
  { name: "Cardano", percentage: 87, icon: "cardano", color: "from-blue-500 to-blue-700" },
  { name: "Polkadot", percentage: 85, icon: "polkadot", color: "from-pink-500 to-pink-700" },
  { name: "TypeScript", percentage: 96, icon: "typescript", color: "from-blue-500 to-blue-700" },
  { name: "Solidity", percentage: 98, icon: "solidity", color: "from-gray-600 to-gray-800" },
  { name: "Rust", percentage: 96, icon: "rust", color: "from-orange-600 to-red-700" },
  { name: "Anchor", percentage: 89, icon: "anchor", color: "from-purple-400 to-green-400" },
  { name: "Hardhat", percentage: 84, icon: "hardhat", color: "from-yellow-400 to-yellow-600" },
  { name: "Ethers.js", percentage: 89, icon: "ethereum", color: "from-indigo-500 to-purple-600" },
  { name: "Web3.js", percentage: 90, icon: "web3dotjs", color: "from-orange-500 to-orange-700" },
  { name: "Docker", percentage: 88, icon: "docker", color: "from-blue-400 to-blue-600" },
  { name: "AWS", percentage: 90, icon: "amazonaws", color: "from-orange-400 to-orange-600" },
  { name: "Machine Learning", percentage: 86, icon: "tensorflow", color: "from-orange-500 to-orange-700" },
]

function AnimatedSkillCard({ skill, inView, delay }: { skill: (typeof skills)[0]; inView: boolean; delay: number }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    if (inView) {
      const visibilityTimer = setTimeout(() => {
        setIsVisible(true)
      }, delay)

      const progressTimer = setTimeout(() => {
        setProgress(skill.percentage)
      }, delay + 100)

      return () => {
        clearTimeout(visibilityTimer)
        clearTimeout(progressTimer)
      }
    }
  }, [inView, skill.percentage, delay])

  return (
    <div
      className={`transform transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group relative overflow-hidden">
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${skill.color}`}
        />

        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-2xl bg-background/90 backdrop-blur border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
              {!imageError ? (
                <img
                  src={`https://cdn.simpleicons.org/${skill.icon}`}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              ) : (
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white font-bold text-xl`}
                >
                  {skill.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* Skill name */}
          <h4 className="text-center font-semibold mb-3 text-sm group-hover:text-primary transition-colors">
            {skill.name}
          </h4>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted-foreground">Proficiency</span>
              <span className="font-bold text-primary">{skill.percentage}%</span>
            </div>
            <div className="h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out relative bg-gradient-to-r ${skill.color}`}
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export function AboutSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 transform transition-all duration-700 delay-100">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate blockchain and AI engineer with expertise in building decentralized applications and
              intelligent systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-card/30 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">▹</span> My Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 7 years of experience in blockchain technology and artificial intelligence, I specialize in
                creating innovative solutions that bridge the gap between decentralized systems and machine learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey began with a fascination for cryptography and has evolved into a career focused on building
                secure, scalable, and intelligent blockchain applications that solve real-world problems.
              </p>
            </Card>

            <Card className="p-8 bg-card/30 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-accent">▹</span> What I Do
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-primary mt-1">▹</span>
                  <span>Design and develop smart contracts for DeFi, NFT, and DAO platforms</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-primary mt-1">▹</span>
                  <span>Build AI models for predictive analytics and natural language processing</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-primary mt-1">▹</span>
                  <span>Create full-stack dApps with modern web technologies</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-primary mt-1">▹</span>
                  <span>Conduct security audits and optimize blockchain infrastructure</span>
                </li>
              </ul>
            </Card>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <AnimatedSkillCard key={skill.name} skill={skill} inView={inView} delay={index * 50} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
