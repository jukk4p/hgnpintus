"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";

export default function AvisoLegalPage() {
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
              AVISO <span className="text-accent">LEGAL</span>
            </h1>
            
            <div className="space-y-6 text-foreground/80 font-medium leading-relaxed">
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen los datos identificativos de la empresa:
              </p>
              
              <div className="bg-primary/5 p-6 border-2 border-primary/20 space-y-2 rounded-xl">
                <p><strong className="text-primary uppercase text-xs tracking-widest">Denominación Social:</strong> Hermanos Gómez Novo Pinturas (HGNPINTURAS)</p>
                <p><strong className="text-primary uppercase text-xs tracking-widest">NIF/CIF:</strong> [A completar por el cliente]</p>
                <p><strong className="text-primary uppercase text-xs tracking-widest">Domicilio Social:</strong> Avenida Blanca Paloma, 64, 41100 Coria del Río, Sevilla</p>
                <p><strong className="text-primary uppercase text-xs tracking-widest">Teléfono:</strong> +34 692 303 131</p>
                <p><strong className="text-primary uppercase text-xs tracking-widest">Email:</strong> info@hnosgomeznovopinturas.es</p>
              </div>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">1. OBJETO</h2>
              <p>
                El presente aviso legal regula el uso del sitio web hnosgomeznovopinturas.es, del que es titular HGNPINTURAS. La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena de las disposiciones incluidas en este Aviso Legal.
              </p>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">2. CONDICIONES DE USO</h2>
              <p>
                El usuario se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público y los usos del tráfico. Responderá frente a HGNPINTURAS o frente a terceros de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
              </p>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">3. PROPIEDAD INTELECTUAL</h2>
              <p>
                Todos los contenidos del sitio web, como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a HGNPINTURAS, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.
              </p>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">4. EXCLUSIÓN DE RESPONSABILIDAD</h2>
              <p>
                HGNPINTURAS no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza derivados de: la falta de disponibilidad del sitio web, errores u omisiones en los contenidos, o la transmisión de virus o programas maliciosos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>
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