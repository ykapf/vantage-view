import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import { ADDRESS, EMAIL, INDEXABLE, LINKEDIN, SITE_NAME, SITE_URL } from "./config/site";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });

export const viewport: Viewport = { themeColor: "#F1F5F6" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Construction & Property Photography & Video in Hampshire | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Ground and aerial photography, video and drone services for construction and property across Portsmouth, Southampton and Hampshire.",
  robots: INDEXABLE ? undefined : { index: false, follow: false },
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en_GB" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ann's Hill",
    addressLocality: "Gosport",
    addressRegion: "Hampshire",
    postalCode: "PO12",
    addressCountry: "GB",
  },
  areaServed: ["Hampshire", "West Sussex"],
  sameAs: [LINKEDIN],
  description: `Construction and property media, based at ${ADDRESS}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={archivo.variable}>
      <body>
        <a href="#main" className="sr-only z-50 bg-signal p-4 focus:not-sr-only focus:fixed">
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
