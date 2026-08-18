"use client"

import { useState, useEffect } from "react"
import { cn, createAnchorHref } from "@/lib/utils"
import { CubeFocus } from "@phosphor-icons/react"
import { Moon, Sun, Menu, X } from "lucide-react"

const navItems = [
  { section: "experience", label: "Experience" },
  { section: "projects", label: "Projects" },
  { section: "skills", label: "Skills" },
  { section: "contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.toggle("light", initialTheme === "light")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("light", newTheme === "light")
  }

  const scrollTo = (section: string) => {
    const href = createAnchorHref(section)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border px-4"
          : "bg-transparent px-4"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href={createAnchorHref("top")} className="flex items-center gap-2" aria-label="Home">
          <CubeFocus
            weight="bold"
            size={28}
            color="var(--color-accent)"
            aria-hidden="true"
          />
          <span className="font-display font-bold text-xl tracking-tight">Adarsh</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.section}
              href={createAnchorHref(item.section)}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(item.section)
              }}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="btn-magnetic btn-ghost p-2"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="btn-icon">
              {theme === "dark" ? (
                <Sun size={18} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Moon size={18} strokeWidth={2} aria-hidden="true" />
              )}
            </span>
          </button>

          <button
            className="md:hidden btn-magnetic btn-ghost p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={22} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-border bg-bg-elevated/95 backdrop-blur-md animate-fade-in-up">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.section}
                href={createAnchorHref(item.section)}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(item.section)
                }}
                className="text-lg font-medium text-ink-soft hover:text-ink transition-colors duration-200 px-2 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}