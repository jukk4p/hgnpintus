"use client";

import { Brush, Building2, Factory, Droplets } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    title: "Pintura General",
    description: "Trabajos en todo tipo de superficies, tanto en interior como en exterior con acabados de alta calidad.",
    icon: Brush,
    imageId: "service-pintura",
  },
  {
    title: "Fachadas y Edificios",
    description: "Rehabilitación completa de fachadas y trabajos verticales con personal altamente cualificado.",
    icon: Building2,
    imageId: "service-vertical",
  },
  {
    title: "Pintura Industrial",
    description: "Soluciones especializadas para naves, locales y maquinaria con pinturas de alta resistencia.",
    icon: Factory,
    imageId: "service-industrial",
  },
  {
    title: "Impermeabilización",
    description: "Protección total contra filtraciones en cubiertas, terrazas y azoteas con garantía de durabilidad.",
    icon: Droplets,
    imageId: "service-impermeabilizacion",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 inline-block border-b-8 border-primary">
            Nuestras Actividades
          </h2>
          <p className="text-xl font-bold text-accent max-w-2xl mt-4">
            Especialistas en todo tipo de trabajos relacionados con el sector de la Pintura Profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceImg = PlaceHolderImages.find(img => img.id === service.imageId);
            
            return (
              <div 
                key={index} 
                className="brutalist-card group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
              >
                <div className="relative h-48 mb-6 border-2 border-black overflow-hidden bg-muted shrink-0">
                  {serviceImg?.imageUrl && (
                    <Image
                      src={serviceImg.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-primary text-white p-3 border-2 border-black">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-black uppercase mb-3 tracking-tighter leading-tight">
                  {service.title}
                </h3>
                <p className="text-accent font-medium leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
