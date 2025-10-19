"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 5,
    title: "Multi-Chain NFT Universe (ETH & SOL)",
    description: "Cross-chain NFT project on Ethereum and Solana",
    image: "/portfolio5.png",
    tags: ["React", "Next.js", "Node.js", "Web3.js", "Tailwind CSS"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/Monkai-Multi-Chain-NFT-World-ETH-SOL-",
    demo: "https://monkainft.com/",
    longDescription:
      "Monkai is a next-generation, multi-chain NFT project that merges Ethereum and Solana ecosystems.It offers deep lore, DAO governance, staking mechanics, and evolving NFTs that let holders shape the Monkai universe through strategy and community interaction.",
    features: ["Multichain", "NFT", "Ethereum", "Solana", "DEFI"],
  },
  {
    id: 2,
    title: "Stake with Pumpkin’s Pool",
    description: "Earn top APY on Solana with Pumpkin’s Pool",
    image: "/portfolio2.png",
    tags: ["React", "Web3.js", "Rust"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/Stake-with-Pumpkin-s-Pool-Earn-Top-1-APY-on-Solana",
    demo: "https://pumpkinspool.com/",
    longDescription:
      "Earn top APY on Solana with Pumpkin’s Pool — a 0% commission, eco-friendly validator supporting clean energy and animal welfare.",
    features: ["Solana", "staking", "validator", "DeFi", "APY", "blockchain"],
  },
  {
    id: 3,
    title: "Solana Fantasy RPG",
    description: "A text-based idle GameFi adventure built on Solana",
    image: "/port3.png",
    tags: ["Rust", "Substrate", "React"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/Solana-Quest-Idle-RPG-Adventure",
    demo: "https://solana-fantasy-rpg.vercel.app/",
    longDescription:
      "Solana Fantasy RPG is a text-based GameFi adventure where players create NFT-backed characters, engage in turn-based combat, and earn on-chain rewards. Built with React, TypeScript, and TailwindCSS, it integrates Solana Wallet Adapter and Metaplex for seamless blockchain gameplay.",
    features: ["Solana", "NFT", "RPG", "On-chain Game", "Smart Contract", "Web3 Project"],
  },
  {
    id: 4,
    title: "My AI Agent",
    description: "My AI Agent — Your Smart, Secure, and Interactive Assistant",
    image: "/portfolio4.png",
    tags: ["Next.js", "PostgreSQL","Stream Video SDK", "OpenAI GPT"],
    category: "ai",
    github: "https://github.com/stack-weaver/AI-Agent",
    demo: "https://my-ai-agent-wheat.vercel.app/",
    longDescription:
      "My AI Agent is your personalized AI-powered assistant — seamlessly blending real-time video, secure multi-provider authentication, and smart conversational AI into a sleek, modern UI.",
    features: ["AI Agent", "Stream Video SDK", "OpenAI GPT", "Smart Assistant", "AI + Video Integration", "Secure Authentication"],
  },
  {
    id: 1,
    title: "Web3 NFT Cross-Breeding Dapp",
    description: "A Web3 Dapp that lets users breed NFTs, chat in real time, and interact on-chain",
    image: "/portfolio1.png",
    tags: ["Metamask", "Hardhat", "Infura", "React", "Solidity", "Ether.js", "Faucet", "TailwindCSS"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/NFT-Cross-Breeding-DApp-React-Solidity-CometChat",
    demo: "https://dapp-breeds.vercel.app/",
    longDescription:
      "The Web3 NFT Cross-Breeding Dapp enables users to create new NFTs by breeding existing ones and chatting in real time through CometChat. Built with React, Solidity, and Ethers.js, it integrates Metamask, Hardhat, Infura, and Tailwind CSS for seamless blockchain interaction and UI experience.",
    features: ["NFT", "Dapp", "Cross-Breeding","Blockchain App", "Smart Contract","CometChat"],
  },
  {
    id: 6,
    title: "Random User Agent (rand-user-agent)",
    description: "A Node.js package that generates realistic random user-agent strings",
    image: "/port6.png",
    tags: ["React", "Next.js", "Node.js", "Python"],
    category: "ai",
    github: "https://github.com/stack-weaver/User-Agent-Random-",
    demo: "https://www.webscrapingapi.com/",
    longDescription:
      "rand-user-agent is a Node.js library that returns randomized, real user-agent strings weighted by their actual usage frequency. Originally built for WebScrapingAPI, it can be integrated into any scraping or automation tool.",
    features: [ "NPM Package", "User Agent Generator", "Random User Agent", "Automation", "WebScrapingAPI"],
  },
  {
    id: 7,
    title: "Full Stack Web Developer training",
    description: "Training Management System Website. Full Stack Web Developer training.",
    image: "/port7.png",
    tags: ["React", "Next.js", "TailwindCSS"],
    category: "fullstack",
    github: "https://github.com/alexandrelamberty/minerva-website",
    demo: "https://technofuturtic.be/",
    longDescription:
      "Training Management System Website. Full Stack Web Developer training",
    features: ["Learn Next.js", "Training Management System"],
  },
  {
    id: 8,
    title: "InfoCrypto",
    description: "A real-time crypto news and price tracker providing live market data, trends, and updates in a clean, responsive UI.",
    image: "/port8.png",
    tags: ["React", "WebAPI", "Defi", "bearmarket", "binance", "hacker", "tokens"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/InfoCrypto-Live-Crypto-News-Prices",
    demo: "https://infocripto.netlify.app/",
    longDescription:
      "InfoCrypto is a real-time cryptocurrency news and price portal that delivers up-to-date market information, price charts, and trend analysis for Bitcoin, Ethereum, and other major coins.",
    features: ["Cryptocurrency", "Bitcoin", "Ethereum", "Altcoins", "Crypto News", "Real-time Prices", "Blockchain",  "Web App",  "Crypto Tracker"],
  },
  {
    id: 9,
    title: "FlareGods — NFT Collection Platform on Flare Network",
    description: "A decentralized NFT minting and marketplace platform on the Flare Network, featuring staking, cashback rewards, and token integration for holders.",
    image: "/port9.png",
    tags: ["Node.js", "AWS", "MongoDB", "React", "Next.js", "Ether.js", "Tailwindcss"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/FlareGods-NFT-Collection-Platform-on-Flare-Network",
    demo: "https://flaregods.xyz/",
    longDescription:
      "FlareGods is an NFT collection and marketplace built on the Flare Network, allowing users to mint, stake, and trade digital warrior NFTs while earning rewards through smart contracts.",
    features: ["Image Recognition", "Text Analysis", "Real-time Processing", "Custom Rules"],
  },
  {
    id: 10,
    title: "A modern chatbot web app",
    description: "A modern chatbot web app built with React and Vite, featuring multi-conversation support.",
    image: "/port10.png",
    tags: ["react", "node", "chatbot", "api"],
    category: "ai",
    github: "https://github.com/stack-weaver/A-modern-chatbot",
    demo: "https://deepseek-mychat.pages.dev/",
    longDescription:
      "A modern chatbot web app built with React and Vite, featuring multi-conversation support, a sleek sidebar, and light/dark theme toggle. Powered by Google Gemini API. Similar website made by using this code linked below.",
    features: ["chatbot", "deepseek", "gemini-api", "node.js", "ai"],
  },
  {
    id: 11,
    title: "MAYO Token — Community Crypto for Pet Care",
    description: "A community-driven crypto token supporting affordable pet care and charitable causes.",
    image: "/port11.png",
    tags: ["Solana", "React", "Next.js", "Rust"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/MAYO-Token-Community-Crypto-for-Pet-Care",
    demo: "https://mayosol.com/",
    longDescription:
      "MAYO Token is a cryptocurrency built to support pet welfare, inspired by the story of a paralyzed cat, Mr. Mayonnaise. The project has contributed to veterinary bills and promotes a community-focused ecosystem.",
    features: ["Blockchain", "Crypto", "Tokenomics", "NFT"],
  },
  {
    id: 12,
    title: "Umpfun Bundler Bot",
    description: "A Solana bot that automates multi-wallet token purchases.",
    image: "/port12.png",
    tags: ["Next.js", "React", "FastAPI", "AWS" ,"TailwindCSS"],
    category: "ai",
    github: "https://github.com/stack-weaver/Multi-Wallet-Token-Buyer-Bot",
    demo: "https://pump.fun/",
    longDescription:
      "Umpfun Bundler Bot V2.0.4 automates token buying on Solana by creating up to 20 wallets, airdropping SOL from a main wallet to cover gas fees, and executing purchases with MEV protection via Jito.",
    features: ["Solana", "Smart Wallets", "Trading", "Solana Bot", "Jito", "Automation"],
  },
  {
    id: 13,
    title: " Aggregates casino game",
    description: "Full-stack gaming aggregator integrating multiple casino providers",
    image: "/port13.png",
    tags: ["React", "Next.js", "Node.js", "Docker", "PostgreSQL"],
    category: "fullstack",
    github: "https://github.com/stack-weaver/Online-gaming-casino",
    demo: "https://melardev.com/",
    longDescription:
      "Full-stack gaming aggregator integrating multiple casino providers with unified user accounts, real-time balance tracking, payment workflows, and admin management tools. Built with Next.js and Node.js for production-ready deployment.",
    features: ["Casino Game", "Aggregates"],
  },
  {
    id: 14,
    title: "Modern E-commerce website",
    description: "Chromaic is a modern e-commerce website",
    image: "/port14.png",
    tags: ["React.js", "Node.js", "express.js", "MongoDB", "TailwindCSS"],
    category: "fullstack",
    github: "https://github.com/stack-weaver/modern-ecommerce-website-chromaic",
    demo: "https://chromaic.vercel.app/",
    longDescription:
      "Chromaic is a full-stack e-commerce web application crafted for the GenZ audience. It's built with modern technologies and delivers a dynamic and smooth shopping experience with cool aesthetics and high performance.",
    features: ["Modern website", "E-commerce", "Shopping", "MERN Stack"],
  },
  {
    id: 15,
    title: "EVM Pumpfun Smart Contract",
    description: "EVM Pumpfun Smart Contract(fork of pump.fun), implementing main functionalities of pump fun",
    image: "/port15.png",
    tags: ["Solidity", "EVM", "Next.js"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/EVM-Pumpfun-Clone-Smart-Contract",
    demo: "https://ape.store/",
    longDescription:
      "Solidity Smart Contact For pumpfun forking on EVM, pump.fun ethereum fork. It's for offering basic understanding about pumpfun on evm.",
    features: ["Solidity", "Smart Contract", "Blockchain", "EVM"],
  },
  {
    id: 16,
    title: "Multichain AI Agent Library",
    description: "A powerful, extensible AI agent framework designed for multichain crypto interactions",
    image: "/port16.png",
    tags: ["Next.js", "React", "Node.js", "Python", "Web Speech API"],
    category: "ai",
    github: "https://github.com/stack-weaver/Multichain-Voice-AI-Framework",
    demo: "https://forevervoices.com/",
    longDescription:
      "A powerful, extensible AI agent framework designed for multichain crypto interactions, voice-enabled interfaces, and cross-platform communication.",
    features: ["AI Agent", "Solana", "Ethereum", "Bitcoin", "pnpm", "Multi-Agent", "LLM"],
  },
  {
    id: 17,
    title: "Launchifi — No-Code Web3 Smart Contract Platform",
    description: "Deploy and verify smart contracts (ERC-20, NFT, staking) across multi-chains instantly.",
    tags: ["React", "Next.js", "Python", "Ether.js",],
    image: "/port17.png",
    category: "blockchain",
    github: "https://github.com/stack-weaver/Launchifi-Web3-No-Code-Smart-Contract-Platform",
    demo: "https://launchifi.xyz/",
    longDescription:
      "Deploy and verify smart contracts (ERC-20, NFT, staking) across multi-chains instantly. Gas-optimized, audited, and 100% user-owned. Built for developers, creators, and Web3 startups.",
    features: ["Multi-platform Support", "Analytics", "Post Scheduling", "Engagement Metrics"],
  },
  {
    id: 18,
    title: "A match-three video game",
    description: "A match-three video game built with React, where players can create and share their own levels with the community.",
    image: "/port18",
    tags: ["React", "TailwindCSS", "Node.js", "Vite"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://candy-tiles.netlify.app/",
    longDescription:
      "A match-three video game built with React, where players can create and share their own levels with the community.",
    features: ["Candy", "Video Game", "Typescript", "Real-time Communication"],
  },
  {
    id: 19,
    title: "StarFy Agency — Creative Marketing Website",
    description: "A dynamic marketing agency website.",
    image: "/port19.png",
    tags: ["Next.js", "React", "TailwindCSS"],
    category: "fullstack",
    github: "https://github.com/stack-weaver/Agency-of-StarFy",
    demo: "https://agenciastarfy.vercel.app/en",
    longDescription:
      "A dynamic marketing agency website built with Next.js and Tailwind CSS, featuring multilingual support and an interactive sales experience.",
    features: ["Agency", "Marketing", "Modern WebApp"],
  },
  {
    id: 20,
    title: "Coffee shop website",
    description: "This is the coffee shop website developed using HTML, CSS, JS, PHP, & MySQL. ",
    image: "/20.png",
    tags: ["php", "chatbot", "mysql"],
    category: "ai",
    github: "https://github.com",
    demo: "https://kapetanncoffeeshop.infinityfreeapp.com/",
    longDescription:
      "This is the coffee shop website developed using HTML, CSS, JS, PHP, & MySQL. This website has Chatbot functionality. It also has a login and register form.",
    features: ["Chatbot", "Website", "coffee-shop"],
  },
  {
    id: 21,
    title: "Solana - SHURK",
    description: "Solana’s most degenerate fish — now on chain.",
    image: "/21.png",
    tags: ["Rust", "React", "Next.js"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/shurk-solana",
    demo: "https://www.shurkysheen.com/",
    longDescription:
      "SHURK is a meme-token on the Solana blockchain that takes a more irreverent, wild tone.",
    features: ["solana", "Meme", "Crypto", "NFT"],
  },
  {
    id: 22,
    title: "BetFury – Crypto Casino & TRON Staking",
    description: "A crypto casino platform supporting TRON (TRX) and multiple cryptocurrencies",
    image: "/22.png",
    tags: ["React", "Next.js", "Node.js", "Solidity", "Web3.js"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/BetFury-Crypto-Casino-TRON-Staking",
    demo: "https://betfury.com/",
    longDescription:
      "A crypto casino platform supporting TRON (TRX) and multiple cryptocurrencies, offering staking, betting, and blockchain-integrated games.",
    features: ["Solidity", "Casino", "Crash Games", "Slot Games", "Tron", "Smart Contracts"],
  },
  {
    id: 23,
    title: "Solana Course",
    description: "About Implementations of projects from the Rise in school's Solana bootcamp",
    image: "/23.png",
    tags: ["React", "Node.js", "Rust", "Web3.js"],
    category: "blockchain",
    github: "https://github.com/stack-weaver/Solana-Course",
    demo: "https://www.risein.com/",
    longDescription:
      "About Implementations of projects from the Rise in school's Solana bootcamp",
    features: ["Rust", "Solana", "Course"],
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
