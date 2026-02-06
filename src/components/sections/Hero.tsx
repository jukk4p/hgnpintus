"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-vertical");

  return (
    <section className="relative min-h-[60vh] md:min-h-[90vh] w-full overflow-hidden flex items-center border-b-4 border-black bg-secondary">
      <div className="absolute inset-0 z-0">
        {heroImage?.imageUrl ? (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description || "Hermanos Gómez Novo Pinturas"}
            fill
            className="object-cover"
            priority
            data-ai-hint="vertical painter"
          />
        ) : null}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95]">
              PINTURA <br />
              <span className="text-white bg-primary px-2">PROFESIONAL</span><br className="hidden sm:block" />
              & VERTICAL
            </h1>
            <p className="text-lg md:text-2xl font-bold max-w-2xl text-gray-200">
              Líderes en Coria del Río y Sevilla. Especialistas en fachadas y trabajos en altura sin andamios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-none h-14">
                <a href="#contacto">Solicitar Presupuesto</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white text-black rounded-none h-14">
                <a href="/servicios">Ver Servicios</a>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block brutalist-border overflow-hidden h-[400px] relative bg-white border-black">
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
            <div className="absolute top-4 left-4 bg-primary text-white p-2 font-black uppercase text-xs border-2 border-black">
              Coria del Río, Sevilla
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
