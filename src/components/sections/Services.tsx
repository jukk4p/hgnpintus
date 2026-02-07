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
    <section id="servicios" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter mb-4 inline-block border-b-4 md:border-b-8 border-primary leading-tight">
              Nuestras Actividades
            </h2>
            <p className="text-base md:text-xl font-bold text-secondary mt-2 md:mt-4">
              Especialistas en todo tipo de trabajos de Pintura Profesional en Sevilla.
            </p>
          </div>
          <Button asChild variant="outline" className="w-full md:w-auto bg-white rounded-none h-12 md:h-14 font-black">
            <Link href="/servicios">Ver Todos los Servicios</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {homeServices.map((service, index) => {
            const Icon = service.icon;
            const serviceImg = PlaceHolderImages.find(img => img.id === service.imageId);
            
            return (
              <div 
                key={index} 
                className="brutalist-card bg-white group transition-all duration-300 flex flex-col h-full hover:border-primary"
              >
                <div className="relative aspect-square mb-4 md:mb-6 border-2 border-black overflow-hidden bg-muted shrink-0">
                  {serviceImg?.imageUrl && (
                    <Image
                      src={serviceImg.imageUrl}
                      alt={serviceImg.description}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      data-ai-hint={serviceImg.imageHint}
                    />
                  )}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white p-2 md:p-3 border-2 border-black z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Icon size={20} className="md:w-6 md:h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-black uppercase mb-2 md:mb-3 tracking-tighter leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-secondary font-medium leading-relaxed text-[11px] md:text-xs line-clamp-3">
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