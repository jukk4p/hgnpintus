"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulación envío
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Presupuesto Solicitado!",
        description: "En menos de 24h nos pondremos en contacto contigo.",
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 inline-block border-b-8 border-primary">
                ¿Hablamos?
              </h2>
              <p className="text-xl font-bold text-accent max-w-md">
                Llámanos o rellena el formulario. Presupuesto sin compromiso en toda Sevilla.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase">Directo</h4>
                  <p className="text-lg font-bold text-accent">692 303 131</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-accent text-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase">Email</h4>
                  <p className="text-lg font-bold text-accent">info@hnosgomeznovo.es</p>
                </div>
              </div>
            </div>
          </div>

          <div className="brutalist-card bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-black uppercase">Nombre</Label>
                  <Input id="name" required className="border-2 border-black rounded-none h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-black uppercase">Teléfono</Label>
                  <Input id="phone" required className="border-2 border-black rounded-none h-12" />
                </div>
              </div>
              
              <div className="space-y-4">
                <Label className="text-xs font-black uppercase block mb-2">Servicios que te interesan:</Label>
                <div className="grid grid-cols-2 gap-3">
                  {["Pintura General", "Fachadas", "Verticales", "Industrial"].map((s) => (
                    <div key={s} className="flex items-center space-x-2">
                      <Checkbox id={s} className="border-2 border-black rounded-none" />
                      <label htmlFor={s} className="text-xs font-bold uppercase cursor-pointer">{s}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-black uppercase">Cuéntanos qué necesitas</Label>
                <Textarea id="message" required className="min-h-[120px] border-2 border-black rounded-none" />
              </div>

              <Button type="submit" disabled={loading} className="w-full h-16 text-xl font-black uppercase bg-primary hover:bg-primary/90 brutalist-border">
                {loading ? "ENVIANDO..." : "SOLICITAR PRESUPUESTO"} <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}