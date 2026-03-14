export interface Hotel {
  id: string;
  name: string;
  city: string;
  address: string;
  price: number;
  rating: number;
  stars: number;
  reviews: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  contact: { phone: string; email: string; website: string };
  nearbyAttractions: { name: string; distance: string }[];
  policies: { checkIn: string; checkOut: string; cancellation: string };
}

export const hotels: Hotel[] = [
  {
    id: "golden-tulip-le-diplomate",
    name: "Golden Tulip Le Diplomate",
    city: "Cotonou",
    address: "Avenue Steinmetz, Cotonou, Bénin",
    price: 120,
    rating: 4.8,
    stars: 5,
    reviews: 245,
    image:
      "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydCUyMEFmcmljYXxlbnwxfHx8fDE3NzM0MzczOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description:
      "Cotonou's premier five-star address, the Golden Tulip Le Diplomate sits in the heart of the business district with sweeping Atlantic views. Rooms are spacious and elegantly furnished, the rooftop pool is one of the finest in the city, and the in-house restaurant serves both Beninese and international cuisine to a high standard.",
    amenities: [
      "Rooftop pool",
      "Fitness centre",
      "Free Wi-Fi",
      "Airport transfer",
      "24-hour room service",
      "Business centre",
      "Restaurant & bar",
      "Concierge",
      "Air conditioning",
      "Parking",
    ],
    contact: {
      phone: "+229 21 31 61 00",
      email: "reservations@goldentulip-cotonou.com",
      website: "goldentuliplediplomatehotel.com",
    },
    nearbyAttractions: [
      { name: "Dantokpa Market", distance: "2 km" },
      { name: "Cotonou Marina", distance: "500 m" },
      { name: "Foundation Zinsou", distance: "3 km" },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "12:00",
      cancellation: "Free cancellation up to 48 hours before arrival",
    },
  },
  {
    id: "azalai-hotel-de-la-plage",
    name: "Azalaï Hotel de la Plage",
    city: "Cotonou",
    address: "Boulevard de la Marina, Cotonou, Bénin",
    price: 95,
    rating: 4.6,
    stars: 4,
    reviews: 182,
    image:
      "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwdHJvcGljYWx8ZW58MXx8fHwxNzczNDM3MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description:
      "Right on the Cotonou waterfront, the Azalaï de la Plage offers comfortable rooms with direct beach access. Part of the trusted pan-African Azalaï Hotels group, it blends contemporary comfort with warm West African hospitality. The beachside terrace is a highlight — perfect for sundowners with views over the Atlantic.",
    amenities: [
      "Private beach access",
      "Outdoor pool",
      "Free Wi-Fi",
      "Restaurant & bar",
      "Room service",
      "Air conditioning",
      "Meeting rooms",
      "Parking",
      "Laundry service",
    ],
    contact: {
      phone: "+229 21 30 09 00",
      email: "info@azalaihotels.com",
      website: "azalaihotels.com",
    },
    nearbyAttractions: [
      { name: "Cotonou Beach", distance: "On-site" },
      { name: "Fidjrossè Beach", distance: "4 km" },
      { name: "Dantokpa Market", distance: "5 km" },
    ],
    policies: {
      checkIn: "15:00",
      checkOut: "11:00",
      cancellation: "Free cancellation up to 24 hours before arrival",
    },
  },
  {
    id: "hotel-maison-rouge",
    name: "Hotel Maison Rouge",
    city: "Porto-Novo",
    address: "Rue des Artisans, Porto-Novo, Bénin",
    price: 75,
    rating: 4.5,
    stars: 4,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwcmVzb3J0JTIwcG9vbHxlbnwxfHx8fDE3NzM0MzczOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1664908790579-34b71154f603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description:
      "A charming boutique hotel tucked into a colonial-era building in Benin's official capital. The Maison Rouge is ideal for travellers who want to explore Porto-Novo's museums, craft markets, and royal architecture without the crowds of Cotonou. Rooms are individually decorated with locally sourced textiles and art.",
    amenities: [
      "Garden courtyard",
      "Free Wi-Fi",
      "Breakfast included",
      "Restaurant",
      "Air conditioning",
      "Bicycle rental",
      "Tour desk",
      "Luggage storage",
    ],
    contact: {
      phone: "+229 20 21 44 00",
      email: "contact@maisonrouge-benin.com",
      website: "maisonrouge-benin.com",
    },
    nearbyAttractions: [
      { name: "Musée Ethnographique", distance: "700 m" },
      { name: "Grande Mosquée", distance: "1.2 km" },
      { name: "Palais Royal", distance: "2 km" },
    ],
    policies: {
      checkIn: "13:00",
      checkOut: "11:00",
      cancellation: "Free cancellation up to 48 hours before arrival",
    },
  },
  {
    id: "benin-marina-hotel",
    name: "Benin Marina Hotel",
    city: "Cotonou",
    address: "Boulevard de la République, Cotonou, Bénin",
    price: 110,
    rating: 4.7,
    stars: 4,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb20lMjBsdXh1cnl8ZW58MXx8fHwxNzczNDM3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description:
      "A well-established landmark in central Cotonou, the Benin Marina Hotel is favoured by business travellers and government delegations for its central location and reliable service. The expansive pool terrace overlooks the lagoon, and the conference facilities are among the best-equipped in the country.",
    amenities: [
      "Lagoon-view pool",
      "Conference centre",
      "Free Wi-Fi",
      "Multiple restaurants",
      "24-hour front desk",
      "Airport shuttle",
      "Fitness centre",
      "Air conditioning",
      "Parking",
      "Spa",
    ],
    contact: {
      phone: "+229 21 30 01 50",
      email: "info@beninmarinahotel.com",
      website: "beninmarinahotel.com",
    },
    nearbyAttractions: [
      { name: "Cotonou Lagoon", distance: "On-site" },
      { name: "Centre Culturel Français", distance: "1 km" },
      { name: "Dantokpa Market", distance: "3 km" },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "12:00",
      cancellation: "Free cancellation up to 72 hours before arrival",
    },
  },
  {
    id: "grand-popo-beach-resort",
    name: "Grand Popo Beach Resort",
    city: "Grand Popo",
    address: "Route de la Plage, Grand-Popo, Bénin",
    price: 85,
    rating: 4.6,
    stars: 3,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc3MzM3MDc3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description:
      "Perched right on the Atlantic coast, the Grand Popo Beach Resort is the ideal escape from city life. Traditional thatched bungalows sit steps from the sand, and the sound of the ocean is your alarm clock. The restaurant serves the freshest grilled fish and lobster you'll find anywhere in Benin.",
    amenities: [
      "Private beach",
      "Beach bungalows",
      "Restaurant & bar",
      "Free Wi-Fi",
      "Pirogue excursions",
      "Bicycle rental",
      "Hammocks",
      "Laundry service",
    ],
    contact: {
      phone: "+229 21 43 00 11",
      email: "info@grandpoporesort.com",
      website: "grandpoporesort.com",
    },
    nearbyAttractions: [
      { name: "Grand-Popo Beach", distance: "On-site" },
      { name: "Mono River Delta", distance: "3 km" },
      { name: "Agoué Village", distance: "8 km" },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "11:00",
      cancellation: "Free cancellation up to 48 hours before arrival",
    },
  },
  {
    id: "auberge-de-grand-popo",
    name: "Auberge de Grand Popo",
    city: "Grand Popo",
    address: "Village de Grand-Popo, Bénin",
    price: 65,
    rating: 4.4,
    stars: 3,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBsdXh1cnklMjByZXNvcnR8ZW58MXx8fHwxNzczNDM3Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description:
      "A friendly, low-key auberge in the heart of the village, popular with backpackers and budget-conscious travellers who want an authentic local experience. Simple, clean rooms, a shaded courtyard, and a kitchen that puts out excellent local food at honest prices.",
    amenities: [
      "Courtyard garden",
      "Local restaurant",
      "Free Wi-Fi",
      "Shared kitchen",
      "Luggage storage",
      "Tour advice",
      "Hammocks",
    ],
    contact: {
      phone: "+229 97 45 12 33",
      email: "auberge.grandpopo@gmail.com",
      website: "",
    },
    nearbyAttractions: [
      { name: "Grand-Popo Beach", distance: "500 m" },
      { name: "Mono River", distance: "1 km" },
      { name: "Local fishing village", distance: "200 m" },
    ],
    policies: {
      checkIn: "13:00",
      checkOut: "11:00",
      cancellation: "Cancellation policy varies — contact hotel directly",
    },
  },
  {
    id: "hotel-du-port",
    name: "Hotel du Port",
    city: "Porto-Novo",
    address: "Quartier Gbeto, Porto-Novo, Bénin",
    price: 80,
    rating: 4.5,
    stars: 3,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1664908790579-34b71154f603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNDM3Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1664908790579-34b71154f603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description:
      "Overlooking the lagoon in Porto-Novo, the Hotel du Port is a reliable mid-range choice for explorers of Benin's capital. Clean, well-maintained rooms, a rooftop terrace with city views, and a helpful staff who know the local area inside out.",
    amenities: [
      "Rooftop terrace",
      "Restaurant",
      "Free Wi-Fi",
      "Air conditioning",
      "Laundry service",
      "Tour desk",
      "Parking",
      "Room service",
    ],
    contact: {
      phone: "+229 20 21 37 60",
      email: "hotelduport.pn@gmail.com",
      website: "",
    },
    nearbyAttractions: [
      { name: "Musée da Silva", distance: "1 km" },
      { name: "Cathédrale Notre-Dame", distance: "800 m" },
      { name: "Marché de Porto-Novo", distance: "500 m" },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "11:00",
      cancellation: "Free cancellation up to 24 hours before arrival",
    },
  },
  {
    id: "novotel-cotonou-orisha",
    name: "Novotel Cotonou Orisha",
    city: "Cotonou",
    address: "Avenue Jean-Paul II, Cotonou, Bénin",
    price: 135,
    rating: 4.9,
    stars: 5,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1759462692354-404b2c995c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3NzMzNTA5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1759462692354-404b2c995c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description:
      "The Novotel Cotonou Orisha is the gold standard of business travel in West Africa. Named after the Orisha spirits of the Vodoun tradition, the hotel blends global hospitality standards with a distinctly Beninese soul. Impeccably designed rooms, a world-class spa, and an acclaimed rooftop restaurant make this the top choice for discerning travellers.",
    amenities: [
      "Rooftop restaurant",
      "Full-service spa",
      "Indoor & outdoor pools",
      "Fitness centre",
      "Free Wi-Fi",
      "Airport limousine",
      "24-hour concierge",
      "Business lounge",
      "Multiple dining venues",
      "Valet parking",
    ],
    contact: {
      phone: "+229 21 30 05 00",
      email: "H8008@accor.com",
      website: "novotel.com",
    },
    nearbyAttractions: [
      { name: "Foundation Zinsou", distance: "2 km" },
      { name: "Cotonou Cathedral", distance: "1.5 km" },
      { name: "Dantokpa Market", distance: "4 km" },
    ],
    policies: {
      checkIn: "15:00",
      checkOut: "12:00",
      cancellation: "Free cancellation up to 72 hours before arrival",
    },
  },
];

export function getHotelById(id: string): Hotel | undefined {
  return hotels.find((h) => h.id === id);
}
