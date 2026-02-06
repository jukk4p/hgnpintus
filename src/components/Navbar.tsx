"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 md:px-8 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors">
        HGN<span className="text-primary">.PINTURAS</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="font-black uppercase text-sm hover:text-primary transition-colors">Inicio</Link>
        <Link href="/servicios" className="font-black uppercase text-sm hover:text-primary transition-colors">Servicios</Link>
        <Link href="/proyectos" className="font-black uppercase text-sm hover:text-primary transition-colors">Proyectos</Link>
        <Link href="/sobre-nosotros" className="font-black uppercase text-sm hover:text-primary transition-colors">Nosotros</Link>
        <Link href="/#contacto" className="font-black uppercase text-sm hover:text-primary transition-colors">Contacto</Link>
      </div>

      <div className="flex items-center gap-4">
        <Button asChild className="hidden sm:inline-flex font-black uppercase bg-primary hover:bg-primary/90 brutalist-border h-10 px-6">
          <a href="tel:+34692303131">692 303 131</a>
        </Button>
      </div>
    </nav>
  );
}
