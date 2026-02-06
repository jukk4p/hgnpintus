"use client";

import { Navbar } from "@/components/Navbar";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";
import { Shield, Award, Clock, MapPin, HardHat, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const teamImg = PlaceHolderImages.find(img => img.id === "service-vertical");

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-24 bg-background border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                MÁS DE <span className="text-primary">20 AÑOS</span><br />
                PINTANDO SEVILLA
              </h1>
              <p className="text-xl font-bold text-secondary">
                Hermanos Gómez Novo nació en Coria del Río con una misión clara: ofrecer la máxima calidad en pintura técnica y vertical, donde otros no llegan.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="brutalist-card bg-white p-4">
                  <Clock className="text-primary mb-2" size={32} />
                  <h3 className="font-black text-lg">20+ AÑOS</h3>
                  <p className="text-xs font-bold text-secondary">De experiencia real</p>
                </div>
                <div className="brutalist-card bg-white p-4">
                  <MapPin className="text-primary mb-2" size={32} />
                  <h3 className="font-black text-lg">SEVILLA</h3>
                  <p className="text-xs font-bold text-secondary">Base en Coria del Río</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square brutalist-border overflow-hidden bg-muted">
              {teamImg && (
                <Image
                  src={teamImg.imageUrl}
                  alt="Equipo Hermanos Gómez Novo"
                  fill
                  className="object-cover grayscale"
                />
              )}
              <div className="absolute bottom-4 left-4 bg-primary text-white p-4 border-2 border-black font-black uppercase text-sm">
                Nuestro Equipo en Acción
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Seguridad y Confianza</h2>
            <p className="text-lg font-bold text-secondary italic">
              "No solo pintamos, rehabilitamos con la tranquilidad de que su edificio está en las mejores manos."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Seguros de R.C.",
                desc: "Cobertura total de responsabilidad civil en cada proyecto para su tranquilidad.",
                icon: Shield
              },
              {
                title: "Trabajo Seguro",
                desc: "Personal certificado para trabajos en altura (Rope Access) y prevención de riesgos.",
                icon: HardHat
              },
              {
                title: "Garantía Escrita",
                desc: "Todos nuestros trabajos de impermeabilización y fachadas están garantizados por 2 años.",
                icon: CheckCircle2
              }
            ].map((item, i) => (
              <div key={i} className="brutalist-card bg-accent/30 text-center">
                <div className="inline-flex bg-white p-4 border-2 border-black mb-4">
                  <item.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-black uppercase mb-3">{item.title}</h3>
                <p className="font-medium text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-primary text-white border-t-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">HGN.PINTURAS</h3>
          <p className="font-bold opacity-80">Profesionales del color en el Aljarafe sevillano.</p>
        </div>
      </footer>

      <WhatsAppWidget />
      <Toaster />
    </main>
  );
}
