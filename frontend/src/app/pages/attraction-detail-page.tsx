import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import {
  MapPin,
  Star,
  Clock,
  ChevronRight,
  Home,
  Hotel,
  Utensils,
  Navigation as NavigationIcon,
  Cloud,
  Sun,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AttractionDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[65vh] overflow-hidden mt-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2F2YW5uYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MzQzNzM4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Pendjari National Park"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="max-w-[1280px] mx-auto px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Home size={16} />
              <ChevronRight size={14} />
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                Attractions
              </span>
              <ChevronRight size={14} />
              <span
                className="text-white"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Pendjari National Park
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12">
          <div className="max-w-[1280px] mx-auto px-8">
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "56px",
                lineHeight: "1.1",
              }}
            >
              Pendjari National Park
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                  North Benin
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-[#D4A827] fill-[#D4A827]" size={18} />
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  4.9
                </span>
                <span
                  className="text-white/70"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  (238 reviews)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                  4-5 hours from Cotonou
                </span>
              </div>
              <div
                className="bg-[#C4622D] px-4 py-2 rounded-full"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Best: Nov - Apr
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F5EFE0]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
            {/* Left Column */}
            <div>
              {/* Photo Gallery */}
              <div className="mb-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 h-96 rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2F2YW5uYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MzQzNzM4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Wildlife"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-64 rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1716998461781-95815e03bf63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbGFrZSUyMHN1bnNldHxlbnwxfHx8fDE3NzM0MzczODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Sunset"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-64 rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1704183683766-37137be69d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd2F0ZXJmYWxsJTIwbmF0dXJlfGVufDF8fHx8MTc3MzQzNzM5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Waterfall"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-white rounded-2xl p-8 mb-8">
                <h2
                  className="text-[#1A1A1A] mb-6"
                  style={{ fontFamily: "var(--font-display)", fontSize: "32px" }}
                >
                  About Pendjari National Park
                </h2>
                <div
                  className="text-[#5C3A1E]/80 space-y-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  <p>
                    Pendjari National Park is one of West Africa's most important
                    protected areas and a UNESCO Biosphere Reserve. Located in
                    northwestern Benin, it forms part of the larger W-Arly-Pendjari
                    (WAP) Complex, the largest remaining intact ecosystem in West
                    Africa.
                  </p>
                  <p>
                    The park is home to some of the last populations of West African
                    lions, elephants, cheetahs, and the critically endangered West
                    African wild dog. Visitors can observe these magnificent creatures
                    in their natural habitat, along with hundreds of bird species,
                    hippos, crocodiles, and various antelope species.
                  </p>
                  <p>
                    The landscape varies from savanna woodland to gallery forests along
                    the Pendjari River, creating diverse habitats that support an
                    incredible array of wildlife. The park offers guided safari tours,
                    walking safaris, and opportunities for birdwatching.
                  </p>
                </div>
              </div>

              {/* Travel Tips */}
              <div className="bg-white rounded-2xl p-8 mb-8">
                <h3
                  className="text-[#1A1A1A] mb-6"
                  style={{ fontFamily: "var(--font-display)", fontSize: "28px" }}
                >
                  Travel Tips
                </h3>
                <ul className="space-y-4">
                  {[
                    "Visit during the dry season (November to April) for the best wildlife viewing",
                    "Book guided tours in advance, especially during peak season",
                    "Bring binoculars for birdwatching and wildlife spotting",
                    "Pack light, breathable clothing in neutral colors",
                    "Don't forget sunscreen, hat, and insect repellent",
                    "Respect park rules and maintain distance from animals",
                    "Stay overnight at park lodges for early morning safari experiences",
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#C4622D]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-[#C4622D] rounded-full" />
                      </div>
                      <span
                        className="text-[#5C3A1E]/80"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nearby Hotels */}
              <div className="bg-white rounded-2xl p-8 mb-8">
                <h3
                  className="text-[#1A1A1A] mb-6"
                  style={{ fontFamily: "var(--font-display)", fontSize: "28px" }}
                >
                  Nearby Hotels
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Pendjari Lodge", distance: "Inside park" },
                    { name: "Hotel Tata-Somba", distance: "15 km" },
                    { name: "Auberge de Boukoumbé", distance: "45 km" },
                  ].map((hotel, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-[#F5EFE0] rounded-xl hover:bg-[#F5EFE0]/70 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#C4622D]/10 rounded-lg flex items-center justify-center">
                          <Hotel className="text-[#C4622D]" size={20} />
                        </div>
                        <span
                          className="text-[#1A1A1A]"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                        >
                          {hotel.name}
                        </span>
                      </div>
                      <span
                        className="text-[#5C3A1E]/70"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {hotel.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Restaurants */}
              <div className="bg-white rounded-2xl p-8">
                <h3
                  className="text-[#1A1A1A] mb-6"
                  style={{ fontFamily: "var(--font-display)", fontSize: "28px" }}
                >
                  Nearby Restaurants
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Restaurant du Parc", distance: "Inside park" },
                    { name: "Chez Marcel", distance: "12 km" },
                    { name: "Le Campement", distance: "20 km" },
                  ].map((restaurant, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-[#F5EFE0] rounded-xl hover:bg-[#F5EFE0]/70 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#2D5016]/10 rounded-lg flex items-center justify-center">
                          <Utensils className="text-[#2D5016]" size={20} />
                        </div>
                        <span
                          className="text-[#1A1A1A]"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                        >
                          {restaurant.name}
                        </span>
                      </div>
                      <span
                        className="text-[#5C3A1E]/70"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {restaurant.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Sticky */}
            <div className="lg:sticky lg:top-24 h-fit space-y-6">
              {/* Quick Facts Card */}
              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)]">
                <h4
                  className="text-[#1A1A1A] mb-6"
                  style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}
                >
                  Quick Facts
                </h4>
                <div className="space-y-4">
                  {[
                    { label: "Category", value: "National Park" },
                    { label: "Region", value: "North Benin" },
                    { label: "Best Time", value: "Nov - Apr" },
                    { label: "Travel Time", value: "4-5 hours" },
                    { label: "Rating", value: "4.9/5.0" },
                  ].map((fact, i) => (
                    <div key={i} className="flex justify-between">
                      <span
                        className="text-[#5C3A1E]/70"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {fact.label}
                      </span>
                      <span
                        className="text-[#1A1A1A]"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)]">
                <h4
                  className="text-[#1A1A1A] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}
                >
                  Location
                </h4>
                <div className="h-48 bg-[#F5EFE0] rounded-xl mb-4 flex items-center justify-center">
                  <MapPin className="text-[#C4622D]" size={48} />
                </div>
                <button className="w-full bg-[#C4622D] text-white py-3 rounded-lg hover:bg-[#B55626] transition-colors flex items-center justify-center gap-2">
                  <NavigationIcon size={18} />
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                    Get Directions
                  </span>
                </button>
              </div>

              {/* Weather Card */}
              <div className="bg-white rounded-2xl p-6 border border-[rgba(92,58,30,0.15)]">
                <h4
                  className="text-[#1A1A1A] mb-6"
                  style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}
                >
                  Weather
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#D4A827]/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Sun className="text-[#D4A827]" size={24} />
                      <div>
                        <div
                          className="text-[#1A1A1A] mb-1"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                        >
                          Dry Season
                        </div>
                        <div
                          className="text-[#5C3A1E]/70 text-sm"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                        >
                          Nov - Apr
                        </div>
                      </div>
                    </div>
                    <span
                      className="text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}
                    >
                      28-35°C
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#2D5016]/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Cloud className="text-[#2D5016]" size={24} />
                      <div>
                        <div
                          className="text-[#1A1A1A] mb-1"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                        >
                          Rainy Season
                        </div>
                        <div
                          className="text-[#5C3A1E]/70 text-sm"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                        >
                          May - Oct
                        </div>
                      </div>
                    </div>
                    <span
                      className="text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}
                    >
                      24-30°C
                    </span>
                  </div>
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
