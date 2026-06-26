import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { scholarCohorts } from "@/data/scholars"
import type { Scholar } from "@/types/scholars"

export const metadata: Metadata = {
  title: "Burera Scholars — Bridge2Charity Foundation",
  description:
    "Meet the students supported by Bridge2Charity's Back to School Program in Burera District — primary school scholars working toward a better future.",
}

// ── Student card ─────────────────────────────────────────────────────────────
function ScholarCard({ scholar }: { scholar: Scholar }) {
  const initials = scholar.firstName === "TBD"
    ? "?"
    : scholar.firstName.charAt(0).toUpperCase()

  return (
    <div className="flex flex-col items-center text-center group">
      {/* Photo circle */}
      <div
        className="rounded-full overflow-hidden mb-3 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{
          width: "160px",
          height: "160px",
          border: "2px solid #e0e0e0",
          background: "#f5f5f5",
        }}
      >
        {scholar.photoUrl ? (
          <img
            src={scholar.photoUrl}
            alt={scholar.firstName === "TBD" ? "Scholar" : scholar.firstName}
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <span
            className="text-3xl font-bold select-none"
            style={{ color: "#050a30", opacity: 0.25, fontFamily: "var(--font-montserrat)" }}
          >
            {initials}
          </span>
        )}
      </div>

      {/* Name */}
      <p
        className="text-navy font-bold text-sm leading-tight mb-1"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {scholar.firstName === "TBD" ? "Coming Soon" : scholar.firstName}
      </p>

      {/* Grade badge */}
      {scholar.grade !== "TBD" && (
        <span
          className="inline-block bg-orange/10 text-orange text-xs font-semibold px-2.5 py-0.5 rounded-full"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {scholar.grade}
        </span>
      )}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ScholarsPage() {
  const cohort1 = scholarCohorts.find((c) => c.id === "cohort-1")

  return (
    <main className="min-h-screen bg-cream pt-20">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy py-20 overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange via-olive to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange" />
            <span
              className="text-orange text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Back to School Program
            </span>
            <div className="h-px w-8 bg-orange" />
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Burera <span className="text-orange">Scholars</span>
          </h1>
          <p
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Every name on this page represents a child who stayed in school because someone
            chose to show up. Meet the students at the heart of our Back to School Program.
          </p>

          {/* Cohort jump links */}
          <div className="flex flex-wrap justify-center gap-3">
            {["cohort-1", "cohort-2", "cohort-3"].map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  i === 0
                    ? "bg-orange text-white hover:bg-orange-light"
                    : "border border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Cohort {i + 1}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cohort 1 ─────────────────────────────────────────────────────────── */}
      <section id="cohort-1" className="py-16 lg:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Cohort header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-orange" />
                <span
                  className="text-orange text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Burera District · {cohort1?.year}
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Cohort 1
              </h2>
              <p
                className="text-navy/60 text-sm mt-2"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {(cohort1?.scholars.filter((s) => s.firstName !== "TBD").length ?? 0)} named scholars &nbsp;·&nbsp; Burera District &nbsp;·&nbsp; Primary grades P3 & P4
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block bg-olive/10 text-olive text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Back to School Program
              </span>
            </div>
          </div>

          {/* Student grid */}
          {cohort1 ? (
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
              {cohort1.scholars
                .filter((s) => s.consentGiven && s.firstName !== "TBD")
                .map((scholar) => (
                  <ScholarCard key={scholar.id} scholar={scholar} />
                ))}
            </div>
          ) : (
            <p className="text-center text-navy/40">No cohort data available.</p>
          )}

          {/* Note */}
          <p
            className="text-center text-navy/35 text-xs mt-12"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            First names only are displayed in accordance with B2C's student privacy policy.
            All families have given consent for publication.
          </p>
        </div>
      </section>

      {/* ── Cohort 2 (placeholder) ────────────────────────────────────────────── */}
      <section id="cohort-2" className="py-16 lg:py-20 bg-cream scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-orange" />
            <span
              className="text-orange text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Coming Soon
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-navy mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Cohort 2
          </h2>
          <div className="border-2 border-dashed border-navy/15 rounded-2xl py-16 text-center">
            <p
              className="text-navy/35 text-sm"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Cohort 2 scholars will be featured here when the next intake is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cohort 3 (placeholder) ────────────────────────────────────────────── */}
      <section id="cohort-3" className="py-16 lg:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-orange" />
            <span
              className="text-orange text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Coming Soon
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-navy mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Cohort 3
          </h2>
          <div className="border-2 border-dashed border-navy/15 rounded-2xl py-16 text-center">
            <p
              className="text-navy/35 text-sm"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Cohort 3 scholars will be featured here when the next intake is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Help a Scholar Stay in School
          </h2>
          <p
            className="text-white/60 text-base mb-8"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Every contribution helps us cover another child's school fees and keep them in the
            classroom where they belong.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/donate"
              className="px-8 py-3 bg-orange hover:bg-orange-light text-white font-bold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Support This Program
            </Link>
            <Link
              href="/programs/back-to-school"
              className="px-8 py-3 border-2 border-white/30 hover:border-white text-white font-bold rounded-lg transition-all duration-200 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              About Back to School
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
