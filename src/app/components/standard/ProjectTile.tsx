import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../config/projects";
import VideoTile from "../client/VideoTile";

export default function ProjectTile({ project: p }: { project: Project }) {
  return (
    <article>
      {p.video ? (
        <VideoTile video={p.video} />
      ) : (
        p.photo && (
          <div className="relative aspect-video overflow-hidden bg-paper-dim">
            <Image
              src={p.photo.src}
              alt={p.photo.alt}
              fill
              sizes="(min-width:768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        )
      )}
      <h3 className="display mt-5 text-large">
        {p.href ? (
          <Link href={p.href} className="hover:text-teal">
            {p.name}
          </Link>
        ) : (
          p.name
        )}
      </h3>
      <p className="mt-3 max-w-[46ch] text-lg opacity-85">
        {p.place}. {p.text}
      </p>
    </article>
  );
}
