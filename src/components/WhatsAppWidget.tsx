"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppWidget() {
  const phoneNumber = "34692303131"; 
  const message = encodeURIComponent("¡Hola! He visto vuestra web y me gustaría solicitar un presupuesto gratis para un trabajo de pintura.");

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60] flex flex-col items-end gap-3 group">
      {/* Floating Prompt - Hidden on very small screens, shown on hover/large */}
      <span className="bg-white text-black px-4 py-2 border-2 border-black font-black text-xs md:text-sm whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce-slow">
        ¿PRESUPUESTO GRATIS?
      </span>
      
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "bg-[#25D366] text-white p-4 md:p-5 rounded-none border-4 border-black",
          "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
          "hover:scale-110 active:scale-95 transition-all flex items-center justify-center w-16 h-16 md:w-20 md:h-20"
        )}
        aria-label="WhatsApp"
      >
        <MessageCircle size={36} className="md:w-10 md:h-10" />
      </a>
    </div>
  );
}
