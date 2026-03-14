export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuSection {
  section: string;
  items: MenuItem[];
}

export interface Restaurant {
  id: string;
  name: string;
  city: string;
  address: string;
  cuisine: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  hours: string;
  specialty: string;
  image: string;
  gallery: string[];
  menu: MenuSection[];
  contact: { phone: string; instagram: string };
  features: string[];
}

export const restaurants: Restaurant[] = [
  {
    id: "la-belle-vue",
    name: "La Belle Vue",
    city: "Cotonou",
    address: "Rue du Gouverneur Général Ponty, Cotonou, Bénin",
    cuisine: "Beninese & French Fusion",
    description:
      "Perched on the rooftop of one of Cotonou's finest buildings, La Belle Vue earns its name. The panoramic views over the Atlantic harbour set the stage for a menu that marries French culinary technique with the bold, earthy flavours of Beninese tradition. Executive Chef Aline Dossou changes the tasting menu seasonally, but the grilled barracuda with amiwo sauce is a permanent fixture — and rightly so.",
    price: "$$",
    rating: 4.8,
    reviews: 312,
    hours: "12:00 – 23:00",
    specialty: "Grilled Fish & Amiwo",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    ],
    menu: [
      {
        section: "Starters",
        items: [
          { name: "Crab salad with palm heart", description: "Fresh Atlantic crab, local palm heart, citrus dressing", price: "€8" },
          { name: "Akassa fritters", description: "Fermented corn fritters, spiced tomato dip", price: "€5" },
          { name: "Smoked barracuda rillettes", description: "House-smoked fish, toasted brioche, pickled shallots", price: "€9" },
        ],
      },
      {
        section: "Mains",
        items: [
          { name: "Grilled barracuda, amiwo sauce", description: "Whole barracuda, tomato-corn porridge, plantain crisps", price: "€18" },
          { name: "Poulet DG", description: "Roast chicken, fried plantain, vegetables, house jus", price: "€15" },
          { name: "Vegetarian amiwo", description: "Red sauce corn porridge, seasonal vegetables, boiled egg", price: "€11" },
        ],
      },
      {
        section: "Desserts",
        items: [
          { name: "Coconut panna cotta", description: "Fresh coconut, mango coulis, lime zest", price: "€6" },
          { name: "Chocolate fondant", description: "Dark Beninese chocolate, vanilla cream", price: "€7" },
        ],
      },
    ],
    contact: { phone: "+229 21 31 44 00", instagram: "@labellevue_cotonou" },
    features: ["Rooftop terrace", "Live music Fridays", "Reservations recommended", "Private dining available", "Vegetarian options", "Bar & cocktails"],
  },
  {
    id: "babs-dock",
    name: "Bab's Dock",
    city: "Grand-Popo",
    address: "Route de la Plage, Grand-Popo, Bénin",
    cuisine: "Seafood & Local",
    description:
      "Right on the beach in Grand-Popo, Bab's Dock is the kind of place you find once and return to every trip. The day's catch — pulled from the Atlantic a few metres away — arrives at your table grilled over wood fire with nothing but lime, sea salt, and a cold Flag beer. The lobster thermidor has earned a cult following among travellers from across West Africa.",
    price: "$$",
    rating: 4.7,
    reviews: 228,
    hours: "11:00 – 22:00",
    specialty: "Lobster & Tilapia",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
    ],
    menu: [
      {
        section: "From the Sea",
        items: [
          { name: "Whole grilled tilapia", description: "Wood-fired, lime butter, attieke", price: "€12" },
          { name: "Lobster thermidor", description: "Half lobster, cream sauce, gruyère gratin", price: "€24" },
          { name: "Shrimp brochettes", description: "Atlantic prawns, garlic oil, garden salad", price: "€14" },
        ],
      },
      {
        section: "Sides & Extras",
        items: [
          { name: "Attieke", description: "Fermented cassava couscous", price: "€3" },
          { name: "Aloko", description: "Fried sweet plantain, chilli sauce", price: "€3" },
          { name: "House salad", description: "Mixed leaves, tomato, cucumber, vinaigrette", price: "€4" },
        ],
      },
      {
        section: "Drinks",
        items: [
          { name: "Fresh coconut water", description: "Straight from the shell", price: "€2" },
          { name: "Flag beer", description: "Local Beninese lager, ice cold", price: "€2" },
          { name: "Bissap juice", description: "Hibiscus flower, ginger, fresh mint", price: "€3" },
        ],
      },
    ],
    contact: { phone: "+229 97 12 45 88", instagram: "@babsdock_grandpopo" },
    features: ["Beachfront setting", "Fresh catch daily", "Open-air dining", "Sunset views", "Family friendly", "No reservations needed"],
  },
  {
    id: "la-galere",
    name: "La Galère",
    city: "Ouidah",
    address: "Rue des Pêcheurs, Ouidah, Bénin",
    cuisine: "Traditional Beninese",
    description:
      "Set in a restored colonial-era courtyard just off the Route des Esclaves, La Galère is the most authentic Beninese dining experience in Ouidah. The recipes come from the kitchen of founder Maman Félicité, who has cooked for visiting heads of state and curious backpackers with the same warmth and precision for over thirty years. The amiwo — a thick, spiced tomato-corn porridge — is the soul of the menu.",
    price: "$",
    rating: 4.6,
    reviews: 189,
    hours: "08:00 – 21:00",
    specialty: "Amiwo & Akassa",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
    ],
    menu: [
      {
        section: "Traditional Dishes",
        items: [
          { name: "Amiwo with fish", description: "Corn-tomato porridge, whole fried fish, piment", price: "€7" },
          { name: "Akassa with sauce graine", description: "Fermented corn dough, palm nut sauce, smoked fish", price: "€6" },
          { name: "Ablo with chicken", description: "Steamed rice cake, grilled chicken, onion sauce", price: "€8" },
        ],
      },
      {
        section: "Breakfast & Snacks",
        items: [
          { name: "Haricots au gingembre", description: "Spiced bean stew, ginger, bread", price: "€3" },
          { name: "Beignets", description: "Fried dough, bean paste or banana", price: "€2" },
          { name: "Bouillie de mil", description: "Millet porridge, condensed milk, vanilla", price: "€2" },
        ],
      },
    ],
    contact: { phone: "+229 97 88 23 41", instagram: "@lagalere_ouidah" },
    features: ["Colonial courtyard", "Breakfast served", "Vegetarian friendly", "Cooking classes available", "Historic setting", "Cash only"],
  },
  {
    id: "chez-clarisse",
    name: "Chez Clarisse",
    city: "Ganvié",
    address: "Sur le lac Nokoué, Ganvié, Bénin",
    cuisine: "Lake & River Cuisine",
    description:
      "Possibly the most uniquely situated restaurant in all of Benin — Chez Clarisse floats on Lake Nokoué in the heart of the stilt village of Ganvié. You arrive by pirogue, you eat on the water, and everything on the menu was swimming in the lake that morning. Clarisse herself runs the kitchen, producing simple, brilliant plates of lake fish, fresh water snails, and plantain.",
    price: "$",
    rating: 4.5,
    reviews: 143,
    hours: "10:00 – 20:00",
    specialty: "Lake Fish & Plantain",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    ],
    menu: [
      {
        section: "Lake Specialities",
        items: [
          { name: "Grilled lake tilapia", description: "Whole fish, palm oil sauce, steamed rice", price: "€6" },
          { name: "Fresh water snails", description: "Spiced with piment doux, served with bread", price: "€5" },
          { name: "Catfish stew", description: "Slow-cooked in tomato sauce, plantain", price: "€7" },
        ],
      },
      {
        section: "Sides",
        items: [
          { name: "Aloko", description: "Sweet fried plantain", price: "€2" },
          { name: "Steamed rice", description: "Plain or with sauce", price: "€2" },
          { name: "Bissap juice", description: "House hibiscus drink", price: "€2" },
        ],
      },
    ],
    contact: { phone: "+229 97 34 12 09", instagram: "@chezclarisse_ganvie" },
    features: ["Floating on Lake Nokoué", "Arrive by pirogue", "All ingredients from the lake", "Unique cultural experience", "Booking recommended", "Cash only"],
  },
  {
    id: "le-jardin",
    name: "Le Jardin",
    city: "Porto-Novo",
    address: "Quartier Missèbo, Porto-Novo, Bénin",
    cuisine: "Pan-African",
    description:
      "Hidden behind a wooden gate in Porto-Novo's old quarter, Le Jardin is exactly what the name promises — a lush, shaded garden restaurant where the evening breeze carries the smell of grilling meat and the sounds of conversation in five languages. The menu travels the continent: Senegalese thiéboudienne, Ghanaian jollof, Congolese moambe, and Beninese akpan all share the handwritten menu.",
    price: "$$",
    rating: 4.6,
    reviews: 176,
    hours: "12:00 – 22:30",
    specialty: "Jollof & Grilled Meats",
    image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
    ],
    menu: [
      {
        section: "Pan-African Mains",
        items: [
          { name: "Jollof rice", description: "West African tomato rice, grilled chicken, fried plantain", price: "€13" },
          { name: "Thiéboudienne", description: "Senegalese rice and fish, stuffed with herbs", price: "€14" },
          { name: "Moambe chicken", description: "Congolese palm nut sauce, fufu", price: "€13" },
        ],
      },
      {
        section: "Grills",
        items: [
          { name: "Suya skewers", description: "Spiced beef, groundnut crust, sliced onion", price: "€10" },
          { name: "Mixed grill platter", description: "Chicken, beef, sausage, served with attieke", price: "€16" },
        ],
      },
    ],
    contact: { phone: "+229 20 22 31 45", instagram: "@lejardin_portonovo" },
    features: ["Garden seating", "Live music weekends", "Pan-African menu", "Good wine list", "Reservations advised", "Vegetarian options"],
  },
  {
    id: "maquis-du-centre",
    name: "Maquis du Centre",
    city: "Cotonou",
    address: "Avenue Clozel, Quartier Cadjehoun, Cotonou, Bénin",
    cuisine: "Street Food & Grills",
    description:
      "A maquis is the West African institution of the open-air grill restaurant — and Maquis du Centre is the best version of that in Cotonou. Plastic chairs, cold beer, charcoal smoke, and the best brochettes in the city. It is as close to the real fabric of Cotonou life as a visitor can get at a dining table. Come hungry, come late, and come ready to share a table.",
    price: "$",
    rating: 4.4,
    reviews: 267,
    hours: "10:00 – 00:00",
    specialty: "Brochettes & Aloko",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    ],
    menu: [
      {
        section: "Grills",
        items: [
          { name: "Beef brochettes", description: "Charcoal-grilled beef skewers, onion, spiced sauce", price: "€4" },
          { name: "Poulet braisé", description: "Half grilled chicken, piment, aloko", price: "€7" },
          { name: "Mixed brochette platter", description: "Beef, chicken, sausage, six skewers total", price: "€9" },
        ],
      },
      {
        section: "Sides",
        items: [
          { name: "Aloko", description: "Fried sweet plantain, tomato sauce", price: "€2" },
          { name: "Igname pilée", description: "Pounded yam, served with sauce of choice", price: "€3" },
          { name: "Salade de crudités", description: "Tomato, onion, cucumber, vinaigrette", price: "€2" },
        ],
      },
      {
        section: "Drinks",
        items: [
          { name: "Flag beer", description: "Cold local lager", price: "€2" },
          { name: "Sodabi", description: "Traditional palm spirit, served neat or mixed", price: "€2" },
          { name: "Soft drinks", description: "Fanta, Coca-Cola, Sprite", price: "€1" },
        ],
      },
    ],
    contact: { phone: "+229 97 56 78 34", instagram: "@maquis_cotonou" },
    features: ["Open-air grill", "Late night dining", "Local atmosphere", "Budget friendly", "No reservations", "Cash only"],
  },
];

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find((r) => r.id === id);
}
