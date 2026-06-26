"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

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

// ── Arrow circle icon ────────────────────────────────────────────────────────
function ArrowCircle() {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: "#f16927" }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────
const focuses = [
  {
    title: "Access to Education",
    description:
      "Every child deserves a seat in the classroom. Through the Back to School Program, Bridge2Charity covers school fees and provides essential learning materials — school bags, books, and pens — for primary students who would otherwise be left behind. We believe that financial hardship should never determine a child's future, and this program ensures it doesn't. By removing the barriers that stand between a child and their Education, we give each student the foundation they need to show up, participate, and grow.",
  },
  {
    title: "English Literacy & Communication",
    description:
      "Language is power. Through the English Enhancement Program, students develop the English literacy, communication skills, and critical thinking they need to engage confidently in Rwanda's evolving Education system and beyond. Sessions are led by dedicated volunteers and teachers who meet students where they are, using an engaging, simplified approach designed not just to teach English, but to help students fall in love with learning it.",
  },
  {
    title: "Holistic Student Development",
    description:
      "Academic support alone is not enough. Bridge2Charity invests in the whole child — their confidence, their mindset, and their sense of belonging. Through personalized encouragement letters filled with practical learning tips and a learning environment built on warmth and intentionality, we make sure every student knows they are seen, valued, and believed in.",
  },
  {
    title: "Continuous Follow-Up & Care",
    description:
      "Our commitment to each student does not end when the term begins. Bridge2Charity conducts school visits during the second semester to check on every student's progress and well-being, sitting with them, listening to their stories, and making sure nothing is quietly holding them back. We stay close, we check in, and we show up — because that consistency is often what makes the difference.",
  },
]

const approaches = [
  {
    title: "We Invest Before We Expect",
    description:
      "Every student we support receives what they need before we ask anything of them — school fees covered, books provided, and a place secured. Because a child cannot focus on learning when they are unsure if they will be there tomorrow.",
  },
  {
    title: "We Teach With Intention",
    description:
      "Through the English Enhancement Program, students build literacy, communication, and critical thinking skills through engaging sessions. We simplify, adapt, and show up until learning actually lands.",
  },
  {
    title: "We Stay",
    description:
      "We visit schools, write personal letters, and check in every term — not because it is required, but because we believe that showing up consistently is what tells a child they matter.",
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BackToSchoolPage() {
  const [triggered, setTriggered] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  const studentsCount = useCountUp(23, 2000, triggered)
  const schoolsCount = useCountUp(7, 2000, triggered)

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
      <section className="relative min-h-[70vh] flex items-center justify-center bg-navy overflow-hidden">
        <Image
          src="/images/programs/bts-hero.jpg"
          alt="Back to School Program"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-28 max-w-3xl mx-auto">
          <p
            className="text-2xl sm:text-3xl lg:text-4xl text-white font-light italic leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            &ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo;
          </p>
          <p
            className="text-orange font-semibold text-base sm:text-lg tracking-wide"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            — Mahatma Gandhi
          </p>
        </div>
      </section>

      {/* ── What Sets Us Apart ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/programs/bts-three-program.jpg"
                alt="Back to School students"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right — text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-orange" />
                <span
                  className="text-orange text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Our Difference
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                What Sets Us Apart
              </h2>
              <p
                className="text-navy/70 text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Bridge2Charity exposes primary students to ideas that spark their curiosity and
                prompt them to question, helping them examine their potential at an early age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Focus ────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Badge */}
          <div className="flex justify-center mb-10">
            <span
              className="inline-block bg-orange text-white font-bold text-base px-8 py-2.5 rounded-full tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Our Focus
            </span>
          </div>

          {/* 2×2 focus grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focuses.map((focus) => (
              <div key={focus.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowCircle />
                  <h3
                    className="text-olive font-bold text-sm uppercase leading-tight"
                    style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "2px" }}
                  >
                    {focus.title}
                  </h3>
                </div>
                <p
                  className="text-navy/65 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet Our Students ────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 rounded-2xl overflow-hidden shadow-md">

            {/* Left — image */}
            <div className="relative min-h-[400px] lg:min-h-0">
              <Image
                src="/images/programs/bts-meet-students.jpg"
                alt="Meet Our Students"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right — navy panel with stats */}
            <div
              className="bg-navy flex flex-col justify-center px-10 py-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-orange" />
                <span
                  className="text-orange text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Our Scholars
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Meet Our Students
              </h2>

              {/* Count-up stats */}
              <div ref={statsRef} className="flex gap-12 mb-10">
                <div>
                  <p
                    className="text-5xl font-bold text-orange leading-none"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {studentsCount}+
                  </p>
                  <p
                    className="text-white/60 text-sm mt-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Students Reached
                  </p>
                </div>
                <div>
                  <p
                    className="text-5xl font-bold text-orange leading-none"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {schoolsCount}+
                  </p>
                  <p
                    className="text-white/60 text-sm mt-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Primary Schools Represented
                  </p>
                </div>
              </div>

              {/* Cohort links */}
              <div className="space-y-3">
                <p
                  className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Explore Our Cohorts
                </p>
                {[1, 2, 3].map((n) => (
                  <Link
                    key={n}
                    href={`/scholars#cohort-${n}`}
                    className="flex items-center gap-2 text-white hover:text-orange text-sm font-medium transition-colors duration-200 group"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform duration-200">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    Meet Cohort {n}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach to Student Support ─────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-orange" />
              <span
                className="text-orange text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                How We Work
              </span>
              <div className="h-px w-8 bg-orange" />
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Approach to Student Support
            </h2>
          </div>

          {/* 3-column cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach) => (
              <div key={approach.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowCircle />
                  <h3
                    className="text-olive font-bold text-xs uppercase leading-tight"
                    style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "2px" }}
                  >
                    {approach.title}
                  </h3>
                </div>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-nunito)", fontSize: "16px" }}
                >
                  {approach.description}
                </p>
              </div>
            ))}
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
            Help a Child Stay in School
          </h2>
          <p
            className="text-white/60 text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Every contribution helps us cover another child's school fees, provide their books,
            and make sure they show up tomorrow — and every day after that.
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
              className="px-8 py-3 border-2 border-white/30 hover:border-white text-white font-bold rounded-lg transition-all duration-200 text-sm"
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
