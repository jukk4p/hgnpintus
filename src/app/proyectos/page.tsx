
"use client";

import { Navbar } from "@/components/Navbar";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

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
      <Navbar />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              NUESTROS <br />
              <span className="text-primary">PROYECTOS</span>
            </h1>
            <p className="text-xl font-bold text-secondary">
              Una imagen vale más que mil palabras. Resultados reales de antes y después en Sevilla.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-white border-2 border-black p-1 h-auto mb-12 rounded-none flex-wrap">
              <TabsTrigger value="all" className="rounded-none font-black uppercase text-xs px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">Todos</TabsTrigger>
              <TabsTrigger value="fachadas" className="rounded-none font-black uppercase text-xs px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">Fachadas</TabsTrigger>
              <TabsTrigger value="vertical" className="rounded-none font-black uppercase text-xs px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">Verticales</TabsTrigger>
              <TabsTrigger value="industrial" className="rounded-none font-black uppercase text-xs px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">Industrial</TabsTrigger>
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

      <WhatsAppWidget />
      <Toaster />
    </main>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="brutalist-card bg-white p-0 overflow-hidden flex flex-col">
      <div className="grid grid-cols-2 gap-1 bg-black border-b-2 border-black">
        <div className="relative aspect-[4/5] bg-muted">
          {project.before && <Image src={project.before} alt={project.beforeAlt} fill className="object-cover" />}
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-[10px] font-black uppercase">Antes</div>
        </div>
        <div className="relative aspect-[4/5] bg-muted">
          {project.after && <Image src={project.after} alt={project.afterAlt} fill className="object-cover" />}
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 text-[10px] font-black uppercase">Después</div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-black uppercase tracking-tighter">{project.title}</h3>
          <span className="bg-accent px-2 py-1 text-[10px] font-black border-2 border-black uppercase">{project.category}</span>
        </div>
        <p className="font-bold text-secondary text-sm">{project.desc}</p>
        <div className="mt-6 flex items-center text-primary font-black uppercase text-xs gap-2">
          Ver detalle del proyecto <ArrowRight size={14} />
        </div>
      </div>
    </div>
  ); project
}
