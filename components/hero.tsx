"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoABFinal } from "@/components/logo-ab"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Campaign badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Elecciones EAN 2026
            </span>
          </motion.div>

          {/* Logo con animación imponente */}
          <div className="mb-12 relative flex justify-center items-center [perspective:1000px]">
            {/* Aura de luz trasera pulsante */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.6, 0.3], scale: [0.5, 1.2, 1] }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.1 }}
              className="absolute w-[350px] h-[350px] bg-white/20 blur-[80px] rounded-full mix-blend-screen"
            />

            {/* Logo principal animado (Entrance) */}
            <motion.div
              initial={{
                opacity: 0,
                rotateX: 40,
                scale: 0.7,
                y: 60,
                filter: "blur(15px)"
              }}
              animate={{
                opacity: 1,
                rotateX: 0,
                scale: 1,
                y: 0,
                filter: "blur(0px)"
              }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1], // Curva cinematográfica power4.out
                delay: 0.2
              }}
              whileHover={{
                scale: 1.06,
                rotateY: 8,
                rotateX: -8,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              className="relative z-10 cursor-pointer"
            >
              {/* Animación de Loop Flotante */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.6 // Comienza justo después de terminar la entrada
                }}
              >
                {/* Contenedor del logo con drop-shadow reactivo */}
                <div className="drop-shadow-[0_0_15px_rgba(200,30,30,0.3)] hover:drop-shadow-[0_0_35px_rgba(220,20,20,0.5)] transition-all duration-500">
                  <img src="/yo.png" alt="Logo" className="w-80 h-80" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)] text-balance"
          >
            <span className="text-foreground">VOTA POR BLANCO</span>
            <br />
            <span className="text-white text-2xl md:text-4xl lg:text-5xl line-through">   NO EN BLANCO   </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 text-pretty"
          >
            Andrés Blanco para Presidente del Consejo Estudiantil.
            <span className="text-foreground"> Universidad EAN, Bogotá.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full group"
            >
              Únete al movimiento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary px-8 py-6 text-lg rounded-full"
            >
              Conoce las propuestas
            </Button>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 grid grid-cols-3 gap-8 md:gap-16"
          >
            {[
              { number: "3+", label: "Años en EAN" },
              { number: "100%", label: "Compromiso" },
              { number: "1", label: "Visión" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-display)]">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
