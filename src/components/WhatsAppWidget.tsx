
"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  const phoneNumber = "34600000000"; // Placeholder phone
  const message = encodeURIComponent("Hola! Me gustaría solicitar un presupuesto para un trabajo de pintura.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
