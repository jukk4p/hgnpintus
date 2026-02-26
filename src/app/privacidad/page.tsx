"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";

export default function PrivacidadPage() {
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
              POLÍTICA DE <span className="text-accent">PRIVACIDAD</span>
            </h1>
            
            <div className="space-y-6 text-foreground/80 font-medium leading-relaxed">
              <p>
                HGNPINTURAS informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o solicitud de presupuestos a través de este sitio web.
              </p>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">1. RECOGIDA Y TRATAMIENTO DE DATOS</h2>
              <p>
                HGNPINTURAS tiene el deber de informar a los usuarios de su sitio web acerca de la recogida de datos de carácter personal que pueden llevarse a cabo, bien sea mediante el envío de correo electrónico o al cumplimentar el formulario de contacto incluido en el sitio web.
              </p>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">2. FINALIDAD DEL TRATAMIENTO</h2>
              <p>
                Las operaciones, gestiones y procedimientos técnicos que se realicen de forma automatizada o no automatizada y que posibiliten la recogida, el almacenamiento, la modificación y otras acciones sobre datos de carácter personal, tienen la consideración de tratamiento de datos personales. HGNPINTURAS tratará los datos con la finalidad de gestionar las solicitudes de presupuesto y la relación comercial con los clientes.
              </p>

              <h2 className="text-2xl font-bebas uppercase mt-12 text-primary tracking-wider">3. DERECHOS DE LOS USUARIOS</h2>
              <p>
                El Reglamento General de Protección de Datos (RGPD) concede a los interesados la posibilidad de ejercer una serie de derechos relacionados con el tratamiento de sus datos personales:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong className="text-primary uppercase text-xs tracking-widest">Derecho de acceso:</strong> Conocer qué datos estamos tratando.</li>
                <li><strong className="text-primary uppercase text-xs tracking-widest">Derecho de rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
                <li><strong className="text-primary uppercase text-xs tracking-widest">Derecho de supresión:</strong> Solicitar la eliminación de sus datos.</li>
                <li><strong className="text-primary uppercase text-xs tracking-widest">Derecho de oposición:</strong> Oponerse al tratamiento de sus datos.</li>
                <li><strong className="text-primary uppercase text-xs tracking-widest">Derecho de limitación:</strong> Solicitar la suspensión del tratamiento.</li>
              </ul>
              <p className="mt-8 pt-8 border-t border-primary/10">
                Para el ejercicio de estos derechos, el usuario deberá dirigirse mediante comunicación escrita a HGNPINTURAS en Avenida Blanca Paloma, 64, 41100 Coria del Río, Sevilla, o enviando un email a <span className="text-accent font-bold">info@hnosgomeznovopinturas.es</span>.
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