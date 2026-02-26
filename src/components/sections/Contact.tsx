
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Send, MapPin, Clock, Shield, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState<string[]>([]);
  const bgImg = PlaceHolderImages.find(i => i.id === "gallery1");

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

  const services = ["Fachadas", "Verticales", "Interiores", "Impermeabilización", "Industrial", "Decorativa", "Otros"];

  const toggleService = (service: string) => {
    setSelectedService(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  return (
    <section id="contacto" className="relative py-20 md:py-32 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 md:opacity-20">
        {bgImg && <Image src={bgImg.imageUrl} alt="HGN Pinturas Contacto" fill className="object-cover" />}
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <div className="space-y-8 md:space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-8xl font-bebas text-white leading-[1] md:leading-[0.85] mb-6"
              >
                ¿Tienes un proyecto? <span className="text-accent">Hablemos.</span>
              </motion.h2>
              <p className="text-lg md:text-xl text-white/60 font-medium">
                Presupuesto sin compromiso · Respuesta en menos de 24h
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
              <ContactInfoItem icon={Phone} label="Llamar" value="692 303 131" href="tel:+34692303131" />
              <ContactInfoItem icon={Mail} label="Email" value="info@hnosgomeznovopinturas.es" href="mailto:info@hnosgomeznovopinturas.es" />
              <ContactInfoItem icon={MapPin} label="Ubicación" value="Coria del Río · Toda Sevilla" />
              <ContactInfoItem icon={Clock} label="Horario" value="Lun-Vie: 8:00–19:00" />
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-3 md:gap-6">
                 <BadgeTrust icon={Shield} text="Seguro RC" />
                 <BadgeTrust icon={Award} text="Certificado IRATA" />
                 <BadgeTrust icon={Users} text="Empresa Registrada" />
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden border-2 border-white/10 h-64 grayscale contrast-125 hover:grayscale-0 transition-all duration-500 hidden md:block">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.328764038166!2d-6.0527!3d37.2882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd120e29206b83f3%3A0x6334543d8a17688c!2sAv.%20Blanca%20Paloma%2C%2064%2C%2041100%20Coria%20del%20R%C3%ADo%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                title="Localización Hnos Gómez Novo"
              ></iframe>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-6 md:p-16 rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Nombre Completo</Label>
                  <Input id="name" required className="bg-secondary/50 border-none h-14 rounded-xl text-primary font-bold placeholder:text-primary/20" placeholder="Tu nombre..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Teléfono</Label>
                  <Input id="phone" type="tel" required className="bg-secondary/50 border-none h-14 rounded-xl text-primary font-bold placeholder:text-primary/20" placeholder="Tu número..." />
                </div>
              </div>
              
              <div className="space-y-4">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/40 block mb-2">¿Qué servicios necesitas?</Label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button 
                      key={s} 
                      type="button"
                      onClick={() => toggleService(s)}
                      className={cn(
                        "px-3 py-2 rounded-lg border text-[10px] font-bold uppercase tracking-widest transition-all",
                        selectedService.includes(s) 
                          ? "bg-accent text-primary border-accent" 
                          : "border-primary/10 text-primary/60 hover:bg-accent hover:text-primary hover:border-accent"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Detalles del proyecto</Label>
                <Textarea id="message" required className="bg-secondary/50 border-none min-h-[120px] rounded-xl text-primary font-bold placeholder:text-primary/20" placeholder="Háblanos de lo que necesitas..." />
              </div>

              <Button type="submit" disabled={loading} className="w-full h-16 md:h-20 text-sm md:text-xl font-bold uppercase tracking-widest bg-[#D4581A] hover:bg-[#D4581A]/90 text-white rounded-xl shadow-2xl transition-all hover:scale-[1.02]">
                {loading ? "PROCESANDO..." : "SOLICITAR MI PRESUPUESTO GRATIS →"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const content = (
    <div className="group overflow-hidden">
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">{label}</div>
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-accent group-hover:scale-110 transition-transform shrink-0" />
        <span className="text-lg md:text-xl font-bebas text-white tracking-widest group-hover:text-accent transition-colors truncate">{value}</span>
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{content}</a> : content;
}

function BadgeTrust({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
      <Icon size={14} className="text-accent" />
      <span className="text-[9px] md:text-[10px] font-bold text-white/60 uppercase tracking-widest">{text}</span>
    </div>
  );
}
