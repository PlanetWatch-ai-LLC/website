import { Bird, Activity, TrendingDown } from 'lucide-react';

const items = [
  {
    icon: Bird,
    title: 'Biodiversity Preserved',
    text: 'Precise, real-time detection identifies and protects sensitive species — birds, bats, and migratory fish — around your installations, on land or offshore.',
    color: '#34C759',
  },
  {
    icon: Activity,
    title: 'Reliable Real-Time Data',
    text: 'Instant, automated analysis of images, sound, and flight trajectories lets you make informed decisions while meeting every regulatory constraint.',
    color: '#03A9F4',
  },
  {
    icon: TrendingDown,
    title: 'Lower Costs & Constraints',
    text: 'Anticipate and reduce unnecessary shutdowns, streamline your processes, and stay ahead of tightening environmental standards with confidence.',
    color: '#8BC34A',
  },
];

export default function Why() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-[#03A9F4] font-semibold text-sm uppercase tracking-widest mb-3">
            Why PlanetWatch
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-5">
            Next-generation AI that reconciles renewable energy with biodiversity
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Our technology is built for renewable energy operators and developers
            who refuse to choose between performance and ecological responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}1a` }}
                >
                  <Icon size={28} style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
