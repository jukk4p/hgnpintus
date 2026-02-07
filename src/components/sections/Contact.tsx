"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, Send } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Presupuesto Solicitado!",
        description: "En menos de 24h nos pondremos en contacto contigo.",
      });
    }, 1500);
  };

  const services = [
    "Pintura General", 
    "Fachadas", 
    "Verticales", 
    "Industrial", 
    "Decorativa", 
    "Impermeabilización", 
    "Reformas", 
    "Comunidades", 
    "Otros"
  ];

  return (
    <section id="contacto" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 inline-block border-b-4 md:border-b-8 border-primary">
                ¿Hablamos?
              </h2>
              <p className="text-lg md:text-xl font-bold text-accent max-w-md">
                Presupuesto sin compromiso en toda Sevilla.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary text-white p-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-accent/60">Llamar</h4>
                  <p className="text-lg md:text-xl font-bold text-accent">692 303 131</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent text-white p-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-accent/60">Email</h4>
                  <p className="text-lg md:text-xl font-bold text-accent">info@hnosgomeznovopinturas.es</p>
                </div>
              </div>
            </div>
          </div>

          <div className="brutalist-card bg-white p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-black uppercase">Nombre Completo</Label>
                  <Input id="name" required className="border-2 border-black rounded-none h-12 text-base" placeholder="Tu nombre..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-black uppercase">Teléfono de Contacto</Label>
                  <Input id="phone" type="tel" required className="border-2 border-black rounded-none h-12 text-base" placeholder="Tu teléfono..." />
                </div>
              </div>
              
              <div className="space-y-4">
                <Label className="text-xs font-black uppercase block mb-2">¿Qué necesitas?</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <div key={s} className="flex items-center space-x-2 bg-accent/10 p-2 border border-black/5 hover:bg-accent/20 transition-colors">
                      <Checkbox id={s} className="border-2 border-black rounded-none" />
                      <label htmlFor={s} className="text-xs font-bold uppercase cursor-pointer flex-1">{s}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-black uppercase">Detalles del proyecto</Label>
                <Textarea id="message" required className="min-h-[100px] border-2 border-black rounded-none text-base" placeholder="Explícanos brevemente..." />
              </div>

              <Button type="submit" disabled={loading} className="w-full h-16 text-xl font-black uppercase bg-primary hover:bg-primary/90 brutalist-border">
                {loading ? "ENVIANDO..." : "SOLICITAR AHORA"} <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
