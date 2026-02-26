
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hermanos Gómez Novo Pinturas",
    "image": "https://hnosgomeznovopinturas.es/images/logo.png",
    "telephone": "+34692303131",
    "email": "info@hnosgomeznovopinturas.es",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avda. Blanca Paloma, 64",
      "addressLocality": "Coria del Río",
      "addressRegion": "Sevilla",
      "postalCode": "41100",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.2881,
      "longitude": -6.0572
    },
    "url": "https://hnosgomeznovopinturas.es",
    "priceRange": "€€",
    "areaServed": ["Coria del Río", "Sevilla", "Los Palacios", "Dos Hermanas", "Utrera", "Alcalá de Guadaíra"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Pintura",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pintura de Fachadas"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Trabajos Verticales sin Andamios"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Impermeabilización de Tejados"}}
      ]
    }
  };

  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <WhatsAppWidget />
        <Toaster />
      </body>
    </html>
  );
}
