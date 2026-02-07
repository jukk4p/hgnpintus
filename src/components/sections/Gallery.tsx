
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery"));

  return (
    <section id="galeria" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 inline-block border-b-4 md:border-b-8 border-primary leading-tight">
            Trabajos Realizados
          </h2>
          <p className="text-lg md:text-xl font-bold text-secondary mt-4">
            Compromiso real con la calidad en cada proyecto. Resultados profesionales garantizados.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <GalleryItem key={index} img={img} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="px-1">
                    <GalleryItem img={img} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative translate-y-0 left-0" />
              <CarouselNext className="relative translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ img }: { img: any }) {
  return (
    <div className="break-inside-avoid">
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
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-black uppercase text-xs">{img.description}</p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl p-2 md:p-0 bg-transparent border-none">
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
  );
}
