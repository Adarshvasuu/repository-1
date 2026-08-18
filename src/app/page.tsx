import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Experience } from "@/components/Experience"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { CursorFollower } from "@/components/CursorFollower"
import { ScrollProgress } from "@/components/ScrollProgress"

export default function Home() {
  return (
    <>
      <CursorFollower />
      <ScrollProgress />
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}