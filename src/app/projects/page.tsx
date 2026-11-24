import type { Metadata } from "next";
import ContactBand from "../components/standard/ContactBand";
import ProjectTile from "../components/standard/ProjectTile";
import { PROJECTS } from "../config/projects";

export const metadata: Metadata = {
  title: "Drone Photography & Aerial Projects in Hampshire",
  description:
    "Aerial photography, drone video, 360° tours and 3D models made across Hampshire and West Sussex.",
  alternates: { canonical: "/projects" },
};

// Row pairs alternate wide/narrow so the page does not read as a uniform grid.
const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export default function Projects() {
  return (
    <>
      <section className="wrap bg-ink pb-section pt-[6vh] text-paper">
        <h1 className="display text-mega">Projects</h1>
        <div className="mt-14 grid gap-x-10 gap-y-20 md:grid-cols-12">
          {PROJECTS.map((p, i) => (
            <div key={p.name} className={SPANS[i % 4]}>
              <ProjectTile project={p} />
            </div>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
