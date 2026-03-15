import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { MapPin, Star, Clock, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { Skeleton } from "../components/ui/skeleton";
import { getAttractions } from "../../lib/api";
import type { Attraction } from "../data/attractions";

export function AttractionsListingPage() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"rating" | "name">("rating");

  useEffect(() => {
    getAttractions()
      .then(setAttractions)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const ALL_CATEGORIES = ["All", ...Array.from(new Set(attractions.map((a) => a.category)))];
  const ALL_REGIONS = ["All", ...Array.from(new Set(attractions.map((a) => a.region)))];

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filtered = attractions
    .filter((a) => {
      const catMatch = selectedCategory === "All" || a.category === selectedCategory;
      const regMatch = selectedRegion === "All" || a.region === selectedRegion;
      return catMatch && regMatch;
    })
    .sort((a, b) =>
      sortBy === "rating" ? b.rating - a.rating : a.name.localeCompare(b.name)
    );

  return (
    <div className="min-h-screen bg-[#F5EFE0]">
      <Navigation />

      <section className="bg-[#2D5016] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,255,255,0.05) 10px,rgba(255,255,255,0.05) 20px)" }} />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#D4A827]" />
            <span className="text-[#D4A827] uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>Explore</span>
          </div>
          <h1 className="text-white mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}>
            Tourist <em style={{ color: "#D4A827" }}>Attractions</em>
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            From UNESCO-listed royal palaces to stilt villages on the water — discover everything Benin has to offer.
          </p>
          <div className="flex gap-10 mt-8">
            {[
              [String(attractions.length), "Destinations"],
              [String(new Set(attractions.map((a) => a.region)).size), "Regions"],
              [String(new Set(attractions.map((a) => a.category)).size), "Categories"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-white" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", lineHeight: 1 }}>{num}</div>
                <div className="text-white/60 text-sm mt-1" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-[rgba(92,58,30,0.1)] sticky top-20 z-40">
        <div className="max-w-[1280px] mx-auto px-8 py-4">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[#5C3A1E]/60 text-xs uppercase tracking-wider mr-1" style={{ fontFamily: "var(--font-mono)" }}>Type</span>
              {ALL_CATEGORIES.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all ${selectedCategory === cat ? "bg-[#C4622D] text-white" : "bg-[#F5EFE0] text-[#5C3A1E] hover:bg-[#C4622D]/10"}`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[#5C3A1E]/60 text-xs uppercase tracking-wider mr-1" style={{ fontFamily: "var(--font-mono)" }}>Region</span>
              {ALL_REGIONS.map((region) => (
                <button key={region} onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all ${selectedRegion === region ? "bg-[#2D5016] text-white" : "bg-[#F5EFE0] text-[#5C3A1E] hover:bg-[#2D5016]/10"}`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  {region}
                </button>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-[#5C3A1E]/60 text-xs" style={{ fontFamily: "var(--font-body)" }}>Sort:</span>
              {(["rating", "name"] as const).map((s) => (
                <button key={s} onClick={() => setSortBy(s)}
                  className={`px-3 py-1.5 rounded-full text-sm capitalize transition-all ${sortBy === s ? "bg-[#1A1A1A] text-white" : "text-[#5C3A1E] hover:bg-[#F5EFE0]"}`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)]">
                  <Skeleton className="h-56 w-full rounded-none" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <p className="text-[#5C3A1E]/60 mb-8 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {filtered.length} attraction{filtered.length !== 1 ? "s" : ""} found
              </p>

              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 gap-4">
                  <div className="text-6xl">🗺️</div>
                  <p className="text-[#5C3A1E]/70 text-lg" style={{ fontFamily: "var(--font-display)" }}>No attractions match your filters</p>
                  <button onClick={() => { setSelectedCategory("All"); setSelectedRegion("All"); }}
                    className="text-[#C4622D] underline text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                    Clear all filters
                  </button>
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((attraction, i) => (
                      <motion.div key={attraction.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: i * 0.04 }}>
                        <Link to={`/attractions/${attraction.id}`} className="block group">
                          <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-white rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-shadow">
                            <div className="relative h-56 overflow-hidden">
                              <ImageWithFallback src={attraction.image} alt={attraction.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                              <div className="absolute top-4 left-4 bg-[#C4622D] text-white px-3 py-1.5 rounded-full"
                                style={{ fontFamily: "var(--font-mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                                {attraction.badge}
                              </div>
                              <button onClick={(e) => toggleSave(e, attraction.id)}
                                className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                                <Heart size={16} className={savedIds.includes(attraction.id) ? "text-red-400 fill-red-400" : "text-white"} />
                              </button>
                              <div className="absolute bottom-0 left-0 right-0 p-5">
                                <div className="text-white/70 text-xs mb-1 flex items-center gap-1" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                                  <MapPin size={12} /> {attraction.region}
                                </div>
                                <h2 className="text-white leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem" }}>
                                  {attraction.name}
                                </h2>
                              </div>
                            </div>
                            <div className="p-5">
                              <p className="text-[#5C3A1E]/70 text-sm leading-relaxed mb-4 line-clamp-2"
                                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{attraction.description}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <Star className="text-[#D4A827] fill-[#D4A827]" size={14} />
                                  <span className="text-[#1A1A1A] text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{attraction.rating}</span>
                                  <span className="text-[#5C3A1E]/50 text-xs">({attraction.reviews})</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[#5C3A1E]/60 text-xs" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                                  <Clock size={12} />{attraction.travelTime}
                                </div>
                              </div>
                              <div className="mt-3 pt-3 border-t border-[rgba(92,58,30,0.08)] flex items-center justify-between">
                                <span className="text-[#5C3A1E]/50 text-xs" style={{ fontFamily: "var(--font-body)" }}>Best time to visit</span>
                                <span className="text-[#2D5016] bg-[#E8F0DC] px-3 py-0.5 rounded-full text-xs" style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>
                                  {attraction.bestTime}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </AnimatePresence>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-[#F5EFE0] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[#1A1A1A] mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem" }}>Not sure where to start?</h3>
              <p className="text-[#5C3A1E]/70" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>Let our AI assistant build you a personalised itinerary in seconds.</p>
            </div>
            <Link to="/#ai-assistant" className="bg-[#C4622D] text-white px-8 py-3.5 rounded-xl hover:bg-[#B55626] transition-colors whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
              Plan my trip →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}