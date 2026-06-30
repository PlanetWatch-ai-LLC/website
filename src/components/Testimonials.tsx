import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'PlanetWatch gave us a clear, real-time view of avifaune activity across our park. We cut unnecessary shutdowns dramatically while staying fully compliant.',
    author: 'Operations Director',
    org: 'Wind Energy Operator, Southern France',
  },
  {
    quote:
      'The black stork study was a regulatory hurdle we feared. PlanetWatch turned it into a structured, data-backed process that satisfied every requirement.',
    author: 'Environmental Engineer',
    org: 'Renewables Developer',
  },
  {
    quote:
      'Edge computing on the PTZ system means we get detection even with no connectivity. It just works, day and night.',
    author: 'Site Manager',
    org: 'Onshore Wind Farm',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a1628] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #03A9F4 0%, transparent 40%), radial-gradient(circle at 80% 70%, #8BC34A 0%, transparent 40%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-[#8BC34A] font-semibold text-sm uppercase tracking-widest mb-3">
            Trusted by Operators
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            What our partners say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <Quote className="text-[#03A9F4] mb-5" size={36} />
              <p className="text-gray-200 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="pt-5 border-t border-white/10">
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-sm text-gray-400 mt-1">{t.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
