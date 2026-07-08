import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

type Intent = 'operator' | 'investor';

const COPY: Record<Intent, { eyebrow: string; heading: string; text: string }> = {
  operator: {
    eyebrow: 'Get in Touch',
    heading: 'Operating a wind farm? A hydropower dam? A project under study?',
    text: 'Tell us about your site and your species of concern. Our team will get back to you within 48 hours to scope a tailored demonstration.',
  },
  investor: {
    eyebrow: 'Get in Touch',
    heading: 'Interested in the future of biodiversity intelligence?',
    text: "Get in touch to learn more about PlanetWatch's growth story, traction, and investment opportunities.",
  },
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [intent, setIntent] = useState<Intent>('operator');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const copy = COPY[intent];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#03A9F4] font-semibold text-sm uppercase tracking-widest mb-3">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-5">
              {copy.heading}
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-10">
              {copy.text}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm"
          >
            <div className="inline-flex bg-[#F7F7F7] rounded-full p-1 mb-6">
              {(['operator', 'investor'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setIntent(option)}
                  className={`text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200 ${
                    intent === option
                      ? 'bg-[#03A9F4] text-white'
                      : 'text-[#1F2937] hover:text-[#03A9F4]'
                  }`}
                >
                  {option === 'operator' ? "I'm an Operator" : "I'm an Investor"}
                </button>
              ))}
            </div>
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
            {intent === 'operator' && (
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
            )}
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
