"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-vertical");

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center border-b-4 border-black">
      <div className="absolute inset-0 z-0">
        {heroImage?.imageUrl ? (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint="vertical painter"
          />
        ) : (
          <div className="absolute inset-0 bg-accent" />
        )}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              PINTURA <br />
              <span className="text-primary bg-white px-2">PROFESIONAL</span><br />
              & VERTICAL
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-2xl text-gray-200">
              Líderes en Coria del Río y Sevilla. Rehabilitación de fachadas, pintura industrial y trabajos verticales sin andamios.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="h-16 px-8 text-xl font-black brutalist-border uppercase bg-primary hover:bg-primary/90 rounded-none">
                <a href="#contacto">Solicitar Presupuesto</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-8 text-xl font-black brutalist-border uppercase bg-white text-black hover:bg-gray-100 rounded-none border-black">
                <a href="/servicios">Nuestros Servicios</a>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block brutalist-border overflow-hidden h-[400px] relative bg-white border-black">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12702.483!2d-5.95!3d37.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps Coria del Río"
              className="grayscale contrast-125"
            ></iframe>
            <div className="absolute top-4 left-4 bg-primary text-white p-2 font-black uppercase text-xs border-2 border-black">
              Coria del Río, Sevilla
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
