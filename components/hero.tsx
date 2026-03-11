"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* fondo hexagonal */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-30"
      >
        <img
          src="/hexagon-bg.png"
          alt="pattern"
          className="w-[2000px] max-w-none"
        />
      </div>

      {/* glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-yellow-400/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Elecciones EAN 2026
            </span>
          </motion.div>

          {/* foto */}
          <img
            src="/yo.png"
            alt="Andrés Blanco"
            className="w-72 md:w-80 mb-0"
          />

          {/* titulo */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            VOTA POR BLANCO
            <br />
            <span className="text-gray-300 line-through text-2xl md:text-4xl">
              NO EN BLANCO
            </span>
          </h1>

          {/* subtitulo */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-12">
            Andrés Blanco para Representante de la Facultad de Ingeniería.
            <span className="text-black"> Universidad EAN, Bogotá.</span>
          </p>

          {/* botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-black text-white px-8 py-6 text-lg rounded-full"
            >
              Únete al movimiento
              <ArrowRight className="ml-2 h-5 w-5" />
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
        className="absolute bottom-8"
      >
        <ChevronDown className="h-8 w-8 text-gray-500" />
      </motion.div>

    </section>
  )
}