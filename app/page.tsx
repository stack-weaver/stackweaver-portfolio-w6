import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CertificationsSection } from "@/components/certifications-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ReviewsSection />
        <CertificationsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  )
}
