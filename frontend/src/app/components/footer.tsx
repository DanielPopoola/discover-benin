import { Link } from "react-router";
import { useLang } from "../context/LanguageContext";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const { lang } = useLang();
  const copy = lang === "FR"
    ? {
        desc: "Explorez la riche culture, les paysages exceptionnels et le patrimoine vivant de la République du Bénin, en Afrique de l'Ouest.",
        discover: "Découvrir",
        topAttractions: "Attractions principales",
        events: "Événements et festivals",
        plan: "Planifier votre voyage",
        travelGuide: "Guide voyage",
        gettingAround: "Se déplacer",
        visa: "Informations visa",
        safety: "Conseils sécurité",
        about: "À propos",
        contactUs: "Nous contacter",
        aboutBenin: "À propos du Bénin",
        press: "Presse et médias",
        partnerships: "Partenariats",
        rights: "© 2026 Discover Benin. Tous droits réservés.",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        cookies: "Politique des cookies",
      }
    : {
        desc: "Explore the rich culture, stunning landscapes, and vibrant heritage of the Republic of Benin, West Africa.",
        discover: "Discover",
        topAttractions: "Top Attractions",
        events: "Events & Festivals",
        plan: "Plan Your Trip",
        travelGuide: "Travel Guide",
        gettingAround: "Getting Around",
        visa: "Visa Information",
        safety: "Safety Tips",
        about: "About",
        contactUs: "Contact Us",
        aboutBenin: "About Benin",
        press: "Press & Media",
        partnerships: "Partnerships",
        rights: "© 2026 Discover Benin. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
      };
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
              {copy.desc}
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
              {copy.discover}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/attractions"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {copy.topAttractions}
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
                  to="/restaurants"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {copy.events}
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
              {copy.plan}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/travel-guide"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {copy.travelGuide}
                </Link>
              </li>
              <li>
                <Link
                  to="/travel-guide"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {copy.gettingAround}
                </Link>
              </li>
              <li>
                <Link
                  to="/travel-guide"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {copy.visa}
                </Link>
              </li>
              <li>
                <Link
                  to="/travel-guide"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {copy.safety}
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4
              className="mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {copy.about}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {copy.contactUs}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {copy.aboutBenin}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {copy.press}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {copy.partnerships}
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
            {copy.rights}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {copy.privacy}
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {copy.terms}
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {copy.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
