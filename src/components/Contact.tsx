import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
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

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  siteType: '',
  message: '',
  company: '', // honeypot — left empty by real users
};

type Status = 'idle' | 'submitting' | 'sent' | 'error';

export default function Contact() {
  const [intent, setIntent] = useState<Intent>('operator');
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const updateField = (field: keyof typeof INITIAL_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, intent }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('sent');
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
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
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={updateField('company')}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  First name
                </label>
                <input
                  required
                  type="text"
                  value={form.firstName}
                  onChange={updateField('firstName')}
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
                  value={form.lastName}
                  onChange={updateField('lastName')}
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
                value={form.email}
                onChange={updateField('email')}
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
                  value={form.siteType}
                  onChange={updateField('siteType')}
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
                value={form.message}
                onChange={updateField('message')}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              />
            </div>
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-red-600 mb-4">
                <AlertCircle size={16} />
                {error}
              </p>
            )}
            <Button type="submit" pill={false} fullWidth disabled={status === 'submitting'}>
              {status === 'sent' ? (
                <>
                  <CheckCircle2 size={18} />
                  Message sent — we'll be in touch
                </>
              ) : (
                <>
                  <Send size={18} />
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
