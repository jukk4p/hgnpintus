"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/sobre-nosotros", label: "Nosotros" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full bg-white transition-all duration-300",
      scrolled ? "border-b-4 border-black py-2 shadow-md" : "border-b-4 border-black py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors shrink-0"
          onClick={() => setIsOpen(false)}
        >
          HGN<span className="text-primary">PINTURAS</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-black uppercase text-sm hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex font-black uppercase bg-primary hover:bg-primary/90 brutalist-border h-10 px-6">
            <a href="tel:+34692303131">692 303 131</a>
          </Button>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black hover:bg-accent transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black transition-all duration-300 overflow-hidden shadow-2xl",
        isOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="font-black uppercase text-xl border-b-2 border-dashed border-black/10 py-4 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6">
            <Button asChild className="w-full font-black uppercase bg-primary brutalist-border h-16 text-lg">
              <a href="tel:+34692303131" className="flex items-center justify-center gap-2">
                <Phone size={20} /> LLAMAR AHORA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
