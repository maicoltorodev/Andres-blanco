"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function About() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <Image
                src="/blanco.jpeg"
                alt="Andrés Blanco"
                fill
                className="object-cover object-center"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-2xl max-w-xs"
            >
              <Quote className="w-8 h-8 text-accent mb-3" />
              <p className="text-sm text-muted-foreground italic">
                &quot;La universidad no solo es un lugar para estudiar, es nuestra comunidad. Y merece líderes que la transformen.&quot;
              </p>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Conoce a Andrés
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-6 text-balance">
              Un líder de la <span className="text-accent">comunidad EAN</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Soy Andrés Blanco, estudiante de la Universidad EAN y creo firmemente que nuestra
                universidad tiene el potencial de ser la mejor experiencia de nuestras vidas.
              </p>
              <p>
                He sido parte activa de nuestra comunidad, participando en grupos estudiantiles,
                proyectos de impacto social y representando a mis compañeros ante las directivas.
              </p>
              <p className="text-foreground font-medium">
                Ahora, quiero llevar esa experiencia y compromiso al siguiente nivel como tu
                presidente del consejo estudiantil.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: "Semestre", value: "6to" },
                { label: "Carrera", value: "Ingeniería de Sistemas" },
                { label: "Grupos activos", value: "4+" },
                { label: "Proyectos liderados", value: "12+" },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-display)]">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
