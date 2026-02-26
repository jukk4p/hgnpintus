
"use client";

import { Navbar } from "@/components/Navbar";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";
import { 
  Brush, 
  Building2, 
  Palette, 
  Droplets, 
  Mountain, 
  Zap, 
  Users, 
  Hammer 
} from "lucide-react";

const allServices = [
  {
    title: "PINTURA GENERAL",
    category: "Interior/Exterior",
    description: "Servicios integrales para casas, pisos y locales en Sevilla. Especialistas en alisado de paredes y acabados plásticos de máxima calidad con limpieza total.",
    price: "~15€/m²",
    icon: Brush,
    imageId: "service-general",
  },
  {
    title: "PINTURA INDUSTRIAL",
    category: "Naves y Fábricas",
    description: "Soluciones de alta resistencia para naves y suelos epoxi. Pinturas preparadas para soportar alta abrasión y tráfico pesado en entornos industriales.",
    price: "~20€/m²",
    icon: Hammer,
    imageId: "service-industrial",
  },
  {
    title: "PINTURA DECORATIVA",
    category: "Alta Decoración",
    description: "Expertos en estucos, veladuras y efectos decorativos. Transformamos tus espacios con las últimas tendencias siguiendo un proceso artesanal y meticuloso.",
    price: "~25€/m²",
    icon: Palette,
    imageId: "service-decorativa",
  },
  {
    title: "IMPERMEABILIZACIÓN",
    category: "Tejados y Terrazas",
    description: "Eliminamos filtraciones con garantía total. Aplicación de poliuretanos y pinturas anticongelantes con máxima durabilidad certificada en azoteas.",
    price: "~18€/m²",
    icon: Droplets,
    imageId: "service-impermeabilizacion",
  },
  {
    title: "REHABILITACIÓN FACHADAS",
    category: "Edificios",
    description: "Reparación de grietas y pintura acrílica de larga duración. Cumplimos con la ITE para comunidades de vecinos en Sevilla y provincia con rapidez.",
    price: "~22€/m²",
    icon: Building2,
    imageId: "service-fachada",
  },
  {
    title: "TRABAJOS VERTICALES",
    category: "Sin Andamios",
    description: "Acceso seguro mediante cuerdas para zonas difíciles. Pintura en altura con técnicos certificados IRATA, máxima seguridad y ahorro en costes de andamiaje.",
    price: "Presupuesto Gratis",
    icon: Mountain,
    imageId: "service-vertical",
  },
  {
    title: "REFORMAS RÁPIDAS",
    category: "Mantenimiento",
    description: "Intervenciones inmediatas para humedades, parches y alisados urgentes. Presupuestos en menos de 24h para soluciones rápidas en su local o vivienda.",
    price: "Económico",
    icon: Zap,
    imageId: "service-reformas",
  },
  {
    title: "MANTENIMIENTO COMUNIDADES",
    category: "Servicio Continuo",
    description: "Planes de mantenimiento para portales, escaleras y zonas comunes. Trabajamos con orden y limpieza sin interrupciones para el bienestar vecinal.",
    price: "Tarifa Plana",
    icon: Users,
    imageId: "service-comunidades",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-12 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16 md:mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-8xl font-bebas uppercase tracking-tighter mb-8 leading-[0.9] text-primary"
            >
              NUESTROS SERVICIOS <br />
              <span className="text-accent">PROFESIONALES</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl font-bold text-foreground/80"
            >
              Especialistas en Sevilla con más de 20 años de trayectoria. Garantía de 2 años en todos nuestros trabajos certificada por escrito.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              const img = PlaceHolderImages.find(i => i.id === service.imageId);
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="brutalist-card flex flex-col bg-white hover:border-primary transition-all duration-500 group h-full shadow-lg"
                >
                  <div className="relative aspect-video mb-6 border-b-2 border-black overflow-hidden shrink-0">
                    {img && (
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute top-4 left-4 bg-primary text-white p-3 border-2 border-black z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Icon size={24} className="text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col px-6 pb-8">
                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase text-primary tracking-widest bg-primary/5 px-2 py-1 border border-primary/10">
                        {service.category}
                      </span>
                      <h3 className="text-2xl font-bebas uppercase mt-2 leading-tight tracking-wider text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm font-bold text-foreground/70 leading-relaxed mb-8 line-clamp-4">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-6 border-t-2 border-dashed border-black/10 flex justify-between items-center">
                      <span className="font-black text-xs uppercase text-primary/60 tracking-tight">{service.price}</span>
                      <Button asChild size="sm" className="rounded-none h-10 px-6 font-black text-xs">
                        <a href="/#contacto">Presupuesto</a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white border-y-4 border-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-accent/5 -skew-y-3 translate-y-12" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bebas uppercase mb-8 leading-tight text-accent italic">"Trabajo impecable, rápidos y muy limpios en el mantenimiento de nuestro bloque."</h2>
          <p className="text-lg font-bold text-white/60">— Administrador de Fincas, Coria del Río</p>
        </div>
      </section>

      <footer className="py-16 bg-white text-black border-t-4 border-black">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h3 className="text-4xl font-bebas uppercase tracking-widest text-primary">HGNPINTURAS</h3>
          <p className="text-sm font-bold text-foreground/60 uppercase tracking-widest">© {new Date().getFullYear()} Hermanos Gómez Novo. Calidad y Confianza.</p>
          <div className="flex justify-center gap-8 pt-4 flex-wrap">
            <Link href="/aviso-legal" className="hover:text-primary transition-colors font-black uppercase text-[10px] text-foreground/40">Aviso Legal</Link>
            <Link href="/privacidad" className="hover:text-primary transition-colors font-black uppercase text-[10px] text-foreground/40">Privacidad</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors font-black uppercase text-[10px] text-foreground/40">Cookies</Link>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
      <Toaster />
    </main>
  );
}
