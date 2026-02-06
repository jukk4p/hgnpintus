"use client";

import { useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery"));

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 inline-block border-b-8 border-primary">
            Trabajos Realizados
          </h2>
          <p className="text-xl font-bold text-accent mt-4">
            Compromiso con la calidad en cada proyecto en Sevilla y provincia.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="break-inside-avoid">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="brutalist-border overflow-hidden cursor-pointer group bg-black relative">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      width={600}
                      height={800}
                      className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      data-ai-hint={img.imageHint}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="font-black uppercase text-xs">{img.description}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
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