import Image from "next/image";
import Link from "next/link";
import Hero from "./components/client/Hero";
import ServiceList from "./components/client/ServiceList";
import Button from "./components/standard/Button";
import ContactBand from "./components/standard/ContactBand";
import ProjectTile from "./components/standard/ProjectTile";
import { photos } from "./config/media";
import { PROJECTS } from "./config/projects";
import { CLIENTS, CREDENTIALS, REVIEWS } from "./config/site";

const [hinton, gilkicker, stadium, bosham] = PROJECTS;

export default function Home() {
  return (
    <>
      <section className="pt-[4vh]">
        <div className="wrap">
          <h1 className="display text-mega">
            See the <br />
            whole site
          </h1>
          <div className="mb-10 mt-8 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[42ch] text-xl font-medium leading-snug md:text-2xl">
              Ground and aerial photography and video for construction and property, across Portsmouth,
              Southampton and Hampshire.
            </p>
            <Button href="/contact">Request a quote</Button>
          </div>
        </div>
        <Hero />
      </section>

      <section className="wrap py-section">
        <h2 className="display text-jumbo">What we shoot</h2>
        <div className="mt-14">
          <ServiceList />
        </div>
      </section>

      <section className="wrap bg-ink py-section text-paper">
        <h2 className="display text-jumbo">Recent work</h2>
        <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <ProjectTile project={hinton} />
          </div>
          <div className="md:col-span-4 md:self-end">
            <ProjectTile project={gilkicker} />
          </div>
          <div className="md:col-span-5">
            <ProjectTile project={stadium} />
          </div>
          <div className="md:col-span-7">
            <ProjectTile project={bosham} />
          </div>
        </div>
        <div className="mt-16">
          <Button href="/projects" tone="signal">
            See all projects
          </Button>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[70vw] lg:min-h-0">
          <Image
            src={photos.crane.src}
            alt={photos.crane.alt}
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="wrap py-section">
          <h2 className="display text-large">Film-maker, archaeologist, drone pilot</h2>
          <div className="mt-8 max-w-[56ch] space-y-5 text-lg">
            <p>
              Vantage View is Nuno Cardoso, based in Gosport. A background in film and digital production
              meets a degree in archaeology, where recording a site properly is the whole job.
            </p>
            <p>
              Every shoot starts with a plan and a site-specific risk assessment, and ends with files
              delivered when we said they would be.
            </p>
          </div>
          <ul className="mt-10">
            {CREDENTIALS.map((c) => (
              <li key={c} className="border-t border-ink/30 py-3 font-medium">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap bg-paper-dim py-section">
        <h2 className="sr-only">Client feedback</h2>
        <blockquote>
          <p className="display text-large">“{REVIEWS[0].quote}”</p>
          <footer className="mt-5 text-lg">{REVIEWS[0].name}</footer>
        </blockquote>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {REVIEWS.slice(1).map((r) => (
            <blockquote key={r.name} className="border-t-2 border-ink pt-5">
              <p className="text-xl font-medium leading-snug">“{r.quote}”</p>
              <footer className="mt-4 text-ink-soft">{r.name}</footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-16 text-lg">
          Clients include {CLIENTS.slice(0, -1).join(", ")} and {CLIENTS.at(-1)}.{" "}
          <Link href="/areas-services-covered" className="font-semibold underline underline-offset-4">
            See where we work
          </Link>
        </p>
      </section>

      <ContactBand />
    </>
  );
}
