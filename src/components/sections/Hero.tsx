"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-vertical");

  return (
    <section className="relative min-h-[60vh] md:min-h-[90vh] w-full overflow-hidden flex items-center border-b-4 border-black bg-secondary">
      {/* Background Image with Fallback */}
      <div className="absolute inset-0 z-0">
        {heroImage?.imageUrl ? (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description || "HGNPINTURAS - Pintores Profesionales Sevilla"}
            fill
            className="object-cover"
            priority
            data-ai-hint="vertical painter"
          />
        ) : (
          <div className="w-full h-full bg-secondary" />
        )}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <span className="inline-block bg-primary text-white px-3 py-1 text-[10px] md:text-sm font-black uppercase tracking-widest border-2 border-black mb-4">
                Líderes en Sevilla
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.95]">
                PINTURA <br />
                <span className="text-primary bg-white px-2">PROFESIONAL</span><br className="hidden sm:block" />
                & VERTICAL
              </h1>
            </div>
            <p className="text-sm md:text-2xl font-bold max-w-2xl text-gray-200 leading-relaxed">
              Especialistas en fachadas y trabajos en altura sin andamios en Coria del Río y toda la provincia. Calidad certificada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto h-14 md:h-16 text-base md:text-lg">
                <a href="#contacto">Solicitar Presupuesto</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white text-black h-14 md:h-16 text-base md:text-lg">
                <a href="/servicios">Ver Servicios</a>
              </Button>
            </div>
          </div>

          {/* Desktop Map Element - Hidden on Mobile */}
          <div className="hidden lg:block brutalist-border overflow-hidden h-[450px] relative bg-white border-black transform rotate-1 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.328764038166!2d-6.0527!3d37.2882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd120e29206b83f3%3A0x6334543d8a17688c!2sAv.%20Blanca%20Paloma%2C%2064%2C%2041100%20Coria%20del%20R%C3%ADo%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps Coria del Río"
              className="grayscale contrast-125"
            ></iframe>
            <div className="absolute top-4 left-4 bg-primary text-white p-3 font-black uppercase text-xs border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Coria del Río, Sevilla
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}