import type { Metadata } from "next";
import Image from "next/image";
import ContactBand from "../components/standard/ContactBand";
import { photos } from "../config/media";
import { AREAS } from "../config/site";

export const metadata: Metadata = {
  title: "Areas & Services Covered in Hampshire",
  description: "Drone photography, video and roof inspections across Hampshire and West Sussex.",
  alternates: { canonical: "/areas-services-covered" },
};

export default function Areas() {
  return (
    <>
      <section className="wrap pb-12 pt-[6vh]">
        <h1 className="display text-jumbo">Where we fly</h1>
        <p className="mt-8 max-w-[44ch] text-2xl font-medium leading-snug">
          Based in Gosport and working along the South Coast. If your project is further out, ask anyway.
        </p>
      </section>
      <div className="relative h-[65svh]">
        <Image
          src={photos.gosportStreet.src}
          alt={photos.gosportStreet.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {Object.entries(AREAS).map(([county, towns]) => (
        <section key={county} className="wrap py-16 lg:py-24">
          <h2 className="text-xl font-semibold text-teal-deep">{county}</h2>
          <ul className="display mt-4 flex flex-wrap gap-x-[0.5em] text-large">
            {towns.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      ))}
      <ContactBand />
    </>
  );
}
