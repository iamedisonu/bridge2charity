"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

// ── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, triggered = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!triggered) return
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [target, duration, triggered])
  return count
}

// ── Data ─────────────────────────────────────────────────────────────────────
const impactStats = [
  { value: 15, label: "Hens distributed to families", suffix: "+" },
  { value: 90, label: "Mushroom seedlings planted", suffix: "+" },
  { value: 15, label: "Parents trained in nutrition", suffix: "+" },
  { value: 2,  label: "Early Childhood Dev. Centers supported", suffix: "+" },
]

const steps = [
  {
    number: 1,
    title: "Nutrition Training for Parents",
    description:
      "We train parents at Early Childhood Development Centers on balanced diet preparation and sustainable nutrition practices, building knowledge that outlasts our visits.",
  },
  {
    number: 2,
    title: "Distributing Hens & Mushroom Seedlings",
    description:
      "Each family receives a hen as a sustainable source of protein. For children with allergies, mushroom seedlings serve as an alternative, ensuring no child is left out due to dietary needs.",
  },
  {
    number: 3,
    title: "Ongoing Follow-Up",
    description:
      "B2C returns to check on families and monitor children's progress, making sure what we started is working, and families feel supported, not forgotten.",
  },
]

const galleryPlaceholders = [
  "Training session",
  "Hens being distributed",
  "Parent with child",
  "Mushroom seedlings",
  "ECD Center exterior",
  "Field visit / follow-up",
]

// ── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ value, label, suffix, triggered }: {
  value: number; label: string; suffix: string; triggered: boolean
}) {
  const count = useCountUp(value, 2000, triggered)
  return (
    <div
      className="flex flex-col items-center justify-center text-center rounded-2xl py-8 px-6"
      style={{ backgroundColor: "#FBF6F0" }}
    >
      <p
        className="text-5xl font-bold leading-none mb-2"
        style={{ color: "#F16927", fontFamily: "var(--font-montserrat)" }}
      >
        {count}{suffix}
      </p>
      <p
        className="text-navy/60 text-sm leading-snug"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        {label}
      </p>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function OneHenPerChildPage() {
  const [triggered, setTriggered] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-navy overflow-hidden">
        <Image
          src="/images/programs/ohpc-hero.jpg"
          alt="One Hen Per Child Program"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-28 max-w-3xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            A well-fed child is a child{" "}
            <span className="text-orange">ready to learn.</span>
          </h1>
        </div>
      </section>

      {/* ── Why This Matters ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-orange" />
              <span
                className="text-orange text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Why This Matters
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Child malnutrition remains one of the biggest barriers to healthy development in Rwanda.
            </h2>
            <div className="border-l-4 border-orange pl-6 py-1">
              <p
                className="text-navy/70 text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                The National Institute of Statistics of Rwanda indicates that{" "}
                <strong className="text-navy">33% of children under five are stunted</strong>,
                while only{" "}
                <strong className="text-navy">22% receive a minimum acceptable diet</strong>.
                This limits their ability to grow, learn, and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Numbers ───────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-orange" />
              <span
                className="text-orange text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Program Impact
              </span>
              <div className="h-px w-8 bg-orange" />
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              What We&apos;ve Done So Far
            </h2>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {impactStats.slice(0, 3).map((stat) => (
              <StatCard key={stat.label} {...stat} triggered={triggered} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
            <StatCard {...impactStats[3]} triggered={triggered} />
            {/* Location card */}
            <div
              className="flex flex-col items-center justify-center text-center rounded-2xl py-8 px-6"
              style={{ backgroundColor: "#FBF6F0" }}
            >
              <p
                className="text-4xl font-bold leading-none mb-2"
                style={{ color: "#F16927", fontFamily: "var(--font-montserrat)" }}
              >
                Juru
              </p>
              <p
                className="text-navy/60 text-sm leading-snug"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Sector, Bugesera District
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach (3 Steps) ───────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-orange" />
              <span
                className="text-orange text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Our Approach to Lasting Change
              </span>
              <div className="h-px w-8 bg-orange" />
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Each step builds on the last, so families can sustain what we start together.
            </h2>
          </div>

          {/* Steps */}
          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-6 items-start">
                {/* Number + connector line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                    style={{ backgroundColor: "#050a30" }}
                  >
                    <span
                      className="text-white text-lg font-bold"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-0.5 flex-1 mt-2 mb-0"
                      style={{ backgroundColor: "#f16927", minHeight: "48px" }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 bg-gray-50 rounded-2xl px-7 py-6 ${i < steps.length - 1 ? "mb-4" : ""}`}
                >
                  <h3
                    className="text-navy font-bold text-base mb-2"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-navy/65 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-orange" />
              <span
                className="text-orange text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Gallery
              </span>
              <div className="h-px w-8 bg-orange" />
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              From the Field — Juru Sector, Bugesera
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryPlaceholders.map((caption) => (
              <div
                key={caption}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-navy/10 flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-navy/20" />
                <svg
                  className="w-10 h-10 text-navy/20 mb-3 relative z-10"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p
                  className="text-navy/40 text-xs text-center px-4 relative z-10"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {caption}
                </p>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <p
            className="text-center text-navy/40 text-xs mt-6"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Photos coming soon — sourced from B2C's 2024–2025 Juru Sector field visits.
          </p>
        </div>
      </section>

      {/* ── Partners ─────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span
              className="text-navy/40 text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Made Possible in Collaboration With
            </span>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-50 rounded-2xl px-10 py-7 max-w-sm w-full text-center">
              <p
                className="text-navy font-bold text-base mb-2"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                ECD Community Partners
              </p>
              <p
                className="text-navy/50 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Juru Sector, Bugesera District
              </p>
              <div className="mt-4 pt-4 border-t border-navy/8">
                <p
                  className="text-navy/45 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  This program is made possible through partnerships with community development
                  organizations that share our belief that fighting malnutrition requires
                  community ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Help Us Reach More Families
          </h2>
          <p
            className="text-cream/70 text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Every contribution helps us train more parents, distribute more hens, and ensure
            more children grow up well-nourished and ready to learn.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/volunteer"
              className="px-8 py-3 bg-orange hover:bg-orange-light text-white font-bold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Volunteer With Us
            </Link>
            <Link
              href="/donate"
              className="px-8 py-3 border-2 border-orange text-orange hover:bg-orange hover:text-white font-bold rounded-lg transition-all duration-200 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Support This Program
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
