import { useState } from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
            {/* Left Column - Contact Details */}
            <div>
              <h2
                className="text-[#1A1A1A] mb-8"
                style={{ fontFamily: "var(--font-display)", fontSize: "32px" }}
              >
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    detail: "info@discoverbenin.com",
                    subdetail: "We reply within 24 hours",
                    color: "#C4622D",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    detail: "+229 21 30 04 86",
                    subdetail: "Mon-Fri, 9:00 AM - 5:00 PM WAT",
                    color: "#2D5016",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    detail: "Avenue Jean-Paul II, Cotonou",
                    subdetail: "Republic of Benin",
                    color: "#D4A827",
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    detail: "Monday - Friday: 9:00 AM - 5:00 PM",
                    subdetail: "Saturday: 10:00 AM - 2:00 PM",
                    color: "#C4622D",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-[#F5EFE0] rounded-xl"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon size={24} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div
                        className="text-[#1A1A1A] mb-1"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-[#5C3A1E] mb-1"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      >
                        {item.detail}
                      </div>
                      <div
                        className="text-[#5C3A1E]/60 text-sm"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {item.subdetail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3
                  className="text-[#1A1A1A] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontSize: "24px" }}
                >
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Youtube, label: "YouTube" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 bg-[#F5EFE0] rounded-xl flex items-center justify-center hover:bg-[#C4622D] hover:text-white transition-all group"
                      aria-label={social.label}
                    >
                      <social.icon
                        size={20}
                        className="text-[#C4622D] group-hover:text-white transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-[rgba(92,58,30,0.15)] shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <h2
                className="text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "32px" }}
              >
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-[#1A1A1A] mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#FAF6EE] border-[1.5px] border-[rgba(92,58,30,0.15)] rounded-xl outline-none focus:border-[#C4622D] focus:bg-white transition-all"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-[#1A1A1A] mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#FAF6EE] border-[1.5px] border-[rgba(92,58,30,0.15)] rounded-xl outline-none focus:border-[#C4622D] focus:bg-white transition-all"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#FAF6EE] border-[1.5px] border-[rgba(92,58,30,0.15)] rounded-xl outline-none focus:border-[#C4622D] focus:bg-white transition-all"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#FAF6EE] border-[1.5px] border-[rgba(92,58,30,0.15)] rounded-xl outline-none focus:border-[#C4622D] focus:bg-white transition-all"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    placeholder="Trip planning inquiry"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full px-4 py-3 bg-[#FAF6EE] border-[1.5px] border-[rgba(92,58,30,0.15)] rounded-xl outline-none focus:border-[#C4622D] focus:bg-white transition-all resize-none"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    placeholder="Tell us about your travel plans..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#C4622D] text-white py-4 rounded-xl hover:bg-[#B55626] transition-all shadow-[0_4px_20px_rgba(196,98,45,0.3)] hover:shadow-[0_6px_30px_rgba(196,98,45,0.4)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#F5EFE0]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-[rgba(92,58,30,0.15)]">
            <div className="h-96 bg-gradient-to-br from-[#F5EFE0] to-[#FAF6EE] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-[#C4622D] mx-auto mb-4" size={64} />
                <p
                  className="text-[#5C3A1E]/70"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  Avenue Jean-Paul II, Cotonou, Republic of Benin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
