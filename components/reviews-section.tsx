"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO at DeFi Solutions",
    rating: 5.0,
    text: "Exceptional blockchain developer. Built our entire DeFi platform with outstanding security and performance.",
    avatar: "/professional-woman-diverse.png",
    gender: "female",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder of NFT Marketplace",
    rating: 5.0,
    text: "Delivered a complex NFT marketplace ahead of schedule. The smart contracts are flawless and gas-optimized.",
    avatar: "/professional-asian-man.png",
    gender: "male",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager at AI Startup",
    rating: 4.8,
    text: "Brilliant AI engineer who transformed our vision into reality. The ML models are incredibly accurate.",
    avatar: "/hispanic-professional-woman.png",
    gender: "female",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO of Blockchain Gaming",
    rating: 4.9,
    text: "Outstanding work on our play-to-earn game. The integration of blockchain and gaming is seamless.",
    avatar: "/professional-korean-man.png",
    gender: "male",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Director at FinTech Corp",
    rating: 5.0,
    text: "Professional, knowledgeable, and reliable. The cross-chain bridge works perfectly with zero issues.",
    avatar: "/professional-blonde-woman.png",
    gender: "female",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Founder of DAO Platform",
    rating: 4.7,
    text: "Created an amazing governance system for our DAO. The code quality is exceptional.",
    avatar: "/professional-man-caucasian.jpg",
    gender: "male",
  },
  {
    id: 7,
    name: "Maria Garcia",
    role: "Tech Lead at Supply Chain Co",
    rating: 4.9,
    text: "Implemented a robust blockchain solution for our supply chain. Highly recommend!",
    avatar: "/latina-professional-woman.png",
    gender: "female",
  },
  {
    id: 8,
    name: "Robert Taylor",
    role: "VP of Engineering",
    rating: 5.0,
    text: "Expert in both blockchain and AI. Delivered a sophisticated trading bot that exceeds expectations.",
    avatar: "/professional-executive-man.png",
    gender: "male",
  },
  {
    id: 9,
    name: "Jennifer Lee",
    role: "Founder of Identity Platform",
    rating: 4.8,
    text: "Built our decentralized identity system with cutting-edge technology. Absolutely brilliant work.",
    avatar: "/professional-asian-woman.png",
    gender: "female",
  },
  {
    id: 10,
    name: "Thomas Brown",
    role: "CTO at Exchange Platform",
    rating: 4.6,
    text: "Developed a high-performance DEX with advanced features. The architecture is solid and scalable.",
    avatar: "/professional-man-british.jpg",
    gender: "male",
  },
  {
    id: 11,
    name: "Amanda White",
    role: "Product Owner at AI Company",
    rating: 4.9,
    text: "Created an impressive AI content moderator that handles millions of requests daily.",
    avatar: "/professional-woman-redhead.jpg",
    gender: "female",
  },
  {
    id: 12,
    name: "Christopher Davis",
    role: "CEO of Lending Protocol",
    rating: 5.0,
    text: "Outstanding smart contract development. Our lending protocol is secure and efficient.",
    avatar: "/professional-african-american-man.png",
    gender: "male",
  },
  {
    id: 13,
    name: "Jessica Martinez",
    role: "Director of Innovation",
    rating: 4.7,
    text: "Exceptional work on our tokenization platform. The solution is elegant and user-friendly.",
    avatar: "/professional-woman-brunette.jpg",
    gender: "female",
  },
  {
    id: 14,
    name: "Daniel Thompson",
    role: "Founder of Voting System",
    rating: 4.8,
    text: "Built a secure and transparent voting system using blockchain. Truly impressive technical skills.",
    avatar: "/professional-man-tech-founder.jpg",
    gender: "male",
  },
  {
    id: 15,
    name: "Rachel Green",
    role: "CTO at Storage Network",
    rating: 5.0,
    text: "Developed our decentralized storage solution with excellent performance and reliability.",
    avatar: "/professional-woman-cto.png",
    gender: "female",
  },
]

export function ReviewsSection() {
  const [visibleCount, setVisibleCount] = useState(6)

  const toggleShowMore = () => {
    if (visibleCount >= reviews.length) {
      setVisibleCount(6)
    } else {
      setVisibleCount(reviews.length)
    }
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">({reviews.length} reviews)</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">What clients say about working with me</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.slice(0, visibleCount).map((review) => (
              <Card
                key={review.id}
                className="p-6 bg-card/50 backdrop-blur hover:bg-card/70 transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  {review.rating % 1 !== 0 && <Star className="w-4 h-4 fill-primary/50 text-primary" />}
                  <span className="ml-2 text-sm font-semibold">{review.rating.toFixed(1)}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={toggleShowMore} size="lg" variant="outline">
              {visibleCount >= reviews.length ? "Show Less" : "Show More Reviews"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
