"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LISTED } from "../../config/services";

export default function ServiceList() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-x-12 lg:grid-cols-[1fr_34vw]">
      <ul>
        {LISTED.map((s, i) => (
          <li key={s.slug} className="border-t-2 border-ink last:border-b-2">
            <Link
              href={`/${s.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[1fr_6.5rem] items-center gap-4 py-5 lg:block"
            >
              <div>
                <h3 className="display text-[clamp(1.6rem,4.4vw,4.9rem)] leading-[0.98] tracking-[-0.04em] transition-colors group-hover:text-teal-deep">
                  {s.name}
                </h3>
                <p className="mt-2 max-w-[48ch] text-ink-soft lg:text-lg">{s.summary}</p>
              </div>
              <div className="relative aspect-square overflow-hidden lg:hidden">
                <Image src={s.cover.src} alt="" fill sizes="104px" className="object-cover" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative hidden lg:block" aria-hidden>
        <div className="sticky top-24 h-[calc(100svh-8rem)] overflow-hidden bg-paper-dim">
          {LISTED.map((s, i) => (
            <Image
              key={s.slug}
              src={s.cover.src}
              alt=""
              fill
              sizes="34vw"
              className={`object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
