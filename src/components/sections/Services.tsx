
"use client";

import { Brush, Building2, Mountain, Droplets } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const homeServices = [
  {
    title: "Pintura General",
    description: "Acabados de alta calidad en interiores y exteriores con limpieza total garantizada en cada obra.",
    icon: Brush,
    imageId: "service-general",
  },
  {
    title: "Fachadas y Edificios",
    description: "Rehabilitación técnica de fachadas y saneamiento de paramentos para comunidades y particulares.",
    icon: Building2,
    imageId: "service-fachada",
  },
  {
    title: "Trabajos Verticales",
    description: "Especialistas en accesos mediante cuerdas y pintura en altura con máxima seguridad IRATA sin andamios.",
    icon: Mountain,
    imageId: "service-vertical",
  },
  {
    title: "Impermeabilización",
    description: "Sistemas de protección contra filtraciones en cubiertas y terrazas con poliuretano de larga duración.",
    icon: Droplets,
    imageId: "service-impermeabilizacion",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 inline-block border-b-4 md:border-b-8 border-primary leading-tight">
              Nuestras Actividades
            </h2>
            <p className="text-lg md:text-xl font-bold text-secondary mt-4">
              Especialistas en todo tipo de trabajos de Pintura Profesional en Sevilla.
            </p>
          </div>
          <Button asChild variant="outline" className="w-full md:w-auto bg-white rounded-none h-12">
            <Link href="/servicios">Ver Todos los Servicios</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeServices.map((service, index) => {
            const Icon = service.icon;
            const serviceImg = PlaceHolderImages.find(img => img.id === service.imageId);
            
            return (
              <div 
                key={index} 
                className="brutalist-card bg-white group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-square mb-6 border-2 border-black overflow-hidden bg-muted shrink-0">
                  {serviceImg?.imageUrl && (
                    <Image
                      src={serviceImg.imageUrl}
                      alt={`Pintor profesional ${service.title.toLowerCase()} Sevilla`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                      data-ai-hint={serviceImg.imageHint}
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-primary text-white p-3 border-2 border-black z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-black uppercase mb-3 tracking-tighter leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-secondary font-medium leading-relaxed text-xs line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
