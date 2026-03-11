"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoABFinal } from "@/components/logo-ab"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background hexagon pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='173.2' height='150'%3E%3Cdefs%3E%3ClinearGradient id='hex' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgba(255,193,7,0.15);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgba(255,193,7,0.08);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='86.6,0 173.2,50 173.2,150 86.6,200 0,150 0,50' fill='none' stroke='rgba(255,193,7,0.2)' stroke-width='1.2'/%3E%3Cpolygon points='86.6,100 173.2,150 173.2,250 86.6,300 0,250 0,150' fill='none' stroke='rgba(255,193,7,0.2)' stroke-width='1.2'/%3E%3Cpolygon points='0,100 86.6,150 86.6,250 0,300 -86.6,250 -86.6,150' fill='none' stroke='rgba(255,193,7,0.2)' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: '173.2px 150px',
          backgroundPosition: '0 0'
        }}
      />

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
          <div className="mb-12 relative flex justify-center items-center">
            <img src="/logoab.png" alt="Logo" className="w-80 h-80 object-contain" />
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
            Andrés Blanco para Representante de la Facultad de Ingeniería.
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
