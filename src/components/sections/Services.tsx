
"use client";

import { Brush, Building2, Hammer, ClipboardCheck } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    title: "Pintura Profesional",
    description: "Interiores y exteriores con acabados impecables y materiales de primera calidad.",
    icon: Brush,
    imageId: "service-pintura",
  },
  {
    title: "Trabajos Verticales",
    description: "Especialistas en fachadas y lugares de difícil acceso sin necesidad de andamios.",
    icon: Building2,
    imageId: "service-vertical",
  },
  {
    title: "Reformas Rápidas",
    description: "Renovaciones parciales o totales de viviendas y locales comerciales en tiempo récord.",
    icon: Hammer,
    imageId: "service-reformas",
  },
  {
    title: "Mantenimiento",
    description: "Programas de mantenimiento preventivo para comunidades de vecinos y empresas.",
    icon: ClipboardCheck,
    imageId: "service-mantenimiento",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 inline-block border-b-8 border-primary">
            Nuestros Servicios
          </h2>
          <p className="text-xl font-bold text-accent max-w-2xl mt-4">
            Ofrecemos soluciones integrales para cualquier tipo de superficie y estructura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceImg = PlaceHolderImages.find(img => img.id === service.imageId);
            
            return (
              <div 
                key={index} 
                className="brutalist-card group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-48 mb-6 border-2 border-black overflow-hidden">
                  <Image
                    src={serviceImg?.imageUrl || ""}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white p-3 border-2 border-black">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-accent font-medium leading-relaxed">
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
