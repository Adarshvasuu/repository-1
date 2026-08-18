"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { RevealOnScroll, StaggerReveal } from "@/components/RevealOnScroll"
import { skills } from "@/lib/data"
import { Code, Database, Wrench, Brain, Users, Lightning } from "@phosphor-icons/react"

function MotionBar({ level, color }: { level: number; color: string }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 200)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div
      className="h-full rounded-full transition-all duration-1000 ease-out"
      style={{
        width: `${width}%`,
        background: `linear-gradient(90deg, ${color} 0%, ${color}80 50%, ${color} 100%)`,
        boxShadow: `0 0 10px -2px ${color}`,
      }}
      aria-hidden="true"
    />
  )
}

const categories = [
  { key: "frontend", label: "Frontend", icon: Code },
  { key: "backend", label: "Backend", icon: Lightning },
  { key: "data", label: "Data & ML", icon: Brain },
  { key: "tools", label: "Tools & Infra", icon: Wrench },
  { key: "soft", label: "Leadership", icon: Users },
] as const

const categoryColors: Record<string, string> = {
  frontend: "var(--color-accent)",
  backend: "var(--color-emerald-500, #10b981)",
  data: "var(--color-cyan-400, #22d3ee)",
  tools: "var(--color-amber-400, #fbbf24)",
  soft: "var(--color-pink-400, #f472b6)",
}

export function Skills() {
  return (
    <section id="skills" className="section relative" aria-labelledby="skills-title">
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

        {/* Category grid */}
        <StaggerReveal stagger={150} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === category.key)
            if (categorySkills.length === 0) return null

            return (
              <RevealOnScroll key={category.key} delay={catIndex * 150}>
                <div className="glass-card p-6 h-full relative overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                    <div
                      className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                      style={{ background: `rgb(${category.key === "frontend" ? "168 85 247" : category.key === "backend" ? "16 185 129" : category.key === "data" ? "34 211 238" : category.key === "tools" ? "251 191 36" : "244 114 182"} / 0.15)` }}
                    >
                      <category.icon weight="bold" size={20} color={categoryColors[category.key]} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-bold tracking-tight">{category.label}</h3>
                    <span className="ml-auto text-xs font-mono text-ink-muted">{categorySkills.length} skills</span>
                  </div>

                  {/* Skills bars */}
                  <div className="space-y-5">
                    {categorySkills.map((skill, skillIndex) => (
                      <RevealOnScroll key={skill.name} delay={skillIndex * 60} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-ink-soft group-hover:text-ink transition-colors duration-200">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-ink-muted tabular-nums">{skill.level}%</span>
                        </div>
                        <div
                          className="h-1.5 rounded-full bg-bg-elevated overflow-hidden"
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          <MotionBar level={skill.level} color={categoryColors[category.key]} />
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </StaggerReveal>

        {/* CTA */}
        <RevealOnScroll delay={200} className="mt-16 text-center">
          <p className="text-ink-soft mb-6">Want to see these skills in action?</p>
          <a
            href="#contact"
            className="btn-magnetic btn-primary inline-flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
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

function motionBar({ level, color }: { level: number; color: string }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 200)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div
      className="h-full rounded-full transition-all duration-1000 ease-out"
      style={{
        width: `${width}%`,
        background: `linear-gradient(90deg, ${color} 0%, ${color}80 50%, ${color} 100%)`,
        boxShadow: `0 0 10px -2px ${color}`,
      }}
      aria-hidden="true"
    />
  )
}

