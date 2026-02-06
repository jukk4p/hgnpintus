"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  const phoneNumber = "34692303131"; 
  const message = encodeURIComponent("¡Hola! He visto vuestra web y me gustaría solicitar un presupuesto gratis para un trabajo de pintura.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 md:p-5 rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform flex items-center justify-center border-4 border-black"
      aria-label="WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-12 right-0 bg-white text-black px-3 py-1 border-2 border-black font-black text-[10px] md:text-xs whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        ¿PRESUPUESTO GRATIS?
      </span>
    </a>
  );
}
