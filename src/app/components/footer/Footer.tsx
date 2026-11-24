import Link from "next/link";
import { LISTED } from "../../config/services";
import { ADDRESS, EMAIL, LINKEDIN, NAV, SITE_NAME } from "../../config/site";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-paper">
      <div className="wrap grid gap-12 pt-20 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-2 text-lg">
          <a
            href={`mailto:${EMAIL}`}
            className="block break-all underline decoration-teal underline-offset-4 hover:text-signal"
          >
            {EMAIL}
          </a>
          <p>{ADDRESS}</p>
          <a href={LINKEDIN} className="inline-block py-1 hover:text-signal">
            LinkedIn
          </a>
        </div>
        <ul>
          {LISTED.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}`} className="block py-1 hover:text-signal">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="block py-1 hover:text-signal">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p
        aria-hidden
        className="display wrap mt-20 whitespace-nowrap text-[13.6vw] leading-[0.9] tracking-[-0.06em] text-teal"
      >
        {SITE_NAME}
      </p>
      <div className="wrap flex flex-wrap justify-between gap-x-10 gap-y-2 py-8 text-sm text-paper/75">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. A Gosport construction media company by Nuno Cardoso.
        </p>
        <p>Some imagery is independently captured for portfolio and demonstration purposes.</p>
      </div>
    </footer>
  );
}
