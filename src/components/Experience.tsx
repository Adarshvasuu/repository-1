"use client"

import { cn } from "@/lib/utils"
import { RevealOnScroll, StaggerReveal } from "@/components/RevealOnScroll"
import { experience } from "@/lib/data"
import { Briefcase, GraduationCap, Folder, Code, Brain, RocketLaunch } from "@phosphor-icons/react"
import { useRef, useEffect, useState } from "react"
import { motion } from "motion/react"

const typeLabels = {
  work: "Experience",
  education: "Education",
  project: "Projects",
}

function getTypeIcon(type: "work" | "education" | "project") {
  switch (type) {
    case "work":
      return Briefcase
    case "education":
      return GraduationCap
    case "project":
      return Folder
  }
}

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track scroll progress through timeline
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const rect = timelineRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate progress (0 to 1) based on how much of timeline is visible
      const timelineHeight = rect.height
      const visibleTop = Math.max(0, -rect.top)
      const visibleBottom = Math.min(timelineHeight, windowHeight - rect.top)
      const visibleHeight = Math.max(0, visibleBottom - visibleTop)

      const progress = visibleHeight / Math.min(timelineHeight, windowHeight)
      setScrollProgress(progress)

      // Find active card based on scroll position
      const cards = timelineRef.current.querySelectorAll("[data-exp-card]")
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.top + cardRect.height / 2
        const viewportCenter = windowHeight / 2

        if (Math.abs(cardCenter - viewportCenter) < windowHeight / 3) {
          setActiveIndex(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="experience" className="section relative" aria-labelledby="experience-title">
      {/* Background glow */}
      <div className="orb-glow orb-glow-primary" style={{ width: "500px", height: "500px", top: "0", right: "-100px" }} aria-hidden="true" />

      <div className="container relative z-10">
        {/* Section header */}
        <RevealOnScroll delay={0}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <p className="eyebrow mb-3">Where I've Been</p>
              <h2 id="experience-title" className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Experience &<br />
                <span className="gradient-text">Journey</span>
              </h2>
            </div>
            <p className="text-ink-soft max-w-md text-base md:text-lg leading-relaxed">
              From academic projects to real-world applications — every step shaped how I
              think about building intelligent, scalable products.
            </p>
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical line with progress indicator */}
          <div className="absolute left-4 md:left-[140px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 via-accent/10 to-transparent" aria-hidden="true">
            {/* Progress fill */}
            <motion.div
              className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-accent to-accent-dim"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: scrollProgress }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
              aria-hidden="true"
            />
          </div>

          <StaggerReveal stagger={120} className="space-y-10">
            {experience.map((exp, index) => {
              const Icon = getTypeIcon(exp.type)
              return (
                <RevealOnScroll key={exp.id} delay={index * 120}>
                  <motion.article
                    data-exp-card
                    className="relative flex gap-6 md:gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileInView={{ scale: activeIndex === index ? 1.01 : 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                  >
                    {/* Timeline marker */}
                    <div className="relative flex-shrink-0 w-8 md:w-[140px]">
                      <div className="absolute left-4 md:left-[calc(50%-4px)] top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />
                      <motion.div
                        className="relative z-10 w-8 h-8 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center shadow-[0_0_20px_-5px_rgb(168_85_247_/_0.6)] border-3 border-bg"
                        whileHover={{ scale: 1.15, rotate: 180 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Icon weight="bold" size={16} color="var(--color-ink)" aria-hidden="true" />
                      </motion.div>
                      <div className="md:absolute md:right-0 md:top-0 md:w-[120px] md:text-right md:pr-4 hidden">
                        <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">{exp.period}</p>
                        <p className="text-sm font-medium text-ink">{typeLabels[exp.type]}</p>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="flex-1 min-w-0">
                      <motion.div
                        className="glass-card p-6 md:p-8 relative overflow-hidden group"
                        whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgb(168 85 247 / 0.25)" }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {/* Glow accent line */}
                        <motion.div
                          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-dim opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                          aria-hidden="true"
                        />

                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight group-hover:text-accent-glow transition-colors duration-300">{exp.title}</h3>
                            <p className="text-accent-glow font-medium mt-1">{exp.company}</p>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                            {exp.tags.slice(0, 4).map((tag) => (
                              <span key={tag} className="tag text-xs px-3 py-1">{tag}</span>
                            ))}
                            {exp.tags.length > 4 && (
                              <span className="tag text-xs px-3 py-1" style={{ background: "var(--color-bg-elevated)", borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}>
                                +{exp.tags.length - 4}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Period badge for mobile */}
                        <div className="md:hidden mb-4 flex items-center gap-2 text-xs font-mono text-ink-muted">
                          <span className="uppercase tracking-wider">{exp.period}</span>
                          <span className="text-accent-glow">{typeLabels[exp.type]}</span>
                        </div>

                        {/* Description */}
                        <p className="text-ink-soft leading-relaxed mb-6">{exp.description}</p>

                        {/* Highlights */}
                        <ul className="space-y-3" role="list">
                          {exp.highlights.map((highlight, hi) => (
                            <motion.li
                              key={hi}
                              className="flex gap-3 group"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: hi * 0.08 }}
                            >
                              <div className="flex-shrink-0 w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10 group-hover:scale-110">
                                <Code weight="bold" size={12} color="var(--color-accent)" aria-hidden="true" />
                              </div>
                              <p className="text-ink-soft leading-relaxed pt-0.5">{highlight}</p>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Mobile period label */}
                    <div className="md:hidden absolute left-14 top-0 w-[calc(100%-48px)]">
                      <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">{exp.period}</p>
                      <p className="text-sm font-medium text-ink">{typeLabels[exp.type]}</p>
                    </div>
                  </motion.article>
                </RevealOnScroll>
              )
            })}
          </StaggerReveal>

          {/* End marker */}
          <div className="absolute left-4 md:left-[140px] bottom-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-border bg-bg" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}