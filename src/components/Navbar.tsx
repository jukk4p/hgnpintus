
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // La navbar es sólida si hemos hecho scroll O si no estamos en la Home (donde no hay Hero oscuro)
  const isSolid = scrolled || pathname !== "/";

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/sobre-nosotros", label: "Nosotros" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500",
      isSolid 
        ? "bg-primary/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/10" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          href="/" 
          className="group flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-2xl md:text-3xl font-bebas tracking-wider text-white">
            HGN<span className="text-accent group-hover:text-white transition-colors">PINTURAS</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                "relative font-medium text-sm transition-colors group uppercase tracking-widest",
                pathname === link.href ? "text-accent" : "text-white/90 hover:text-accent"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Button asChild className="hidden sm:inline-flex font-bold bg-accent text-primary hover:bg-white transition-all px-8 rounded-sm shadow-lg border-none">
            <a href="tel:+34692303131" className="flex items-center gap-2">
              <Phone size={16} /> 692 303 131
            </a>
          </Button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-50 bg-primary flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-bebas text-white">HGNPINTURAS</span>
              <button onClick={() => setIsOpen(false)} className="text-white"><X size={32} /></button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-4xl font-bebas transition-colors",
                    pathname === link.href ? "text-accent" : "text-white hover:text-accent"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto">
              <Button asChild className="w-full h-16 font-bebas text-2xl bg-accent text-primary border-none">
                <a href="tel:+34692303131" className="flex items-center justify-center gap-4">
                  <Phone size={24} /> LLAMAR AHORA
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
