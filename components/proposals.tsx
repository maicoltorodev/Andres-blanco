"use client"

import { motion } from "framer-motion"
import { 
  BookOpen, 
  Users, 
  Building2, 
  Wifi,
  Clock,
  Heart
} from "lucide-react"

const proposals = [
  {
    icon: BookOpen,
    title: "Concursos de innovación",
    description:
      "Crear concursos entre estudiantes para desarrollar soluciones tecnológicas, apps y proyectos.",
  },
  {
    icon: Users,
    title: "Cambiemos la U Juntos",
    description:
      "Crear una plataforma digital donde los estudiantes puedan proponer ideas para mejorar la universidad.",
  },
  {
    icon: Building2,
    title: "Comunidad Tech y Creativa de la Universidad",
    description:
      "Crear una comunidad donde estudiantes interesados en tecnología, diseño, videojuegos, startups o investigación puedan reunirse para desarrollar proyectos y aprender juntos.",
  },
  {
    icon: Clock,
    title: "Feria de Talento y Proyectos",
    description:
      "Organizar una feria semestral donde los estudiantes presenten sus proyectos, investigaciones, apps, emprendimientos o iniciativas sociales.",
  },
]

export function Proposals() {
  return (
    <section className="py-24 bg-card relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Propuestas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4 text-balance">
            Un plan para <span className="text-accent">transformar</span> la U
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Propuestas concretas, resultados reales. Esto es lo que vamos a lograr juntos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {proposals.map((proposal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-10 rounded-3xl bg-white/70 border-2 border-accent hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <proposal.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-display)]">
                {proposal.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {proposal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
