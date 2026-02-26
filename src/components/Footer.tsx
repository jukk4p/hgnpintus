
"use client";

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="py-24 bg-[#111827] text-white border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bebas tracking-wider text-accent">HGNPINTURAS</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs uppercase tracking-widest font-bold">
              Más de 15 años liderando la pintura profesional y vertical en Sevilla. Calidad sin compromisos.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bebas text-white tracking-widest uppercase">Navegación</h4>
            <ul className="space-y-4 text-sm font-bold text-white/40 uppercase tracking-widest">
              <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="hover:text-accent transition-colors">Servicios</Link></li>
              <li><Link href="/proyectos" className="hover:text-accent transition-colors">Proyectos</Link></li>
              <li><Link href="/sobre-nosotros" className="hover:text-accent transition-colors">Nosotros</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bebas text-white tracking-widest uppercase">Servicios Top</h4>
            <ul className="space-y-4 text-sm font-bold text-white/40 uppercase tracking-widest">
              <li><Link href="/servicios" className="hover:text-accent transition-colors">Trabajos Verticales</Link></li>
              <li><Link href="/servicios" className="hover:text-accent transition-colors">Pintura Fachadas</Link></li>
              <li><Link href="/servicios" className="hover:text-accent transition-colors">Impermeabilización</Link></li>
              <li><Link href="/servicios" className="hover:text-accent transition-colors">Suelos Epoxi</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bebas text-white tracking-widest uppercase">Contacto</h4>
            <ul className="space-y-4 text-sm font-bold text-white/40 uppercase tracking-widest">
              <li>Coria del Río, Sevilla</li>
              <li>692 303 131</li>
              <li>info@hnosgomeznovopinturas.es</li>
              <li>Lun - Vie: 8:00 - 19:00</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
            © {year || "2025"} Hermanos Gómez Novo. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-white/60 uppercase tracking-[0.3em]">
            <Link 
              href="/aviso-legal" 
              className="hover:text-accent transition-colors"
            >
              Aviso Legal
            </Link>
            <Link 
              href="/privacidad" 
              className="hover:text-accent transition-colors"
            >
              Privacidad
            </Link>
            <Link 
              href="/politica-cookies" 
              className="hover:text-accent transition-colors"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
