"use client"

import React, { useEffect, useRef, useState } from "react"

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay, threshold, rootMargin, once])

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "in-view" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
  threshold?: number
  rootMargin?: string
}

export function StaggerReveal({
  children,
  className = "",
  delay = 0,
  stagger = 80,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay, threshold, rootMargin])

  const childrenArray = React.Children.toArray(children)

  return (
    <div
      ref={ref}
      className={`stagger-children ${isVisible ? "in-view" : ""} ${className}`}
    >
      {childrenArray.map((child, index) => {
        if (!React.isValidElement(child)) return child
        const childProps = child.props as React.HTMLAttributes<HTMLElement>
        return React.cloneElement(child as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
          style: {
            ...(childProps.style || {}),
            transitionDelay: `${delay + index * stagger}ms`,
          },
        })
      })}
    </div>
  )
}