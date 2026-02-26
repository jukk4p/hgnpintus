"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="brutalist-card bg-white p-8 md:p-12"
          >
            <h1 className="text-4xl md:text-6xl font-bebas uppercase tracking-tighter mb-8 border-b-4 border-primary inline-block text-primary">
              POLÍTICA DE <span className="text-accent">COOKIES</span>
            </h1>
            
            <div className="space-y-6 text-foreground/80 font-medium leading-relaxed">
              <p>
                En HGNPINTURAS utilizamos cookies para facilitar la navegación y mejorar la experiencia del usuario. A continuación encontrará información sobre qué son las cookies, qué tipos de cookies utiliza este sitio web y cómo puede desactivarlas en su navegador.
              </p>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">1. ¿QUÉ SON LAS COOKIES?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web que visita instalan en su ordenador o dispositivo móvil. Se utilizan ampliamente para que los sitios web funcionen, o para que lo hagan con mayor eficiencia, así como para proporcionar información a los propietarios del sitio.
              </p>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">2. TIPOS DE COOKIES UTILIZADAS</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong className="text-primary uppercase text-xs tracking-widest">Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan.
                </li>
                <li>
                  <strong className="text-primary uppercase text-xs tracking-widest">Cookies de análisis:</strong> Son aquellas que nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.
                </li>
              </ul>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">3. GESTIÓN DE LAS COOKIES</h2>
              <p>
                Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Si no permite la instalación de cookies en su navegador es posible que no pueda acceder a alguna de las secciones de nuestra web.
              </p>
              <div className="bg-primary/5 p-6 border-2 border-dashed border-primary/20 rounded-xl mt-8">
                <p className="text-xs font-bold uppercase tracking-widest text-primary/60">
                  Para más información sobre la configuración de las cookies en su navegador, consulte el menú de "Ayuda" del mismo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
      <WhatsAppWidget />
      <Toaster />
    </main>
  );
}