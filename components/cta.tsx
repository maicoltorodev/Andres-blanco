"use client"

import { motion } from "framer-motion"
import { ArrowRight, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/blanco.jpeg"
              alt="AB Logo"
              width={120}
              height={68}
              className="mx-auto rounded-lg"
            />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-6 text-balance">
            El futuro de la EAN está en <span className="text-accent">tus manos</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Únete a nuestra comunidad, comparte nuestras propuestas y hagamos historia juntos en la Universidad EAN.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full group"
            >
              Vota por Andrés Blanco
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary px-8 py-6 text-lg rounded-full"
            >
              Comparte la campaña
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-muted-foreground text-sm">Síguenos:</span>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-accent/50 hover:bg-secondary/80 transition-all"
            >
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-accent/50 hover:bg-secondary/80 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
