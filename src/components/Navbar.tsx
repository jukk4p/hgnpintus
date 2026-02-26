
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
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

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Lógica de Navbar Inteligente
  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    const threshold = 150;

    if (pathname === "/") {
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
        animate={{ y: isVisible || isOpen ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 z-[60] w-full transition-all duration-500",
          isScrolled || isOpen
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
              className="lg:hidden p-2 text-white hover:text-accent transition-all active:scale-90"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed inset-0 top-0 left-0 w-full bg-primary flex flex-col z-[-1] overflow-hidden"
            >
              <div className="flex flex-col h-full pt-32 pb-12 px-8 overflow-y-auto">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between text-5xl font-bebas transition-colors tracking-tight",
                          pathname === link.href ? "text-accent" : "text-white hover:text-accent"
                        )}
                      >
                        {link.label}
                        <ArrowRight size={32} className={cn("transition-opacity", pathname === link.href ? "opacity-100" : "opacity-20")} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-auto space-y-8"
                >
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Atención Directa</p>
                    <a href="tel:+34692303131" className="flex items-center gap-4 text-white hover:text-accent transition-colors">
                      <div className="p-4 bg-accent/10 rounded-full border border-accent/20">
                        <Phone size={24} className="text-accent" />
                      </div>
                      <span className="text-2xl font-bebas tracking-widest">692 303 131</span>
                    </a>
                  </div>

                  <Button asChild className="w-full h-16 font-bebas text-xl bg-accent text-primary border-none rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:scale-95 transition-all">
                    <Link href="/#contacto" onClick={() => setIsOpen(false)}>
                      PEDIR PRESUPUESTO GRATIS
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Elementos decorativos de fondo */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mb-32 -mr-32 pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
