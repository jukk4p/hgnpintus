
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "María G.",
    location: "Los Palacios",
    text: "Trabajo impecable en nuestra fachada. Rápidos, limpios y el acabado es perfecto. Se nota la experiencia en trabajos verticales.",
    rating: 5
  },
  {
    name: "Juan Antonio R.",
    location: "Coria del Río",
    text: "Reformaron toda la planta baja de mi casa. El alisado de las paredes quedó como un espejo. Totalmente recomendables.",
    rating: 5
  },
  {
    name: "Comunidad de Propietarios",
    location: "Sevilla Este",
    text: "Gestionaron la impermeabilización de la azotea del bloque. Cero filtraciones desde entonces. Profesionales de los que ya no quedan.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[#F5F5F0]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bebas text-primary mb-4">Lo que dicen <span className="text-accent">nuestros clientes</span></h2>
          <p className="text-muted-foreground font-medium max-w-2xl mx-auto">Más de 200 familias y comunidades de propietarios en toda Sevilla confían en nuestro criterio profesional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-2xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-8 right-8 text-accent/20" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-lg font-medium text-primary/80 italic mb-8">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-accent/20">
                  <AvatarFallback className="bg-primary text-white font-bold">{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{t.location}</div>
                </div>
                <div className="ml-auto">
                   <div className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-green-100">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Verificado
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-accent/20">
            <span className="text-primary font-bold text-sm">Reseñas reales verificadas en</span>
            <span className="text-blue-600 font-bold">Google Maps</span>
            <div className="flex gap-0.5 ml-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
