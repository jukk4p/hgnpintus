import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Location } from "@/components/sections/Location";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Location />
      
      <footer className="py-12 bg-accent text-white border-t-4 border-black">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h3 className="text-3xl font-black uppercase tracking-tighter text-primary">HGNPINTURAS</h3>
          <p className="font-bold opacity-80 text-secondary">© {new Date().getFullYear()} Hermanos Gómez Novo. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 pt-4 flex-wrap">
            <Link href="/aviso-legal" className="hover:text-primary transition-colors font-bold uppercase text-sm text-secondary">Aviso Legal</Link>
            <Link href="/privacidad" className="hover:text-primary transition-colors font-bold uppercase text-sm text-secondary">Privacidad</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors font-bold uppercase text-sm text-secondary">Cookies</Link>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
      <Toaster />
    </main>
  );
}
