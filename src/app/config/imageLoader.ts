/**
 * Photos are still served from the client's Wix media library. Wix resizes on
 * request, so we ask for the width next/image needs rather than the original
 * (several are 8000px wide). Paths starting with "/" are local files.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("/")) return `${src}?w=${width}`;
  const ext = src.endsWith(".png") ? "png" : "jpg";
  return `https://static.wixstatic.com/media/${src}/v1/fit/w_${width},h_${width * 2},q_${quality ?? 80},enc_auto/image.${ext}`;
}
