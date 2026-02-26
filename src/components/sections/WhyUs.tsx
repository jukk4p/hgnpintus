
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Sparkles, MapPin } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Garantía por escrito",
    desc: "Todos nuestros trabajos incluyen garantía documental de acabado."
  },
  {
    icon: FileText,
    title: "Presupuesto detallado",
    desc: "Sin sorpresas. Precio cerrado y detallado antes de empezar."
  },
  {
    icon: Sparkles,
    title: "Limpieza total",
    desc: "Dejamos la obra impecable, como si nunca hubiéramos estado."
  },
  {
    icon: MapPin,
    title: "Confianza local",
    desc: "Más de 15 años trabajando en Sevilla. Te conocemos y te conocen."
  }
];

export function WhyUs() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bebas text-white leading-none mb-4"
          >
            ¿Por qué confiar en <span className="text-accent">HGNPINTURAS</span>?
          </motion.h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                <item.icon className="text-accent" size={40} />
              </div>
              <h3 className="text-2xl font-bebas text-white mb-4 tracking-wide">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-white/10 text-center">
          <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-10">Trabajamos solo con materiales de primera calidad</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
             <span className="text-2xl font-black text-white">TITAN</span>
             <span className="text-2xl font-black text-white">VALENTINE</span>
             <span className="text-2xl font-black text-white">SIKA</span>
             <span className="text-2xl font-black text-white">STO</span>
             <span className="text-2xl font-black text-white">KNAUF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
