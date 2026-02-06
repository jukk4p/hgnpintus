import type {Metadata, Viewport} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pintores Coria del Río | Fachadas y Verticales | Hnos Gómez Novo',
  description: 'Especialistas en pintura profesional, rehabilitación de fachadas y trabajos verticales en Coria del Río y Sevilla. Más de 20 años de experiencia. Presupuesto gratis.',
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
    "image": "https://picsum.photos/seed/painter-hero/800/600",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida Blanca Paloma, 64",
      "addressLocality": "Coria del Río",
      "addressRegion": "Sevilla",
      "postalCode": "41100",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.2882,
      "longitude": -6.0527
    },
    "url": "https://hnosgomeznovopinturas.es",
    "telephone": "+34692303131",
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background selection:bg-primary selection:text-white text-[16px]">
        {children}
      </body>
    </html>
  );
}
