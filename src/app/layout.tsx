import type {Metadata, Viewport} from 'next';
import './globals.css';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Pintores en Coria del Río y Sevilla | Fachadas y Verticales | HGN Pinturas',
  description: 'Empresa de pintura profesional en Coria del Río y toda Sevilla. Especialistas en fachadas, trabajos verticales sin andamios e impermeabilización. Presupuesto gratis en 24h.',
  openGraph: {
    title: 'Hermanos Gómez Novo Pinturas - Sevilla',
    description: 'Expertos en pintura profesional, industrial y vertical en Sevilla.',
    images: ['https://picsum.photos/seed/painter-hero/1200/630'],
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
        <Toaster />
      </body>
    </html>
  );
}
