import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#03A9F4] font-semibold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-5">
              Operating a wind farm? A hydropower dam? A project under study?
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-10">
              Tell us about your site and your species of concern. Our team will
              get back to you within 48 hours to scope a tailored demonstration.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#03A9F4]/10 flex items-center justify-center">
                  <Mail size={20} className="text-[#03A9F4]" />
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">Email</p>
                  <a
                    href="mailto:hello@planetwatch.ai"
                    className="text-[#1F2937] font-semibold hover:text-[#03A9F4] transition-colors"
                  >
                    hello@planetwatch.ai
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#8BC34A]/10 flex items-center justify-center">
                  <Phone size={20} className="text-[#8BC34A]" />
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">Phone</p>
                  <a
                    href="tel:+33661455762"
                    className="text-[#1F2937] font-semibold hover:text-[#8BC34A] transition-colors"
                  >
                    +33 6 61 45 57 62
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#34C759]/10 flex items-center justify-center">
                  <MapPin size={20} className="text-[#34C759]" />
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">Location</p>
                  <p className="text-[#1F2937] font-semibold">France & Europe</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  First name
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#03A9F4] focus:ring-2 focus:ring-[#03A9F4]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Last name
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#03A9F4] focus:ring-2 focus:ring-[#03A9F4]/20 outline-none transition-all"
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-[#1F2937] mb-2">
                Work email
              </label>
              <input
                required
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#03A9F4] focus:ring-2 focus:ring-[#03A9F4]/20 outline-none transition-all"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-[#1F2937] mb-2">
                Site type
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#03A9F4] focus:ring-2 focus:ring-[#03A9F4]/20 outline-none transition-all bg-white"
              >
                <option value="">Select…</option>
                <option>Onshore wind</option>
                <option>Offshore wind</option>
                <option>Hydropower</option>
                <option>Solar / mixed site</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1F2937] mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#03A9F4] focus:ring-2 focus:ring-[#03A9F4]/20 outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#03A9F4] text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-[#0292d1] transition-colors duration-200"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  Message sent — we'll be in touch
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
