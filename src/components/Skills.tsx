"use client"

import { useEffect, useState, useRef } from "react"
import { cn, createAnchorHref } from "@/lib/utils"
import { RevealOnScroll, StaggerReveal } from "@/components/RevealOnScroll"
import { skills } from "@/lib/data"
import { Code, Database, Wrench, Brain, Users, Lightning } from "@phosphor-icons/react"
import { motion, useScroll, useTransform } from "motion/react"

function MotionBar({ level, color }: { level: number; color: string }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setWidth(level), 200)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref} className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: "0%" }} aria-hidden="true">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, ${color} 0%, ${color}80 50%, ${color} 100%)`,
          boxShadow: `0 0 10px -2px ${color}`,
        }}
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}

const categories = [
  { key: "frontend", label: "Frontend", icon: Code, color: "var(--color-accent)" },
  { key: "backend", label: "Backend", icon: Lightning, color: "var(--color-emerald-500, #10b981)" },
  { key: "data", label: "Data & ML", icon: Brain, color: "var(--color-cyan-400, #22d3ee)" },
  { key: "tools", label: "Tools & Infra", icon: Wrench, color: "var(--color-amber-400, #fbbf24)" },
  { key: "soft", label: "Leadership", icon: Users, color: "var(--color-pink-400, #f472b6)" },
] as const

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ container: containerRef })
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="section relative" aria-labelledby="skills-title" ref={containerRef}>
      {/* Background glow */}
      <div className="orb-glow orb-glow-primary" style={{ width: "400px", height: "400px", top: "50%", right: "50%", transform: "translate(50%, -50%)" }} aria-hidden="true" />

      <div className="container relative z-10">
        {/* Section header */}
        <RevealOnScroll delay={0}>
          <div className="text-center mx-auto max-w-3xl mb-16">
            <p className="eyebrow mb-3">What I Work With</p>
            <h2 id="skills-title" className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Skills &<br />
              <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="mt-4 text-ink-soft text-base md:text-lg leading-relaxed">
              A full-stack toolkit honed over years of building production
              systems, from neural networks to pixel-perfect interfaces.
            </p>
          </div>
        </RevealOnScroll>

        {/* Category cards */}
        <StaggerReveal stagger={100} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, catIndex) => (
            <RevealOnScroll key={category.key} delay={catIndex * 100}>
              <motion.div
                className="glass-card p-6 h-full relative overflow-hidden group"
                onMouseEnter={() => setHoveredCategory(category.key)}
                onMouseLeave={() => setHoveredCategory(null)}
                whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgb(168 85 247 / 0.2)" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <motion.div
                    className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                    style={{ background: `rgb(${category.key === "frontend" ? "168 85 247" : category.key === "backend" ? "16 185 129" : category.key === "data" ? "34 211 238" : category.key === "tools" ? "251 191 36" : "244 114 182"} / 0.15)` }}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <category.icon weight="bold" size={20} color={category.color} aria-hidden="true" />
                  </motion.div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{category.label}</h3>
                  <span className="ml-auto text-xs font-mono text-ink-muted">
                    {skills.filter((s) => s.category === category.key).length} skills
                  </span>
                </div>

                {/* Skills bars */}
                <div className="space-y-5">
                  {skills
                    .filter((skill) => skill.category === category.key)
                    .map((skill, skillIndex) => (
                      <RevealOnScroll key={skill.name} delay={skillIndex * 60} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-ink-soft group-hover:text-ink transition-colors duration-200">
                            {skill.name}
                          </span>
                          <motion.span
                            className="text-xs font-mono text-ink-muted tabular-nums"
                            animate={{ opacity: [0, 1] }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div
                          className="h-1.5 rounded-full bg-bg-elevated overflow-hidden"
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          <MotionBar level={skill.level} color={category.color} />
                        </div>
                      </RevealOnScroll>
                    ))}
                </div>

                {/* Category glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ borderRadius: "inherit" }}
                  animate={{ opacity: hoveredCategory === category.key ? 0.15 : 0 }}
                  aria-hidden="true"
                />
              </motion.div>
            </RevealOnScroll>
          ))}
        </StaggerReveal>

        {/* CTA */}
        <RevealOnScroll delay={200} className="mt-16 text-center">
          <p className="text-ink-soft mb-6">Want to see these skills in action?</p>
          <a
            href={createAnchorHref("contact")}
            className="btn-magnetic btn-primary inline-flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector(createAnchorHref("contact"))?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Database weight="bold" size={18} aria-hidden="true" />
            Let's Build Together
          </a>
        </RevealOnScroll>
      </div>
    </section>
  )
}