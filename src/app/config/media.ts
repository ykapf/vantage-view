export interface Photo {
  src: string;
  alt: string;
}
export interface Video {
  id: string;
  title: string;
  poster: string;
}

const p = (id: string, alt: string): Photo => ({ src: `/media/${id}`, alt });
const v = (id: string, title: string): Video => ({
  id,
  title,
  poster: `/media/${id}-poster.jpg`,
});

export const logo = p("logo.png", "");

export const photos = {
  groundworks: p("groundworks.jpg", "Aerial view of a large site during groundworks"),
  earthworks: p("earthworks.jpg", "Earthworks and a long concrete structure seen from a drone"),
  gilkickerModel: p("gilkicker-model.jpg", "3D photogrammetry model of Fort Gilkicker"),
  crofton: p("crofton.jpg", "The Crofton Club virtual tour"),
  estate: p("estate.jpg", "Rural building site and neighbouring homes from above"),
  hinton: p("hinton.jpg", "Aerial view of Hinton Manor with its swimming pool"),
  stadium: p("stadium.jpg", "Floodlit pitch at AEI Stadium, Gosport Borough FC"),
  roofTiles: p("roof-tiles.jpg", "Roof tiles photographed by drone in Gosport"),
  crane: p("crane.jpg", "Waterside construction site with a tower crane"),
  demolition: p("demolition.jpg", "Construction documentation photo from above"),
  midhurst: p("midhurst.jpg", "Panorama over rooftops in Midhurst"),
  gosportSunrise: p("gosport-sunrise.jpg", "Gosport and Portsmouth Harbour from the air"),
  gosportStreet: p("gosport-street.jpg", "Gosport High Street looking towards the Spinnaker Tower"),
  roofWide: p("roof-wide.jpg", "Pitched tiled roof seen from a drone"),
  siteTopDown: p("site-top-down.jpg", "Top-down progress photo of a cleared site"),
  siteRoad: p("site-road.jpg", "Site with machinery working beside a road"),
  newHomes: p("new-homes.jpg", "New-build homes seen from directly above"),
  roofRed: p("roof-red.jpg", "Red tiled roof and dormer window"),
  gutter: p("gutter.jpg", "Roof valley and gutter inspected from above"),
  floorPlan: p("floor-plan.jpg", "Two-storey property floor plan"),
} satisfies Record<string, Photo>;

export const videos = {
  hero: v("hero", "Flight over an active construction site"),
  hinton: v("hinton", "Hinton Manor"),
  bosham: v("bosham", "Bosham time-lapse"),
  titchfield: v("titchfield", "Titchfield Abbey"),
  sunrise: v("sunrise", "Sunrise property showcase"),
  meon: v("meon", "River Meon inspection"),
  progress: v("progress", "Construction progress flight"),
} satisfies Record<string, Video>;

export const videoSrc = (video: Video) => `/videos/${video.id}.mp4`;
