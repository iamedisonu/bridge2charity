import type { Metadata } from "next"
import Link from "next/link"
import { scholarCohorts } from "@/data/scholars"

export const metadata: Metadata = {
  title: "Cohort 1 Scholars — Bridge2Charity Foundation",
  description: "Meet the Cohort 1 scholars supported by Bridge2Charity's Back to School Program in Burera District.",
}

export default function Cohort1Page() {
  const cohort = scholarCohorts.find(c => c.id === "cohort-1")
  const students = cohort?.scholars.filter(s => s.firstName !== "TBD") ?? []

  return (
    <main className="min-h-screen bg-cream pt-20">

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <div className="bg-navy py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/programs/back-to-school"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-6 transition-colors duration-200"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to School
          </Link>
          <h1
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Cohort 1
          </h1>
          <p
            className="text-white/50 text-sm mt-1"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Burera Scholars · 2024
          </p>
        </div>
      </div>

      {/* ── Student grid ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {students.map(student => (
              <div key={student.id} className="flex flex-col items-center text-center group">

                {/* Photo circle */}
                <div
                  className="rounded-full overflow-hidden mb-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    width: "160px",
                    height: "160px",
                    background: "#e8e8e8",
                    border: "2px solid #e0e0e0",
                  }}
                >
                  {student.photoUrl ? (
                    <img
                      src={student.photoUrl}
                      alt={student.firstName}
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
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: "#f0f0f0" }}
                    >
                      <span
                        className="text-3xl font-bold select-none"
                        style={{ color: "#050a30", opacity: 0.2, fontFamily: "var(--font-montserrat)" }}
                      >
                        {student.firstName.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name | School */}
                <p
                  className="text-navy font-semibold text-sm leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {student.lastName} {student.firstName}
                </p>
                <p
                  className="text-navy/45 text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {student.school ?? "Burera District"}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
