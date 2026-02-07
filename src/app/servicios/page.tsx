
"use client";

import { Navbar } from "@/components/Navbar";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
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
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              NUESTROS SERVICIOS <br />
              <span className="text-primary">PROFESIONALES</span>
            </h1>
            <p className="text-xl font-bold text-secondary">
              Especialistas en Sevilla con más de 20 años de trayectoria. Garantía de 2 años en todos nuestros trabajos certificada por escrito.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              const img = PlaceHolderImages.find(i => i.id === service.imageId);
              return (
                <div key={index} className="brutalist-card flex flex-col bg-white hover:border-primary transition-colors h-full group">
                  <div className="relative aspect-square mb-6 border-2 border-black overflow-hidden shrink-0">
                    {img && (
                      <Image
                        src={img.imageUrl}
                        alt={`Pintor profesional ${service.title.toLowerCase()} Sevilla`}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        data-ai-hint={img.imageHint}
                      />
                    )}
                    <div className="absolute top-2 left-2 bg-primary text-white p-2 border-2 border-black z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Icon size={20} />
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase text-primary tracking-widest bg-primary/10 px-2 py-0.5">
                        {service.category}
                      </span>
                      <h3 className="text-sm md:text-base font-black uppercase mt-1 leading-tight tracking-tighter">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs font-medium text-secondary leading-relaxed mb-6 line-clamp-4">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-4 border-t-2 border-dashed border-black/10 flex justify-between items-center">
                      <span className="font-black text-[10px] uppercase text-secondary/60">{service.price}</span>
                      <Button asChild size="sm" className="rounded-none h-8 px-4 text-[10px]">
                        <a href="/#contacto">Presupuesto</a>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-white border-y-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 italic">"Trabajo impecable, rápidos y muy limpios en el mantenimiento de nuestro bloque."</h2>
          <p className="font-bold opacity-70">— Administrador de Fincas, Coria del Río</p>
        </div>
      </section>

      <footer className="py-12 bg-white text-black border-t-4 border-black">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h3 className="text-3xl font-black uppercase tracking-tighter italic">HGNPINTURAS</h3>
          <p className="font-bold opacity-80">© {new Date().getFullYear()} Hermanos Gómez Novo. Calidad y Confianza.</p>
        </div>
      </footer>

      <WhatsAppWidget />
      <Toaster />
    </main>
  );
}
