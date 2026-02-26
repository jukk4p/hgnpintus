
"use client";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bebas uppercase tracking-tighter mb-8 border-b-4 border-primary inline-block text-primary">
              POLÍTICA DE <span className="text-accent">PRIVACIDAD</span>
            </h1>
            
            <div className="space-y-6 text-foreground font-medium leading-relaxed">
              <p>
                HGNPINTURAS informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación.
              </p>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">1. RECOGIDA Y TRATAMIENTO DE DATOS</h2>
              <p>
                HGNPINTURAS tiene el deber de informar a los usuarios de su sitio web acerca de la recogida de datos de carácter personal que pueden llevarse a cabo mediante el envío de correo electrónico.
              </p>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">2. DERECHOS DE LOS USUARIOS</h2>
              <p>
                El Reglamento General de Protección de Datos (RGPD) concede a los interesados la posibilidad de ejercer una serie de derechos relacionados con el tratamiento de sus datos personales como acceso, rectificación y supresión.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
