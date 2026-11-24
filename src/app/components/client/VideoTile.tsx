"use client";
import Image from "next/image";
import { useState } from "react";
import { videoSrc, type Video } from "../../config/media";

/** Poster first; the video is only requested once someone presses play. */
export default function VideoTile({
  video,
  sizes = "(min-width:768px) 60vw, 100vw",
}: {
  video: Video;
  sizes?: string;
}) {
  const [playing, setPlaying] = useState(false);
  if (playing)
    return (
      <video
        src={videoSrc(video)}
        controls
        autoPlay
        playsInline
        className="aspect-video w-full bg-ink object-contain"
      />
    );
  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Play ${video.title}`}
      className="group relative block aspect-video w-full overflow-hidden bg-paper-dim"
    >
      <Image src={video.poster} alt="" fill sizes={sizes} className="object-cover" />
      <span className="absolute bottom-0 left-0 bg-signal px-5 py-3 font-semibold text-ink transition-colors group-hover:bg-paper">
        Play film
      </span>
    </button>
  );
}
