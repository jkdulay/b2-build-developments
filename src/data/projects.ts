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
  location: string;
  year: string;
  shortDescription: string;   // 1-2 sentences for portfolio cards
  longDescription: string[];  // paragraphs for detail page (from PDF)
  highlights: string[];       // bullets
  cardPhoto: ProjectPhoto;
  heroPhoto: ProjectPhoto;
  gallery: ProjectPhoto[];
  videoUrl?: string;          // optional hero video
  // Backwards-compat aliases for existing portfolio card rendering:
  title: string;              // = name
  image: string;              // = cardPhoto.src
}

export const projects: Project[] = [
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'brooklyn',
    name: 'The Brooklyn',
    title: 'The Brooklyn',
    category: 'CUSTOM HOMES',
    tagline: 'FEATURE HOME',
    location: '2220 8 Street NE, Calgary',
    year: '2026',
    image: '/photos/brooklyn/brooklyn-front.jpg',
    cardPhoto: {
      src: '/photos/brooklyn/brooklyn-front.jpg',
      alt: 'The Brooklyn — front exterior',
    },
    heroPhoto: {
      src: '/photos/brooklyn/brooklyn-front.jpg',
      alt: 'The Brooklyn — front exterior',
    },
    videoUrl: '/photos/butler/butler-hero.mp4', // TODO: replace with Brooklyn hero video when Drive folder is supplied
    gallery: [
      {
        src: '/photos/brooklyn/brooklyn-front.jpg',
        alt: 'The Brooklyn — front exterior',
        caption: 'Front exterior',
      },
      {
        src: '/photos/brooklyn/brooklyn-kitchen.jpg',
        alt: 'The Brooklyn — kitchen',
        caption: 'Chef-inspired kitchen',
      },
      {
        src: '/photos/brooklyn/brooklyn-basement.jpg',
        alt: 'The Brooklyn — basement lounge',
        caption: 'Finished basement lounge',
      },
      // TODO: add real Brooklyn photos when Drive folder is supplied
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
    ],
  },

  // ────────────────────────────────────────────────────────────────
  {
    slug: 'villa-castano',
    name: 'Villa Castano',
    title: 'Villa Castano',
    category: 'CUSTOM HOMES',
    tagline: 'DUPLEX RESIDENCES',
    location: '442 / 444 27 Ave NW, Calgary',
    year: '2026',
    image: '/photos/villa-castano/villa-castano-dusk.jpg',
    cardPhoto: {
      src: '/photos/villa-castano/villa-castano-dusk.jpg',
      alt: 'Villa Castano — dusk exterior',
    },
    heroPhoto: {
      src: '/photos/villa-castano/villa-castano-dusk.jpg',
      alt: 'Villa Castano — dusk exterior',
    },
    gallery: [
      {
        src: '/photos/villa-castano/villa-castano-dusk.jpg',
        alt: 'Villa Castano — exterior at dusk',
        caption: 'Exterior at dusk',
      },
      {
        src: '/photos/villa-castano/villa-castano-night.jpg',
        alt: 'Villa Castano — exterior at night',
        caption: 'Evening exterior',
      },
      // TODO: add interior Residence One + Residence Two photos
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
    ],
  },

  // ────────────────────────────────────────────────────────────────
  {
    slug: 'the-tux',
    name: 'The Tux',
    title: 'The Tux',
    category: 'INFILL HOMES',
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
      {
        src: '/photos/tux/tux-exterior.jpg',
        alt: 'The Tux — exterior',
        caption: 'Exterior',
      },
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
    ],
  },

  // ────────────────────────────────────────────────────────────────
  {
    slug: 'the-butler',
    name: 'The Butler',
    title: 'The Butler',
    category: 'CUSTOM HOMES',
    badge: 'SOLD',
    tagline: 'LUXURY BUNGALOW · SOLD',
    location: '36 Butler Crescent NW, Calgary',
    year: '2025',
    image: '/photos/butler/butler-1.jpg',
    cardPhoto: {
      src: '/photos/butler/butler-1.jpg',
      alt: 'The Butler — front exterior',
    },
    heroPhoto: {
      src: '/photos/butler/butler-1.jpg',
      alt: 'The Butler — front exterior',
    },
    gallery: [
      {
        src: '/photos/butler/butler-1.jpg',
        alt: 'The Butler — front exterior',
        caption: 'Front exterior',
      },
      {
        src: '/photos/butler/butler-2.jpg',
        alt: 'The Butler — kitchen',
        caption: 'Vaulted-ceiling kitchen with waterfall island',
      },
      {
        src: '/photos/butler/butler-3.jpg',
        alt: 'The Butler — basement lounge',
        caption: 'Finished basement wet bar',
      },
      {
        src: '/photos/butler/butler-4.jpg',
        alt: 'The Butler — main kitchen',
        caption: 'Open-concept main kitchen',
      },
      {
        src: '/photos/butler/butler-5.jpg',
        alt: 'The Butler — chef\'s kitchen',
        caption: 'Chef\'s kitchen with arched alcove',
      },
      {
        src: '/photos/butler/butler-6.jpg',
        alt: 'The Butler — kitchen and living',
        caption: 'Kitchen flowing into living area',
      },
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
