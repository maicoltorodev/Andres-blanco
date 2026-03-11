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
    description: "Crear concursos entre estudiantes para desarrollar soluciones tecnológicas, apps y proyectos.",
  },
  {
    icon: Users,
    title: "Cambiemos la U Juntos",
    description: "Crear una plataforma digital donde los estudiantes puedan proponer ideas para mejorar la universidad.",
  },
  {
    icon: Building2,
    title: "Comunidad Tech y Creativa de la Universidad",
    description: "Crear una comunidad donde estudiantes interesados en tecnología, diseño, videojuegos, startups o investigación puedan reunirse para desarollar proyectos y aprender juntos colaborativamente. ",
  },
  {
    icon: Wifi,
    title: "Conectividad Total",
    description: "WiFi de alta velocidad en todo el campus y equipos tecnológicos actualizados.",
  },
  {
    icon: Clock,
    title: "Feria de Talento y Proyectos",
    description: "Organizar una feria semestral donde los estudiantes presenten sus proyectos, investigaciones, apps, emprendimientos o iniciativas sociales.",
  },
  {
    icon: Heart,
    title: "Bienestar Integral",
    description: "Programas de salud mental, deportes y cultura para una vida universitaria equilibrada.",
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
            Un plan para <span className="text-accent">transformar</span> la EAN
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Propuestas concretas, resultados reales. Esto es lo que vamos a lograr juntos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proposals.map((proposal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-secondary/50 border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
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
