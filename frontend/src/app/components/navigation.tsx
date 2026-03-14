import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "FR">("EN");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#2D5016]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span
              className="text-2xl text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Discover
            </span>
            <span
              className="text-2xl text-[#D4A827]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Benin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/#attractions"
              className="text-white/90 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Attractions
            </Link>
            <Link
              to="/hotels"
              className="text-white/90 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Hotels
            </Link>
            <Link
              to="/#restaurants"
              className="text-white/90 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Restaurants
            </Link>
            <Link
              to="/travel-guide"
              className="text-white/90 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Travel Guide
            </Link>
            <Link
              to="/contact"
              className="text-white/90 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Contact
            </Link>
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center bg-white/10 rounded-full p-1">
              <button
                onClick={() => setLanguage("EN")}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  language === "EN"
                    ? "bg-white text-[#2D5016]"
                    : "text-white/70"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("FR")}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  language === "FR"
                    ? "bg-white text-[#2D5016]"
                    : "text-white/70"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                FR
              </button>
            </div>
            <button
              className="bg-[#C4622D] text-white px-6 py-2.5 rounded-lg hover:bg-[#B55626] transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Plan Trip
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#2D5016]/98 backdrop-blur-md"
          >
            <div className="max-w-[1280px] mx-auto px-8 py-6 flex flex-col gap-4">
              <Link
                to="/#attractions"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white py-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Attractions
              </Link>
              <Link
                to="/hotels"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white py-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Hotels
              </Link>
              <Link
                to="/#restaurants"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white py-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Restaurants
              </Link>
              <Link
                to="/travel-guide"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white py-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Travel Guide
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white py-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Contact
              </Link>
              <button
                className="bg-[#C4622D] text-white px-6 py-2.5 rounded-lg hover:bg-[#B55626] transition-colors mt-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Plan Trip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
