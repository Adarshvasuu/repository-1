"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { Envelope, LinkedinLogo, GithubLogo, PaperPlane, MapPin, Clock, Check, Warning } from "@phosphor-icons/react"
import { socialLinks } from "@/lib/data"
import { createAnchorHref } from "@/lib/utils"

const iconMap = {
  GithubLogo,
  LinkedinLogo,
  Envelope,
} as const

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, replace with actual form submission
    // const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })
    // if (response.ok) setStatus("success") else setStatus("error")

    setStatus("success")
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <section id="contact" className="section relative" aria-labelledby="contact-title">
      {/* Background glow */}
      <div className="orb-glow orb-glow-secondary" style={{ width: "500px", height: "500px", top: "-100px", left: "-150px" }} aria-hidden="true" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Info */}
          <RevealOnScroll delay={0}>
            <div className="pr-8 lg:pr-16">
              <p className="eyebrow mb-3">Get In Touch</p>
              <h2 id="contact-title" className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Let's Build<br />
                <span className="gradient-text">Something Great</span>
              </h2>
              <p className="text-ink-soft text-lg leading-relaxed mb-10 max-w-xl">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something meaningful. Whether it's a
                full-time role, freelance project, or just a coffee chat —
                don't hesitate to reach out.
              </p>

              {/* Contact methods */}
              <div className="space-y-5 mb-10">
                <a
                  href="mailto:adarsh.vasu@email.com"
                  className="flex items-center gap-4 group glass-card p-4 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Envelope weight="bold" size={22} color="var(--color-ink)" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">Email</p>
                    <p className="font-medium text-ink group-hover:text-accent-glow transition-colors duration-200">adarsh.vasu@email.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/adarsh-vasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group glass-card p-4 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <LinkedinLogo weight="bold" size={22} color="var(--color-ink)" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">LinkedIn</p>
                    <p className="font-medium text-ink group-hover:text-accent-glow transition-colors duration-200">linkedin.com/in/adarsh-s-060961392</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 glass-card p-4">
                  <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <MapPin weight="bold" size={22} color="var(--color-ink)" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">Location</p>
                    <p className="font-medium text-ink">Chennai, India (Open to Relocation)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 glass-card p-4">
                  <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <Clock weight="bold" size={22} color="var(--color-ink)" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">Availability</p>
                    <p className="font-medium text-ink">Full-time / Freelance / Contract</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap]
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-magnetic btn-ghost gap-2 group"
                      style={{ borderColor: `${social.color}40` }}
                    >
                      <Icon weight="bold" size={18} aria-hidden="true" style={{ color: social.color }} />
                      <span className="text-sm font-medium group-hover:text-ink transition-colors duration-200">{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right side - Form */}
          <RevealOnScroll delay={200}>
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold tracking-tight mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink-soft mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-[10px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                      placeholder="Your name"
                      disabled={status === "submitting"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-soft mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-[10px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                      placeholder="your@email.com"
                      disabled={status === "submitting"}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink-soft mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-[10px] text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200 appearance-none bg-no-repeat bg-right pr-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238a8299' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundPosition: "right 1rem center",
                    }}
                    disabled={status === "submitting"}
                  >
                    <option value="">Select a topic</option>
                    <option value="full-time">Full-time Opportunity</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="contract">Contract Work</option>
                    <option value="collaboration">Open Source Collaboration</option>
                    <option value="mentoring">Mentoring / Speaking</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-soft mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-elevated border border-border rounded-[10px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, team, or just say hi..."
                    disabled={status === "submitting"}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-magnetic btn-primary w-full sm:w-auto group justify-center"
                  disabled={status === "submitting" || status === "success"}
                >
                  {status === "submitting" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-ink/30 border-t-ink rounded-full animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <PaperPlane weight="bold" size={18} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                  <span className="btn-icon group-hover:translate-x-1 transition-transform duration-200">
                    <PaperPlane size={16} weight="bold" aria-hidden="true" />
                  </span>
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-400 flex items-center gap-2">
                    <Warning weight="bold" size={16} aria-hidden="true" />
                    Failed to send. Please try again or email directly.
                  </p>
                )}

                <p className="text-xs text-ink-muted text-center">
                  By submitting, you agree to my <a href="#" className="underline hover:text-accent-glow">Privacy Policy</a>.
                  No spam, ever.
                </p>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}