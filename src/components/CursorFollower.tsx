"use client"

import { useEffect, useRef, useState } from "react"

export function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const follower = followerRef.current
    if (!follower) return

    let animationFrame: number

    const animate = () => {
      if (follower) {
        follower.style.transform = `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`
      }
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrame)
  }, [mousePosition])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.matches("a, button, [role='button'], input, textarea, select, .btn-magnetic, .glass-card, .tag") ||
        target.closest("a, button, [role='button'], input, textarea, select, .btn-magnetic, .glass-card, .tag")

      setIsHovering(!!isInteractive)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <div
      ref={followerRef}
      className={`cursor-follower ${isHovering ? "hover" : ""} ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        transition: "transform 0.08s ease-out, width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease",
      }}
      aria-hidden="true"
    />
  )
}