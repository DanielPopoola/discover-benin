import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLang } from "../context/LanguageContext";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.attractions, to: "/attractions" },
    { label: t.nav.hotels, to: "/hotels" },
    { label: t.nav.restaurants, to: "/restaurants" },
    { label: t.nav.travelGuide, to: "/travel-guide" },
    { label: t.nav.contact, to: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? "bg-[#2D5016]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl text-white" style={{ fontFamily: "var(--font-display)" }}>Discover</span>
            <span className="text-2xl text-[#D4A827]" style={{ fontFamily: "var(--font-display)" }}>Benin</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}
                className="text-white/90 hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >{link.label}</Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center bg-white/10 rounded-full p-1">
              {(["EN", "FR"] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    lang === l ? "bg-white text-[#2D5016]" : "text-white/70 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >{l}</button>
              ))}
            </div>
            <button className="bg-[#C4622D] text-white px-6 py-2.5 rounded-lg hover:bg-[#B55626] transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
              {t.nav.planTrip}
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#2D5016]/98 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-8 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 hover:text-white py-2"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >{link.label}</Link>
              ))}
              <div className="flex gap-2 pt-2">
                {(["EN", "FR"] as const).map((l) => (
                  <button key={l} onClick={() => setLang(l)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      lang === l ? "bg-white text-[#2D5016]" : "text-white/70 border border-white/20"
                    }`}>{l}</button>
                ))}
              </div>
              <button className="bg-[#C4622D] text-white px-6 py-2.5 rounded-lg mt-2">{t.nav.planTrip}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
