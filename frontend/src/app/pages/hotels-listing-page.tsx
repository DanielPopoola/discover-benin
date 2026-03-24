import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { MapPin, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { Skeleton } from "../components/ui/skeleton";
import { getHotels } from "../../lib/api";
import type { Hotel } from "../data/hotels";
import { useLang } from "../context/LanguageContext";

const PRICE_FILTERS: Record<string, { min?: number; max?: number }> = {
  "Under CFA 8000": { max: 79 },
  "CFA 8000 - CFA 12000":  { min: 80, max: 120 },
  "Over CFA 12000": { min: 121 },
};

const COPY = {
  EN: {
    all: "All",
    accommodation: "Accommodation",
    title: "Hotels in Benin",
    subtitle: "From luxury resorts to boutique hotels, find the perfect place to stay during your visit to Benin.",
    starsLabel: "Stars",
    pricesLabel: "Budget",
    stars: ["All", "5 Stars", "4 Stars", "3 Stars"],
    prices: ["All", "Under CFA 8000", "CFA 8000 - CFA 12000", "Over CFA 12000"],
    found: "found",
    noMatch: "No hotels match your filters",
    clear: "Clear all filters",
    perNight: "/night",
    loadMore: "Load More Hotels",
    remaining: "remaining",
  },
  FR: {
    all: "Tous",
    accommodation: "Hébergement",
    title: "Hôtels au Bénin",
    subtitle: "Des complexes de luxe aux hôtels boutiques, trouvez l'hébergement idéal pour votre voyage au Bénin.",
    starsLabel: "Étoiles",
    pricesLabel: "Budget",
    stars: ["Tous", "5 étoiles", "4 étoiles", "3 étoiles"],
    prices: ["Tous", "Moins de 8000 CFA ", "8000 CFA -12000 CFA ", "Plus de 12000 CFA "],
    found: "trouvés",
    noMatch: "Aucun hôtel ne correspond à vos filtres",
    clear: "Réinitialiser les filtres",
    perNight: "/nuit",
    loadMore: "Afficher plus d'hôtels",
    remaining: "restants",
  },
} as const;

export function HotelsListingPage() {
  const { lang } = useLang();
  const copy = COPY[lang];
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedStars, setSelectedStars] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    getHotels()
      .then(setHotels)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const setCity  = (v: string) => { setSelectedCity(v);  setVisibleCount(4); };
  const setStars = (v: string) => { setSelectedStars(v); setVisibleCount(4); };
  const setPrice = (v: string) => { setSelectedPrice(v); setVisibleCount(4); };

  const filtered = hotels.filter((hotel) => {
    const cityMatch  = selectedCity  === "All" || hotel.city  === selectedCity;
    const starCount  = parseInt(selectedStars);
    const starsMatch = selectedStars === "All" || hotel.stars === starCount;
    const range      = PRICE_FILTERS[selectedPrice];
    const priceMatch = !range ||
      (range.min == null || hotel.price >= range.min) &&
      (range.max == null || hotel.price <= range.max);
    return cityMatch && starsMatch && priceMatch;
  });

  const visibleHotels = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-[#F5EFE0] pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#C4622D]" />
            <span className="text-[#C4622D] uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>{copy.accommodation}</span>
          </div>
          <h1 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "48px" }}>{copy.title}</h1>
          <p className="text-[#5C3A1E]/70 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            {copy.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex gap-2">
              {[
                { value: "All", label: copy.all },
                { value: "Cotonou", label: "Cotonou" },
                { value: "Porto-Novo", label: "Porto-Novo" },
                { value: "Grand Popo", label: "Grand Popo" },
              ].map((city) => (
                <button key={city.value} onClick={() => setCity(city.value)}
                  className={`px-5 py-2.5 rounded-full transition-all ${selectedCity === city.value ? "bg-[#C4622D] text-white" : "bg-white text-[#5C3A1E] border border-[rgba(92,58,30,0.15)] hover:border-[#C4622D]"}`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                  {city.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {copy.stars.map((stars, i) => {
                const value = i === 0 ? "All" : `${6 - i} Stars`;
                return (
                <button key={stars} onClick={() => setStars(value)}
                  className={`px-5 py-2.5 rounded-full transition-all ${selectedStars === value ? "bg-[#C4622D] text-white" : "bg-white text-[#5C3A1E] border border-[rgba(92,58,30,0.15)] hover:border-[#C4622D]"}`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                  {stars}
                </button>
              )})}
            </div>
            <div className="flex gap-2">
              {copy.prices.map((price, i) => {
                const value = i === 0 ? "All" : ["Under CFA 8000", "CFA 8000 - CFA 12000", "Over CFA 12000"][i - 1];
                return (
                <button key={price} onClick={() => setPrice(value)}
                  className={`px-5 py-2.5 rounded-full transition-all ${selectedPrice === value ? "bg-[#C4622D] text-white" : "bg-white text-[#5C3A1E] border border-[rgba(92,58,30,0.15)] hover:border-[#C4622D]"}`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                  {price}
                </button>
              )})}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)]">
                  <Skeleton className="h-48 w-full rounded-none" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                    <Skeleton className="h-3 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <p className="text-[#5C3A1E]/60 mb-8 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {filtered.length} {lang === "FR" ? "hôtel" : "hotel"}{filtered.length !== 1 ? "s" : ""} {copy.found}
              </p>

              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 gap-4">
                  <div className="text-5xl">🏨</div>
                  <p className="text-[#5C3A1E]/70 text-lg" style={{ fontFamily: "var(--font-display)" }}>{copy.noMatch}</p>
                  <button onClick={() => { setSelectedCity("All"); setSelectedStars("All"); setSelectedPrice("All"); }}
                    className="text-[#C4622D] underline text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                    {copy.clear}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {visibleHotels.map((hotel, i) => (
                    <Link key={hotel.id} to={`/hotels/${hotel.id}`} className="block">
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }} whileHover={{ y: -6 }}
                        className="group rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all bg-white cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback src={hotel.image} alt={hotel.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute bottom-4 left-4 flex gap-1">
                            {Array.from({ length: hotel.stars }).map((_, i) => (
                              <Star key={i} className="text-[#D4A827] fill-[#D4A827]" size={12} />
                            ))}
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-[#1A1A1A] mb-2 line-clamp-1" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{hotel.name}</h3>
                          <div className="flex items-center gap-2 text-[#5C3A1E]/70 mb-4">
                            <MapPin size={14} />
                            <span style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{hotel.city}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-[#1A1A1A]" style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}>CFA {hotel.price}</span>
                              <span className="text-[#5C3A1E]/70 text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{copy.perNight}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="text-[#D4A827] fill-[#D4A827]" size={14} />
                              <span className="text-[#1A1A1A]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{hotel.rating}</span>
                              <span className="text-[#5C3A1E]/70 text-xs">({hotel.reviews})</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              )}

              {hasMore && (
                <div className="text-center mt-12">
                  <button onClick={() => setVisibleCount((c) => c + 4)}
                    className="bg-white text-[#C4622D] border-2 border-[#C4622D] px-8 py-3 rounded-lg hover:bg-[#C4622D] hover:text-white transition-colors">
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                      {copy.loadMore} ({filtered.length - visibleCount} {copy.remaining})
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
