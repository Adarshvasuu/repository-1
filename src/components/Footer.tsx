"use client"

import { cn, createAnchorHref } from "@/lib/utils"
import { GithubLogo, LinkedinLogo, Envelope, Copyright, Heart } from "@phosphor-icons/react"
import { socialLinks } from "@/lib/data"

const iconMap = {
  GithubLogo,
  LinkedinLogo,
  Envelope,
} as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-bg-elevated/50 backdrop-blur-sm" role="contentinfo">
      {/* Subtle glow */}
      <div className="orb-glow orb-glow-primary" style={{ width: "300px", height: "300px", bottom: "0", right: "0", transform: "translate(50%, 50%)" }} aria-hidden="true" />

      <div className="container py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left - Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center">
                <Copyright weight="bold" size={24} color="var(--color-ink)" aria-hidden="true" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Adarsh Vasu</span>
            </div>
            <p className="text-ink-muted text-sm max-w-xs">
              Building intelligent systems at the intersection of ML,
              distributed systems, and human-centered design.
            </p>
          </div>

          {/* Middle - Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6" aria-label="Footer navigation">
            <a href={createAnchorHref("experience")} className="text-sm text-ink-muted hover:text-ink transition-colors duration-200">Experience</a>
            <a href={createAnchorHref("projects")} className="text-sm text-ink-muted hover:text-ink transition-colors duration-200">Projects</a>
            <a href={createAnchorHref("skills")} className="text-sm text-ink-muted hover:text-ink transition-colors duration-200">Skills</a>
            <a href={createAnchorHref("contact")} className="text-sm text-ink-muted hover:text-ink transition-colors duration-200">Contact</a>
          </nav>

          {/* Right - Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-bg-elevated border border-border flex items-center justify-center text-ink-muted hover:text-ink hover:border-accent/50 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon weight="bold" size={18} aria-hidden="true" style={{ color: social.color }} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                )
              })}
            </div>
            <p className="text-xs text-ink-muted font-mono">
              <span className="flex items-center gap-1.5 justify-center md:justify-end">
                <Copyright weight="bold" size={12} aria-hidden="true" />
                {currentYear} Adarsh Vasu. Built with
                <Heart weight="fill" size={12} color="var(--color-accent)" aria-hidden="true" className="animate-pulse" />
                and Next.js + Motion
              </span>
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center md:justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-ink-muted font-mono">
            Designed & Developed with intention. No templates, no shortcuts.
          </p>
          <div className="flex gap-6 text-xs text-ink-muted font-mono">
            <a href="#" className="hover:text-accent-glow transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-accent-glow transition-colors duration-200">Terms</a>
            <a href="/sitemap.xml" className="hover:text-accent-glow transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}