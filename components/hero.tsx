"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Honeycomb background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='208' viewBox='0 0 240 208'%3E%3Cg stroke='rgba(255,193,7,0.35)' stroke-width='2' fill='none'%3E%3Cpolygon points='60,0 120,34.6 120,103.9 60,138.6 0,103.9 0,34.6'/%3E%3Cpolygon points='180,0 240,34.6 240,103.9 180,138.6 120,103.9 120,34.6'/%3E%3Cpolygon points='120,69.3 180,103.9 180,173.2 120,208 60,173.2 60,103.9'/%3E%3C/svg%3E")`,
          backgroundSize: "240px 208px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center"
        }}
      />

      {/* glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Elecciones EAN 2026
            </span>
          </motion.div>

          {/* FOTO */}
          <div className="mb-12 flex justify-center">
            <img
              src="/yo.png"
              alt="Andrés Blanco"
              className="w-72 md:w-80 object-contain"
            />
          </div>

          {/* titulo */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            VOTA POR BLANCO
            <br />
            <span className="text-white text-2xl md:text-4xl line-through">
              NO EN BLANCO
            </span>
          </motion.h1>

          {/* subtitulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-12"
          >
            Andrés Blanco para Representante de la Facultad de Ingeniería.
            <span className="text-black"> Universidad EAN, Bogotá.</span>
          </motion.p>

          {/* botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg rounded-full group"
            >
              Únete al movimiento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full"
            >
              Conoce las propuestas
            </Button>
          </div>

        </div>
      </div>

      {/* scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-gray-500" />
      </motion.div>

    </section>
  )
}