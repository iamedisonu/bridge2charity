"use client"

import Image from "next/image"
import Button from "@/components/ui/Button"
import { useRef, Fragment } from "react"
import { motion, useInView } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
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
          <Fragment key={i}>
            <span className="inline-block overflow-hidden align-bottom pb-1">
              <motion.span
                variants={wordVariants}
                className={`inline-block ${word.startsWith("Rwanda") ? "text-orange" : ""}`}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </Fragment>
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
        className="text-sm sm:text-base text-white/85 font-light leading-relaxed italic max-w-3xl mx-auto"
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

function SubLine() {
  return (
    <div
      className="text-white/55 text-sm max-w-xl mx-auto mb-8 text-center tracking-wide"
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      Bridge2Charity Foundation
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
            Education. Nutrition. Community.
          </span>
        </div>

        <AnimatedHeadline />
        <AnimatedQuote />
        <SubLine />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button href="/volunteer" variant="primary" size="lg">
            Become a Volunteer
          </Button>
          <Button
            href="/programs"
            variant="outline"
            size="lg"
            className="border-white/30 text-white/80 hover:bg-white/10 hover:border-white/60 hover:text-white"
          >
            Explore Our Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
