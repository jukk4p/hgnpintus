
"use client";

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bebas uppercase tracking-tighter mb-8 border-b-4 border-primary inline-block text-primary">
              AVISO <span className="text-accent">LEGAL</span>
            </h1>
            
            <div className="space-y-6 text-foreground font-medium leading-relaxed">
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen los datos identificativos de la empresa:
              </p>
              
              <div className="bg-primary/5 p-6 border-2 border-primary/20 space-y-2 rounded-xl">
                <p><strong className="text-primary uppercase text-xs tracking-widest">Denominación Social:</strong> Hermanos Gómez Novo Pinturas (HGNPINTURAS)</p>
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
                El usuario se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público y los usos del tráfico. HGNPINTURAS responderá frente a HGNPINTURAS o frente a terceros de cualesquiera daños y perjuicios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
