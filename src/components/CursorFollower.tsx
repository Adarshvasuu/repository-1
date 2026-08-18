"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

export function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverText, setHoverText] = useState("")

  useEffect(() => {
    const follower = followerRef.current
    const dot = dotRef.current
    if (!follower || !dot) return

    let animationFrame: number

    const animate = () => {
      if (follower) {
        follower.style.transform = `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`
      }
      if (dot) {
        dot.style.transform = `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`
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
      const interactiveElement =
        target.matches("a, button, [role='button'], input, textarea, select, .btn-magnetic, .glass-card, .tag, .reveal") ||
        target.closest("a, button, [role='button'], input, textarea, select, .btn-magnetic, .glass-card, .tag, .reveal")

      if (interactiveElement) {
        setIsHovering(true)
        // Get hover text from data attribute or element
        const element = interactiveElement as HTMLElement
        const text = element.getAttribute("data-cursor-text") ||
          (element.tagName === "A" ? "Open link" :
            element.tagName === "BUTTON" ? "Click" : "Interact")
        setHoverText(text)
      } else {
        setIsHovering(false)
        setHoverText("")
      }
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

  // Don't show on touch devices
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
  if (isTouchDevice) return null

  return (
    <>
      {/* Main cursor follower */}
      <motion.div
        ref={followerRef}
        className={`
          fixed pointer-events-none z-[9999] transition-colors duration-300
          ${isVisible ? "opacity-100" : "opacity-0"}
          ${isHovering ? "scale-150 border-accent/50 bg-accent/10" : "scale-100 border-ink/20 bg-transparent"}
        `}
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid",
          backdropFilter: "blur(4px)",
          mixBlendMode: "difference",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isHovering && hoverText && (
          <span
            className="text-xs font-mono text-accent whitespace-nowrap opacity-0 group-hover:opacity-100"
            style={{ transform: "translateY(2px)" }}
          >
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Center dot */}
      <motion.div
        ref={dotRef}
        className={`
          fixed pointer-events-none z-[9998] transition-all duration-200
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          ${isHovering ? "bg-accent scale-200" : "bg-ink/40"}
        `}
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
        animate={{ scale: isHovering ? 2.5 : 1 }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
      />
    </>
  )
}