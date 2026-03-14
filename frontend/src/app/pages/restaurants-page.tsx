import { useState } from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { MapPin, Star, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useLang } from "../context/LanguageContext";

const restaurants = [
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    name: "La Belle Vue",
    city: "Cotonou",
    cuisine: "Beninese & French Fusion",
    desc: "Rooftop dining with stunning harbour views and award-winning local cuisine.",
    price: "$$",
    rating: 4.8,
    time: "12:00 – 23:00",
    specialty: "Grilled Fish & Amiwo",
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    name: "Bab's Dock",
    city: "Grand-Popo",
    cuisine: "Seafood & Local",
    desc: "Fresh catch grilled to perfection right on the beach. Legendary lobster thermidor.",
    price: "$$",
    rating: 4.7,
    time: "11:00 – 22:00",
    specialty: "Lobster & Tilapia",
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    name: "La Galère",
    city: "Ouidah",
    cuisine: "Traditional Beninese",
    desc: "Authentic Beninese recipes in a colonial courtyard. Try the amiwo and fried fish.",
    price: "$",
    rating: 4.6,
    time: "08:00 – 21:00",
    specialty: "Amiwo & Akassa",
  },
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    name: "Chez Clarisse",
    city: "Ganvié",
    cuisine: "Lake & River Cuisine",
    desc: "Unique floating restaurant serving the freshest lake fish you'll find in Benin.",
    price: "$",
    rating: 4.5,
    time: "10:00 – 20:00",
    specialty: "Lake Fish & Plantain",
  },
  {
    image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
    name: "Le Jardin",
    city: "Porto-Novo",
    cuisine: "Pan-African",
    desc: "Garden restaurant celebrating flavours from across the continent in a lush setting.",
    price: "$$",
    rating: 4.6,
    time: "12:00 – 22:30",
    specialty: "Jollof & Grilled Meats",
  },
  {
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
    name: "Maquis du Centre",
    city: "Cotonou",
    cuisine: "Street Food & Grills",
    desc: "The real Cotonou street food experience elevated. Locals and tourists alike love it.",
    price: "$",
    rating: 4.4,
    time: "10:00 – 00:00",
    specialty: "Brochettes & Aloko",
  },
];

const cities = ["All", "Cotonou", "Ouidah", "Grand-Popo", "Porto-Novo", "Ganvié"];
const cuisines = ["All", "Beninese & French Fusion", "Seafood & Local", "Traditional Beninese", "Lake & River Cuisine", "Pan-African", "Street Food & Grills"];

export function RestaurantsPage() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const { t } = useLang();

  const filtered = restaurants.filter((r) => {
    const cityMatch = selectedCity === "All" || r.city === selectedCity;
    const cuisineMatch = selectedCuisine === "All" || r.cuisine === selectedCuisine;
    return cityMatch && cuisineMatch;
  });

  return (
    <div className="min-h-screen bg-[#F5EFE0]">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 bg-[#2D5016] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)" }} />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#D4A827]" />
            <span className="text-[#D4A827] uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>Dining</span>
          </div>
          <h1 className="text-white mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 56px)" }}>
            Local <em>Flavours</em>
          </h1>
          <p className="text-white/70 max-w-xl" style={{ fontFamily: "var(--font-body)", fontWeight: 300, lineHeight: 1.7 }}>
            From floating lake restaurants to rooftop terraces — authentic Beninese cuisine and dining experiences.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-[rgba(92,58,30,0.1)] sticky top-20 z-40">
        <div className="max-w-[1280px] mx-auto px-8 py-4">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-[#5C3A1E] text-sm font-medium mr-2" style={{ fontFamily: "var(--font-body)" }}>City:</span>
            {cities.map((city) => (
              <button key={city} onClick={() => setSelectedCity(city)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  selectedCity === city
                    ? "bg-[#C4622D] text-white"
                    : "bg-[#F5EFE0] text-[#5C3A1E] hover:bg-[#C4622D]/10"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >{city}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-[#5C3A1E]/60 mb-8 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            {filtered.length} restaurant{filtered.length !== 1 ? "s" : ""} found
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <motion.div key={i} whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all">
                <div className="relative h-52 overflow-hidden">
                  <ImageWithFallback src={r.image} alt={r.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-[#C4622D] text-xs font-semibold" style={{ fontFamily: "var(--font-mono)" }}>{r.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[#C4622D] text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                    {r.cuisine}
                  </div>
                  <h3 className="text-[#1A1A1A] mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}>{r.name}</h3>
                  <div className="flex items-center gap-2 text-[#5C3A1E]/60 text-sm mb-3">
                    <MapPin size={13} /><span>{r.city}</span>
                    <span className="mx-1">·</span>
                    <Clock size={13} /><span>{r.time}</span>
                  </div>
                  <p className="text-[#5C3A1E]/70 text-sm mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    {r.desc}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[rgba(92,58,30,0.1)]">
                    <div className="text-xs text-[#5C3A1E]/60" style={{ fontFamily: "var(--font-body)" }}>
                      <span className="font-semibold text-[#1A1A1A]">Try: </span>{r.specialty}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="text-[#D4A827] fill-[#D4A827]" size={14} />
                      <span className="text-[#1A1A1A] font-medium text-sm">{r.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
