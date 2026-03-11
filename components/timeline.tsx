"use client"

import { motion } from "framer-motion"
import { Check, Circle } from "lucide-react"

const milestones = [
  { date: "2023-2", title: "Mención honorífica — Orquesta Filarmónica", completed: true },
  { date: "2024-2", title: "Mérito por trabajo artístico — Bienestar Universitario", completed: true },
  { date: "2025-2", title: "Mérito por trabajo artístico — Bienestar Universitario", completed: true },
  { date: "2025", title: "3er puesto — Competencia nacional de coros (ASCUN)", completed: true },
  { date: "—", title: "Mención honorífica — Teatro CAFAM", completed: true },
  { date: "25 de marzo", title: "Votaciones", completed: false },
]

export function Timeline() {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Calendario
          </span>

          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4 text-balance">
            Hoja de <span className="text-accent">ruta</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reconocimientos y próximo paso.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {index !== milestones.length - 1 && (
                <div className="absolute left-[19px] top-10 w-0.5 h-full bg-border" />
              )}

              <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                milestone.completed
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary border-2 border-border"
              }`}>
                {milestone.completed ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Circle className="w-4 h-4 text-muted-foreground" />
                )}
              </div>

              <div className="flex-1">
                <span className="text-sm text-accent font-medium">{milestone.date}</span>
                <h3 className="text-xl font-semibold mt-1 font-[family-name:var(--font-display)]">
                  {milestone.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}