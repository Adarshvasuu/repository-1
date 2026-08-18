"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Code, Sparkle, ArrowRight, Terminal, MagicWand } from "@phosphor-icons/react"

const roles = [
  "AI Engineer",
  "Full Stack Developer",
  "ML Systems Builder",
  "Open Source Creator",
  "Problem Solver",
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
    <header className="hero relative min-h-[100dvh] flex items-center overflow-hidden" id="top">
      {/* Background orbs */}
      <div className="orb-glow orb-glow-primary" style={{ width: "600px", height: "600px", top: "-200px", left: "-200px" }} aria-hidden="true" />
      <div className="orb-glow orb-glow-secondary" style={{ width: "400px", height: "400px", bottom: "-100px", right: "-150px" }} aria-hidden="true" />

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(250,249,252,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,249,252,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-20 pt-24 md:pt-0">
        {/* Left content */}
        <div className="flex-1 max-w-3xl">
          {/* Logo/Mark */}
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
              <p className="font-display font-bold text-2xl tracking-tight">Adarsh Vasu</p>
              <p className="text-xs font-mono text-ink-muted uppercase tracking-widest">AI Engineer & Full Stack Developer</p>
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] max-w-4xl"
          >
            I craft <span className="gradient-text">AI-powered</span> products<br />
            that <span className="gradient-text">learn, adapt,</span><br />
            and <span className="gradient-text">scale.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed"
          >
            Currently pursuing AI & Data Science at JNN Institute of Engineering.
            Building production ML systems, developer tools, and open-source
            infrastructure used by thousands.
          </motion.p>

          {/* Typed role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-8 md:gap-12"
          >
            <div className="flex flex-col">
              <span className="font-display font-bold text-3xl md:text-4xl text-ink">15+</span>
              <span className="text-sm text-ink-muted font-mono uppercase tracking-wider">Production Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-3xl md:text-4xl text-ink">25k+</span>
              <span className="text-sm text-ink-muted font-mono uppercase tracking-wider">Package Downloads</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-3xl md:text-4xl text-ink">3</span>
              <span className="text-sm text-ink-muted font-mono uppercase tracking-wider">IEEE Publications</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-3xl md:text-4xl text-ink">9.2</span>
              <span className="text-sm text-ink-muted font-mono uppercase tracking-wider">CGPA / 10.0</span>
            </div>
          </motion.div>
        </div>

        {/* Right visual - Code window / 3D element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="hidden lg:block relative w-full max-w-xl"
        >
          <div className="glass-card relative overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs font-mono text-ink-muted">portfolio.tsx</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-ink-soft overflow-x-auto" style={{ fontFamily: "var(--font-mono)" }}>
              <pre className="whitespace-pre-wrap"><code>{`import { Intelligence } from "adarsh.dev"

const portfolio = new Intelligence({
  core: [
    "Machine Learning",
    "Distributed Systems",
    "Human-Centered Design"
  ],
  stack: {
    frontend: ["Next.js 14", "React 18", "Motion", "Tailwind v4"],
    backend: ["FastAPI", "Node.js", "PostgreSQL", "Redis"],
    ml: ["PyTorch", "TensorFlow", "scikit-learn", "ONNX"],
    infra: ["Docker", "Kubernetes", "AWS", "Vercel"]
  },
  philosophy: "Build systems that learn\nfrom every interaction.",
  status: "ACTIVE",
  currently: "Pursuing AI & Data Science\nat JNN Institute of Engineering"
})

portfolio.deploy()
  .then(() => console.log("🚀 Live at adarshvasu.dev"))
  .catch((err) => console.error("Debug:", err))`}</code></pre>
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
                <p className="text-xs text-ink-muted">25k+ npm downloads</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted"
      >
        <p className="text-xs font-mono uppercase tracking-widest">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-6 border border-border-bright rounded-full flex justify-center pt-1"
        >
          <div className="w-0.5 h-0.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </header>
  )
}