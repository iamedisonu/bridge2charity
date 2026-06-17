"use client"

import Image from "next/image"
import Button from "@/components/ui/Button"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

function AnimatedHeadline() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const words = ["Empowering", "Rwanda’s", "Next", "Generation"]

  return (
    <div ref={ref} className="mb-6">
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {words.map((word, i) => (
          <span key={i}>
            <motion.span
              variants={wordVariants}
              className={`inline-block ${word.startsWith("Rwanda") ? "text-orange" : ""}`}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </motion.h1>
      <motion.span
        className="block h-[3px] rounded-sm bg-orange mt-2"
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      />
    </div>
  )
}

function AnimatedQuote() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const quoteText =
    "“At B2C, we are improving primary students’ lives through sustainable community initiatives, and everyone can be part of that mission.”"
  const words = quoteText.split(" ")

  return (
    <div ref={ref} className="mb-4">
      <motion.p
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-lg sm:text-xl lg:text-2xl text-white/85 font-light leading-relaxed max-w-3xl mx-auto"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        {words.map((word, i) => (
          <span key={i}>
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </motion.p>
      <motion.span
        className="block h-[3px] rounded-sm bg-olive mt-2 max-w-3xl mx-auto"
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
      />
    </div>
  )
}

function CircledMission() {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div
      className="text-white/60 text-base max-w-xl mx-auto mb-10 text-center"
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      <span className="block">Education. Nutrition. Community.</span>
      <span ref={ref} className="relative block mt-1">
        One Mission — Rwanda where every child has the chance to thrive.
        <motion.svg
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: "-12px",
            left: "-20px",
            width: "calc(100% + 40px)",
            height: "calc(100% + 24px)",
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.ellipse
            cx="50"
            cy="50"
            rx="48"
            ry="46"
            fill="none"
            strokeLinecap="round"
            style={{ stroke: "var(--color-orange)", strokeWidth: 2 }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          />
        </motion.svg>
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/programs/eep-volunteer-selfie.jpg"
        alt="Bridge2Charity volunteers with students at EP Kirambo"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/60 to-navy/40" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-olive to-orange" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

        <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
          <span
            className="text-orange text-sm font-semibold tracking-wide uppercase"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Bridge2Charity Foundation
          </span>
        </div>

        <AnimatedHeadline />
        <AnimatedQuote />
        <CircledMission />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Button href="/volunteer" variant="primary" size="lg">
            Become a Volunteer
          </Button>
          <Button
            href="/donate"
            variant="secondary"
            size="lg"
            className="bg-white/15 hover:bg-white/25 border border-white/30 text-white hover:border-white/60"
          >
            Donate
          </Button>
        </div>

        <div className="flex items-center justify-center">
          <Button
            href="/programs"
            variant="outline"
            size="md"
            className="border-white/30 text-white/80 hover:bg-white/10 hover:border-white/60 hover:text-white"
          >
            Explore Our Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
