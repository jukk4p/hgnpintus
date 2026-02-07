"use client";

import { Navbar } from "@/components/Navbar";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="brutalist-card bg-white p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 border-b-4 border-primary inline-block">
              POLÍTICA DE <span className="text-primary">PRIVACIDAD</span>
            </h1>
            
            <div className="space-y-6 text-secondary font-bold leading-relaxed">
              <p>
                HGNPINTURAS informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o solicitud de presupuestos a través de este sitio web.
              </p>

              <h2 className="text-2xl font-black uppercase mt-12 text-black">1. RECOGIDA Y TRATAMIENTO DE DATOS</h2>
              <p>
                HGNPINTURAS tiene el deber de informar a los usuarios de su sitio web acerca de la recogida de datos de carácter personal que pueden llevarse a cabo, bien sea mediante el envío de correo electrónico o al cumplimentar el formulario de contacto incluido en el sitio web.
              </p>

              <h2 className="text-2xl font-black uppercase mt-12 text-black">2. FINALIDAD DEL TRATAMIENTO</h2>
              <p>
                Las operaciones, gestiones y procedimientos técnicos que se realicen de forma automatizada o no automatizada y que posibiliten la recogida, el almacenamiento, la modificación y otras acciones sobre datos de carácter personal, tienen la consideración de tratamiento de datos personales. HGNPINTURAS tratará los datos con la finalidad de gestionar las solicitudes de presupuesto y la relación comercial con los clientes.
              </p>

              <h2 className="text-2xl font-black uppercase mt-12 text-black">3. DERECHOS DE LOS USUARIOS</h2>
              <p>
                El Reglamento General de Protección de Datos (RGPD) concede a los interesados la posibilidad de ejercer una serie de derechos relacionados con el tratamiento de sus datos personales:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Derecho de acceso.</li>
                <li>Derecho de rectificación o supresión.</li>
                <li>Derecho de cancelación.</li>
                <li>Derecho de oposición.</li>
                <li>Derecho de limitación del tratamiento.</li>
              </ul>
              <p>
                Para el ejercicio de estos derechos, el usuario deberá dirigirse mediante comunicación escrita a HGNPINTURAS en Avenida Blanca Paloma, 64, 41100 Coria del Río, Sevilla, o enviando un email a info@hnosgomeznovopinturas.es.
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
