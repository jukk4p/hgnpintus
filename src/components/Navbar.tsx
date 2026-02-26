
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Lógica de Navbar Inteligente
  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    const threshold = 150;

    if (pathname === "/") {
      // Comportamiento en HOME
      if (latest < 50) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (direction === "down" && latest > threshold) {
        setIsVisible(false);
      } else if (direction === "up") {
        setIsVisible(true);
        setIsScrolled(true);
      }
    } else {
      // Comportamiento en OTRAS PÁGINAS (siempre sólida pero se oculta al bajar)
      setIsScrolled(true);
      if (latest < 50) {
        setIsVisible(true);
      } else if (direction === "down" && latest > threshold) {
        setIsVisible(false);
      } else if (direction === "up") {
        setIsVisible(true);
      }
    }
    
    lastScrollY.current = latest;
  });

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/sobre-nosotros", label: "Nosotros" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          isScrolled 
            ? "bg-primary/95 backdrop-blur-md py-3 shadow-2xl border-b border-accent/20" 
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link 
            href="/" 
            className="group flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-2xl md:text-4xl font-bebas tracking-wider text-white">
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
                  "relative font-bold text-xs transition-colors group uppercase tracking-[0.2em]",
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
            <Button asChild className="hidden sm:inline-flex font-black bg-accent text-primary hover:bg-white transition-all px-8 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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
              className="lg:hidden fixed inset-0 z-[60] bg-primary flex flex-col p-12"
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
                      "text-5xl font-bebas transition-colors tracking-widest",
                      pathname === link.href ? "text-accent" : "text-white hover:text-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto">
                <Button asChild className="w-full h-20 font-bebas text-2xl bg-accent text-primary border-none rounded-none">
                  <a href="tel:+34692303131" className="flex items-center justify-center gap-4">
                    <Phone size={24} /> LLAMAR AHORA
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
