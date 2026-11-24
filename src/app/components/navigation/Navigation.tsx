"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { logo } from "../../config/media";
import { LISTED } from "../../config/services";
import { NAV, SITE_NAME } from "../../config/site";

export default function Navigation() {
  const pathname = usePathname();
  const menu = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) menu.current?.showModal();
    else menu.current?.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);
  const close = () => setOpen(false);

  const brand = (
    <Link href="/" onClick={close} className="flex items-center gap-3 text-lg font-semibold tracking-tight">
      <Image src={logo.src} alt="" width={40} height={40} className="size-10" />
      {SITE_NAME}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 bg-paper">
      <nav aria-label="Main" className="wrap flex h-[4.5rem] items-center justify-between">
        {brand}
        <div className="hidden items-center gap-8 md:flex">
          <button onClick={() => setOpen(true)} className="font-medium hover:text-teal-deep">
            Services
          </button>
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className="font-medium decoration-2 underline-offset-8 hover:text-teal-deep aria-[current=page]:underline"
            >
              {label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(true)} className="-mr-3 p-3 font-semibold md:hidden">
          Menu
        </button>
      </nav>

      <dialog
        ref={menu}
        onClose={close}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-screen max-w-none overflow-y-auto bg-ink text-paper"
      >
        <div className="wrap flex h-[4.5rem] items-center justify-between">
          {brand}
          <button onClick={close} className="-mr-3 p-3 font-semibold">
            Close
          </button>
        </div>
        <div className="wrap grid gap-12 py-10 lg:grid-cols-[1fr_auto]">
          <ul>
            {LISTED.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  onClick={close}
                  className="display block py-1 text-[clamp(1.9rem,min(6vw,8.2vh),5rem)] leading-[1.02] tracking-[-0.04em] hover:text-signal"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-xl lg:min-w-48 lg:pt-4">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} onClick={close} className="block py-1 hover:text-signal">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </header>
  );
}
