
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Star, CheckCircle2, Trophy, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-vertical");
  const [stats, setStats] = useState({ projects: 0, years: 0, clients: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ projects: 200, years: 15, clients: 100 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-primary">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="HGNPINTURAS - Trabajos Verticales Sevilla"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
        <div className="max-w-4xl space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md border border-accent/30 text-accent px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
          >
            <Star size={14} className="fill-accent" /> +15 años de experiencia real
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-9xl font-bebas leading-[0.85] tracking-tight"
            >
              PINTURA <span className="text-white">PROFESIONAL</span><br />
              <span className="text-accent">& TRABAJOS VERTICALES</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl font-light text-white/80 max-w-2xl font-sans"
            >
              Especialistas en fachadas y altura sin andamios. <br className="hidden md:block" />
              Calidad premium garantizada en Sevilla y provincia.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <Button asChild size="lg" className="h-16 px-10 bg-[#D4581A] hover:bg-[#D4581A]/90 text-white font-bold rounded-sm shadow-2xl transition-all hover:scale-105">
              <a href="#contacto">SOLICITAR PRESUPUESTO GRATIS</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-10 border-2 border-white text-white hover:bg-white/10 font-bold rounded-sm">
              <a href="/servicios">VER NUESTROS TRABAJOS</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-primary/40 backdrop-blur-xl border-t border-white/10 py-8 md:py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Proyectos completados", value: "200+", icon: Trophy },
              { label: "Años de experiencia", value: "15+", icon: Clock },
              { label: "Clientes satisfechos", value: "100%", icon: Users },
              { label: "Respuesta garantizada", value: "24h", icon: CheckCircle2 },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <stat.icon className="text-accent" size={32} />
                <div>
                  <div className="text-3xl font-bebas text-accent leading-none mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
