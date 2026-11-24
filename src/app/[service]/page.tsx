import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import VideoTile from "../components/client/VideoTile";
import Button from "../components/standard/Button";
import ContactBand from "../components/standard/ContactBand";
import { SERVICES } from "../config/services";

interface Props {
  params: Promise<{ service: string }>;
}

export const dynamicParams = false;
export const generateStaticParams = () => SERVICES.map((s) => ({ service: s.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const s = SERVICES.find((x) => x.slug === service);
  return s ? { title: s.metaTitle, description: s.summary, alternates: { canonical: `/${s.slug}` } } : {};
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const s = SERVICES.find((x) => x.slug === service);
  if (!s) notFound();
  const media = (s.videos?.length ?? 0) + (s.gallery?.length ?? 0);

  return (
    <>
      <section className="wrap pb-12 pt-[6vh]">
        <h1 className="display text-jumbo">{s.name}</h1>
        <p className="mt-8 max-w-[38ch] text-2xl font-medium leading-snug">{s.summary}</p>
      </section>
      {s.embed ? (
        <iframe
          title={s.embed.title}
          src={s.embed.src}
          loading="lazy"
          allowFullScreen
          allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
          className="h-[75svh] w-full bg-ink"
        />
      ) : (
        <div className="relative h-[75svh] bg-white">
          <Image
            src={s.cover.src}
            alt={s.cover.alt}
            fill
            preload
            sizes="100vw"
            className={s.slug === "floor-plans" ? "object-contain p-6" : "object-cover"}
          />
        </div>
      )}
      <section className="wrap grid gap-14 py-section lg:grid-cols-[1.4fr_1fr]">
        <div className="max-w-[60ch] space-y-6 text-xl leading-relaxed">
          {s.body.map((b) => (
            <p key={b}>{b}</p>
          ))}
          {s.note && <p className="border-l-4 border-signal pl-5 text-lg">{s.note}</p>}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <Button href="/contact">Request a quote</Button>
            {s.from && <p className="display text-3xl tracking-tight">From {s.from}</p>}
          </div>
        </div>
        <div>
          <h2 className="display text-3xl tracking-tight">{s.listTitle}</h2>
          <ul className="mt-6">
            {s.list.map((l) => (
              <li key={l} className="border-t border-ink/30 py-4 text-lg">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {media > 0 && (
        <section aria-label="Examples" className="wrap grid gap-5 pb-section md:grid-cols-2">
          {s.videos?.map((v) => (
            <div key={v.id} className="md:col-span-2">
              <VideoTile video={v} sizes="100vw" />
            </div>
          ))}
          {s.gallery?.map((g, i, all) => (
            <div
              key={g.src}
              className={`relative aspect-[4/3] overflow-hidden bg-paper-dim ${all.length % 2 && i === 0 ? "md:col-span-2 md:aspect-[2/1]" : ""}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </section>
      )}
      <ContactBand />
    </>
  );
}
