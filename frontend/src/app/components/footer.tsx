import { Link } from "react-router";
import { useLang } from "../context/LanguageContext";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="border-t border-white/8" />
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
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
            <p
              className="text-white/70 leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Explore the rich culture, stunning landscapes, and vibrant heritage
              of the Republic of Benin, West Africa.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C4622D] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C4622D] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C4622D] transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C4622D] transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Discover Column */}
          <div>
            <h4
              className="mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Discover
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/attractions"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Top Attractions
                </Link>
              </li>
              <li>
                <Link
                  to="/hotels"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="/#restaurants"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  to="/#events"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Events & Festivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Plan Column */}
          <div>
            <h4
              className="mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Plan Your Trip
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/travel-guide"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Travel Guide
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Getting Around
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Visa Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Safety Tips
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4
              className="mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  About Benin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Press & Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-white/60 text-sm"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            © 2026 Discover Benin. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
