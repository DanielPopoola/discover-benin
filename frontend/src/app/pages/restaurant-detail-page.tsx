import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { MapPin, Star, Clock, ChevronRight, Home, Phone, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Skeleton } from "../components/ui/skeleton";
import { motion } from "motion/react";
import { getRestaurant } from "../../lib/api";
import type { Restaurant } from "../data/restaurants";
import { useLang } from "../context/LanguageContext";

const PRICE_LABELS: Record<string, string> = {
  "$":   "Budget · Under CFA 1000/person",
  "$$":  "Mid-range · CFA 1000 – 2500/person",
  "$$$": "Fine dining · CFA 2500+/person",
};

export function RestaurantDetailPage() {
  const { lang } = useLang();
  const tr = lang === "FR"
    ? { notFound: "Restaurant introuvable", back: "Retour aux restaurants", reviews: "avis", location: "Localisation", priceRange: "Gamme de prix", basedOn: "Basé sur", contact: "Contact et réservations", maps: "Ouvrir dans Google Maps" }
    : { notFound: "Restaurant not found", back: "Back to Restaurants", reviews: "reviews", location: "Location", priceRange: "Price range", basedOn: "Based on", contact: "Contact & reservations", maps: "Open in Google Maps" };
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (!id || id === "undefined") {
      setNotFound(true);
      setLoading(false);
      return;
    }
    getRestaurant(id)
      .then(setRestaurant)
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <Skeleton className="mt-20 h-[58vh] w-full rounded-none" />
        <div className="max-w-[1280px] mx-auto px-8 py-14 space-y-6">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (notFound || !restaurant) {
    return (
      <div className="min-h-screen bg-[#F5EFE0] flex flex-col">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 pt-32">
          <h1 className="text-[#1A1A1A]" style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>{tr.notFound}</h1>
          <Link to="/restaurants" className="bg-[#C4622D] text-white px-6 py-3 rounded-lg hover:bg-[#B55626] transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{tr.back}</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = restaurant.gallery.length > 0 ? restaurant.gallery : [restaurant.image];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative h-[58vh] min-h-[400px] overflow-hidden mt-20">
        <ImageWithFallback src={images[activeImg]} alt={restaurant.name} className="w-full h-full object-cover transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1"><Home size={14} /> Home</Link>
              <ChevronRight size={12} />
              <Link to="/restaurants" className="hover:text-white transition-colors">Restaurants</Link>
              <ChevronRight size={12} />
              <span className="text-white">{restaurant.name}</span>
            </div>
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button onClick={() => setActiveImg((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors z-10">
              <ChevronLeft className="text-white" size={20} />
            </button>
            <button onClick={() => setActiveImg((i) => (i + 1) % images.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors z-10">
              <ChevronRightIcon className="text-white" size={20} />
            </button>
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeImg ? "bg-white scale-125" : "bg-white/50"}`} />
              ))}
            </div>
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="inline-block text-[#C4622D] bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full mb-3"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {restaurant.cuisine}
            </div>
            <h1 className="text-white mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.1 }}>
              {restaurant.name}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-white/80 text-sm">
              <div className="flex items-center gap-1.5"><MapPin size={14} /> {restaurant.city}</div>
              <div className="flex items-center gap-1.5"><Clock size={14} /> {restaurant.hours}</div>
              <div className="flex items-center gap-1.5">
                <Star className="text-[#D4A827] fill-[#D4A827]" size={14} />
                <span className="text-white font-medium">{restaurant.rating}</span>
                <span className="text-white/60">({restaurant.reviews} {tr.reviews})</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {images.length > 1 && (
        <div className="bg-[#1A1A1A] py-3">
          <div className="max-w-[1280px] mx-auto px-8 flex gap-3">
            {images.map((img, i) => (
              <button key={i} onClick={() => setActiveImg(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${i === activeImg ? "border-[#C4622D]" : "border-transparent opacity-60 hover:opacity-100"}`}>
                <ImageWithFallback src={img} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      <section className="py-14 bg-[#F5EFE0]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-[#1A1A1A] mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem" }}>About {restaurant.name}</h2>
                <p className="text-[#5C3A1E]/80 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{restaurant.description}</p>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>Menu highlights</h3>
                <div className="space-y-8">
                  {restaurant.menu.map((section) => (
                    <div key={section.section}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-0.5 bg-[#C4622D]" />
                        <h4 className="text-[#C4622D] uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>{section.section}</h4>
                      </div>
                      <div className="space-y-0 divide-y divide-[rgba(92,58,30,0.07)]">
                        {section.items.map((item: { name: string; description: string; price: string }) => (
                          <div key={item.name} className="flex items-start justify-between py-4 gap-6">
                            <div className="flex-1">
                              <div className="text-[#1A1A1A] mb-0.5" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{item.name}</div>
                              <div className="text-[#5C3A1E]/60 text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{item.description}</div>
                            </div>
                            <div className="text-[#C4622D] shrink-0" style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}>{item.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>What to know</h3>
                <div className="grid grid-cols-2 gap-3">
                  {restaurant.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-sm text-[#5C3A1E]" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                      <div className="w-5 h-5 rounded-full bg-[#2D5016]/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-[#2D5016] rounded-full" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)] shadow-[0_8px_30px_rgba(0,0,0,0.07)]">
                <div className="space-y-0 divide-y divide-[rgba(92,58,30,0.08)]">
                  {[
                    { label: "Cuisine", value: restaurant.cuisine },
                    { label: tr.location, value: restaurant.city },
                    { label: "Hours", value: restaurant.hours },
                    { label: tr.priceRange, value: PRICE_LABELS[restaurant.price] ?? restaurant.price },
                    { label: "Must try", value: restaurant.specialty },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start gap-4 py-3.5">
                      <span className="text-[#5C3A1E]/60 text-sm shrink-0" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{label}</span>
                      <span className="text-[#1A1A1A] text-sm text-right" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-[rgba(92,58,30,0.08)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16}
                        className={star <= Math.floor(restaurant.rating) ? "text-[#D4A827] fill-[#D4A827]" : "text-[#D4A827]/30 fill-[#D4A827]/30"} />
                    ))}
                  </div>
                  <span className="text-[#1A1A1A]" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>{restaurant.rating}</span>
                </div>
                <p className="text-[#5C3A1E]/50 text-xs mt-1" style={{ fontFamily: "var(--font-body)" }}>{tr.basedOn} {restaurant.reviews} {tr.reviews}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)]">
                <h4 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{tr.contact}</h4>
                <div className="space-y-3">
                  <a href={`tel:${restaurant.contact.phone}`}
                    className="flex items-center gap-3 text-sm text-[#5C3A1E] hover:text-[#C4622D] transition-colors group"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400, textDecoration: "none" }}>
                    <div className="w-9 h-9 bg-[#F5EFE0] rounded-lg flex items-center justify-center group-hover:bg-[#C4622D]/10 transition-colors">
                      <Phone size={15} className="text-[#C4622D]" />
                    </div>
                    {restaurant.contact.phone}
                  </a>
                  {restaurant.contact.instagram && (
                    <div className="flex items-center gap-3 text-sm text-[#5C3A1E]" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                      <div className="w-9 h-9 bg-[#F5EFE0] rounded-lg flex items-center justify-center">
                        <span style={{ fontSize: "14px" }}>📸</span>
                      </div>
                      {restaurant.contact.instagram}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)]">
                <h4 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{tr.location}</h4>
                <div className="h-40 bg-[#F5EFE0] rounded-xl mb-4 flex flex-col items-center justify-center gap-2">
                  <MapPin className="text-[#C4622D]" size={32} />
                  <p className="text-[#5C3A1E]/70 text-xs text-center px-4 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    {restaurant.address}
                  </p>
                </div>
                <a href={`https://www.google.com/maps/search/${encodeURIComponent(restaurant.name + " " + restaurant.city + " Benin")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#2D5016] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1e3a0e] transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, textDecoration: "none" }}>
                  <MapPin size={15} />{tr.maps}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
