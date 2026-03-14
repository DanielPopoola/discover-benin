export interface Attraction {
  id: string;
  name: string;
  region: string;
  badge: string;
  description: string;
  longDescription: string;
  rating: number;
  reviews: number;
  bestTime: string;
  travelTime: string;
  image: string;
  gallery: string[];
  tips: string[];
  nearbyHotels: { name: string; distance: string }[];
  nearbyRestaurants: { name: string; distance: string }[];
  weather: { season: string; months: string; temp: string }[];
  category: string;
}

export const attractions: Attraction[] = [
  {
    id: "pendjari",
    name: "Pendjari National Park",
    region: "North Benin",
    badge: "UNESCO Reserve",
    description: "One of West Africa's last great wildlife sanctuaries — home to lions, elephants, hippos, and hundreds of bird species.",
    longDescription: "Pendjari National Park is a UNESCO Biosphere Reserve and the most important wildlife refuge in West Africa. Covering over 4,800 km², it harbours one of the last viable populations of lions and cheetahs in West Africa, alongside massive elephant herds, hippos, and over 300 bird species. The park's savannah landscapes, rivers, and seasonal swamps create a dramatic backdrop for unforgettable safari experiences.",
    rating: 4.9,
    reviews: 238,
    bestTime: "Nov – Apr",
    travelTime: "4-5 hours from Cotonou",
    image: "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2F2YW5uYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MzQzNzM4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1716998461781-95815e03bf63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1704183683766-37137be69d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tips: [
      "Visit during the dry season (November to April) for the best wildlife viewing",
      "Book guided tours in advance, especially during peak season",
      "Bring binoculars — early morning drives yield the best sightings",
      "Pack neutral-coloured, lightweight clothing and sunscreen",
      "Stay overnight at park lodges for early morning safari access",
    ],
    nearbyHotels: [
      { name: "Pendjari Lodge", distance: "Inside park" },
      { name: "Hotel Tata-Somba", distance: "15 km" },
      { name: "Auberge de Boukoumbé", distance: "45 km" },
    ],
    nearbyRestaurants: [
      { name: "Restaurant du Parc", distance: "Inside park" },
      { name: "Chez Marcel", distance: "12 km" },
      { name: "Le Campement", distance: "20 km" },
    ],
    weather: [
      { season: "Dry Season", months: "Nov – Apr", temp: "28–35°C" },
      { season: "Rainy Season", months: "May – Oct", temp: "24–30°C" },
    ],
    category: "National Park",
  },
  {
    id: "cotonou",
    name: "Cotonou",
    region: "Littoral",
    badge: "City",
    description: "The economic capital of Benin — a vibrant, fast-moving city with West Africa's largest open-air market and a buzzing waterfront.",
    longDescription: "Cotonou is Benin's largest city and economic heartbeat. Home to the sprawling Dantokpa Market — one of the largest open-air markets in all of West Africa — it is a city of relentless energy. The corniche along the Atlantic offers sunset views over fishing pirogues, while the upscale Ganhi neighbourhood has great restaurants and nightlife.",
    rating: 4.6,
    reviews: 411,
    bestTime: "Year-round",
    travelTime: "Starting point",
    image: "https://images.unsplash.com/photo-1718766304636-cb9309953a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1718766304636-cb9309953a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1734254807102-fbf62b0cc513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1566585747350-ddd59837d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tips: [
      "Visit Dantokpa Market early morning when it's most alive",
      "Take a pirogue from Fidjrossè beach at sunset",
      "Zémidjans (moto-taxis) are the fastest way to get around",
      "The corniche area is safest for evening walks",
    ],
    nearbyHotels: [
      { name: "Golden Tulip Le Diplomate", distance: "City centre" },
      { name: "Azalaï Hôtel de la Plage", distance: "2 km" },
      { name: "Novotel Cotonou Orisha", distance: "3 km" },
    ],
    nearbyRestaurants: [
      { name: "La Belle Vue", distance: "City centre" },
      { name: "Maquis du Centre", distance: "1 km" },
      { name: "Le Jardin", distance: "4 km" },
    ],
    weather: [
      { season: "Dry Season", months: "Nov – Apr", temp: "26–32°C" },
      { season: "Rainy Season", months: "May – Oct", temp: "23–28°C" },
    ],
    category: "City",
  },
  {
    id: "grand-popo",
    name: "Grand-Popo",
    region: "Mono",
    badge: "Beach",
    description: "An unspoilt Atlantic coastline where the Mono River meets the sea — serene beaches, mangroves, and authentic village life.",
    longDescription: "Grand-Popo is Benin's most charming coastal retreat. Where the Mono River flows into the Atlantic, a unique ecosystem of mangrove forests, sand bars, and lagoons creates a paradise for nature lovers. The town retains the character of a traditional Beninese fishing village, with colourful pirogues, fresh seafood, and warm hospitality.",
    rating: 4.7,
    reviews: 184,
    bestTime: "Oct – Feb",
    travelTime: "2 hours from Cotonou",
    image: "https://images.unsplash.com/photo-1753872780884-12521c336c50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1753872780884-12521c336c50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1716998461781-95815e03bf63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tips: [
      "Strong Atlantic currents — swim only in designated safe zones",
      "Pirogue rides through the mangroves are a highlight",
      "Fresh lobster grilled on the beach at sunset is unmissable",
      "Book accommodation in advance during December–January peak",
    ],
    nearbyHotels: [
      { name: "Auberge de Grand-Popo", distance: "Village centre" },
      { name: "Bab's Dock", distance: "1 km" },
      { name: "Casa del Papa", distance: "3 km" },
    ],
    nearbyRestaurants: [
      { name: "Bab's Dock Restaurant", distance: "1 km" },
      { name: "La Paillote", distance: "2 km" },
      { name: "Chez Mireille", distance: "3 km" },
    ],
    weather: [
      { season: "Dry Season", months: "Oct – Feb", temp: "25–30°C" },
      { season: "Rainy Season", months: "Mar – Sep", temp: "22–27°C" },
    ],
    category: "Beach & Nature",
  },
  {
    id: "ouidah",
    name: "Ouidah",
    region: "Atlantique",
    badge: "Heritage",
    description: "Heart of Voodoo culture and the Door of No Return — a profound historical city shaped by faith, the slave trade, and living tradition.",
    longDescription: "Ouidah is Benin's most historically and spiritually significant city. It was the main embarkation point for enslaved Africans during the transatlantic slave trade, and the Route des Esclaves ends at the haunting 'Door of No Return' monument on the beach. Today, Ouidah is also the global centre of Vodoun spirituality, with the annual Fête du Vodoun drawing pilgrims from the diaspora worldwide.",
    rating: 4.8,
    reviews: 302,
    bestTime: "Year-round",
    travelTime: "1 hour from Cotonou",
    image: "https://images.unsplash.com/photo-1566585747350-ddd59837d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1566585747350-ddd59837d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1704183683766-37137be69d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tips: [
      "Visit during the Fête du Vodoun (January 10) for an unmissable cultural spectacle",
      "A guided tour of the Route des Esclaves is deeply moving — allow 3 hours",
      "The Python Temple is open to visitors with a small entrance fee",
      "Respect Vodoun ceremonies and always ask before photographing",
    ],
    nearbyHotels: [
      { name: "La Maison du Brésil", distance: "Town centre" },
      { name: "Villa Karo", distance: "2 km" },
      { name: "Hotel de la Plage", distance: "3 km" },
    ],
    nearbyRestaurants: [
      { name: "La Galère", distance: "Town centre" },
      { name: "Restaurant Chez Céleste", distance: "1 km" },
      { name: "Le Jardin d'Ouidah", distance: "2 km" },
    ],
    weather: [
      { season: "Dry Season", months: "Nov – Apr", temp: "26–32°C" },
      { season: "Rainy Season", months: "May – Oct", temp: "23–28°C" },
    ],
    category: "Heritage & Culture",
  },
  {
    id: "abomey",
    name: "Abomey",
    region: "Zou",
    badge: "Royal Palace",
    description: "Ancient seat of the Kingdom of Dahomey — twelve royal palaces with extraordinary bas-reliefs tell the story of one of Africa's most powerful empires.",
    longDescription: "The Royal Palaces of Abomey represent one of Africa's greatest historical legacies. This UNESCO World Heritage Site encompasses the ruins of twelve palaces built by successive kings of the powerful Kingdom of Dahomey between the 17th and 19th centuries. The exceptional bas-reliefs that decorate the palace walls narrate each king's reign in vivid historical detail.",
    rating: 4.9,
    reviews: 267,
    bestTime: "Nov – Feb",
    travelTime: "3 hours from Cotonou",
    image: "https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1566585747350-ddd59837d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tips: [
      "Hire the official museum guide — their knowledge brings the bas-reliefs to life",
      "The appliqué tapestry workshop next to the museum is worth a visit",
      "Photography inside the palaces requires a permit",
      "Combine with a visit to the artisan market for traditional crafts",
    ],
    nearbyHotels: [
      { name: "Hotel Chez Monique", distance: "Town centre" },
      { name: "Auberge d'Abomey", distance: "1 km" },
      { name: "Résidence des Rois", distance: "2 km" },
    ],
    nearbyRestaurants: [
      { name: "Chez le Roi", distance: "Town centre" },
      { name: "Restaurant Local", distance: "500 m" },
      { name: "La Cour Royale", distance: "1 km" },
    ],
    weather: [
      { season: "Dry Season", months: "Nov – Mar", temp: "25–33°C" },
      { season: "Rainy Season", months: "Apr – Oct", temp: "22–29°C" },
    ],
    category: "UNESCO Heritage",
  },
];

export function getAttractionById(id: string): Attraction | undefined {
  return attractions.find((a) => a.id === id);
}
