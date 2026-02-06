
"use client";

import { useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery"));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-right">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 inline-block border-b-8 border-primary">
            Proyectos Reales
          </h2>
          <p className="text-xl font-bold text-accent mt-4">
            Echa un vistazo a nuestros últimos trabajos realizados en Sevilla y alrededores.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="break-inside-avoid">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="brutalist-border overflow-hidden cursor-pointer group bg-black">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      width={600}
                      height={800}
                      className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      data-ai-hint={img.imageHint}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                  <div className="relative w-full aspect-square md:aspect-video brutalist-border bg-white p-2">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
