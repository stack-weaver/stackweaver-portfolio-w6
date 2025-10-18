"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "DeFi Lending Protocol",
    description: "Decentralized lending platform with automated market making",
    image: "/defi-lending-platform.png",
    tags: ["Solidity", "React", "Web3.js"],
    category: "blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A comprehensive DeFi lending protocol that enables users to lend and borrow cryptocurrencies with dynamic interest rates. Features include collateralized loans, liquidation mechanisms, and governance tokens.",
    features: ["Automated Market Making", "Flash Loans", "Governance System", "Multi-collateral Support"],
  },
  {
    id: 2,
    title: "AI-Powered NFT Generator",
    description: "Generate unique NFTs using machine learning algorithms",
    image: "/ai-nft-generator.jpg",
    tags: ["Python", "TensorFlow", "Solidity"],
    category: "ai",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "An innovative NFT generation platform that uses GANs to create unique digital art. Each piece is verifiably unique and minted on the blockchain.",
    features: ["GAN-based Generation", "On-chain Metadata", "Rarity System", "Batch Minting"],
  },
  {
    id: 3,
    title: "Blockchain Supply Chain",
    description: "Track products from manufacture to delivery",
    image: "/blockchain-supply-chain.png",
    tags: ["Rust", "Substrate", "React"],
    category: "blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A transparent supply chain management system built on blockchain technology, ensuring product authenticity and traceability throughout the entire logistics process.",
    features: ["Real-time Tracking", "QR Code Integration", "Multi-party Verification", "IoT Integration"],
  },
  {
    id: 4,
    title: "Decentralized Exchange",
    description: "Swap tokens with minimal slippage and fees",
    image: "/decentralized-exchange.png",
    tags: ["Solidity", "Next.js", "Ethers.js"],
    category: "blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A high-performance DEX with advanced trading features, liquidity pools, and yield farming opportunities.",
    features: ["Automated Liquidity", "Limit Orders", "Yield Farming", "Cross-chain Swaps"],
  },
  {
    id: 5,
    title: "AI Trading Bot",
    description: "Automated cryptocurrency trading using ML predictions",
    image: "/ai-trading-bot.png",
    tags: ["Python", "PyTorch", "Node.js"],
    category: "ai",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "An intelligent trading bot that uses machine learning to analyze market trends and execute profitable trades automatically.",
    features: ["Sentiment Analysis", "Technical Indicators", "Risk Management", "Backtesting"],
  },
  {
    id: 6,
    title: "DAO Governance Platform",
    description: "Decentralized autonomous organization management",
    image: "/dao-governance.png",
    tags: ["Solidity", "React", "IPFS"],
    category: "blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A complete DAO governance solution with proposal creation, voting mechanisms, and treasury management.",
    features: ["Proposal System", "Quadratic Voting", "Treasury Management", "Delegation"],
  },
  {
    id: 7,
    title: "NFT Marketplace",
    description: "Buy, sell, and auction digital collectibles",
    image: "/nft-marketplace-concept.png",
    tags: ["Solidity", "Next.js", "The Graph"],
    category: "blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A feature-rich NFT marketplace with auction capabilities, royalty management, and collection analytics.",
    features: ["English Auctions", "Dutch Auctions", "Royalty System", "Collection Analytics"],
  },
  {
    id: 8,
    title: "Blockchain Identity System",
    description: "Self-sovereign identity management on blockchain",
    image: "/blockchain-identity.jpg",
    tags: ["Rust", "React", "DID"],
    category: "blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A decentralized identity solution that gives users full control over their personal data and credentials.",
    features: ["Verifiable Credentials", "Zero-Knowledge Proofs", "Multi-chain Support", "Privacy-first"],
  },
  {
    id: 9,
    title: "AI Content Moderator",
    description: "Automated content moderation using deep learning",
    image: "/ai-content-moderation.jpg",
    tags: ["Python", "TensorFlow", "FastAPI"],
    category: "ai",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "An AI-powered content moderation system that automatically detects and filters inappropriate content across multiple platforms.",
    features: ["Image Recognition", "Text Analysis", "Real-time Processing", "Custom Rules"],
  },
  {
    id: 10,
    title: "Cross-chain Bridge",
    description: "Transfer assets between different blockchains",
    image: "/cross-chain-bridge.jpg",
    tags: ["Solidity", "Rust", "TypeScript"],
    category: "blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A secure cross-chain bridge enabling seamless asset transfers between multiple blockchain networks.",
    features: ["Multi-chain Support", "Atomic Swaps", "Liquidity Pools", "Security Audited"],
  },
  {
    id: 11,
    title: "Prediction Market Platform",
    description: "Decentralized prediction markets for future events",
    image: "/prediction-market.jpg",
    tags: ["Solidity", "React", "Chainlink"],
    category: "blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A decentralized prediction market where users can bet on future events with transparent odds and automated payouts.",
    features: ["Oracle Integration", "Automated Settlement", "Market Creation", "Liquidity Mining"],
  },
  {
    id: 12,
    title: "AI Chatbot Framework",
    description: "Build intelligent conversational AI agents",
    image: "/ai-chatbot.png",
    tags: ["Python", "Transformers", "FastAPI"],
    category: "ai",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A flexible framework for building sophisticated AI chatbots with natural language understanding and context awareness.",
    features: ["Multi-language Support", "Context Memory", "Intent Recognition", "Custom Training"],
  },
  {
    id: 13,
    title: "Tokenization Platform",
    description: "Tokenize real-world assets on blockchain",
    image: "/asset-tokenization.jpg",
    tags: ["Solidity", "Next.js", "IPFS"],
    category: "blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A platform for tokenizing real-world assets like real estate, art, and commodities, making them tradeable on blockchain.",
    features: ["Fractional Ownership", "Compliance Tools", "Asset Verification", "Secondary Market"],
  },
  {
    id: 14,
    title: "E-commerce Platform",
    description: "Full-stack online shopping experience",
    image: "/ecommerce-platform.jpg",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A complete e-commerce solution with product management, shopping cart, payment integration, and order tracking.",
    features: ["Product Catalog", "Payment Gateway", "Order Management", "Admin Dashboard"],
  },
  {
    id: 15,
    title: "AI Image Recognition API",
    description: "High-accuracy image classification and object detection",
    image: "/ai-image-recognition.jpg",
    tags: ["Python", "PyTorch", "Docker"],
    category: "ai",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A powerful image recognition API capable of classifying images, detecting objects, and extracting features with high accuracy.",
    features: ["Object Detection", "Face Recognition", "Scene Understanding", "Custom Models"],
  },
  {
    id: 16,
    title: "DeFi Yield Aggregator",
    description: "Maximize returns across multiple DeFi protocols",
    image: "/defi-yield-aggregator.jpg",
    tags: ["Solidity", "React", "Web3.js"],
    category: "blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "An automated yield optimization platform that finds the best returns across various DeFi protocols.",
    features: ["Auto-compounding", "Strategy Vaults", "Gas Optimization", "Risk Assessment"],
  },
  {
    id: 17,
    title: "Social Media Dashboard",
    description: "Analytics and management for social platforms",
    image: "/social-dashboard.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A comprehensive social media management dashboard with analytics, scheduling, and engagement tracking.",
    features: ["Multi-platform Support", "Analytics", "Post Scheduling", "Engagement Metrics"],
  },
  {
    id: 18,
    title: "AI Recommendation Engine",
    description: "Personalized recommendations using collaborative filtering",
    image: "/ai-recommendation.jpg",
    tags: ["Python", "TensorFlow", "Redis"],
    category: "ai",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A sophisticated recommendation engine that provides personalized suggestions based on user behavior and preferences.",
    features: ["Collaborative Filtering", "Content-based", "Hybrid Approach", "Real-time Updates"],
  },
  {
    id: 19,
    title: "Project Management Tool",
    description: "Collaborative workspace for teams",
    image: "/project-management.jpg",
    tags: ["Next.js", "PostgreSQL", "WebSocket"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "A full-featured project management platform with real-time collaboration, task tracking, and team communication.",
    features: ["Task Management", "Real-time Collaboration", "File Sharing", "Team Chat"],
  },
  {
    id: 20,
    title: "Smart Contract Auditor",
    description: "Automated security analysis for smart contracts",
    image: "/smart-contract-audit.png",
    tags: ["Python", "Solidity", "Machine Learning"],
    category: "ai",
    github: "https://github.com",
    demo: "https://demo.com",
    longDescription:
      "An AI-powered tool that automatically analyzes smart contracts for security vulnerabilities and best practice violations.",
    features: ["Vulnerability Detection", "Gas Optimization", "Best Practices", "Detailed Reports"],
  },
]

export function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(9)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<"all" | "fullstack" | "blockchain" | "ai">("all")

  const toggleShowMore = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(9)
    } else {
      setVisibleCount(projects.length)
    }
  }

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of blockchain and AI projects
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory("all")
                setVisibleCount(9)
              }}
              className="transition-all hover:scale-105"
            >
              All Projects
            </Button>
            <Button
              variant={selectedCategory === "fullstack" ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory("fullstack")
                setVisibleCount(9)
              }}
              className="transition-all hover:scale-105"
            >
              Full-Stack
            </Button>
            <Button
              variant={selectedCategory === "blockchain" ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory("blockchain")
                setVisibleCount(9)
              }}
              className="transition-all hover:scale-105"
            >
              Blockchain
            </Button>
            <Button
              variant={selectedCategory === "ai" ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory("ai")
                setVisibleCount(9)
              }}
              className="transition-all hover:scale-105"
            >
              AI
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.slice(0, visibleCount).map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden cursor-pointer bg-card/50 backdrop-blur hover:bg-card/70 transition-all hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length > 9 && (
            <div className="text-center">
              <Button onClick={toggleShowMore} size="lg" variant="outline">
                {visibleCount >= filteredProjects.length ? "Show Less" : "Show More Projects"}
              </Button>
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background/80 backdrop-blur-2xl border-primary/20">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base">{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full rounded-lg aspect-video object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold mb-3">About This Project</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button asChild className="flex-1">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
