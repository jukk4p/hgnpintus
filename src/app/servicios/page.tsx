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
    description: "Servicios integrales para casas, pisos y locales comerciales. Especialistas en alisado de paredes (quitar gotelé) y acabados plásticos de alta calidad.",
    price: "~15€/m²",
    icon: Brush,
    imageId: "service-general",
  },
  {
    title: "PINTURA INDUSTRIAL",
    category: "Naves y Fábricas",
    description: "Soluciones de alta resistencia para naves industriales y suelos epoxi. Pinturas preparadas para soportar alta abrasión y productos químicos.",
    price: "~20€/m²",
    icon: Hammer,
    imageId: "service-industrial",
  },
  {
    title: "PINTURA DECORATIVA",
    category: "Alta Decoración",
    description: "Expertos en estucos, rústicos, veladuras y esponjados. Transformamos tus espacios en obras de arte con las últimas tendencias decorativas.",
    price: "~25€/m²",
    icon: Palette,
    imageId: "service-decorativa",
  },
  {
    title: "IMPERMEABILIZACIONES",
    category: "Tejados y Terrazas",
    description: "Eliminamos goteras de raíz. Aplicación de cauchos, poliuretanos y pinturas anticongelantes con garantía total de estanqueidad.",
    price: "~18€/m²",
    icon: Droplets,
    imageId: "service-impermeabilizacion",
  },
  {
    title: "REHABILITACIÓN FACHADAS",
    category: "Edificios",
    description: "Cumplimiento de la ITE. Reparación de grietas, saneamiento de paramentos y pintura acrílica de larga duración para comunidades.",
    price: "~22€/m²",
    icon: Building2,
    imageId: "service-fachada",
  },
  {
    title: "TRABAJOS VERTICALES",
    category: "Sin Andamios",
    description: "Acceso seguro mediante cuerdas para zonas de difícil acceso. Pintura en altura con certificaciones IRATA y máxima seguridad laboral.",
    price: "Consulte presupuesto",
    icon: Mountain,
    imageId: "service-vertical",
  },
  {
    title: "REFORMAS RÁPIDAS",
    category: "Mantenimiento",
    description: "Parches urgentes, humedades y pequeños alisados. Presupuesto en 24h para intervenciones inmediatas en su vivienda o local.",
    price: "Económico",
    icon: Zap,
    imageId: "service-reformas",
  },
  {
    title: "MANTENIMIENTO COMUNIDADES",
    category: "Servicio Continuo",
    description: "Planes anuales para portales, escaleras y zonas comunes. Trabajamos sin interrupciones para el bienestar de los vecinos.",
    price: "Tarifa plana",
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
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              NUESTROS SERVICIOS <br />
              <span className="text-primary">PROFESIONALES</span>
            </h1>
            <p className="text-xl font-bold text-accent">
              Especialistas en Sevilla con más de 20 años de trayectoria. Todos nuestros trabajos cuentan con 2 años de garantía certificada por escrito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              const img = PlaceHolderImages.find(i => i.id === service.imageId);
              return (
                <div key={index} className="brutalist-card flex flex-col group h-full">
                  <div className="relative h-48 mb-6 border-2 border-black overflow-hidden shrink-0">
                    {img && (
                      <Image
                        src={img.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    )}
                    <div className="absolute top-2 left-2 bg-primary text-white p-2 border-2 border-black z-10">
                      <Icon size={20} />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <span className="text-[10px] font-black uppercase text-primary tracking-widest bg-primary/10 px-2 py-0.5">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-black uppercase mt-1 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-accent leading-relaxed">
                      {service.description}
                    </p>
                    <div className="pt-4 border-t-2 border-dashed border-black/10 flex justify-between items-center">
                      <span className="font-black text-sm">{service.price}</span>
                      <Button asChild size="sm" className="bg-black text-white hover:bg-primary font-black uppercase text-[10px] h-8 px-4">
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

      <section className="py-24 bg-accent text-white border-y-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black uppercase mb-8 italic">"Trabajo impecable, rápidos y muy limpios en el portal de nuestra comunidad."</h2>
          <p className="font-bold opacity-70">— Administrador de Fincas, Coria del Río</p>
        </div>
      </section>

      <footer className="py-12 bg-white text-black border-t-4 border-black">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h3 className="text-3xl font-black uppercase tracking-tighter italic">HGN<span className="text-primary">.PINTURAS</span></h3>
          <p className="font-bold opacity-80">© {new Date().getFullYear()} Hermanos Gómez Novo. Pintura de Confianza.</p>
        </div>
      </footer>

      <WhatsAppWidget />
      <Toaster />
    </main>
  );
}