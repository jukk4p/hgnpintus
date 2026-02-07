"use client";

import { Navbar } from "@/components/Navbar";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="brutalist-card bg-white p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 border-b-4 border-primary inline-block">
              AVISO <span className="text-primary">LEGAL</span>
            </h1>
            
            <div className="space-y-6 text-secondary font-bold leading-relaxed">
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen los datos identificativos de la empresa:
              </p>
              
              <div className="bg-accent/10 p-6 border-2 border-black space-y-2">
                <p><strong>Denominación Social:</strong> Hermanos Gómez Novo Pinturas (HGNPINTURAS)</p>
                <p><strong>NIF/CIF:</strong> [A completar por el cliente]</p>
                <p><strong>Domicilio Social:</strong> Avenida Blanca Paloma, 64, 41100 Coria del Río, Sevilla</p>
                <p><strong>Teléfono:</strong> +34 692 303 131</p>
                <p><strong>Email:</strong> info@hnosgomeznovopinturas.es</p>
              </div>

              <h2 className="text-2xl font-black uppercase mt-12 text-black">1. OBJETO</h2>
              <p>
                El presente aviso legal regula el uso del sitio web hnosgomeznovopinturas.es, del que es titular HGNPINTURAS. La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena de las disposiciones incluidas en este Aviso Legal.
              </p>

              <h2 className="text-2xl font-black uppercase mt-12 text-black">2. CONDICIONES DE USO</h2>
              <p>
                El usuario se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público y los usos del tráfico. Responderá frente a HGNPINTURAS o frente a terceros de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
              </p>

              <h2 className="text-2xl font-black uppercase mt-12 text-black">3. PROPIEDAD INTELECTUAL</h2>
              <p>
                Todos los contenidos del sitio web, como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a HGNPINTURAS, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.
              </p>

              <h2 className="text-2xl font-black uppercase mt-12 text-black">4. EXCLUSIÓN DE RESPONSABILIDAD</h2>
              <p>
                HGNPINTURAS no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza derivados de: la falta de disponibilidad del sitio web, errores u omisiones en los contenidos, o la transmisión de virus o programas maliciosos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppWidget />
      <Toaster />
    </main>
  );
}
