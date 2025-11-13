// components/InstitucionesLogos.tsx
import Image from "next/image";

type Logo = { src: string; alt: string; href?: string };

const logos: Logo[] = [
  { src: "/logos/logo-alcaldia.png", alt: "Alcaldía de San Pedro", href: "https://www.sanpedro.gov" },
  { src: "/logos/logo-cvc.png", alt: "CVC", href: "https://www.cvc.gov.co" },
  { src: "/logos/logo-prestador.png", alt: "Prestador de Aseo", href: "#" },
];

export default function InstitucionesLogos() {
  return (
    <section aria-label="Instituciones participantes" className="w-full bg-white/50 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="sr-only">Instituciones participantes</h2>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo) => {
            const img = (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
              />
            );
            return logo.href ? (
              <a key={logo.src} href={logo.href} target="_blank" rel="noopener noreferrer" title={logo.alt} className="inline-flex">
                {img}
              </a>
            ) : (
              <div key={logo.src} className="inline-flex">
                {img}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}