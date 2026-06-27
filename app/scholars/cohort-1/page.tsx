import type { Metadata } from "next"
import Image from "next/image"
import { scholarCohorts } from "@/data/scholars"

export const metadata: Metadata = {
  title: "Cohort 1 Scholars — Bridge2Charity Foundation",
  description: "Meet the Cohort 1 scholars supported by Bridge2Charity's Back to School Program in Burera District.",
}

export default function Cohort1Page() {
  const cohort = scholarCohorts.find(c => c.id === "cohort-1")
  const students = cohort?.scholars ?? []

  return (
    <main className="min-h-screen bg-cream pt-20">

      {/* ── Pencil image banner ───────────────────────────────────────────────── */}
      <div className="relative w-full" style={{ height: "300px" }}>
        <Image
          src="/images/scholars/cohort-1/cover.jpg"
          alt="Cohort 1 — Burera Scholars"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ── Student grid ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
            {students.map(student => (
              <div key={student.id} className="flex flex-col items-center text-center group">

                {/* Photo circle */}
                <div
                  className="rounded-full overflow-hidden mb-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    width: "160px",
                    height: "160px",
                    background: "#e0e0e0",
                    border: "2px solid #d0d0d0",
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
                      style={{ backgroundColor: "#efefef" }}
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

                {/* FirstName LastName */}
                <p
                  className="text-navy font-semibold text-sm leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {student.firstName} {student.lastName}
                </p>
                {/* School */}
                <p
                  className="text-navy/45 text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {student.school ?? "EP Kirambo"}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
