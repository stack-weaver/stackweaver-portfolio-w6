"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, MessageCircle, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next blockchain or AI project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur hover:bg-card/70 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="stackweaver7@gmail.com" className="text-muted-foreground hover:text-primary">
                      stackweaver7@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur hover:bg-card/70 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GitHub</h3>
                    <a
                      href="https://github.com/stack-weaver"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      StactWeaver
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur hover:bg-card/70 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Discord</h3>
                    <a className="text-muted-foreground" href="https://discord.com/users/398866823602241538" target="_blank">S.Weaver</a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur hover:bg-card/70 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telegram</h3>
                    <a
                      href="https://t.me/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      @StackWeaver7
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell me about your project..." rows={6} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 text-muted-foreground">
        <p>© 2025 Blockchain & AI Engineer. All rights reserved.</p>
      </div>
    </section>
  )
}
