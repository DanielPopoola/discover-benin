import { useState } from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { MapPin, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

export function HotelsListingPage() {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedStars, setSelectedStars] = useState<string>("All");
  const [selectedPrice, setSelectedPrice] = useState<string>("All");

  const hotels = [
    {
      image:
        "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydCUyMEFmcmljYXxlbnwxfHx8fDE3NzM0MzczOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Golden Tulip Le Diplomate",
      city: "Cotonou",
      price: 120,
      rating: 4.8,
      stars: 5,
      reviews: 245,
    },
    {
      image:
        "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwdHJvcGljYWx8ZW58MXx8fHwxNzczNDM3MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Azalaï Hotel de la Plage",
      city: "Cotonou",
      price: 95,
      rating: 4.6,
      stars: 4,
      reviews: 182,
    },
    {
      image:
        "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwcmVzb3J0JTIwcG9vbHxlbnwxfHx8fDE3NzM0MzczOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Hotel Maison Rouge",
      city: "Porto-Novo",
      price: 75,
      rating: 4.5,
      stars: 4,
      reviews: 128,
    },
    {
      image:
        "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb20lMjBsdXh1cnl8ZW58MXx8fHwxNzczNDM3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Benin Marina Hotel",
      city: "Cotonou",
      price: 110,
      rating: 4.7,
      stars: 4,
      reviews: 203,
    },
    {
      image:
        "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc3MzM3MDc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Grand Popo Beach Resort",
      city: "Grand Popo",
      price: 85,
      rating: 4.6,
      stars: 3,
      reviews: 156,
    },
    {
      image:
        "https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBsdXh1cnklMjByZXNvcnR8ZW58MXx8fHwxNzczNDM3Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Auberge de Grand Popo",
      city: "Grand Popo",
      price: 65,
      rating: 4.4,
      stars: 3,
      reviews: 94,
    },
    {
      image:
        "https://images.unsplash.com/photo-1664908790579-34b71154f603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNDM3Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Hotel du Port",
      city: "Porto-Novo",
      price: 80,
      rating: 4.5,
      stars: 3,
      reviews: 167,
    },
    {
      image:
        "https://images.unsplash.com/photo-1759462692354-404b2c995c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3NzMzNTA5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Novotel Cotonou Orisha",
      city: "Cotonou",
      price: 135,
      rating: 4.9,
      stars: 5,
      reviews: 312,
    },
  ];

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
                  onClick={() => setSelectedCity(city)}
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
                  onClick={() => setSelectedStars(stars)}
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
                  onClick={() => setSelectedPrice(price)}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotels.map((hotel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-1">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star
                        key={i}
                        className="text-[#D4A827] fill-[#D4A827]"
                        size={12}
                      />
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
                    <span
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {hotel.city}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span
                        className="text-[#1A1A1A]"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "20px",
                        }}
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
                      <Star
                        className="text-[#D4A827] fill-[#D4A827]"
                        size={14}
                      />
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
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white text-[#C4622D] border-2 border-[#C4622D] px-8 py-3 rounded-lg hover:bg-[#C4622D] hover:text-white transition-colors">
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                Load More Hotels
              </span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}