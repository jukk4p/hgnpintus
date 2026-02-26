"use client";

import { Navbar } from "@/components/Navbar";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";
import { Shield, Award, Clock, MapPin, HardHat, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

export default function AboutPage() {
  const teamImg = PlaceHolderImages.find(img => img.id === "service-vertical");

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-background border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-8xl font-bebas uppercase tracking-tighter leading-[0.9] text-primary">
                MÁS DE <span className="text-accent">20 AÑOS</span><br />
                PINTANDO SEVILLA
              </h1>
              <p className="text-xl font-bold text-foreground/80 leading-relaxed">
                Hermanos Gómez Novo nació en Coria del Río con una misión clara: ofrecer la máxima calidad en pintura técnica y vertical, donde otros no llegan.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="brutalist-card bg-white p-6 shadow-xl">
                  <Clock className="text-accent mb-3" size={32} />
                  <h3 className="font-bebas text-2xl text-primary">20+ AÑOS</h3>
                  <p className="text-xs font-bold text-foreground/60 uppercase tracking-widest">De experiencia real</p>
                </div>
                <div className="brutalist-card bg-white p-6 shadow-xl">
                  <MapPin className="text-accent mb-3" size={32} />
                  <h3 className="font-bebas text-2xl text-primary">SEVILLA</h3>
                  <p className="text-xs font-bold text-foreground/60 uppercase tracking-widest">Base en Coria del Río</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-primary"
            >
              {teamImg && (
                <Image
                  src={teamImg.imageUrl}
                  alt="Equipo Hermanos Gómez Novo en trabajos verticales Sevilla"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              )}
              <div className="absolute bottom-6 left-6 bg-accent text-primary px-6 py-3 border-2 border-black font-bebas text-xl tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Nuestro Equipo en Acción
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bebas uppercase tracking-tighter mb-8 text-primary">Seguridad y Confianza</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg md:text-2xl font-bold text-foreground/70 italic font-serif">
              "No solo pintamos, rehabilitamos con la tranquilidad de que su edificio está en las mejores manos."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Seguros de R.C.",
                desc: "Cobertura total de responsabilidad civil en cada proyecto para su máxima tranquilidad.",
                icon: Shield
              },
              {
                title: "Trabajo Seguro",
                desc: "Personal certificado para trabajos en altura (Rope Access) y estricta prevención de riesgos.",
                icon: HardHat
              },
              {
                title: "Garantía Escrita",
                desc: "Todos nuestros trabajos de impermeabilización y fachadas están garantizados por 2 años.",
                icon: CheckCircle2
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="brutalist-card bg-accent/5 p-10 text-center hover:bg-accent/10 transition-colors border-dashed"
              >
                <div className="inline-flex bg-white p-5 rounded-full border-2 border-black mb-6 shadow-lg">
                  <item.icon size={36} className="text-accent" />
                </div>
                <h3 className="text-3xl font-bebas uppercase mb-4 text-primary tracking-wide">{item.title}</h3>
                <p className="font-bold text-foreground/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 bg-primary text-white border-t-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bebas uppercase tracking-widest mb-6 text-accent">HGNPINTURAS</h3>
          <p className="font-bold text-white/60 uppercase tracking-[0.3em] text-xs">Profesionales del color en el Aljarafe sevillano.</p>
        </div>
      </footer>

      <WhatsAppWidget />
      <Toaster />
    </main>
  );
}
