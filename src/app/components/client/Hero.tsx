"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { videos, videoSrc } from "../../config/media";

/** The frame opens from a letterbox to full bleed as you scroll, like gaining height. */
export default function Hero() {
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const { scrollYProgress } = useScroll({ target: frame, offset: ["start 0.75", "start 0.1"] });
  const inset = useTransform(scrollYProgress, [0, 1], [2.8, 0]);
  const clipPath = useTransform(inset, (v) => `inset(0 ${v}vw)`);

  useEffect(() => {
    if (reduced) {
      video.current?.pause();
      setPaused(true);
    } else video.current?.play().catch(() => setPaused(true));
  }, [reduced]);

  const toggle = () => {
    if (paused) void video.current?.play();
    else video.current?.pause();
    setPaused(!paused);
  };

  return (
    <motion.div
      ref={frame}
      style={reduced ? undefined : { clipPath }}
      className="relative h-[92svh] overflow-hidden bg-ink"
    >
      <Image src={videos.hero.poster} alt="" fill preload sizes="100vw" className="object-cover" />
      <video
        ref={video}
        src={videoSrc(videos.hero)}
        muted
        loop
        playsInline
        preload="none"
        aria-label={videos.hero.title}
        className="absolute inset-0 size-full object-cover"
      />
      <button
        onClick={toggle}
        className="absolute bottom-0 right-[2.8vw] bg-paper px-5 py-3 font-semibold hover:bg-signal"
      >
        {paused ? "Play" : "Pause"}
      </button>
    </motion.div>
  );
}
