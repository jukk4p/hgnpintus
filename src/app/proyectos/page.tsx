
"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      id: "p1",
      category: "fachadas",
      title: "Rehabilitación en Coria",
      desc: "Limpieza y pintura acrílica en bloque de viviendas.",
      before: PlaceHolderImages.find(i => i.id === "gallery1")?.imageUrl,
      after: PlaceHolderImages.find(i => i.id === "gallery7")?.imageUrl,
      beforeAlt: "Estado inicial de fachada en Coria del Río antes de la pintura Hnos Gómez Novo",
      afterAlt: "Pintura general interior y exterior Hnos Gómez Novo Coria del Río - Resultado Final"
    },
    {
      id: "p2",
      category: "vertical",
      title: "Torre Residencial",
      desc: "Reparación de cornisas mediante trabajos verticales.",
      before: PlaceHolderImages.find(i => i.id === "gallery2")?.imageUrl,
      after: PlaceHolderImages.find(i => i.id === "gallery6")?.imageUrl,
      beforeAlt: "Preparación de trabajos verticales en torre Sevilla Hnos Gómez Novo",
      afterAlt: "Mantenimiento de pintura en comunidades de vecinos Hnos Gómez Novo Sevilla"
    },
    {
      id: "p3",
      category: "impermeabilizacion",
      title: "Azotea Aljarafe",
      desc: "Aplicación de poliuretano sobre baldosín catalán.",
      before: PlaceHolderImages.find(i => i.id === "gallery3")?.imageUrl,
      after: PlaceHolderImages.find(i => i.id === "gallery8")?.imageUrl,
      beforeAlt: "Filtraciones en azotea antes de impermeabilizar Hnos Gómez Novo Sevilla",
      afterAlt: "Impermeabilización de tejados y terrazas con garantía Hnos Gómez Novo Sevilla"
    },
    {
        id: "p4",
        category: "industrial",
        title: "Nave Industrial",
        desc: "Pintura epoxi en suelos de alta resistencia.",
        before: PlaceHolderImages.find(i => i.id === "gallery5")?.imageUrl,
        after: PlaceHolderImages.find(i => i.id === "gallery4")?.imageUrl,
        beforeAlt: "Suelo industrial deteriorado en Sevilla Hnos Gómez Novo",
        afterAlt: "Pintura industrial de naves y suelos epoxi Hnos Gómez Novo Sevilla"
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-28 pb-12 md:pt-40 md:pb-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bebas uppercase tracking-tighter mb-6 leading-tight md:leading-none"
            >
              NUESTROS <br />
              <span className="text-primary">PROYECTOS</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-foreground/80"
            >
              Una imagen vale más que mil palabras. Resultados reales de antes y después en Sevilla.
            </motion.p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-white border-2 border-black p-1 h-auto mb-12 rounded-none flex-wrap gap-2">
              <TabsTrigger value="all" className="rounded-none font-black uppercase text-xs px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white border-2 border-transparent data-[state=active]:border-black transition-all">Todos</TabsTrigger>
              <TabsTrigger value="fachadas" className="rounded-none font-black uppercase text-xs px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white border-2 border-transparent data-[state=active]:border-black transition-all">Fachadas</TabsTrigger>
              <TabsTrigger value="vertical" className="rounded-none font-black uppercase text-xs px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white border-2 border-transparent data-[state=active]:border-black transition-all">Verticales</TabsTrigger>
              <TabsTrigger value="industrial" className="rounded-none font-black uppercase text-xs px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white border-2 border-transparent data-[state=active]:border-black transition-all">Industrial</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            {["fachadas", "vertical", "industrial"].map(cat => (
              <TabsContent key={cat} value={cat} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {projects.filter(p => p.category === cat).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="brutalist-card bg-white p-0 overflow-hidden flex flex-col group"
    >
      <div className="grid grid-cols-2 gap-1 bg-black border-b-2 border-black overflow-hidden">
        <div className="relative aspect-[4/5] bg-muted">
          {project.before && <Image src={project.before} alt={project.beforeAlt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />}
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-[10px] font-black uppercase z-10">Antes</div>
        </div>
        <div className="relative aspect-[4/5] bg-muted">
          {project.after && <Image src={project.after} alt={project.afterAlt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />}
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 text-[10px] font-black uppercase z-10">Después</div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-bebas uppercase tracking-tighter text-primary">{project.title}</h3>
          <span className="bg-accent px-3 py-1 text-[10px] font-black border-2 border-black uppercase text-primary-foreground">{project.category}</span>
        </div>
        <p className="font-bold text-foreground/70 text-base leading-relaxed">{project.desc}</p>
        <div className="mt-8 flex items-center text-primary font-black uppercase text-xs gap-2 group-hover:gap-4 transition-all">
          Ver detalle del proyecto <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
}
