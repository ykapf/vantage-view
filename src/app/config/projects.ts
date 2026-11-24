import { photos, videos, type Photo, type Video } from "./media";

export interface Project {
  name: string;
  place: string;
  text: string;
  photo?: Photo;
  video?: Video;
  href?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Hinton Manor",
    place: "Horndean",
    text: "Aerial film of a Grade II listed country house, made for Fine & Country.",
    video: videos.hinton,
    href: "/aerial-property-video",
  },
  {
    name: "Fort Gilkicker",
    place: "Gosport",
    text: "A 3D model and 360° flight of a Victorian fort being turned into 26 homes.",
    photo: photos.gilkickerModel,
    href: "/360-aerial-footage",
  },
  {
    name: "AEI Stadium",
    place: "Gosport",
    text: "Floodlighting on the 3G pitch at Gosport Borough FC, filmed for Challenger Lighting.",
    photo: photos.stadium,
  },
  {
    name: "Bosham",
    place: "West Sussex",
    text: "Repeat flights over a harbourside build, becoming a time-lapse.",
    video: videos.bosham,
    href: "/aerial-photo-video-bosham-chichester",
  },
  {
    name: "Gosport High Street",
    place: "Gosport",
    text: "An aerial commission over the town, with the harbour beyond.",
    photo: photos.gosportSunrise,
  },
  {
    name: "Titchfield Abbey",
    place: "Fareham",
    text: "360° film of the 13th-century abbey and its Tudor gatehouse.",
    video: videos.titchfield,
  },
  {
    name: "Crofton Club",
    place: "Fareham",
    text: "A virtual tour of a social club and its event spaces.",
    photo: photos.crofton,
    href: "/360-virtual-tours",
  },
  {
    name: "Sunrise showcase",
    place: "Hampshire",
    text: "First light over the landscape, filmed for property marketing.",
    video: videos.sunrise,
  },
  {
    name: "Midhurst",
    place: "West Sussex",
    text: "A wide panorama across the rooftops.",
    photo: photos.midhurst,
  },
  {
    name: "River Meon",
    place: "Soberton",
    text: "Water levels recorded from the air in February 2026.",
    video: videos.meon,
  },
];
