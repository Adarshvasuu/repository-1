import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBasePath(): string {
  if (typeof window === "undefined") return ""
  // Check if we're on GitHub Pages (username.github.io/repo-name)
  const path = window.location.pathname
  const parts = path.split("/").filter(Boolean)
  if (parts.length >= 1 && parts[0] === "repository-1") {
    return "/repository-1"
  }
  return ""
}

export function createAnchorHref(section: string): string {
  const base = getBasePath()
  return `${base}#${section}`
}

export function createPageHref(page: string): string {
  const base = getBasePath()
  return `${base}${page.startsWith("/") ? page : `/${page}`}`
}