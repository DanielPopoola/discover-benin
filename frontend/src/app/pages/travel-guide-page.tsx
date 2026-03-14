import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ArrowRight, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

export function TravelGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Split Hero */}
      <section className="pt-20 grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left Panel - Forest Green */}
        <div className="bg-[#2D5016] p-12 lg:p-16 flex items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#D4A827]" />
              <span
                className="text-[#D4A827] uppercase tracking-wider"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
              >
                Essential Guide
              </span>
            </div>
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "48px",
                lineHeight: "1.1",
              }}
            >
              Your Complete Guide to Benin
            </h1>
            <p
              className="text-white/80 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Everything you need to know before and during your visit to the
              Republic of Benin. From visa requirements to local customs, we've got
              you covered.
            </p>
          </div>
        </div>

        {/* Right Panel - Cream with Map Illustration */}
        <div className="bg-[#F5EFE0] p-12 lg:p-16 flex items-center justify-center">
          <div className="relative w-full max-w-md h-96">
            <div className="absolute inset-0 bg-white/50 rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="text-[#C4622D]" size={120} />
            </div>
            {/* Decorative pins */}
            {[
              { top: "15%", left: "25%", delay: 0 },
              { top: "35%", left: "60%", delay: 0.2 },
              { top: "55%", left: "35%", delay: 0.4 },
              { top: "75%", left: "65%", delay: 0.6 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ top: pos.top, left: pos.left }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: pos.delay }}
              >
                <div className="w-3 h-3 bg-[#D4A827] rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Section Guide Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                emoji: "📋",
                title: "Visa & Entry Requirements",
                text: "Most visitors can obtain a visa on arrival at Cotonou airport or apply for an e-visa online. Valid passport with 6 months validity required. Yellow fever vaccination certificate is mandatory for entry.",
                tag: "Learn More",
              },
              {
                emoji: "💱",
                title: "Currency & Money",
                text: "The West African CFA Franc (XOF) is the official currency. ATMs are available in major cities. Credit cards accepted at upscale hotels and restaurants. It's advisable to carry some cash for markets and rural areas.",
                tag: "Money Tips",
              },
              {
                emoji: "🗣️",
                title: "Languages & Communication",
                text: "French is the official language. Fon and Yoruba are widely spoken in the south, while Bariba is common in the north. English speakers can find guides and staff at major hotels. Basic French phrases are helpful.",
                tag: "Phrasebook",
              },
              {
                emoji: "🚕",
                title: "Getting Around",
                text: "Zémidjans (motorcycle taxis) are the most popular transport in cities. Negotiate fares before riding. Taxis and buses connect major cities. Car rentals available in Cotonou. Roads vary from paved highways to dirt tracks.",
                tag: "Transport Guide",
              },
              {
                emoji: "🏥",
                title: "Health & Safety",
                text: "Benin is one of West Africa's safest countries. Yellow fever vaccination required; malaria prophylaxis recommended. Tap water not drinkable - use bottled water. Medical facilities limited outside cities - travel insurance essential.",
                tag: "Safety Tips",
              },
              {
                emoji: "🎭",
                title: "Culture & Customs",
                text: "Benin is the birthplace of Voodoo (Vodun). Greetings are important - shake hands and ask about family. Dress modestly, especially in rural areas. Ask permission before photographing people. Tipping not mandatory but appreciated.",
                tag: "Cultural Guide",
              },
              {
                emoji: "☀️",
                title: "Best Time to Visit",
                text: "November to February offers the best weather - dry and cooler. March to May is hot and dry. June to October is the rainy season. January 10 (Voodoo Day) is a unique cultural experience. Wildlife viewing best in dry season.",
                tag: "Seasonal Guide",
              },
              {
                emoji: "🍲",
                title: "Food & Dining",
                text: "Try akassa (corn dough), amiwo (red sauce with meat), and aloko (fried plantains). Street food is generally safe and delicious. Restaurants range from local maquis to international cuisine. Vegetarian options available but limited.",
                tag: "Food Guide",
              },
              {
                emoji: "🏨",
                title: "Accommodation",
                text: "Options range from luxury hotels in Cotonou to eco-lodges near national parks. Book in advance during peak season (December-February). Homestays available for cultural immersion. Beach resorts popular in Grand Popo and Ouidah.",
                tag: "Where to Stay",
              },
              {
                emoji: "📱",
                title: "Internet & Mobile",
                text: "SIM cards readily available from MTN and Moov providers. Good 4G coverage in cities, limited in rural areas. WiFi available at most hotels and cafes. WhatsApp widely used for communication.",
                tag: "Connectivity",
              },
              {
                emoji: "🛍️",
                title: "Shopping & Souvenirs",
                text: "Dantokpa Market in Cotonou is West Africa's largest open-air market. Buy traditional textiles, bronze sculptures, and Vodun artifacts. Bargaining expected at markets. Support local artisans at craft centers.",
                tag: "Shopping Guide",
              },
              {
                emoji: "⚡",
                title: "Electricity & Adapters",
                text: "220V, 50Hz. Type C and E plugs (European two-pin). Power cuts common - hotels usually have backup generators. Bring a universal adapter and portable charger for travel.",
                tag: "Tech Tips",
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-2xl border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all"
              >
                <div className="text-5xl mb-4">{section.emoji}</div>
                <h3
                  className="text-[#1A1A1A] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontSize: "28px" }}
                >
                  {section.title}
                </h3>
                <p
                  className="text-[#5C3A1E]/70 mb-6 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {section.text}
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
                  {section.tag}
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

      {/* Featured Cities Strip */}
      <section className="py-20 bg-[#F5EFE0]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#C4622D]" />
              <span
                className="text-[#C4622D] uppercase tracking-wider"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
              >
                Major Cities
              </span>
            </div>
            <h2
              className="text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display)", fontSize: "40px" }}
            >
              Explore Benin's Cities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1718766304636-cb9309953a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3Rvbm91JTIwQmVuaW4lMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzczNDM3Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                city: "Cotonou",
                description: "Economic capital and largest city",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1566585747350-ddd59837d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwaGlzdG9yaWNhbCUyMG1vbnVtZW50fGVufDF8fHx8MTc3MzQzNzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                city: "Porto-Novo",
                description: "Official capital, rich in history",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1753872780884-12521c336c50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXZXN0JTIwQWZyaWNhJTIwYmVhY2glMjBwYWxtfGVufDF8fHx8MTc3MzQzNzM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                city: "Ouidah",
                description: "Historic slave trade port, Vodun culture",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXZXN0JTIwQWZyaWNhbiUyMHRyYWRpdGlvbmFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzQzNzM4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                city: "Abomey",
                description: "Ancient kingdom, royal palaces",
              },
            ].map((city, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all bg-white"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={city.image}
                    alt={city.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="text-white mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "28px",
                      }}
                    >
                      {city.city}
                    </h3>
                    <p
                      className="text-white/80"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {city.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-[#2D5016] rounded-2xl p-12 text-white">
            <h2
              className="mb-8"
              style={{ fontFamily: "var(--font-display)", fontSize: "36px" }}
            >
              Emergency Contacts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Police", number: "117" },
                { label: "Fire Department", number: "118" },
                { label: "Medical Emergency", number: "112" },
                { label: "Tourist Assistance", number: "+229 21 30 04 86" },
              ].map((contact, i) => (
                <div key={i}>
                  <div
                    className="text-white/70 mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {contact.label}
                  </div>
                  <div
                    className="text-white"
                    style={{ fontFamily: "var(--font-display)", fontSize: "28px" }}
                  >
                    {contact.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
