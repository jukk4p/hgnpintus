
"use client";

export function Location() {
  return (
    <section className="h-[500px] w-full border-y-4 border-black relative overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12693.308764038166!2d-6.0617342!3d37.2882142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd120e29206b83f3%3A0x6334543d8a17688c!2s41100%20Coria%20del%20R%C3%ADo%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Hermanos Gómez Novo"
        className="grayscale"
      ></iframe>
      <div className="absolute top-10 left-10 z-10 hidden md:block">
        <div className="brutalist-card bg-white p-4 max-w-xs">
          <h3 className="text-xl font-black uppercase mb-2">Visítanos</h3>
          <p className="font-bold text-accent">Nuestras oficinas centrales en el corazón de Coria del Río.</p>
        </div>
      </div>
    </section>
  );
}
