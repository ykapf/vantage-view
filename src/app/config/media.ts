export interface Photo {
  src: string;
  alt: string;
}
export interface Video {
  id: string;
  title: string;
  poster: string;
  quality?: "480p" | "720p" | "1080p";
}

const p = (id: string, alt: string): Photo => ({ src: `34d64f_${id}`, alt });
const v = (id: string, title: string): Video => ({
  id: `34d64f_${id}`,
  title,
  poster: `34d64f_${id}f000.jpg`,
});

export const logo = p("faa9ed901d0343eeaac7f8246755fb00~mv2.png", "");

export const photos = {
  groundworks: p(
    "50a7f17308714a6ea6b7b8b9096e24b1~mv2.jpg",
    "Aerial view of a large site during groundworks",
  ),
  earthworks: p(
    "9ea36e6d6e3a4e538ea36c040b92a36e~mv2.png",
    "Earthworks and a long concrete structure seen from a drone",
  ),
  gilkickerModel: p("24d343e87a7a48efb436615ec7ebc54c~mv2.png", "3D photogrammetry model of Fort Gilkicker"),
  crofton: p("a6554a6511f142aaacdb18dc7476f36a~mv2.jpg", "The Crofton Club virtual tour"),
  estate: p(
    "d2f26632db1f4f7c8f6d78f2591ac3f3~mv2.jpg",
    "Rural building site and neighbouring homes from above",
  ),
  hinton: p("555426df71c44ba7b1c5cc4e23aa2311~mv2.jpg", "Aerial view of Hinton Manor with its swimming pool"),
  stadium: p("eb86fddcdf024ccabe403ccb86463765~mv2.jpg", "Floodlit pitch at AEI Stadium, Gosport Borough FC"),
  roofTiles: p("f8e7d2d53dcd4c79b910f224276d40ca~mv2.jpg", "Roof tiles photographed by drone in Gosport"),
  crane: p("8a3148c62f4e47b3a60acd87187e6219~mv2.jpg", "Waterside construction site with a tower crane"),
  demolition: p("553afb76e3b4477ea67b298f250251c1~mv2.jpg", "Construction documentation photo from above"),
  midhurst: p("3ddfa5ce277343b88697c9b8a6bdaba6~mv2.jpg", "Panorama over rooftops in Midhurst"),
  gosportSunrise: p(
    "4f463e28c2174f338dd20621d045cb05~mv2.jpg",
    "Gosport and Portsmouth Harbour from the air",
  ),
  gosportStreet: p(
    "7bd92bc913784a5d9557772413f25385~mv2.jpg",
    "Gosport High Street looking towards the Spinnaker Tower",
  ),
  roofWide: p("cd33429665c64e328f9699299232fc88~mv2.jpg", "Pitched tiled roof seen from a drone"),
  siteTopDown: p("2c15496070fa4a649e88ac545222c94c~mv2.jpg", "Top-down progress photo of a cleared site"),
  siteRoad: p("c3249dbe23be4045a5419658739b17c3~mv2.jpg", "Site with machinery working beside a road"),
  newHomes: p("ca8d4be1445948a58c520ab29f14df94~mv2.jpg", "New-build homes seen from directly above"),
  roofRed: p("a06763050e344bafafe61b88fb4cefdc~mv2.jpg", "Red tiled roof and dormer window"),
  gutter: p("c6c675256ae84537b743e92c9cb59c97~mv2.jpg", "Roof valley and gutter inspected from above"),
  floorPlan: p("7ea74136b821419d937f46c9e33faaa5~mv2.jpg", "Two-storey property floor plan"),
} satisfies Record<string, Photo>;

export const videos = {
  hero: v("ba6bf5a3f6434f88a2835efdd9ed04cc", "Flight over an active construction site"),
  hinton: v("6e99c0e83ec34506a1a9620055e52d4f", "Hinton Manor"),
  bosham: v("6cf2bdc8afff48cca407a9a0e98d67a8", "Bosham time-lapse"),
  titchfield: v("2e15d38daef540e6b572a14720a17810", "Titchfield Abbey"),
  sunrise: v("d940fa73aa4245589afcd1e55d928226", "Sunrise property showcase"),
  meon: v("2da97130f0124691a20e4557a01c515f", "River Meon inspection"),
  progress: v("9311537c5a464b4896a5f12a325182da", "Construction progress flight"),
} satisfies Record<string, Video>;

export const videoSrc = (video: Video) =>
  `https://video.wixstatic.com/video/${video.id}/${video.quality ?? "720p"}/mp4/file.mp4`;
