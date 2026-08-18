"use client"

import { cn } from "@/lib/utils"
import { RevealOnScroll, StaggerReveal } from "@/components/RevealOnScroll"
import { projects } from "@/lib/data"
import { GithubLogo, ArrowSquareOut, Star, Tag, Calendar, Clock, Link } from "@phosphor-icons/react"

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section relative" aria-labelledby="projects-title">
      {/* Background glow */}
      <div className="orb-glow orb-glow-secondary" style={{ width: "500px", height: "500px", bottom: "0", left: "-100px" }} aria-hidden="true" />

      <div className="container relative z-10">
        {/* Section header */}
        <RevealOnScroll delay={0}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <p className="eyebrow mb-3">Selected Work</p>
              <h2 id="projects-title" className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Projects &<br />
                <span className="gradient-text">Experiments</span>
              </h2>
            </div>
            <p className="text-ink-soft max-w-md text-base md:text-lg leading-relaxed">
              A curated collection of production systems, open-source tools,
              and research prototypes. Each solves a real problem.
            </p>
          </div>
        </RevealOnScroll>

        {/* Featured Projects - Large cards */}
        {featuredProjects.length > 0 && (
          <>
            <RevealOnScroll delay={100}>
              <h3 className="text-sm font-mono text-ink-muted uppercase tracking-wider mb-8">Featured</h3>
            </RevealOnScroll>
            <StaggerReveal stagger={150} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 150}>
                  <FeaturedProjectCard project={project} />
                </RevealOnScroll>
              ))}
            </StaggerReveal>
          </>
        )}

        {/* Other Projects - Compact cards */}
        {otherProjects.length > 0 && (
          <>
            <RevealOnScroll delay={100} className="mt-20">
              <h3 className="text-sm font-mono text-ink-muted uppercase tracking-wider mb-8">More Work</h3>
            </RevealOnScroll>
            <StaggerReveal stagger={100} className="grid gap-4 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 100}>
                  <CompactProjectCard project={project} />
                </RevealOnScroll>
              ))}
            </StaggerReveal>
          </>
        )}

        {/* View all link */}
        <RevealOnScroll delay={200} className="mt-16 text-center">
          <a
            href="https://github.com/Adarshvasuu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic btn-ghost inline-flex items-center gap-2"
          >
            <GithubLogo weight="bold" size={18} aria-hidden="true" />
            View All on GitHub
            <ArrowSquareOut weight="bold" size={16} aria-hidden="true" />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  )
}

interface FeaturedProjectCardProps {
  project: typeof projects[0]
}

function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="glass-card relative overflow-hidden group h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent z-10" aria-hidden="true" />
        {/* Featured badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="tag" style={{ background: "rgb(168 85 247 / 0.2)", borderColor: "rgb(168 85 247 / 0.4)" }}>
            <Star weight="bold" size={10} aria-hidden="true" className="inline-block mr-1" />
            Featured
          </span>
        </div>
        {/* Links overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic btn-primary text-sm px-4 py-2 flex-1 justify-center"
            >
              <ArrowSquareOut weight="bold" size={14} aria-hidden="true" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic btn-ghost text-sm px-4 py-2 flex-1 justify-center"
            >
              <GithubLogo weight="bold" size={16} aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
          {project.tags.length > 3 && (
            <span className="tag" style={{ background: "var(--color-bg-elevated)", borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}>
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-bold tracking-tight mb-2 group-hover:text-accent-glow transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-ink-soft text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6" role="list">
          {project.highlights.slice(0, 3).map((highlight, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-soft">
              <Tag weight="bold" size={14} color="var(--color-accent)" aria-hidden="true" className="flex-shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-ink-muted font-mono border-t border-border pt-4">
          <span className="flex items-center gap-1">
            <Calendar weight="bold" size={12} aria-hidden="true" />
            {project.duration}
          </span>
          <span className="flex items-center gap-1">
            <Clock weight="bold" size={12} aria-hidden="true" />
            {project.role}
          </span>
        </div>
      </div>
    </article>
  )
}

interface CompactProjectCardProps {
  project: typeof projects[0]
}

function CompactProjectCard({ project }: CompactProjectCardProps) {
  return (
    <article className="glass-card p-5 relative overflow-hidden group flex flex-col" style={{ minHeight: "280px" }}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag text-[0.55rem] px-2 py-1">{tag}</span>
            ))}
          </div>
          <h3 className="font-display text-lg font-bold tracking-tight group-hover:text-accent-glow transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic btn-ghost p-2"
              aria-label="Live demo"
            >
              <ArrowSquareOut weight="bold" size={16} aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic btn-ghost p-2"
              aria-label="Source code"
            >
              <GithubLogo weight="bold" size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <p className="text-ink-soft text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.highlights.slice(0, 2).map((highlight, i) => (
          <span key={i} className="text-xs text-ink-muted font-mono flex items-center gap-1">
            <Tag weight="bold" size={10} color="var(--color-accent)" aria-hidden="true" />
            {highlight.length > 45 ? highlight.slice(0, 45) + "..." : highlight}
          </span>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-ink-muted font-mono">
        <span>{project.duration}</span>
        <span>{project.role}</span>
      </div>
    </article>
  )
}