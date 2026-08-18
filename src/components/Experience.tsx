"use client"

import { cn } from "@/lib/utils"
import { RevealOnScroll, StaggerReveal } from "@/components/RevealOnScroll"
import { experience } from "@/lib/data"
import { Briefcase, GraduationCap, Folder, Code, Brain, RocketLaunch } from "@phosphor-icons/react"

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
              From research labs to production systems — every role shaped how I
              think about building intelligent, scalable products.
            </p>
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-[140px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 via-accent/10 to-transparent" aria-hidden="true" />

          <StaggerReveal stagger={120} className="space-y-10">
            {experience.map((exp, index) => {
              const Icon = getTypeIcon(exp.type)
              return (
                <RevealOnScroll key={exp.id} delay={index * 120}>
                  <article className="relative flex gap-6 md:gap-8">
                    {/* Timeline marker */}
                    <div className="relative flex-shrink-0 w-8 md:w-[140px]">
                      <div className="absolute left-4 md:left-[calc(50%-4px)] top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />
                      <div
                        className="relative z-10 w-8 h-8 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center shadow-[0_0_20px_-5px_rgb(168_85_247_/_0.6)] border-3 border-bg"
                      >
                        <Icon weight="bold" size={16} color="var(--color-ink)" aria-hidden="true" />
                      </div>
                      <div className="md:absolute md:right-0 md:top-0 md:w-[120px] md:text-right md:pr-4 hidden">
                        <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">{exp.period}</p>
                        <p className="text-sm font-medium text-ink">{typeLabels[exp.type]}</p>
                      </div>
                    </div>

                  {/* Card content */}
                  <div className="flex-1 min-w-0">
                    <div className="glass-card p-6 md:p-8 relative overflow-hidden group">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">{exp.title}</h3>
                          <p className="text-accent-glow font-medium mt-1">{exp.company}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                          {exp.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                          {exp.tags.length > 4 && (
                            <span className="tag" style={{ background: "var(--color-bg-elevated)", borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}>
                              +{exp.tags.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-ink-soft leading-relaxed mb-6">{exp.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-3" role="list">
                        {exp.highlights.map((highlight, hi) => (
                          <li key={hi} className="flex gap-3 group">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10">
                              <Code weight="bold" size={12} color="var(--color-accent)" aria-hidden="true" />
                            </div>
                            <p className="text-ink-soft leading-relaxed pt-0.5">{highlight}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mobile period label */}
                  <div className="md:hidden absolute left-14 top-0 w-[calc(100%-48px)]">
                    <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">{exp.period}</p>
                    <p className="text-sm font-medium text-ink">{typeLabels[exp.type]}</p>
                  </div>
                </article>
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