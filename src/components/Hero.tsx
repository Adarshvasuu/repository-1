"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Code, Sparkle, ArrowRight, Terminal, MagicWand } from "@phosphor-icons/react"
import { siteConfig } from "@/lib/data"

const roles = [
  "AI & Data Science Engineer",
  "Full Stack Developer",
  "ML Enthusiast",
  "Problem Solver",
  "Team Collaborator",
]

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  const rolesRef = useRef(roles)
  const currentRoleRef = useRef(roles[0])

  // Typing animation
  useEffect(() => {
    const role = rolesRef.current[currentRoleIndex]
    currentRoleRef.current = role

    let charIndex = 0
    const typeSpeed = 80
    const deleteSpeed = 40
    const pauseTime = 2000

    const type = () => {
      if (!isDeleting) {
        if (charIndex < role.length) {
          setTypedText(role.slice(0, charIndex + 1))
          charIndex++
          setTimeout(type, typeSpeed)
        } else {
          setIsDeleting(true)
          setTimeout(type, pauseTime)
        }
      } else {
        if (charIndex > 0) {
          setTypedText(role.slice(0, charIndex - 1))
          charIndex--
          setTimeout(type, deleteSpeed)
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % rolesRef.current.length)
          setTimeout(type, 500)
        }
      }
    }

    const timeout = setTimeout(type, 1000)
    return () => clearTimeout(timeout)
  }, [currentRoleIndex, isDeleting])

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((prev) => !prev), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-title">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--color-accent)/0.15_0%,transparent_70%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" aria-hidden="true" />

      {/* Orbital glows */}
      <div className="orb-glow orb-glow-primary" style={{ width: "600px", height: "600px", top: "-100px", right: "-150px" }} aria-hidden="true" />
      <div className="orb-glow orb-glow-secondary" style={{ width: "400px", height: "400px", bottom: "0", left: "-100px" }} aria-hidden="true" />

      <div className="container relative z-10 pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="relative z-10">
            {/* Profile badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center shadow-[0_8px_30px_-8px_rgb(168_85_247_/_0.5)]">
                <MagicWand weight="bold" size={32} color="var(--color-ink)" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-bold text-2xl tracking-tight">{siteConfig.name}</p>
                <p className="text-xs font-mono text-ink-muted uppercase tracking-widest">AI & Data Science Engineer</p>
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="eyebrow mb-4"
            >
              Building intelligent systems
            </motion.p>

            {/* Headline */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] max-w-4xl"
            >
              <span className="gradient-text">AI & Data Science</span>{" "}
              <br />
              Engineer
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="mt-8 flex items-center gap-3"
            >
              <Terminal weight="bold" size={20} color="var(--color-accent)" aria-hidden="true" />
              <span className="font-mono text-lg md:text-xl text-ink">
                {typedText}
                <span
                  className={cn("ml-1 animate-pulse", cursorVisible ? "opacity-100" : "opacity-0")}
                  style={{ animationDuration: "1.06s" }}
                  aria-hidden="true"
                >
                  _
                </span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="btn-magnetic btn-primary group"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Code weight="bold" size={18} aria-hidden="true" />
                View Projects
                <span className="btn-icon group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRight size={16} weight="bold" aria-hidden="true" />
                </span>
              </a>
              <a
                href="#contact"
                className="btn-magnetic btn-ghost group"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Sparkle weight="bold" size={18} aria-hidden="true" />
                Get In Touch
                <span className="btn-icon group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRight size={16} weight="bold" aria-hidden="true" />
                </span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="mt-16 flex flex-wrap gap-8 md:gap-12"
            >
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold tabular-nums">3+</p>
                <p className="text-xs font-mono text-ink-muted uppercase tracking-wider mt-1">Projects Built</p>
              </div>
              <div className="border-l border-border pl-6 md:pl-8">
                <p className="font-display text-3xl md:text-4xl font-bold tabular-nums">4</p>
                <p className="text-xs font-mono text-ink-muted uppercase tracking-wider mt-1">Core Skills</p>
              </div>
              <div className="border-l border-border pl-6 md:pl-8">
                <p className="font-display text-3xl md:text-4xl font-bold tabular-nums">2022+</p>
                <p className="text-xs font-mono text-ink-muted uppercase tracking-wider mt-1">Learning Since</p>
              </div>
            </motion.div>
          </div>

          {/* Right side - Visual */}
          <div className="relative lg:pl-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative"
            >
              {/* Profile photo with code window effect */}
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Profile image */}
                <div className="absolute inset-0 rounded-[24px] overflow-hidden bg-gradient-to-br from-accent/20 to-accent-dim/10 border border-border">
                  <img
                    src="/adarsh-photo.png"
                    alt="Adarsh Vasu - AI & Data Science Engineer"
                    className="w-full h-full object-cover opacity-90"
                    loading="eager"
                  />
                </div>

                {/* Code window overlay */}
                <div className="absolute bottom-6 right-6 w-96 glass-card p-4 md:p-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
                      <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono text-ink-muted ml-2">portfolio.ts</span>
                  </div>
                  <pre className="text-xs font-mono text-ink-soft overflow-x-auto"><code>{`const adarsh = {
  name: "Adarsh Vasu",
  role: "AI & Data Science Engineer",
  education: "B.Tech AI & DS @ JNN Institute",
  stack: ["Python", "React", "Next.js", "ML"],
  currently: "Building intelligent systems",
  openTo: "Collaboration & Opportunities"
}`}</code></pre>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 w-56 glass-card p-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center">
                    <Sparkle weight="bold" size={18} color="var(--color-ink)" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-ink">AI-First</p>
                    <p className="text-xs text-ink-muted">ML-powered everything</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 right-4 w-56 glass-card p-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <Code weight="bold" size={18} color="var(--color-ink)" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-ink">Open Source</p>
                    <p className="text-xs text-ink-muted">Active on GitHub</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted font-mono text-xs"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-6 border border-ink/20 rounded-full flex justify-center pt-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-1.5 bg-accent rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}