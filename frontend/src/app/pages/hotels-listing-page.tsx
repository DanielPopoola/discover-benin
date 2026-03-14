import { useState } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { MapPin, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { hotels } from "../data/hotels";

export function HotelsListingPage() {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedStars, setSelectedStars] = useState<string>("All");
  const [selectedPrice, setSelectedPrice] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const setCity  = (v: string) => { setSelectedCity(v);  setVisibleCount(4); };
  const setStars = (v: string) => { setSelectedStars(v); setVisibleCount(4); };
  const setPrice = (v: string) => { setSelectedPrice(v); setVisibleCount(4); };

  const filteredHotels = hotels.filter((hotel) => {
    const cityMatch = selectedCity === "All" || hotel.city === selectedCity;

    const starCount = parseInt(selectedStars);
    const starsMatch = selectedStars === "All" || hotel.stars === starCount;

    const priceMatch =
      selectedPrice === "All" ||
      (selectedPrice === "Under €80" && hotel.price < 80) ||
      (selectedPrice === "€80-€120" && hotel.price >= 80 && hotel.price <= 120) ||
      (selectedPrice === "Over €120" && hotel.price > 120);

    return cityMatch && starsMatch && priceMatch;
  });

  const visibleHotels = filteredHotels.slice(0, visibleCount);
  const hasMore = visibleCount < filteredHotels.length;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Header */}
      <section className="bg-[#F5EFE0] pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#C4622D]" />
            <span
              className="text-[#C4622D] uppercase tracking-wider"
              style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
            >
              Accommodation
            </span>
          </div>
          <h1
            className="text-[#1A1A1A] mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "48px" }}
          >
            Hotels in Benin
          </h1>
          <p
            className="text-[#5C3A1E]/70 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            From luxury resorts to boutique hotels, find the perfect place to stay
            during your visit to Benin.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* City Filter */}
            <div className="flex gap-2">
              {["All", "Cotonou", "Porto-Novo", "Grand Popo"].map((city) => (
                <button
                  key={city}
                  onClick={() => setCity(city)}
                  className={`px-5 py-2.5 rounded-full transition-all ${
                    selectedCity === city
                      ? "bg-[#C4622D] text-white"
                      : "bg-white text-[#5C3A1E] border border-[rgba(92,58,30,0.15)] hover:border-[#C4622D]"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Star Rating Filter */}
            <div className="flex gap-2">
              {["All", "5 Stars", "4 Stars", "3 Stars"].map((stars) => (
                <button
                  key={stars}
                  onClick={() => setStars(stars)}
                  className={`px-5 py-2.5 rounded-full transition-all ${
                    selectedStars === stars
                      ? "bg-[#C4622D] text-white"
                      : "bg-white text-[#5C3A1E] border border-[rgba(92,58,30,0.15)] hover:border-[#C4622D]"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {stars}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="flex gap-2">
              {["All", "Under €80", "€80-€120", "Over €120"].map((price) => (
                <button
                  key={price}
                  onClick={() => setPrice(price)}
                  className={`px-5 py-2.5 rounded-full transition-all ${
                    selectedPrice === price
                      ? "bg-[#C4622D] text-white"
                      : "bg-white text-[#5C3A1E] border border-[rgba(92,58,30,0.15)] hover:border-[#C4622D]"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">

          {/* Result count */}
          <p
            className="text-[#5C3A1E]/60 mb-8 text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {filteredHotels.length} hotel{filteredHotels.length !== 1 ? "s" : ""} found
          </p>

          {/* Empty state */}
          {filteredHotels.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="text-5xl">🏨</div>
              <p
                className="text-[#5C3A1E]/70 text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                No hotels match your filters
              </p>
              <button
                onClick={() => {
                  setSelectedCity("All");
                  setSelectedStars("All");
                  setSelectedPrice("All");
                }}
                className="text-[#C4622D] underline text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleHotels.map((hotel, i) => (
                <Link key={hotel.id} to={`/hotels/${hotel.id}`} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="group rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all bg-white cursor-pointer"
                  >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 flex gap-1">
                      {Array.from({ length: hotel.stars }).map((_, i) => (
                        <Star key={i} className="text-[#D4A827] fill-[#D4A827]" size={12} />
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-[#1A1A1A] mb-2 line-clamp-1"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[#5C3A1E]/70 mb-4">
                      <MapPin size={14} />
                      <span style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                        {hotel.city}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span
                          className="text-[#1A1A1A]"
                          style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}
                        >
                          €{hotel.price}
                        </span>
                        <span
                          className="text-[#5C3A1E]/70 text-sm"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                        >
                          /night
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="text-[#D4A827] fill-[#D4A827]" size={14} />
                        <span
                          className="text-[#1A1A1A]"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                        >
                          {hotel.rating}
                        </span>
                        <span
                          className="text-[#5C3A1E]/70 text-xs"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                        >
                          ({hotel.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </Link>
              ))}
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((c) => c + 4)}
                className="bg-white text-[#C4622D] border-2 border-[#C4622D] px-8 py-3 rounded-lg hover:bg-[#C4622D] hover:text-white transition-colors"
              >
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  Load More Hotels ({filteredHotels.length - visibleCount} remaining)
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}