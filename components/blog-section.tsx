"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of DeFi: Trends to Watch in 2024",
    excerpt:
      "Exploring the latest developments in decentralized finance and what they mean for the future of blockchain technology.",
    image: "/blog1.png",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "DeFi",
    fullContent: `
      Decentralized Finance (DeFi) has revolutionized the financial landscape, and 2024 promises to be a pivotal year for the industry. As we look ahead, several key trends are emerging that will shape the future of DeFi.

      **1. Institutional Adoption**
      Major financial institutions are increasingly exploring DeFi protocols. This institutional interest brings legitimacy, liquidity, and sophisticated financial products to the ecosystem.

      **2. Cross-Chain Interoperability**
      The future of DeFi is multi-chain. Projects are focusing on seamless asset transfers and communication between different blockchain networks, breaking down the silos that have limited DeFi's potential.

      **3. Regulatory Clarity**
      As governments worldwide develop clearer regulatory frameworks, DeFi projects are adapting to ensure compliance while maintaining decentralization principles.

      **4. Real-World Asset Tokenization**
      The tokenization of traditional assets like real estate, bonds, and commodities is bridging the gap between traditional finance and DeFi, opening up new investment opportunities.

      **5. Enhanced Security Measures**
      With the maturation of the industry, security protocols are becoming more sophisticated, reducing the risk of exploits and building user confidence.

      The convergence of these trends suggests that DeFi is moving from an experimental phase to mainstream adoption, promising a more inclusive and efficient financial system for all.
    `,
  },
  {
    id: 2,
    title: "Building Secure Smart Contracts: Best Practices",
    excerpt:
      "A comprehensive guide to writing secure and efficient smart contracts, covering common vulnerabilities and how to avoid them.",
    image: "/blog2.png",
    date: "2024-01-10",
    readTime: "45 min read",
    category: "Security",
    fullContent: `
      Smart contract security is paramount in blockchain development. A single vulnerability can lead to millions of dollars in losses. Here are the essential best practices every developer should follow.

      **1. Follow the Checks-Effects-Interactions Pattern**
      Always perform checks first, update state variables second, and interact with external contracts last. This pattern prevents reentrancy attacks.

      **2. Use Established Libraries**
      Leverage battle-tested libraries like OpenZeppelin instead of writing custom implementations for common functionality.

      **3. Implement Access Controls**
      Use modifiers and role-based access control to restrict sensitive functions to authorized users only.

      **4. Guard Against Integer Overflow/Underflow**
      Use SafeMath libraries or Solidity 0.8+ which has built-in overflow protection.

      **5. Conduct Thorough Testing**
      Write comprehensive unit tests, integration tests, and use fuzzing tools to discover edge cases.

      **6. Get Professional Audits**
      Before mainnet deployment, have your contracts audited by reputable security firms.

      **7. Implement Emergency Stops**
      Include pause functionality to halt operations if a vulnerability is discovered.

      **8. Monitor and Respond**
      Set up monitoring systems to detect unusual activity and have an incident response plan ready.

      Security is not a one-time effort but an ongoing commitment to protecting user funds and maintaining trust in the ecosystem.
    `,
  },
  {
    id: 3,
    title: "AI and Blockchain: A Perfect Match?",
    excerpt:
      "Examining the intersection of artificial intelligence and blockchain technology, and the innovative applications that emerge.",
    image: "/blog3.png",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "AI",
    fullContent: `
      The convergence of Artificial Intelligence and Blockchain technology represents one of the most exciting frontiers in tech innovation. But are they truly a perfect match?

      **Complementary Strengths**
      AI excels at pattern recognition, prediction, and automation, while blockchain provides transparency, immutability, and decentralization. Together, they can solve problems neither could address alone.

      **Key Applications**

      *1. Decentralized AI Marketplaces*
      Blockchain enables the creation of marketplaces where AI models and datasets can be bought, sold, and shared securely.

      *2. Transparent AI Decision-Making*
      Recording AI decisions on blockchain creates an immutable audit trail, crucial for regulated industries.

      *3. Federated Learning*
      Blockchain can coordinate federated learning systems where AI models train on distributed data without compromising privacy.

      *4. AI-Enhanced Smart Contracts*
      Machine learning can make smart contracts more adaptive and intelligent, responding to complex conditions.

      *5. Fraud Detection*
      AI algorithms can analyze blockchain transactions in real-time to detect suspicious patterns and prevent fraud.

      **Challenges**
      The integration isn't without obstacles. Blockchain's computational limitations can constrain AI operations, and the energy consumption of both technologies raises sustainability concerns.

      **The Verdict**
      While not without challenges, the synergy between AI and blockchain is undeniable. As both technologies mature, we'll see increasingly sophisticated applications that leverage their combined strengths.
    `,
  },
  {
    id: 4,
    title: "Gas Optimization Techniques for Ethereum",
    excerpt:
      "Learn how to optimize your smart contracts to reduce gas costs and improve efficiency on the Ethereum network.",
    image: "/blog4.png",
    date: "2023-12-28",
    readTime: "15 min read",
    category: "Ethereum",
    fullContent: `
      Gas optimization is crucial for Ethereum smart contract development. High gas costs can make your dApp unusable. Here's how to write gas-efficient code.

      **1. Storage Optimization**
      Storage is the most expensive operation. Pack variables tightly, use memory instead of storage when possible, and delete unused storage slots.

      **2. Use Events Instead of Storage**
      For data that doesn't need to be accessed on-chain, emit events instead of storing in state variables.

      **3. Batch Operations**
      Process multiple items in a single transaction rather than multiple transactions.

      **4. Short-Circuit Evaluation**
      Order conditional checks from least to most expensive, and from most to least likely to fail.

      **5. Use Immutable and Constant**
      Variables that don't change should be marked as immutable or constant to save gas.

      **6. Optimize Loops**
      Avoid loops when possible. If necessary, cache array length and use unchecked arithmetic where safe.

      **7. Use Custom Errors**
      Custom errors (Solidity 0.8.4+) are cheaper than require strings.

      **8. Minimize External Calls**
      External calls are expensive. Batch them or use multicall patterns.

      **9. Use Appropriate Data Types**
      uint256 is often more gas-efficient than smaller types due to EVM word size.

      **10. Leverage Assembly**
      For critical paths, inline assembly can provide significant gas savings, but use cautiously.

      **Measuring Impact**
      Always measure gas usage before and after optimizations using tools like Hardhat Gas Reporter.

      Remember: Optimize for readability first, then optimize for gas only where it matters most.
    `,
  },
]

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null)

  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights and tutorials on blockchain and AI development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden cursor-pointer bg-card/50 backdrop-blur hover:bg-card/70 transition-all hover:scale-105"
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-primary/20">
          {selectedPost && (
            <>
              <DialogHeader>
                <div className="mb-4">
                  <img
                    src={selectedPost.image || "/placeholder.svg"}
                    alt={selectedPost.title}
                    className="w-full rounded-lg aspect-video object-cover"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <Badge variant="secondary">{selectedPost.category}</Badge>
                </div>
                <DialogTitle className="text-3xl md:text-4xl">{selectedPost.title}</DialogTitle>
              </DialogHeader>
              <div className="prose prose-invert max-w-none">
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedPost.fullContent}
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <Button variant="outline" onClick={() => setSelectedPost(null)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
