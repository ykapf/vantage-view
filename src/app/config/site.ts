export const SITE_NAME = "Vantage View";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vantageview.co.uk";
export const INDEXABLE = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
export const EMAIL = "vantageviewhamshire@gmail.com"; // As spelled on the current site.
export const ADDRESS = "Ann's Hill, Gosport, Hampshire, PO12";
export const LINKEDIN = "https://www.linkedin.com/in/nunocardosovantageview/";

export const NAV = [
  { href: "/projects", label: "Projects" },
  { href: "/price-list", label: "Prices" },
  { href: "/areas-services-covered", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export const CLIENTS = ["Fine & Country", "Challenger Lighting", "Gosport Borough FC", "Incuhive"];

// Extracts from the reviews on the current site.
export const REVIEWS = [
  { quote: "A company you can trust and a friendly guy running it", name: "Josh Knight" },
  { quote: "The quality of the footage was outstanding", name: "Daren Qureshi" },
  {
    quote: "very impressed with the results and how quickly they are provided",
    name: "Gosport Borough Supporters Club",
  },
  { quote: "I'm very happy with the service provided for my project.", name: "Katt Pyle" },
];

export const CREDENTIALS = [
  "UK CAA registered drone operator",
  "Fully insured for commercial operations",
  "BSc Archaeological Sciences, University of Winchester",
  "Member of FPV UK",
  "Military background",
];

export const AREAS = {
  Hampshire: [
    "Gosport",
    "Portsmouth",
    "Southampton",
    "Fareham",
    "Havant",
    "Waterlooville",
    "Eastleigh",
    "Winchester",
    "Basingstoke",
    "Andover",
    "Petersfield",
  ],
  "West Sussex": ["Chichester", "Bosham", "Bognor Regis", "Littlehampton", "Worthing"],
};

export interface Price {
  name: string;
  price: string;
  includes?: string[];
}
export const PRICES: { title: string; href: string; items: Price[] }[] = [
  {
    title: "Construction",
    href: "/construction-progress-monitoring",
    items: [
      {
        name: "Single visit",
        price: "£150",
        includes: ["Ground photography and video", "Aerial photography and video"],
      },
      {
        name: "Monthly monitoring",
        price: "£250",
        includes: ["Two visits a month", "Matched viewpoints for time-lapse", "Ground and aerial coverage"],
      },
    ],
  },
  {
    title: "Property",
    href: "/aerial-property-video",
    items: [
      { name: "Photography", price: "£60", includes: ["Interior and exterior, fully edited"] },
      {
        name: "Photo and video",
        price: "£100",
        includes: ["Interior and exterior photography", "Walkthrough video", "Aerial footage where suitable"],
      },
      { name: "Floor plans", price: "£40" },
    ],
  },
  {
    title: "Roofs",
    href: "/drone-roof-inspections",
    items: [
      {
        name: "Basic visual check",
        price: "£99",
        includes: ["15–20 high-resolution images", "Short aerial video"],
      },
      {
        name: "Standard inspection",
        price: "£195",
        includes: [
          "20–25 high-resolution images",
          "Short aerial video",
          "Annotated issues",
          "Brief written summary",
        ],
      },
      {
        name: "Detailed inspection",
        price: "£295",
        includes: [
          "Comprehensive photography and video",
          "Detailed summary of findings",
          "Images suitable for contractors and surveyors",
        ],
      },
    ],
  },
  {
    title: "360° and 3D",
    href: "/360-virtual-tours",
    items: [
      { name: "360° photography", price: "£60" },
      { name: "360° aerial video", price: "£60" },
      { name: "360° virtual tours", price: "£120" },
      { name: "3D photogrammetry models", price: "£100" },
    ],
  },
];
