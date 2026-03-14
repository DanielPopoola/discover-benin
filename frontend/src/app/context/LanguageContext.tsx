import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "EN" | "FR";

const translations = {
  EN: {
    nav: {
      attractions: "Attractions", hotels: "Hotels", restaurants: "Restaurants",
      travelGuide: "Travel Guide", contact: "Contact", planTrip: "Plan Trip",
    },
    hero: {
      tagline: "Discover the", taglineEm: "Beauty of Benin",
      subtitle: "Explore the rich cultural heritage, stunning landscapes, and vibrant traditions of West Africa's hidden gem.",
      searchPlaceholder: "Search destinations, hotels, attractions...", searchBtn: "Search",
      stats: ["Attractions", "Hotels", "Destinations"],
    },
    sections: {
      explore: "Explore", topDestinations: "Top Destinations in Benin",
      interactive: "Interactive", exploreMap: "Explore Benin's Map",
      mapDesc: "Discover all major attractions, cities, and points of interest across the Republic of Benin.",
      openMap: "Open Full Map", essentialInfo: "Essential Travel Information",
      accommodation: "Accommodation", featuredHotels: "Featured Hotels",
      viewAllHotels: "View All Hotels →", upcoming: "Upcoming",
      eventsTitle: "Events & Festivals", aiPowered: "AI-Powered",
      aiTitle: "Your Personal Travel Assistant",
      aiDesc: "Ask me anything about Benin - from the best time to visit to hidden gems only locals know about.",
      aiPlaceholder: "Ask about destinations, culture, or travel tips...", generate: "Generate",
    },
    guide: [
      { emoji: "🎭", title: "Culture & Traditions", text: "Discover the rich cultural heritage of Benin, birthplace of Voodoo and home to vibrant festivals.", tag: "Learn More" },
      { emoji: "🗣️", title: "Languages", text: "French is official, but Fon, Yoruba, and over 50 local languages are spoken across the country.", tag: "Language Guide" },
      { emoji: "💰", title: "Currency & Money", text: "West African CFA Franc (XOF) is used. ATMs available in major cities, cards accepted widely.", tag: "Money Tips" },
      { emoji: "🍲", title: "Food & Cuisine", text: "Savor traditional dishes like akassa, amiwo, and aloko. Street food is safe and delicious.", tag: "Food Guide" },
      { emoji: "🚕", title: "Transport", text: "Zémidjans (motorcycle taxis) are popular. Taxis and buses connect major cities.", tag: "Getting Around" },
      { emoji: "🛡️", title: "Safety", text: "Benin is one of West Africa's safest countries. Standard travel precautions apply.", tag: "Safety Tips" },
    ],
    mapFeatures: ["50+ marked attractions and landmarks", "12 major cities and regions", "Real-time distance calculations", "Custom itinerary planning"],
    aiSuggestions: [
      { icon: "🏖️", title: "Best beaches in Benin", sub: "Coastal destinations" },
      { icon: "🎨", title: "Cultural festivals & events", sub: "Traditional celebrations" },
      { icon: "🌅", title: "3-day Cotonou itinerary", sub: "City exploration" },
    ],
    footer: {
      desc: "Your comprehensive digital guide to exploring the beauty, culture, and heritage of the Republic of Benin, West Africa.",
      cols: [
        { title: "Explore", links: ["Top Destinations", "Pendjari Park", "Ganvié Village", "Ouidah Heritage", "Abomey Palaces"] },
        { title: "Plan", links: ["Trip Planner", "Hotels", "Restaurants", "Events", "Travel Guide"] },
        { title: "Info", links: ["About Us", "Contact", "Privacy Policy", "Terms of Use", "Sitemap"] },
      ],
      copy: "© 2025 Discover Benin. All rights reserved.",
    },
  },
  FR: {
    nav: {
      attractions: "Attractions", hotels: "Hôtels", restaurants: "Restaurants",
      travelGuide: "Guide Voyage", contact: "Contact", planTrip: "Planifier",
    },
    hero: {
      tagline: "Découvrez la", taglineEm: "Beauté du Bénin",
      subtitle: "Explorez le riche patrimoine culturel, les paysages époustouflants et les traditions vibrantes du joyau caché d'Afrique de l'Ouest.",
      searchPlaceholder: "Rechercher destinations, hôtels, attractions...", searchBtn: "Rechercher",
      stats: ["Attractions", "Hôtels", "Destinations"],
    },
    sections: {
      explore: "Explorer", topDestinations: "Meilleures Destinations au Bénin",
      interactive: "Interactif", exploreMap: "Explorez la Carte du Bénin",
      mapDesc: "Découvrez toutes les grandes attractions, villes et points d'intérêt à travers la République du Bénin.",
      openMap: "Ouvrir la Carte", essentialInfo: "Informations Essentielles de Voyage",
      accommodation: "Hébergement", featuredHotels: "Hôtels Recommandés",
      viewAllHotels: "Voir Tous les Hôtels →", upcoming: "À Venir",
      eventsTitle: "Événements & Festivals", aiPowered: "Propulsé par IA",
      aiTitle: "Votre Assistant de Voyage Personnel",
      aiDesc: "Posez-moi n'importe quelle question sur le Bénin — de la meilleure période pour visiter aux trésors cachés.",
      aiPlaceholder: "Posez des questions sur les destinations, la culture...", generate: "Générer",
    },
    guide: [
      { emoji: "🎭", title: "Culture & Traditions", text: "Découvrez le riche patrimoine culturel du Bénin, berceau du Vaudou et terre de festivals vibrants.", tag: "En savoir plus" },
      { emoji: "🗣️", title: "Langues", text: "Le français est officiel, mais le fon, le yoruba et plus de 50 langues locales sont parlés dans tout le pays.", tag: "Guide des langues" },
      { emoji: "💰", title: "Monnaie & Argent", text: "Le franc CFA d'Afrique de l'Ouest (XOF) est utilisé. Distributeurs disponibles dans les grandes villes.", tag: "Conseils financiers" },
      { emoji: "🍲", title: "Gastronomie", text: "Savourez des plats traditionnels comme l'akassa, l'amiwo et l'aloko. La nourriture de rue est sûre et délicieuse.", tag: "Guide culinaire" },
      { emoji: "🚕", title: "Transport", text: "Les zémidjans (moto-taxis) sont populaires. Taxis et bus relient les grandes villes.", tag: "Se déplacer" },
      { emoji: "🛡️", title: "Sécurité", text: "Le Bénin est l'un des pays les plus sûrs d'Afrique de l'Ouest. Les précautions de voyage standard s'appliquent.", tag: "Conseils sécurité" },
    ],
    mapFeatures: ["Plus de 50 attractions marquées", "12 grandes villes et régions", "Calculs de distance en temps réel", "Planification d'itinéraire personnalisé"],
    aiSuggestions: [
      { icon: "🏖️", title: "Meilleures plages du Bénin", sub: "Destinations côtières" },
      { icon: "🎨", title: "Festivals culturels et événements", sub: "Célébrations traditionnelles" },
      { icon: "🌅", title: "Itinéraire 3 jours à Cotonou", sub: "Exploration urbaine" },
    ],
    footer: {
      desc: "Votre guide numérique complet pour explorer la beauté, la culture et le patrimoine de la République du Bénin.",
      cols: [
        { title: "Explorer", links: ["Meilleures Destinations", "Parc Pendjari", "Village Ganvié", "Patrimoine Ouidah", "Palais d'Abomey"] },
        { title: "Planifier", links: ["Planificateur", "Hôtels", "Restaurants", "Événements", "Guide Voyage"] },
        { title: "Infos", links: ["À Propos", "Contact", "Confidentialité", "Conditions", "Plan du site"] },
      ],
      copy: "© 2025 Discover Benin. Tous droits réservés.",
    },
  },
};

type Translations = typeof translations.EN;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "EN", setLang: () => {}, t: translations.EN,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
