import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

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
    <section id="contact" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink leading-tight mb-5">
              {copy.heading}
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-10">
              {copy.text}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm"
          >
            <div className="inline-flex bg-surface rounded-full p-1 mb-6">
              {(['operator', 'investor'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setIntent(option)}
                  className={`text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200 ${
                    intent === option
                      ? 'bg-primary text-white'
                      : 'text-ink hover:text-primary'
                  }`}
                >
                  {option === 'operator' ? "I'm an Operator" : "I'm an Investor"}
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  First name
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  Last name
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-ink mb-2">
                Work email
              </label>
              <input
                required
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            {intent === 'operator' && (
              <div className="mb-5">
                <label className="block text-sm font-medium text-ink mb-2">
                  Site type
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
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
              <label className="block text-sm font-medium text-ink mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              />
            </div>
            <Button type="submit" pill={false} fullWidth>
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
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
