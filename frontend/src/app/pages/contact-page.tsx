import { useState } from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import {
  Mail, Phone, MapPin, Clock,
  Facebook, Instagram, Twitter, Youtube,
  CheckCircle, AlertCircle, Loader,
} from "lucide-react";

// ─── SETUP (one-time, takes 2 minutes) ───────────────────────────────────────
// 1. Go to https://formspree.io and create a free account
// 2. Click "New Form" → name it "Discover Benin Contact"
// 3. Copy the endpoint — looks like https://formspree.io/f/xyzabc12
// 4. Replace the placeholder below with your actual endpoint
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#FAF6EE] border-[1.5px] border-[rgba(92,58,30,0.15)] rounded-xl outline-none focus:border-[#C4622D] focus:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed";

  const isSubmitting = status === "submitting";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Header */}
      <section className="bg-[#F5EFE0] pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#C4622D]" />
            <span
              className="text-[#C4622D] uppercase tracking-wider"
              style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
            >
              Get in Touch
            </span>
          </div>
          <h1
            className="text-[#1A1A1A] mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "48px" }}
          >
            Contact Us
          </h1>
          <p
            className="text-[#5C3A1E]/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Have questions about visiting Benin? We're here to help you plan your
            perfect trip.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">

            {/* Left Column */}
            <div>
              <h2
                className="text-[#1A1A1A] mb-8"
                style={{ fontFamily: "var(--font-display)", fontSize: "32px" }}
              >
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                {[
                  { icon: Mail,   title: "Email",        detail: "info@discoverbenin.com",              subdetail: "We reply within 24 hours",           color: "#C4622D" },
                  { icon: Phone,  title: "Phone",        detail: "+229 21 30 04 86",                    subdetail: "Mon–Fri, 9:00 AM – 5:00 PM WAT",    color: "#2D5016" },
                  { icon: MapPin, title: "Address",      detail: "Avenue Jean-Paul II, Cotonou",        subdetail: "Republic of Benin",                  color: "#D4A827" },
                  { icon: Clock,  title: "Office Hours", detail: "Monday – Friday: 9:00 AM – 5:00 PM", subdetail: "Saturday: 10:00 AM – 2:00 PM",       color: "#C4622D" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 bg-[#F5EFE0] rounded-xl">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon size={24} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-[#1A1A1A] mb-1" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                        {item.title}
                      </div>
                      <div className="text-[#5C3A1E] mb-1" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>
                        {item.detail}
                      </div>
                      <div className="text-[#5C3A1E]/60 text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                        {item.subdetail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "24px" }}>
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook,  label: "Facebook",  href: "#" },
                    { icon: Instagram, label: "Instagram", href: "#" },
                    { icon: Twitter,   label: "Twitter",   href: "#" },
                    { icon: Youtube,   label: "YouTube",   href: "#" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-[#F5EFE0] rounded-xl flex items-center justify-center hover:bg-[#C4622D] hover:text-white transition-all group"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="text-[#C4622D] group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Form */}
            <div className="bg-white rounded-2xl p-8 border border-[rgba(92,58,30,0.15)] shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <h2 className="text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "32px" }}>
                Send us a Message
              </h2>

              {/* ── Success state ── */}
              {status === "success" && (
                <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                  <CheckCircle className="text-[#2D5016]" size={56} strokeWidth={1.5} />
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#1A1A1A" }}>
                    Message sent!
                  </h3>
                  <p className="text-[#5C3A1E]/70 max-w-xs leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-[#C4622D] underline text-sm"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Send another message
                  </button>
                </div>
              )}

              {/* ── Error banner ── */}
              {status === "error" && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl mb-6">
                  <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-red-800 text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Something went wrong
                    </p>
                    <p className="text-red-600 text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                      Please try again or email us directly at{" "}
                      <a href="mailto:info@discoverbenin.com" className="underline">
                        info@discoverbenin.com
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* ── Form ── */}
              {status !== "success" && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-[#1A1A1A] mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                        First Name
                      </label>
                      <input
                        type="text" id="firstName" required
                        value={formData.firstName} onChange={update("firstName")}
                        disabled={isSubmitting}
                        className={inputClass}
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[#1A1A1A] mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                        Last Name
                      </label>
                      <input
                        type="text" id="lastName" required
                        value={formData.lastName} onChange={update("lastName")}
                        disabled={isSubmitting}
                        className={inputClass}
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[#1A1A1A] mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                      Email Address
                    </label>
                    <input
                      type="email" id="email" required
                      value={formData.email} onChange={update("email")}
                      disabled={isSubmitting}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-[#1A1A1A] mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                      Subject
                    </label>
                    <input
                      type="text" id="subject" required
                      value={formData.subject} onChange={update("subject")}
                      disabled={isSubmitting}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      placeholder="Trip planning inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[#1A1A1A] mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                      Message
                    </label>
                    <textarea
                      id="message" rows={6} required
                      value={formData.message} onChange={update("message")}
                      disabled={isSubmitting}
                      className={`${inputClass} resize-none`}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      placeholder="Tell us about your travel plans..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 bg-[#C4622D] text-white py-4 rounded-xl hover:bg-[#B55626] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-[0_4px_20px_rgba(196,98,45,0.3)] hover:shadow-[0_6px_30px_rgba(196,98,45,0.4)]"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={18} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#F5EFE0]">
        <div className="max-w-[1280px] mx-auto px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p
                className="text-[#C4622D] uppercase tracking-wider mb-1"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
              >
                Find Us
              </p>
              <h3
                className="text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem" }}
              >
                Avenue Jean-Paul II, Cotonou
              </h3>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Avenue+Jean-Paul+II+Cotonou+Benin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C4622D] text-white px-5 py-2.5 rounded-lg hover:bg-[#B55626] transition-colors whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, textDecoration: "none" }}
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)] shadow-sm">
            {/*
              ── Google Maps free embed (no API key required) ──────────────────
              This URL uses Google's free Embed API — no billing, no key.
              To update the pinned location:
                1. Go to maps.google.com
                2. Search for your address
                3. Click Share → Embed a map → Copy HTML
                4. Replace the src value below with your new iframe src
              ─────────────────────────────────────────────────────────────────

              ── Optional: swap for Mapbox (custom styling) ────────────────────
              If you want the map to match the site's colour palette:
                1. Sign up at mapbox.com (free tier: 50,000 loads/month)
                2. Get your public token from the dashboard
                3. Replace this iframe with:
                     <div id="map" style={{ height: "24rem" }} />
                   Then add this to index.html <head>:
                     <link href="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css" rel="stylesheet" />
                     <script src="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js"></script>
                   And initialise in a useEffect:
                     mapboxgl.accessToken = "YOUR_TOKEN";
                     new mapboxgl.Map({
                       container: "map",
                       style: "mapbox://styles/mapbox/outdoors-v12",
                       center: [2.3158, 6.3703],
                       zoom: 15,
                     }).addControl(new mapboxgl.NavigationControl());
              ─────────────────────────────────────────────────────────────────
            */}
            <iframe
              title="Discover Benin office location — Avenue Jean-Paul II, Cotonou"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8!2d2.3158!3d6.3703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9e6c4c4c4c5%3A0x1!2sAvenue+Jean-Paul+II%2C+Cotonou%2C+B%C3%A9nin!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="384"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}