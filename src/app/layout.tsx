
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hermanos Gómez Novo - Pintores Profesionales en Coria del Río',
  description: 'Especialistas en pintura profesional, trabajos verticales, reformas rápidas y mantenimiento en Coria del Río, Sevilla. Calidad garantizada.',
  openGraph: {
    title: 'Hermanos Gómez Novo - Pintura y Reformas',
    description: 'Expertos en pintura en Sevilla y Coria del Río.',
    images: ['https://picsum.photos/seed/painter-hero/1200/630'],
  }
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
      "streetAddress": "Calle Real",
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
    "url": "https://hnosgomeznovopinturas.com",
    "telephone": "+34600000000",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
