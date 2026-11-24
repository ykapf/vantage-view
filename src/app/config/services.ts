import { photos, videos, type Photo, type Video } from "./media";

export interface Service {
  slug: string;
  /** Short label for lists and the jumbo heading. */
  name: string;
  metaTitle: string;
  summary: string;
  body: string[];
  listTitle: string;
  list: string[];
  cover: Photo;
  gallery?: Photo[];
  videos?: Video[];
  embed?: { title: string; src: string };
  note?: string;
  from?: string;
  /** Case-study pages keep their URL but stay out of the services list. */
  unlisted?: boolean;
}

// Slugs match the current site so existing search rankings and links survive.
export const SERVICES: Service[] = [
  {
    slug: "construction-progress-monitoring",
    name: "Construction progress",
    metaTitle: "Construction Progress Photography & Drone Monitoring in Hampshire",
    summary: "A dependable visual record of your build, from groundworks to handover.",
    body: [
      "We photograph and film sites across Portsmouth, Southampton and Hampshire from the air and from the ground, so developers, contractors and investors can see where a project stands without travelling to it.",
      "Flights repeat the same waypoints on every visit. Each pass lines up with the last, and over the months those frames join into a time-lapse of the whole build.",
    ],
    listTitle: "Useful for",
    list: [
      "Progress reports",
      "Client and investor updates",
      "Before and after records",
      "Long-term time-lapse",
      "Marketing the finished scheme",
    ],
    cover: photos.groundworks,
    gallery: [photos.siteRoad, photos.newHomes, photos.crane, photos.siteTopDown],
    videos: [videos.progress],
    from: "£150",
  },
  {
    slug: "aerial-property-video",
    name: "Property media",
    metaTitle: "Aerial Property Video & Drone Photography in Hampshire",
    summary: "Photography and film that show a property in the landscape around it.",
    body: [
      "Buyers want to know what surrounds a home as much as what is inside it. Aerial film shows the grounds, the access and the neighbourhood before anyone books a viewing.",
      "We work with estate agents, developers and owners on homes, pubs, hotels and commercial premises, combining drone footage with interior photography and walkthrough video.",
    ],
    listTitle: "What you can book",
    list: [
      "Interior and exterior photography",
      "Aerial photography",
      "Drone film",
      "Walkthrough video",
      "Floor plans",
    ],
    cover: photos.hinton,
    gallery: [photos.estate, photos.midhurst],
    videos: [videos.hinton, videos.sunrise],
    from: "£60",
  },
  {
    slug: "aerial-videography-hampshire",
    name: "Aerial video",
    metaTitle: "Drone Video & Aerial Videography in Hampshire",
    summary: "Drone film cut with ground footage for construction, property and business.",
    body: [
      "Aerial shots give scale. Ground shots give detail. We film both and edit them together, so one video can explain a site and hold attention.",
      "For ongoing projects we return on a regular schedule and shoot each stage the same way, which keeps every update comparable.",
    ],
    listTitle: "We film",
    list: [
      "Construction sites",
      "Property and estates",
      "Commercial premises",
      "Venues and events",
      "Roofs and structures",
    ],
    cover: photos.gosportSunrise,
    gallery: [photos.stadium, photos.gosportStreet],
    videos: [videos.progress, videos.hinton],
  },
  {
    slug: "drone-roof-inspections",
    name: "Roof inspections",
    metaTitle: "Drone Roof Inspections in Portsmouth, Southampton & Hampshire",
    summary: "Find the broken tile before it becomes a leak. No ladders and no scaffolding.",
    body: [
      "A drone can look at a roof, chimney or gutter from every angle in a single short visit. You receive high-resolution images and video to share with an owner, roofer or surveyor.",
      "Coastal roofs in Portsmouth and Gosport take more wind and salt air than most, so regular checks catch wear early. Most inspections can be arranged within a few days, weather permitting.",
    ],
    listTitle: "What it can show",
    list: [
      "Broken or missing tiles",
      "Damaged flashing",
      "Blocked or damaged gutters",
      "Storm damage",
      "Pooling water",
    ],
    cover: photos.roofRed,
    gallery: [photos.roofTiles, photos.gutter, photos.roofWide],
    note: "A drone inspection is visual. It can support a full roof survey but does not replace one.",
    from: "£99",
  },
  {
    slug: "360-virtual-tours",
    name: "360° virtual tours",
    metaTitle: "360° Virtual Tours for Property & Venues in Hampshire",
    summary: "Let people walk through a space before they visit it.",
    body: [
      "A virtual tour shows layout and room flow in a way photographs cannot. Visitors move through at their own pace, from any device.",
      "Our tour of the Crofton Club in Fareham lets people hiring a room explore its bar, function hall and event spaces before they get in touch.",
    ],
    listTitle: "Suited to",
    list: [
      "Homes for sale or let",
      "Venues and social clubs",
      "Offices and commercial units",
      "Construction sites",
      "Holiday lets",
    ],
    cover: photos.crofton,
    embed: { title: "Crofton Club virtual tour", src: "https://tour.panoee.net/iframe/CroftonClub" },
    from: "£120",
  },
  {
    slug: "360-aerial-footage",
    name: "360° aerial",
    metaTitle: "360° Aerial Footage in Portsmouth & Hampshire",
    summary: "Footage that records every direction at once, from above.",
    body: [
      "Pause the flight and look around. 360° aerial video captures a site, its neighbours and the land beyond in one recording.",
      "At Fort Gilkicker, a Victorian fort on Stokes Bay being turned into 26 homes, we used it to show the structure, shoreline and the Solent together.",
    ],
    listTitle: "Useful for",
    list: [
      "Progress documentation",
      "Investor presentations",
      "Planning and site analysis",
      "Heritage records",
    ],
    cover: photos.gosportStreet,
    gallery: [photos.midhurst, photos.stadium],
    videos: [videos.titchfield, videos.meon],
    embed: { title: "Fort Gilkicker in 360°", src: "https://www.youtube-nocookie.com/embed/6Le8Ok58GyU" },
    from: "£60",
  },
  {
    slug: "3d-visual-models",
    name: "3D models",
    metaTitle: "3D Photogrammetry Models for Property & Construction in Hampshire",
    summary: "Buildings and sites rebuilt on screen from drone photographs.",
    body: [
      "Photogrammetry turns a set of aerial photographs into a model you can turn, tilt and zoom. It explains a complicated place faster than a set of plans.",
      "Developers and architects use models to coordinate phases, present design intent and keep a record of how a site changed.",
    ],
    listTitle: "Useful for",
    list: ["Property marketing", "Construction planning", "Client presentations", "Heritage documentation"],
    cover: photos.gilkickerModel,
    embed: {
      title: "Fort Gilkicker 3D model",
      src: "https://sketchfab.com/models/2a6e482caf9e43f48148eb9da4807b8e/embed",
    },
    note: "Models are for visual use. We do not currently supply survey-accurate measurements.",
    from: "£100",
  },
  {
    slug: "floor-plans",
    name: "Floor plans",
    metaTitle: "Property Floor Plans in Portsmouth, Southampton & Hampshire",
    summary: "Clear plans with room dimensions, ready for your listing.",
    body: [
      "We visit, measure and draw the property, then send files ready for Rightmove, Zoopla, brochures or a holiday-let page. Fast turnaround is available.",
      "Book plans alongside photography and film, and one visit covers the whole listing.",
    ],
    listTitle: "Who uses them",
    list: ["Estate agents", "Developers", "Landlords", "Holiday-let hosts", "Commercial owners"],
    cover: photos.floorPlan,
    from: "£40",
  },
  {
    slug: "aerial-photo-video-bosham-chichester",
    name: "Bosham time-lapse",
    metaTitle: "Aerial Photography & Construction Time-Lapse in Bosham, Chichester",
    summary: "A home near Bosham Quay, recorded from the air as it is built.",
    body: [
      "This residential build stands on the south side of the harbour at Bosham, near Chichester. Repeat drone flights are building towards a time-lapse of the project.",
      "The same footage gives the team a clear overview of progress now, and marketing material later.",
    ],
    listTitle: "The work",
    list: ["Aerial photography", "Drone video", "Ongoing time-lapse"],
    cover: { src: videos.bosham.poster, alt: "Residential construction site near Bosham from above" },
    videos: [videos.bosham],
    unlisted: true,
  },
];

export const LISTED = SERVICES.filter((s) => !s.unlisted);
