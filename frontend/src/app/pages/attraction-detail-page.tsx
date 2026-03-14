import { useParams, Link } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import {
  MapPin, Star, Clock, ChevronRight, Home,
  Hotel, Utensils, Navigation as NavigationIcon, Cloud, Sun,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getAttractionById } from "../data/attractions";

export function AttractionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const attraction = getAttractionById(id ?? "");

  if (!attraction) {
    return (
      <div className="min-h-screen bg-[#F5EFE0] flex flex-col">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 pt-32">
          <h1 className="text-[#1A1A1A]" style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
            Attraction not found
          </h1>
          <Link to="/" className="bg-[#C4622D] text-white px-6 py-3 rounded-lg hover:bg-[#B55626] transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative h-[65vh] overflow-hidden mt-20">
        <ImageWithFallback src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1"><Home size={16} /> Home</Link>
              <ChevronRight size={14} />
              <span>Attractions</span>
              <ChevronRight size={14} />
              <span className="text-white">{attraction.name}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="inline-block bg-[#C4622D] text-white px-4 py-1.5 rounded-full mb-4"
              style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {attraction.badge}
            </div>
            <h1 className="text-white mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: "1.1" }}>
              {attraction.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white">
              <div className="flex items-center gap-2"><MapPin size={18} /><span>{attraction.region}</span></div>
              <div className="flex items-center gap-2">
                <Star className="text-[#D4A827] fill-[#D4A827]" size={18} />
                <span style={{ fontWeight: 500 }}>{attraction.rating}</span>
                <span className="text-white/70">({attraction.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{attraction.travelTime}</span></div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase" }}>
                Best: {attraction.bestTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5EFE0]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
            <div>
              <div className="mb-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 h-96 rounded-2xl overflow-hidden">
                    <ImageWithFallback src={attraction.gallery[0]} alt={attraction.name} className="w-full h-full object-cover" />
                  </div>
                  {attraction.gallery.slice(1).map((img, i) => (
                    <div key={i} className="h-64 rounded-2xl overflow-hidden">
                      <ImageWithFallback src={img} alt={`${attraction.name} ${i+2}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8">
                <h2 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "32px" }}>
                  About {attraction.name}
                </h2>
                <p className="text-[#5C3A1E]/80 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  {attraction.longDescription}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8">
                <h3 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "28px" }}>Travel Tips</h3>
                <ul className="space-y-4">
                  {attraction.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#C4622D]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-[#C4622D] rounded-full" />
                      </div>
                      <span className="text-[#5C3A1E]/80" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8">
                <h3 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "28px" }}>Nearby Hotels</h3>
                <div className="space-y-4">
                  {attraction.nearbyHotels.map((hotel, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-[#F5EFE0] rounded-xl hover:bg-[#EDE7D3] transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#C4622D]/10 rounded-lg flex items-center justify-center">
                          <Hotel className="text-[#C4622D]" size={20} />
                        </div>
                        <span className="text-[#1A1A1A]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{hotel.name}</span>
                      </div>
                      <span className="text-[#5C3A1E]/70" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{hotel.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "28px" }}>Nearby Restaurants</h3>
                <div className="space-y-4">
                  {attraction.nearbyRestaurants.map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-[#F5EFE0] rounded-xl hover:bg-[#EDE7D3] transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#2D5016]/10 rounded-lg flex items-center justify-center">
                          <Utensils className="text-[#2D5016]" size={20} />
                        </div>
                        <span className="text-[#1A1A1A]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{r.name}</span>
                      </div>
                      <span className="text-[#5C3A1E]/70" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{r.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)]">
                <h4 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}>Quick Facts</h4>
                <div className="space-y-4">
                  {[
                    ["Category", attraction.category],
                    ["Region", attraction.region],
                    ["Best Time", attraction.bestTime],
                    ["Travel Time", attraction.travelTime],
                    ["Rating", `${attraction.rating}/5.0 (${attraction.reviews} reviews)`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4">
                      <span className="text-[#5C3A1E]/70 shrink-0" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{label}</span>
                      <span className="text-[#1A1A1A] text-right" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)]">
                <h4 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}>Location</h4>
                <div className="h-48 bg-[#F5EFE0] rounded-xl mb-4 flex flex-col items-center justify-center gap-2">
                  <MapPin className="text-[#C4622D]" size={40} />
                  <p className="text-[#5C3A1E]/70 text-sm text-center px-4" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    {attraction.name}, {attraction.region}
                  </p>
                </div>
                <a href={`https://www.google.com/maps/search/${encodeURIComponent(attraction.name + " Benin")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-[#C4622D] text-white py-3 rounded-lg hover:bg-[#B55626] transition-colors flex items-center justify-center gap-2">
                  <NavigationIcon size={18} />
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>Open in Google Maps</span>
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)]">
                <h4 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}>Weather</h4>
                <div className="space-y-4">
                  {attraction.weather.map((w, i) => (
                    <div key={i} className={`flex items-center justify-between p-4 rounded-xl ${i === 0 ? "bg-[#D4A827]/10" : "bg-[#2D5016]/10"}`}>
                      <div className="flex items-center gap-3">
                        {i === 0 ? <Sun className="text-[#D4A827]" size={24} /> : <Cloud className="text-[#2D5016]" size={24} />}
                        <div>
                          <div className="text-[#1A1A1A] mb-1" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{w.season}</div>
                          <div className="text-[#5C3A1E]/70 text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{w.months}</div>
                        </div>
                      </div>
                      <span className="text-[#1A1A1A]" style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}>{w.temp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
