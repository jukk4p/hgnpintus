
"use client";

import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "34692303131"; 
  const message = encodeURIComponent("¡Hola! He visto vuestra web y me gustaría solicitar un presupuesto gratis.");

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
          {/* Mobile direct buttons stack */}
          <div className="flex flex-col gap-4">
             <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                href={`tel:+${phoneNumber}`}
                className="lg:hidden w-14 h-14 bg-accent text-primary rounded-full shadow-2xl flex items-center justify-center border-4 border-primary"
              >
                <Phone size={24} />
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="group flex flex-col items-end gap-4"
              >
                <div className="hidden lg:block bg-[#D4581A] text-white px-6 py-3 rounded-full font-bold text-sm shadow-2xl animate-pulse">
                  💬 ¿Necesitas un presupuesto?
                </div>
                
                <a
                  href={`https://wa.me/${phoneNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "bg-[#25D366] text-white p-5 rounded-full",
                    "shadow-[0_20px_50px_-10px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20"
                  )}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={40} />
                </a>
              </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
