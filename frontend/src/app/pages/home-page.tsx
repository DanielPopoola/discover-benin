import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { Link } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { motion } from "motion/react";
import {
  Search,
  MapPin,
  Star,
  Heart,
  Clock,
  ChevronDown,
  Compass,
  Hotel,
  Utensils,
  Landmark,
  Info,
  Image as ImageIcon,
  Sparkles,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getAttractions, streamRecommendation } from "../../lib/api";
import type { Attraction } from "../data/attractions";

export function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLang();
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [aiInput, setAiInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiStreaming, setAiStreaming] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getAttractions().then(setAttractions).catch(console.error);
  }, []);

  const handleAiSubmit = async () => {
    if (!aiInput.trim() || aiStreaming) return;
    setAiResponse("");
    setAiStreaming(true);
    try {
      await streamRecommendation(
        aiInput,
        (chunk) => setAiResponse((prev) => prev + chunk),
        () => setAiStreaming(false)
      );
    } catch {
      setAiStreaming(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Left Content */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-[1280px] mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "56px",
                  lineHeight: "1.1",
                }}
              >
                Discover the{" "}
                <em style={{ fontStyle: "italic" }}>Beauty of Benin</em>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/75 mb-8 max-w-lg leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 300 }}
              >
                Explore the rich cultural heritage, stunning landscapes, and vibrant
                traditions of West Africa's hidden gem.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-full p-2 flex items-center gap-2 max-w-[520px] shadow-2xl"
              >
                <input
                  type="text"
                  placeholder="Search destinations, hotels, attractions..."
                  className="flex-1 px-4 py-2 bg-transparent outline-none"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                />
                <button className="bg-[#C4622D] text-white px-6 py-3 rounded-full hover:bg-[#B55626] transition-colors flex items-center gap-2">
                  <Search size={20} />
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                    Search
                  </span>
                </button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex gap-12 mt-12"
              >
                {[
                  { number: "50+", label: "Attractions" },
                  { number: "200+", label: "Hotels" },
                  { number: "12", label: "Destinations" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div
                      className="text-white mb-1"
                      style={{ fontFamily: "var(--font-display)", fontSize: "32px" }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="text-white/70"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Image Grid with Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D5016] via-[#2D5016]/80 to-transparent z-[1]" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 grid grid-cols-2 gap-2">
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2F2YW5uYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MzQzNzM4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Benin Wildlife"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753872780884-12521c336c50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXZXN0JTIwQWZyaWNhJTIwYmVhY2glMjBwYWxtfGVufDF8fHx8MTc3MzQzNzM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Benin Beach"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXZXN0JTIwQWZyaWNhbiUyMHRyYWRpdGlvbmFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzQzNzM4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Traditional Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734254807102-fbf62b0cc513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXZXN0JTIwQWZyaWNhbiUyMG1hcmtldHBsYWNlfGVufDF8fHx8MTc3MzQzNzM5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Local Market"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ChevronDown className="text-white/60" size={32} />
        </motion.div>
      </section>

      {/* Category Bar */}
      <section className="bg-white py-8 border-b border-gray-100" id="categories">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Compass, label: "Attractions", color: "#C4622D" },
              { icon: Hotel, label: "Hotels", color: "#2D5016" },
              { icon: Utensils, label: "Restaurants", color: "#D4A827" },
              { icon: Landmark, label: "Heritage", color: "#C4622D" },
              { icon: Info, label: "Travel Tips", color: "#2D5016" },
              { icon: ImageIcon, label: "Gallery", color: "#D4A827" },
            ].map((category, i) => (
              <motion.a
                key={i}
                href={`#${category.label.toLowerCase()}`}
                whileHover={{ y: -6, borderColor: "#C4622D" }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon size={28} style={{ color: category.color }} />
                </div>
                <span
                  className="text-[#5C3A1E] text-sm"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {category.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-20 bg-[#F5EFE0]" id="attractions">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-0.5 bg-[#C4622D]" />
              <span
                className="text-[#C4622D] uppercase tracking-wider"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
              >
                Explore
              </span>
            </div>
            <h2
              className="text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display)", fontSize: "40px" }}
            >
              Top Destinations in Benin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((dest, i) => (
              <DestinationCard
                key={dest.id}
                id={dest.id}
                image={dest.image}
                badge={dest.badge}
                location={dest.name}
                region={dest.region}
                rating={dest.rating}
                time={dest.travelTime}
                featured={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Map Teaser Section */}
      <section className="py-20 bg-[#2D5016] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)",
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-[#D4A827]" />
                <span
                  className="text-[#D4A827] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
                >
                  Interactive
                </span>
              </div>
              <h2
                className="text-white mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "40px" }}
              >
                Explore Benin's Map
              </h2>
              <p
                className="text-white/80 mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Discover all the major attractions, cities, and points of interest
                across the Republic of Benin. Our interactive map helps you plan your
                perfect journey.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "50+ marked attractions and landmarks",
                  "12 major cities and regions",
                  "Real-time distance calculations",
                  "Custom itinerary planning",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#D4A827] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#2D5016] rounded-full" />
                    </div>
                    <span
                      className="text-white/90"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="bg-[#C4622D] text-white px-8 py-3 rounded-lg hover:bg-[#B55626] transition-colors">
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  Open Full Map
                </span>
              </button>
            </div>

            {/* Map Illustration */}
            <div className="relative h-96 bg-white/5 rounded-2xl p-8 flex items-center justify-center">
              <MapPin className="text-[#D4A827]" size={120} />
              {/* Animated pins */}
              {[
                { top: "20%", left: "30%" },
                { top: "40%", left: "60%" },
                { top: "60%", left: "40%" },
                { top: "70%", left: "70%" },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={pos}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <div className="w-4 h-4 bg-[#D4A827] rounded-full shadow-[0_0_20px_rgba(212,168,39,0.5)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Guide Strip */}
      <section className="py-20 bg-[#F5EFE0]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-12 text-center">
            <h2
              className="text-[#1A1A1A] mb-4"
              style={{ fontFamily: "var(--font-display)", fontSize: "40px" }}
            >
              Essential Travel Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "🎭",
                title: "Culture & Traditions",
                text: "Discover the rich cultural heritage of Benin, birthplace of Voodoo and home to vibrant festivals.",
                tag: "Learn More",
              },
              {
                emoji: "🗣️",
                title: "Languages",
                text: "French is official, but Fon, Yoruba, and over 50 local languages are spoken across the country.",
                tag: "Language Guide",
              },
              {
                emoji: "💰",
                title: "Currency & Money",
                text: "West African CFA Franc (XOF) is used. ATMs available in major cities, cards accepted widely.",
                tag: "Money Tips",
              },
              {
                emoji: "🍲",
                title: "Food & Cuisine",
                text: "Savor traditional dishes like akassa, amiwo, and aloko. Street food is safe and delicious.",
                tag: "Food Guide",
              },
              {
                emoji: "🚕",
                title: "Transport",
                text: "Zémidjans (motorcycle taxis) are popular. Taxis and buses connect major cities.",
                tag: "Getting Around",
              },
              {
                emoji: "🛡️",
                title: "Safety",
                text: "Benin is one of West Africa's safest countries. Standard travel precautions apply.",
                tag: "Safety Tips",
              },
            ].map((guide, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-2xl border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all"
              >
                <div className="text-5xl mb-4">{guide.emoji}</div>
                <h3
                  className="text-[#1A1A1A] mb-3"
                  style={{ fontFamily: "var(--font-display)", fontSize: "24px" }}
                >
                  {guide.title}
                </h3>
                <p
                  className="text-[#5C3A1E]/70 mb-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {guide.text}
                </p>
                <a
                  href="#"
                  className="text-[#C4622D] flex items-center gap-2 group"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  <div className="w-8 h-0.5 bg-[#C4622D]" />
                  {guide.tag}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-20 bg-white" id="hotels">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-0.5 bg-[#C4622D]" />
                <span
                  className="text-[#C4622D] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
                >
                  Accommodation
                </span>
              </div>
              <h2
                className="text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display)", fontSize: "40px" }}
              >
                Featured Hotels
              </h2>
            </div>
            <Link
              to="/hotels"
              className="text-[#C4622D] hover:text-[#B55626] transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              View All Hotels →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydCUyMEFmcmljYXxlbnwxfHx8fDE3NzM0MzczOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                name: "Golden Tulip Le Diplomate",
                city: "Cotonou",
                price: "€120",
                rating: 4.8,
                stars: 5,
              },
              {
                image:
                  "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwdHJvcGljYWx8ZW58MXx8fHwxNzczNDM3MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                name: "Azalaï Hotel de la Plage",
                city: "Cotonou",
                price: "€95",
                rating: 4.6,
                stars: 4,
              },
              {
                image:
                  "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwcmVzb3J0JTIwcG9vbHxlbnwxfHx8fDE3NzM0MzczOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                name: "Hotel Maison Rouge",
                city: "Porto-Novo",
                price: "€75",
                rating: 4.5,
                stars: 4,
              },
              {
                image:
                  "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb20lMjBsdXh1cnl8ZW58MXx8fHwxNzczNDM3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                name: "Benin Marina Hotel",
                city: "Cotonou",
                price: "€110",
                rating: 4.7,
                stars: 4,
              },
            ].map((hotel, i) => (
              <HotelCard key={i} {...hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Travel Assistant */}
      <section className="py-20 bg-[#F5EFE0]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-[#2D5016] rounded-2xl p-12 relative overflow-hidden">
            {/* Radial gold glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A827]/20 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#D4A827] text-[#1A1A1A] px-4 py-2 rounded-full mb-6">
                  <Sparkles size={16} />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    AI-Powered
                  </span>
                </div>
                <h2
                  className="text-white mb-4"
                  style={{ fontFamily: "var(--font-display)", fontSize: "36px" }}
                >
                  Your Personal Travel Assistant
                </h2>
                <p
                  className="text-white/80 mb-8 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Ask me anything about Benin - from the best time to visit to
                  hidden gems only locals know about.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex gap-3">
                  <input
                    type="text"
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAiSubmit()}
                    placeholder="Ask about destinations, culture, or travel tips..."
                    className="flex-1 bg-transparent text-white placeholder-white/50 outline-none"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  />
                  <button
                    onClick={handleAiSubmit}
                    disabled={aiStreaming}
                    className="bg-[#D4A827] text-[#1A1A1A] px-6 py-2.5 rounded-lg hover:bg-[#C49627] transition-colors disabled:opacity-60"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    {aiStreaming ? "..." : "Generate"}
                  </button>
                </div>

                {aiResponse && (
                  <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white/90 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    {aiResponse}
                    {aiStreaming && <span className="inline-block w-1 h-4 bg-white/70 ml-1 animate-pulse" />}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "🏖️",
                    title: "Best beaches in Benin",
                    sub: "Coastal destinations",
                  },
                  {
                    icon: "🎨",
                    title: "Cultural festivals & events",
                    sub: "Traditional celebrations",
                  },
                  {
                    icon: "🌅",
                    title: "3-day Cotonou itinerary",
                    sub: "City exploration",
                  },
                ].map((suggestion, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ x: 8 }}
                    className="w-full bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 text-left hover:bg-white/20 transition-colors"
                  >
                    <div className="text-3xl">{suggestion.icon}</div>
                    <div className="flex-1">
                      <div
                        className="text-white mb-1"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {suggestion.title}
                      </div>
                      <div
                        className="text-white/60 text-sm"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {suggestion.sub}
                      </div>
                    </div>
                    <ArrowRight className="text-white/40" size={20} />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-20 bg-white" id="events">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-0.5 bg-[#C4622D]" />
              <span
                className="text-[#C4622D] uppercase tracking-wider"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
              >
                Upcoming
              </span>
            </div>
            <h2
              className="text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display)", fontSize: "40px" }}
            >
              Events & Festivals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                color: "#C4622D",
                emoji: "🎭",
                day: "10",
                month: "JAN",
                category: "Festival",
                name: "Voodoo Day",
                location: "Ouidah",
              },
              {
                color: "#2D5016",
                emoji: "🎪",
                day: "22",
                month: "FEB",
                category: "Cultural",
                name: "Ganvié Festival",
                location: "Lake Nokoué",
              },
              {
                color: "#D4A827",
                emoji: "🎨",
                day: "15",
                month: "MAR",
                category: "Arts",
                name: "Artisans Fair",
                location: "Cotonou",
              },
              {
                color: "#C4622D",
                emoji: "🎵",
                day: "01",
                month: "AUG",
                category: "Music",
                name: "Benin Music Festival",
                location: "Porto-Novo",
              },
            ].map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-[rgba(92,58,30,0.15)] overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all"
              >
                <div
                  className="p-6 flex items-center gap-4"
                  style={{ backgroundColor: event.color }}
                >
                  <div className="text-4xl">{event.emoji}</div>
                  <div className="bg-white rounded-xl px-4 py-3 text-center">
                    <div
                      className="text-2xl leading-none mb-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: event.color,
                      }}
                    >
                      {event.day}
                    </div>
                    <div
                      className="text-xs uppercase tracking-wider"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: event.color,
                      }}
                    >
                      {event.month}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div
                    className="text-[#C4622D] mb-2 uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                    }}
                  >
                    {event.category}
                  </div>
                  <h3
                    className="text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                    }}
                  >
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[#5C3A1E]/70">
                    <MapPin size={14} />
                    <span
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {event.location}
                    </span>
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

// Destination Card Component
function DestinationCard({
  id,
  image,
  badge,
  location,
  region,
  rating,
  time,
  featured = false,
}: {
  id: string;
  image: string;
  badge: string;
  location: string;
  region: string;
  rating: number;
  time: string;
  featured?: boolean;
}) {
  return (
    <Link to={`/attractions/${id}`}>
      <motion.div
        whileHover={{ y: -6 }}
        className={`group rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all cursor-pointer ${
          featured ? "lg:col-span-2" : "lg:col-span-1"
        }`}
      >
        <div className={`relative ${featured ? "h-80" : "h-64"} overflow-hidden`}>
          <ImageWithFallback
            src={image}
            alt={location}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-[#C4622D] text-white px-3 py-1.5 rounded-full">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {badge}
            </span>
          </div>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Heart className="text-white" size={18} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-white" size={16} />
              <span
                className="text-white/80"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {region}
              </span>
            </div>
            <h3
              className="text-white mb-2"
              style={{ fontFamily: "var(--font-display)", fontSize: "24px" }}
            >
              {location}
            </h3>
          </div>
        </div>
        <div className="p-4 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="text-[#D4A827] fill-[#D4A827]" size={16} />
            <span
              className="text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {rating}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#5C3A1E]/70">
            <Clock size={16} />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              {time}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Hotel Card Component
function HotelCard({
  image,
  name,
  city,
  price,
  rating,
  stars,
}: {
  image: string;
  name: string;
  city: string;
  price: string;
  rating: number;
  stars: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all bg-white"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 flex gap-1">
          {Array.from({ length: stars }).map((_, i) => (
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
          className="text-[#1A1A1A] mb-2"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          {name}
        </h3>
        <div className="flex items-center gap-2 text-[#5C3A1E]/70 mb-4">
          <MapPin size={14} />
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            {city}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span
              className="text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}
            >
              {price}
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
              {rating}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}