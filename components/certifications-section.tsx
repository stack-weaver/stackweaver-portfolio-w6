"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    image: "/1.png",
    link: "https://www.freecodecamp.org/certification/fcc-2b897dda-205d-4d6a-abb4-296dde893383/javascript-algorithms-and-data-structures-v8",
  },
  {
    id: 2,
    title: "Scientific Computing with Python",
    issuer: "FreeCodeCamp",
    image: "/2.png",
    link: "https://www.freecodecamp.org/certification/fcc-2b897dda-205d-4d6a-abb4-296dde893383/scientific-computing-with-python-v7",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    image: "/3.png",
    link: "https://www.freecodecamp.org/certification/fcc-2b897dda-205d-4d6a-abb4-296dde893383/responsive-web-design",
  },
  {
    id: 4,
    title: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    image: "/4.png",
    link: "https://www.freecodecamp.org/certification/fcc-2b897dda-205d-4d6a-abb4-296dde893383/javascript-algorithms-and-data-structures",
  },
  {
    id: 5,
    title: "Javascript",
    issuer: "HackerRank",
    image: "/5.png",
    link: "https://www.hackerrank.com/certificates/c854e6049d46?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
  },
  {
    id: 6,
    title: "ProblemSolving",
    issuer: "HackerRank",
    image: "/6.png",
    link: "https://www.hackerrank.com/certificates/a85d7b188fca?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
  },
  {
    id: 7,
    title: "Rest API",
    issuer: "HackerRank",
    image: "/7.png",
    link: "https://www.hackerrank.com/certificates/6a298c89862a?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
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
                <a href={cert.link} target={_blank}>
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
                          <span className="text-xs text-muted-foreground">{cert.credential}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
