import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Proposals } from "@/components/proposals"
import { About } from "@/components/about"
import { Timeline } from "@/components/timeline"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="propuestas">
        <Proposals />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="calendario">
        <Timeline />
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
