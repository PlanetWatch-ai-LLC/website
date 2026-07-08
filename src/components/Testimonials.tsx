import { Quote } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import { COLORS } from '../theme';

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
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            `radial-gradient(circle at 20% 30%, ${COLORS.primary} 0%, transparent 40%), radial-gradient(circle at 80% 70%, ${COLORS.moss} 0%, transparent 40%)`,
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Trusted by Operators"
          eyebrowColor="moss"
          dark
          heading="What our partners say"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card key={t.author} variant="dark" hover="glow">
              <Quote className="text-primary mb-5" size={36} />
              <p className="text-gray-200 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="pt-5 border-t border-white/10">
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-sm text-gray-400 mt-1">{t.org}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
