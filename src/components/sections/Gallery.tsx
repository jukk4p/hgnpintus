
"use client";

import { useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Maximize2 } from "lucide-react";

const categories = ["Todos", "Fachadas", "Interiores", "Verticales", "Impermeabilización", "Industrial"];

export function Gallery() {
  const [filter, setFilter] = useState("Todos");
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery"));

  const filteredImages = filter === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => {
        // En una app real esto vendría de los datos del proyecto
        if (filter === "Fachadas") return img.id === "gallery1" || img.id === "gallery7";
        if (filter === "Verticales") return img.id === "gallery2" || img.id === "gallery6";
        if (filter === "Impermeabilización") return img.id === "gallery3";
        if (filter === "Industrial") return img.id === "gallery5";
        return true;
      });

  return (
    <section id="galeria" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bebas text-primary leading-none mb-6">
              Portafolio de <span className="text-accent">Proyectos</span>
            </h2>
            <p className="text-muted-foreground font-medium">
              Resultados reales que hablan por sí solos. Transformamos espacios con precisión técnica.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-primary text-accent shadow-xl scale-105" 
                    : "bg-secondary text-primary/60 hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <GalleryItem key={img.id} img={img} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryItem({ img, index }: { img: any, index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="break-inside-avoid"
    >
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative group overflow-hidden rounded-xl cursor-pointer bg-primary">
            <Image
              src={img.imageUrl}
              alt={img.description}
              width={600}
              height={800}
              className="w-full h-auto transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
              <Plus className="text-accent mb-4" size={48} />
              <p className="text-white font-bebas text-2xl tracking-widest uppercase">{img.description}</p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-5xl p-2 bg-transparent border-none">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={img.imageUrl}
              alt={img.description}
              fill
              className="object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
