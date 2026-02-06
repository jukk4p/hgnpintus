"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  const phoneNumber = "34655123456"; 
  const message = encodeURIComponent("¡Hola! He visto vuestra web y me gustaría solicitar un presupuesto gratis para un trabajo de pintura.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-black"
      aria-label="¡Presupuesto gratis pintura?"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-12 right-0 bg-white text-black px-3 py-1 rounded-none border-2 border-black font-black text-xs whitespace-nowrap hidden md:block">
        ¿PRESUPUESTO GRATIS?
      </span>
    </a>
  );
}