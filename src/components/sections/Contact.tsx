
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 inline-block border-b-8 border-primary">
                Contacta con Nosotros
              </h2>
              <p className="text-xl font-bold text-accent max-w-md">
                ¿Tienes un proyecto en mente? Pídenos presupuesto sin compromiso. Estaremos encantados de ayudarte.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-white p-4 border-2 border-black">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase">Teléfono</h4>
                  <p className="text-lg font-bold text-accent">+34 600 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary text-white p-4 border-2 border-black">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase">Email</h4>
                  <p className="text-lg font-bold text-accent">info@hnosgomeznovo.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary text-white p-4 border-2 border-black">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase">Ubicación</h4>
                  <p className="text-lg font-bold text-accent">Coria del Río, Sevilla</p>
                </div>
              </div>
            </div>
          </div>

          <div className="brutalist-card bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-black uppercase">Nombre Completo</Label>
                <Input id="name" placeholder="Tu nombre" required className="h-12 border-2 border-black rounded-none focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-black uppercase">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" required className="h-12 border-2 border-black rounded-none focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-black uppercase">Teléfono</Label>
                <Input id="phone" placeholder="600 000 000" required className="h-12 border-2 border-black rounded-none focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-black uppercase">Mensaje</Label>
                <Textarea id="message" placeholder="¿En qué podemos ayudarte?" required className="min-h-[150px] border-2 border-black rounded-none focus-visible:ring-primary" />
              </div>
              <Button type="submit" size="lg" className="w-full h-16 text-xl font-black uppercase bg-primary hover:bg-primary/90 brutalist-border">
                Enviar Mensaje <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
