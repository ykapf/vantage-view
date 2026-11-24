import type { Metadata } from "next";
import Link from "next/link";
import ContactBand from "../components/standard/ContactBand";
import { PRICES } from "../config/site";

export const metadata: Metadata = {
  title: "Drone, Property & Construction Photography Prices in Hampshire",
  description:
    "Starting prices for construction progress, property media, roof inspections, 360° and 3D work.",
  alternates: { canonical: "/price-list" },
};

export default function PriceList() {
  return (
    <>
      <section className="wrap pb-section pt-[6vh]">
        <h1 className="display text-mega">Prices</h1>
        <p className="mt-8 max-w-[44ch] text-2xl font-medium leading-snug">
          Starting prices. The final figure depends on the size of the site, access and what you need
          delivered.
        </p>
        {PRICES.map((g) => (
          <section key={g.title} className="mt-20 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
            <h2 className="display text-large">
              <Link href={g.href} className="hover:text-teal-deep">
                {g.title}
              </Link>
            </h2>
            <ul>
              {g.items.map((i) => (
                <li key={i.name} className="grid grid-cols-[1fr_auto] gap-6 border-t-2 border-ink py-6">
                  <div>
                    <h3 className="text-xl font-semibold">{i.name}</h3>
                    {i.includes && (
                      <ul className="mt-2 text-ink-soft">
                        {i.includes.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className="text-right">
                    <span className="text-ink-soft">from</span>{" "}
                    <span className="display text-large">{i.price}</span>
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
      <ContactBand />
    </>
  );
}
