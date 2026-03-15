import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { MapPin, Star, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { Skeleton } from "../components/ui/skeleton";
import { getRestaurants } from "../../lib/api";
import type { Restaurant } from "../data/restaurants";

export function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  useEffect(() => {
    getRestaurants()
      .then(setRestaurants)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const cities   = ["All", ...Array.from(new Set(restaurants.map((r) => r.city)))];
  const cuisines = ["All", ...Array.from(new Set(restaurants.map((r) => r.cuisine)))];

  const filtered = restaurants.filter((r) => {
    const cityMatch    = selectedCity    === "All" || r.city    === selectedCity;
    const cuisineMatch = selectedCuisine === "All" || r.cuisine === selectedCuisine;
    return cityMatch && cuisineMatch;
  });

  return (
    <div className="min-h-screen bg-[#F5EFE0]">
      <Navigation />

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

      <section className="bg-white border-b border-[rgba(92,58,30,0.1)] sticky top-20 z-40">
        <div className="max-w-[1280px] mx-auto px-8 py-4 flex flex-wrap gap-6 items-center">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[#5C3A1E]/60 text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>City</span>
            {cities.map((city) => (
              <button key={city} onClick={() => setSelectedCity(city)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${selectedCity === city ? "bg-[#C4622D] text-white" : "bg-[#F5EFE0] text-[#5C3A1E] hover:bg-[#C4622D]/10"}`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                {city}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[#5C3A1E]/60 text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>Cuisine</span>
            {cuisines.map((cuisine) => (
              <button key={cuisine} onClick={() => setSelectedCuisine(cuisine)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${selectedCuisine === cuisine ? "bg-[#2D5016] text-white" : "bg-[#F5EFE0] text-[#5C3A1E] hover:bg-[#2D5016]/10"}`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                {cuisine}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)]">
                  <Skeleton className="h-52 w-full rounded-none" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-5 w-2/3" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <p className="text-[#5C3A1E]/60 mb-8 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {filtered.length} restaurant{filtered.length !== 1 ? "s" : ""} found
              </p>

              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 gap-4">
                  <div className="text-6xl">🍽️</div>
                  <p className="text-[#5C3A1E]/70 text-lg" style={{ fontFamily: "var(--font-display)" }}>No restaurants match your filters</p>
                  <button onClick={() => { setSelectedCity("All"); setSelectedCuisine("All"); }}
                    className="text-[#C4622D] underline text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((r, i) => (
                    <Link key={r.id} to={`/restaurants/${r.id}`} className="block">
                      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.05 }} whileHover={{ y: -6 }}
                        className="bg-white rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all h-full">
                        <div className="relative h-52 overflow-hidden">
                          <ImageWithFallback src={r.image} alt={r.name} className="w-full h-full object-cover transition-transform duration-500" />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-[#C4622D] text-xs font-semibold" style={{ fontFamily: "var(--font-mono)" }}>{r.price}</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="text-[#C4622D] text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-mono)" }}>{r.cuisine}</div>
                          <h3 className="text-[#1A1A1A] mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}>{r.name}</h3>
                          <div className="flex items-center gap-2 text-[#5C3A1E]/60 text-sm mb-3">
                            <MapPin size={13} /><span>{r.city}</span>
                            <span className="mx-1">·</span>
                            <Clock size={13} /><span>{r.hours}</span>
                          </div>
                          <p className="text-[#5C3A1E]/70 text-sm mb-4 leading-relaxed line-clamp-2" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                            {r.description}
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
                    </Link>
                  ))}
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