import { Bird, Activity, TrendingDown } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import { COLORS } from '../theme';

const items = [
  {
    icon: Bird,
    title: 'Biodiversity Preserved',
    text: 'Precise, real-time detection identifies and protects sensitive species — birds, bats, and migratory fish — around your installations, on land or offshore.',
    color: COLORS.leaf,
  },
  {
    icon: Activity,
    title: 'Reliable Real-Time Data',
    text: 'Instant, automated analysis of images, sound, and flight trajectories lets you make informed decisions while meeting every regulatory constraint.',
    color: COLORS.primary,
  },
  {
    icon: TrendingDown,
    title: 'Lower Costs & Constraints',
    text: 'Anticipate and reduce unnecessary shutdowns, streamline your processes, and stay ahead of tightening environmental standards with confidence.',
    color: COLORS.moss,
  },
];

export default function Why() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why PlanetWatch"
          heading="Next-generation AI that reconciles renewable energy with biodiversity"
          description="Our technology is built for renewable energy operators and developers who refuse to choose between performance and ecological responsibility."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}1a` }}
                >
                  <Icon size={28} style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.text}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
