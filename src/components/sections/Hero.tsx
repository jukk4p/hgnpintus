"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero");

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center border-b-4 border-black">
      <div className="absolute inset-0 z-0">
        {heroImage?.imageUrl ? (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description || "Hermanos Gómez Novo Pinturas"}
            fill
            className="object-cover"
            priority
            data-ai-hint="painter professional"
          />
        ) : null}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-4xl space-y-6 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            HNOS. GÓMEZ <br />
            <span className="text-primary bg-white px-2">NOVO PINTURAS</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-2xl text-gray-200">
            Empresa de referencia en el sector de la Pintura Profesional. Amplia experiencia y personal altamente cualificado en Coria del Río y Sevilla.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="h-16 px-8 text-xl font-black brutalist-border uppercase bg-primary hover:bg-primary/90">
              <a href="#contacto">Solicitar Presupuesto</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-8 text-xl font-black brutalist-border uppercase bg-white text-black hover:bg-gray-100">
              <a href="#galeria">Ver Proyectos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
