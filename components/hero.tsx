"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">  
  {/* Fondo hexagonal */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-100"
        style={{ backgroundImage: "url('/hexagon-bg.png')" }}
      />

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* LOGO */}
          <div className="mb-12 relative flex justify-center items-center">

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="group drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
            >
              <Image
                src="/yo.png"
                alt="Andrés Blanco"
                width={320}
                height={320}
                priority
                className="
                  rounded-3xl
                  shadow-2xl
                  transition-all
                  duration-500
                  group-hover:ring-4
                  group-hover:ring-white
                  group-hover:scale-105
                "
              />
            </motion.div>

          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">VOTA POR BLANCO</span>
            <br />
            <span className="text-accent">NO EN BLANCO</span>
          </motion.h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">
            Andrés Blanco para Presidente del Consejo Estudiantil.
            <span className="text-foreground"> Universidad EAN, Bogotá.</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://chat.whatsapp.com/TU_LINK_DEL_GRUPO"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full group"
              >
                Únete al movimiento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>

            <Button size="lg" variant="outline" className="rounded-full">
              Conoce las propuestas
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}


    </section>

  )
}