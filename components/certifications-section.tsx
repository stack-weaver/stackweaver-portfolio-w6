"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Certified Blockchain Developer",
    issuer: "Blockchain Council",
    date: "2023",
    credential: "BC-2023-12345",
    image: "/blockchain-certification-badge.jpg",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credential: "AWS-SA-2023-67890",
    image: "/aws-certification-badge.png",
  },
  {
    id: 3,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2022",
    credential: "TF-DEV-2022-54321",
    image: "/tensorflow-certification-badge.jpg",
  },
  {
    id: 4,
    title: "Certified Ethereum Developer",
    issuer: "Ethereum Foundation",
    date: "2022",
    credential: "ETH-DEV-2022-98765",
    image: "/ethereum-certification-badge.jpg",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and credentials
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="overflow-hidden bg-card/50 backdrop-blur hover:bg-card/70 transition-all hover:scale-105 group"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary">{cert.date}</Badge>
                        <span className="text-xs text-muted-foreground">{cert.credential}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
