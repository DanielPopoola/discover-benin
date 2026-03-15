import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { MapPin, Star, ChevronRight, Home, Phone, Mail, Globe, Clock, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Skeleton } from "../components/ui/skeleton";
import { motion } from "motion/react";
import { getHotel } from "../../lib/api";
import type { Hotel } from "../data/hotels";
import { useLang } from "../context/LanguageContext";

export function HotelDetailPage() {
  const { lang } = useLang();
  const tr = lang === "FR"
    ? {
        notFound: "Hôtel introuvable",
        back: "Retour aux hôtels",
        reviews: "avis",
        policies: "Règles de l'hôtel",
        checkIn: "Arrivée",
        checkOut: "Départ",
        cancellation: "Annulation",
        book: "Réserver par email",
        visit: "Visiter le site",
        contact: "Contact",
        location: "Localisation",
        maps: "Ouvrir dans Google Maps",
        perNight: "/nuit",
      }
    : {
        notFound: "Hotel not found",
        back: "Back to Hotels",
        reviews: "reviews",
        policies: "Hotel Policies",
        checkIn: "Check-in",
        checkOut: "Check-out",
        cancellation: "Cancellation",
        book: "Book via Email",
        visit: "Visit Website",
        contact: "Contact",
        location: "Location",
        maps: "Open in Google Maps",
        perNight: "/ night",
      };
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (!id || id === "undefined") {
      setNotFound(true);
      setLoading(false);
      return;
    }
    getHotel(id)
      .then(setHotel)
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <Skeleton className="mt-20 h-[60vh] w-full rounded-none" />
        <div className="max-w-[1280px] mx-auto px-8 py-14 space-y-6">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (notFound || !hotel) {
    return (
      <div className="min-h-screen bg-[#F5EFE0] flex flex-col">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 pt-32">
          <h1 className="text-[#1A1A1A]" style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>{tr.notFound}</h1>
          <Link to="/hotels" className="bg-[#C4622D] text-white px-6 py-3 rounded-lg hover:bg-[#B55626] transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{tr.back}</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allImages = hotel.gallery.length > 0 ? hotel.gallery : [hotel.image];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative h-[60vh] min-h-[420px] overflow-hidden mt-20">
        <ImageWithFallback src={allImages[activeImg]} alt={hotel.name} className="w-full h-full object-cover transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex items-center gap-2 text-white/75 text-sm">
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1"><Home size={14} /> Home</Link>
              <ChevronRight size={12} />
              <Link to="/hotels" className="hover:text-white transition-colors">Hotels</Link>
              <ChevronRight size={12} />
              <span className="text-white">{hotel.name}</span>
            </div>
          </div>
        </div>

        {allImages.length > 1 && (
          <>
            <button onClick={() => setActiveImg((i) => (i - 1 + allImages.length) % allImages.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors z-10">
              <ChevronLeft className="text-white" size={20} />
            </button>
            <button onClick={() => setActiveImg((i) => (i + 1) % allImages.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors z-10">
              <ChevronRightIcon className="text-white" size={20} />
            </button>
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {allImages.map((_, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeImg ? "bg-white scale-125" : "bg-white/50"}`} />
              ))}
            </div>
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <Star key={i} className="text-[#D4A827] fill-[#D4A827]" size={16} />
              ))}
            </div>
            <h1 className="text-white mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.1 }}>
              {hotel.name}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-white/80 text-sm">
              <div className="flex items-center gap-1.5"><MapPin size={15} /> {hotel.address}</div>
              <div className="flex items-center gap-1.5">
                <Star className="text-[#D4A827] fill-[#D4A827]" size={15} />
                <span className="text-white font-medium">{hotel.rating}</span>
                <span className="text-white/60">({hotel.reviews} {tr.reviews})</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {allImages.length > 1 && (
        <div className="bg-[#1A1A1A] py-3">
          <div className="max-w-[1280px] mx-auto px-8 flex gap-3 overflow-x-auto">
            {allImages.map((img, i) => (
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-[#1A1A1A] mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem" }}>About {hotel.name}</h2>
                <p className="text-[#5C3A1E]/80 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{hotel.description}</p>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hotel.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2.5 text-sm text-[#5C3A1E]" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                      <div className="w-5 h-5 rounded-full bg-[#C4622D]/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-[#C4622D] rounded-full" />
                      </div>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-[#1A1A1A] mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>Nearby Attractions</h3>
                <div className="space-y-3">
                  {hotel.nearbyAttractions.map((place) => (
                    <div key={place.name} className="flex items-center justify-between p-4 bg-[#F5EFE0] rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-[#2D5016]/10 rounded-lg flex items-center justify-center">
                          <MapPin className="text-[#2D5016]" size={16} />
                        </div>
                        <span className="text-[#1A1A1A] text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{place.name}</span>
                      </div>
                      <span className="text-[#5C3A1E]/60 text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{place.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-[#1A1A1A] mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>{tr.policies}</h3>
                <div className="space-y-0 divide-y divide-[rgba(92,58,30,0.08)]">
                  {[
                    [tr.checkIn, hotel.policies.checkIn],
                    [tr.checkOut, hotel.policies.checkOut],
                    [tr.cancellation, hotel.policies.cancellation],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-start justify-between py-4 gap-4">
                      <div className="flex items-center gap-2.5 text-[#5C3A1E]/60 text-sm shrink-0" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                        <Clock size={15} />{label}
                      </div>
                      <span className="text-[#1A1A1A] text-sm text-right" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)] shadow-[0_8px_30px_rgba(0,0,0,0.07)]">
                <div className="flex items-baseline gap-1 mb-1">
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#C4622D" }}>€{hotel.price}</span>
                  <span className="text-[#5C3A1E]/60 text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{tr.perNight}</span>
                </div>
                <div className="flex items-center gap-1.5 mb-6">
                  <Star className="text-[#D4A827] fill-[#D4A827]" size={14} />
                  <span className="text-sm font-medium text-[#1A1A1A]">{hotel.rating}</span>
                  <span className="text-[#5C3A1E]/50 text-xs">({hotel.reviews} {tr.reviews})</span>
                </div>
                <motion.a href={`mailto:${hotel.contact.email}`} whileHover={{ y: -2 }}
                  className="w-full bg-[#C4622D] text-white py-3.5 rounded-xl flex items-center justify-center gap-2 mb-3 hover:bg-[#B55626] transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600, textDecoration: "none" }}>
                  {tr.book}
                </motion.a>
                {hotel.contact.website && (
                  <a href={`https://${hotel.contact.website}`} target="_blank" rel="noopener noreferrer"
                    className="w-full border-2 border-[#C4622D] text-[#C4622D] py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#C4622D] hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600, textDecoration: "none" }}>
                    <Globe size={16} />{tr.visit}
                  </a>
                )}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)]">
                <h4 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{tr.contact}</h4>
                <div className="space-y-3">
                  {hotel.contact.phone && (
                    <a href={`tel:${hotel.contact.phone}`} className="flex items-center gap-3 text-sm text-[#5C3A1E] hover:text-[#C4622D] transition-colors group"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400, textDecoration: "none" }}>
                      <div className="w-9 h-9 bg-[#F5EFE0] rounded-lg flex items-center justify-center group-hover:bg-[#C4622D]/10 transition-colors">
                        <Phone size={15} className="text-[#C4622D]" />
                      </div>
                      {hotel.contact.phone}
                    </a>
                  )}
                  {hotel.contact.email && (
                    <a href={`mailto:${hotel.contact.email}`} className="flex items-center gap-3 text-sm text-[#5C3A1E] hover:text-[#C4622D] transition-colors group"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400, textDecoration: "none" }}>
                      <div className="w-9 h-9 bg-[#F5EFE0] rounded-lg flex items-center justify-center group-hover:bg-[#C4622D]/10 transition-colors">
                        <Mail size={15} className="text-[#C4622D]" />
                      </div>
                      <span className="truncate">{hotel.contact.email}</span>
                    </a>
                  )}
                  {hotel.contact.website && (
                    <a href={`https://${hotel.contact.website}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-[#5C3A1E] hover:text-[#C4622D] transition-colors group"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400, textDecoration: "none" }}>
                      <div className="w-9 h-9 bg-[#F5EFE0] rounded-lg flex items-center justify-center group-hover:bg-[#C4622D]/10 transition-colors">
                        <Globe size={15} className="text-[#C4622D]" />
                      </div>
                      {hotel.contact.website}
                    </a>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)]">
                <h4 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{tr.location}</h4>
                <div className="h-44 bg-[#F5EFE0] rounded-xl mb-4 flex flex-col items-center justify-center gap-2">
                  <MapPin className="text-[#C4622D]" size={36} />
                  <p className="text-[#5C3A1E]/70 text-xs text-center px-4 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{hotel.address}</p>
                </div>
                <a href={`https://www.google.com/maps/search/${encodeURIComponent(hotel.name + " " + hotel.city + " Benin")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#2D5016] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1e3a0e] transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, textDecoration: "none" }}>
                  <MapPin size={16} />{tr.maps}
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
