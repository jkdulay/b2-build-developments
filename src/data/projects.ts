// Single source of truth for project data.
// Used by: src/pages/portfolio.astro (grid), src/pages/projects/[slug].astro (detail).

export interface ProjectPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  badge?: string;             // e.g. "SOLD" — overlay on cards
  tagline?: string;           // small descriptor shown on card below category
  location: string;        // "2220 8 Street NE, Calgary"
  year: string;            // "2026"
  shortDescription: string;// 1 sentence for portfolio card
  longDescription: string[]; // paragraphs for detail page (from PDF)
  highlights: string[];    // bullets (from PDF)
  heroPhoto: ProjectPhoto; // for detail page hero
  cardPhoto: ProjectPhoto;  // for portfolio card
  gallery: ProjectPhoto[];  // all photos for detail page
  videoUrl?: string;       // hero video for Brooklyn only
  // Backwards-compat aliases for existing portfolio card rendering:
  title: string;            // = name
  image: string;            // = cardPhoto.src
}

export const projects: Project[] = [
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'brooklyn',
    name: 'The Brooklyn',
    title: 'The Brooklyn',
    category: 'Custom Build',
    tagline: 'FEATURE HOME',
    location: '2220 8 Street NE, Calgary',
    year: '2026',
    image: '/photos/brooklyn/front-exterior-dusk.jpg',
    cardPhoto: {
      src: '/photos/brooklyn/front-exterior-dusk.jpg',
      alt: 'The Brooklyn — front exterior at dusk',
    },
    heroPhoto: {
      src: '/photos/brooklyn/front-exterior-dusk.jpg',
      alt: 'The Brooklyn — front exterior at dusk',
    },
    videoUrl: '/photos/butler/butler-hero.mp4', // 4K MP4 from Butler source — only video asset on hand
    gallery: [
      { src: '/photos/brooklyn/front-exterior-day.jpg',  alt: 'The Brooklyn — front exterior',           caption: 'Front exterior' },
      { src: '/photos/brooklyn/location-aerial.jpg',      alt: 'The Brooklyn — adjacent golf course',     caption: 'Adjacent to Winston Heights Golf Course' },
      { src: '/photos/brooklyn/aerial-downtown.jpg',      alt: 'The Brooklyn — proximity to downtown',     caption: '10 minutes to downtown Calgary' },
      { src: '/photos/brooklyn/entryway.jpg',             alt: 'The Brooklyn — entryway',                 caption: 'Foyer with herringbone flooring' },
      { src: '/photos/brooklyn/living-room.jpg',          alt: 'The Brooklyn — main living room',         caption: 'Open-concept living' },
      { src: '/photos/brooklyn/living-fireplace.jpg',     alt: 'The Brooklyn — living room fireplace',    caption: 'Linear gas fireplace with custom built-ins' },
      { src: '/photos/brooklyn/kitchen-staircase.jpg',    alt: 'The Brooklyn — kitchen with staircase',   caption: 'Architectural staircase off the kitchen' },
      { src: '/photos/brooklyn/kitchen-cook-area.jpg',    alt: 'The Brooklyn — chef\'s kitchen',          caption: 'Sage green cabinetry, black marble hood' },
      { src: '/photos/brooklyn/kitchen-island.jpg',       alt: 'The Brooklyn — kitchen island',           caption: 'Light oak island with waterfall counter' },
      { src: '/photos/brooklyn/kitchen-arched.jpg',       alt: 'The Brooklyn — kitchen with arched windows', caption: 'Flowing into living with arched windows' },
      { src: '/photos/brooklyn/wine-cellar.jpg',          alt: 'The Brooklyn — glass wine display',       caption: 'Glass-enclosed wine display' },
      { src: '/photos/brooklyn/pantry.jpg',               alt: 'The Brooklyn — walk-in pantry',           caption: 'Walk-in pantry' },
      { src: '/photos/brooklyn/balcony-view.jpg',         alt: 'The Brooklyn — private balcony',          caption: 'Private balcony with skyline view' },
    ],
    shortDescription:
      'A refined contemporary residence in Calgary\'s golf course community — modern sophistication meets timeless warmth.',
    longDescription: [
      'The Brooklyn is a refined contemporary residence nestled within one of Calgary\'s most established golf course communities, where modern sophistication meets timeless warmth. Thoughtfully crafted with striking architectural details and rich Bastille flooring throughout, the home delivers an elevated yet inviting living experience.',
      'A sleek linear fireplace anchors the living space, while custom built-in seating adds warmth and functionality. The kitchen features premium cabinetry, integrated high-end appliances, and a clean modern aesthetic designed for both everyday living and effortless entertaining.',
      'Natural light floods through the arched windows, flowing seamlessly from the living room into the kitchen and dining space. Upstairs, two skylights overlook the serene interior, enhancing the home\'s open and connected atmosphere.',
      'Surrounded by mature landscapes and the character of Calgary\'s prestigious golf course in Winston Heights, The Brooklyn is a true expression of purposeful design and modern craftsmanship.',
    ],
    highlights: [
      'Contemporary residence in established golf-course community',
      'Rich Bastille flooring throughout',
      'Sleek linear fireplace with custom built-in seating',
      'Premium cabinetry and integrated high-end appliances',
      'Arched windows flooding the main floor with natural light',
      'Two skylights enhancing the open interior',
      'Glass-enclosed wine display',
      'Private balcony with skyline views',
    ],
  },

  // ────────────────────────────────────────────────────────────────
  {
    slug: 'villa-castano',
    name: 'Villa Castano',
    title: 'Villa Castano',
    category: 'Custom Build',
    tagline: 'DUPLEX RESIDENCES',
    location: '442 / 444 27 Ave NW, Calgary',
    year: '2026',
    image: '/photos/villa-castano/villa-castano-main.jpg',
    cardPhoto: {
      src: '/photos/villa-castano/villa-castano-main.jpg',
      alt: 'Villa Castano — main exterior',
    },
    heroPhoto: {
      src: '/photos/villa-castano/villa-castano-main.jpg',
      alt: 'Villa Castano — main exterior',
    },
    gallery: [
      { src: '/photos/villa-castano/villa-castano-main.jpg',  alt: 'Villa Castano — main exterior', caption: 'Main exterior' },
      { src: '/photos/villa-castano/villa-castano-dusk.jpg',  alt: 'Villa Castano — exterior at dusk', caption: 'Exterior at dusk' },
      { src: '/photos/villa-castano/villa-castano-night.jpg', alt: 'Villa Castano — exterior at night', caption: 'Evening exterior' },
      // Design concept mood boards from Raj/PJ
      { src: '/photos/villa-castano/mood-kitchen.jpg',         alt: 'Villa Castano — kitchen concept',  caption: 'Kitchen concept — sage shaker with brass accents' },
      { src: '/photos/villa-castano/mood-interior-design.jpg', alt: 'Villa Castano — interior design',  caption: 'Interior design direction' },
      { src: '/photos/villa-castano/mood-lighting.jpg',        alt: 'Villa Castano — lighting selections', caption: 'Lighting selections' },
      { src: '/photos/villa-castano/mood-selections-overview.jpg', alt: 'Villa Castano — selections overview', caption: 'Material & finish selections' },
      { src: '/photos/villa-castano/mood-upper-floor.jpg',     alt: 'Villa Castano — upper floor concept', caption: 'Upper floor concept' },
      { src: '/photos/villa-castano/mood-lower-floor.jpg',     alt: 'Villa Castano — lower floor concept', caption: 'Lower floor concept' },
      { src: '/photos/villa-castano/mood-powder-room.jpg',    alt: 'Villa Castano — powder room concept', caption: 'Powder room concept' },
      { src: '/photos/villa-castano/mood-ensuite.jpg',         alt: 'Villa Castano — ensuite concept',  caption: 'Ensuite concept' },
    ],
    shortDescription:
      'Contemporary Mount Pleasant duplex residences — modern architecture with the character of one of Calgary\'s most desirable inner-city communities.',
    longDescription: [
      'Set within the heart of Mount Pleasant, these contemporary duplex residences blend elevated modern living with the character of one of Calgary\'s most desirable inner-city communities. Surrounded by mature streets, local cafés, parks, and quick access to downtown, each home was thoughtfully designed to balance sophisticated architecture with warm, livable spaces.',
    ],
    highlights: [
      'Two contemporary Mount Pleasant residences',
      'Open-concept interiors with clean lines and natural textures',
      'Expansive windows flooding each home with natural light',
      'Designer kitchen with custom cabinetry and integrated appliances',
      'Sleek fireplace anchoring the main living area',
      'Spa-inspired primary retreat with custom millwork',
      'Sage green shaker kitchen with brass/gold accents',
      'Calacatta marble countertops with gold veining',
    ],
  },

  // ────────────────────────────────────────────────────────────────
  {
    slug: 'the-tux',
    name: 'The Tux',
    title: 'The Tux',
    category: 'Custom Build',
    tagline: 'DUPLEX RESIDENCES',
    location: '212 / 214 26 Ave NW, Calgary',
    year: '2026',
    image: '/photos/tux/tux-exterior.jpg',
    cardPhoto: {
      src: '/photos/tux/tux-exterior.jpg',
      alt: 'The Tux — exterior',
    },
    heroPhoto: {
      src: '/photos/tux/tux-exterior.jpg',
      alt: 'The Tux — exterior',
    },
    gallery: [
      { src: '/photos/tux/tux-exterior.jpg',     alt: 'The Tux — exterior',     caption: 'Exterior' },
      { src: '/photos/tux/mood-lower-level.jpg', alt: 'The Tux — lower level concept', caption: 'Lower level — moody wet bar design' },
      // TODO: add The Tux interior photos when supplied
    ],
    shortDescription:
      'Tuxedo Park contemporary duplex residences — modern architecture with warm, functional living, minutes from downtown Calgary.',
    longDescription: [
      'Located in the vibrant inner-city community of Tuxedo Park, these contemporary duplex residences combine modern architecture with warm, functional living. Surrounded by tree-lined streets and minutes from downtown Calgary, each home was thoughtfully designed to deliver elevated everyday living with timeless appeal.',
    ],
    highlights: [
      'Two Tuxedo Park residences',
      'Tree-lined inner-city street, minutes from downtown',
      'Clean architectural lines and bright open-concept layout',
      'Premium kitchen with integrated appliances and central island',
      'Sleek fireplace anchoring the main living area',
      'Spa-inspired primary retreat',
      'Lower level with moody wet bar — smoked glass pendants, charcoal basketweave tile, gold accents',
    ],
  },

  // ────────────────────────────────────────────────────────────────
  {
    slug: 'the-butler',
    name: 'The Butler',
    title: 'The Butler',
    category: 'Custom Build',
    badge: 'SOLD',
    tagline: 'LUXURY BUNGALOW · SOLD',
    location: '36 Butler Crescent NW, Calgary',
    year: '2025',
    image: '/photos/butler/butler-2.jpg',
    cardPhoto: {
      src: '/photos/butler/butler-2.jpg',
      alt: 'The Butler — kitchen',
    },
    heroPhoto: {
      src: '/photos/butler/butler-2.jpg',
      alt: 'The Butler — kitchen',
    },
    gallery: [
      { src: '/photos/butler/butler-2.jpg', alt: 'The Butler — kitchen',                    caption: 'Vaulted-ceiling kitchen with waterfall island' },
      { src: '/photos/butler/butler-1.jpg', alt: 'The Butler — front exterior',             caption: 'Front exterior' },
      { src: '/photos/butler/butler-3.jpg', alt: 'The Butler — basement lounge',         caption: 'Finished basement wet bar' },
      { src: '/photos/butler/butler-4.jpg', alt: 'The Butler — main kitchen',            caption: 'Open-concept main kitchen' },
      { src: '/photos/butler/butler-5.jpg', alt: 'The Butler — chef\'s kitchen',          caption: 'Chef\'s kitchen with arched alcove' },
      { src: '/photos/butler/butler-6.jpg', alt: 'The Butler — kitchen and living',      caption: 'Kitchen flowing into living area' },
    ],
    shortDescription:
      'A luxury contemporary bungalow in Brentwood — clean lines, warm textures, and timeless character. SOLD.',
    longDescription: [
      'The Butler is a luxury contemporary bungalow designed with clean architectural lines, warm natural textures, and a refined sense of comfort. Set within the established community of Brentwood, the home blends modern living with the timeless character of one of Calgary\'s most sought-after neighbourhoods, known for its mature trees, spacious lots, and beautifully renovated residences.',
      'Inside, rich flooring, custom millwork, and carefully curated finishes create an inviting flow throughout the home. The open-concept living space is anchored by a sleek fireplace and expansive windows that fill the interior with natural light. A thoughtfully designed kitchen features premium cabinetry, integrated appliances, and a timeless aesthetic built for both quiet mornings and effortless entertaining.',
      'Designed for elevated single-level living, The Butler offers a seamless balance of sophistication, warmth, and functionality — delivering a modern bungalow experience that feels both understated and luxurious.',
    ],
    highlights: [
      'Established Brentwood community',
      'Clean architectural lines with warm natural textures',
      'Sleek fireplace anchoring the open-concept living space',
      'Chef\'s kitchen with premium cabinetry and integrated appliances',
      'Elevated single-level living',
      'Custom millwork throughout',
    ],
  },
];

export const projectCategories = Array.from(
  new Set(projects.map((p) => p.category))
).sort();

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
