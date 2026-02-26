
"use client";

import { Brush, Building2, Mountain, Droplets, Palette, Hammer, Zap, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Pintura General",
    description: "Acabados de lujo en interiores y exteriores con limpieza total.",
    icon: Brush,
    imageId: "service-general",
  },
  {
    title: "Fachadas y Edificios",
    description: "Rehabilitación técnica y saneamiento de paramentos profesional.",
    icon: Building2,
    imageId: "service-fachada",
  },
  {
    title: "Trabajos Verticales",
    description: "Acceso seguro mediante cuerdas en altura sin andamios. Nuestro diferencial.",
    icon: Mountain,
    imageId: "service-vertical",
    featured: true
  },
  {
    title: "Impermeabilización",
    description: "Protección total contra filtraciones con poliuretano certificado.",
    icon: Droplets,
    imageId: "service-impermeabilizacion",
  },
  {
    title: "Pintura Industrial",
    description: "Soluciones de alta resistencia para naves y suelos epoxi.",
    icon: Hammer,
    imageId: "service-industrial",
  },
  {
    title: "Decorativa",
    description: "Estucos y efectos de alta decoración con acabado artesanal.",
    icon: Palette,
    imageId: "service-decorativa",
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-32 bg-background texture-overlay">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Excelencia Técnica
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bebas text-primary leading-none mb-8">
            Nuestros Servicios <span className="text-accent">Premium</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Llevamos el arte de la pintura a otro nivel. Combinamos experiencia técnica con los mejores materiales del mercado para resultados duraderos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const img = PlaceHolderImages.find(i => i.id === service.imageId);
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px] overflow-hidden rounded-xl shadow-2xl bg-primary"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end transition-transform duration-300 group-hover:-translate-y-2">
                  {service.featured && (
                    <div className="absolute top-6 right-6 bg-accent text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                      ★ Especialidad
                    </div>
                  )}
                  
                  <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                    <Icon className="text-accent group-hover:text-primary transition-colors" size={28} />
                  </div>
                  
                  <h3 className="text-3xl font-bebas text-white mb-2 tracking-wide">{service.title}</h3>
                  <p className="text-white/70 text-sm font-medium mb-6 line-clamp-2">{service.description}</p>
                  
                  <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Saber más <ArrowRight size={16} />
                  </div>
                </div>

                {/* Left Border Highlight */}
                <div className="absolute left-0 bottom-0 w-1 h-0 bg-accent transition-all duration-300 group-hover:h-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
