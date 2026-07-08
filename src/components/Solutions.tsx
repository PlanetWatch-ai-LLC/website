import { Wind, Droplets, Waves, Leaf } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const solutions = [
  {
    icon: Wind,
    title: 'Onshore Wind',
    text: 'Autonomous avifaune surveillance 24/7 with edge computing. Reduce collision risk and unnecessary curtailment while protecting birds and bats.',
    image:
      'pexels-alfomedeiros-15268778.webp',
  },
  {
    icon: Waves,
    title: 'Offshore Wind',
    text: 'Monitor seabirds and marine life around offshore installations with computer vision tuned for harsh, remote environments.',
    image:
      'pexels-cameramanic-35007721.webp',
  },
  {
    icon: Droplets,
    title: 'Hydropower',
    text: 'Track migratory fish trajectories near dams and intakes. Inform safe passage strategies and meet environmental flow requirements.',
    image:
      'pexels-quang-nguyen-vinh-222549-12386741.webp',
  },
  {
    icon: Leaf,
    title: 'Solar & Mixed Sites',
    text: 'Detect necrophagous and granivorous species attracted by agricultural work, and adapt mitigation in real time across mixed-use sites.',
    image:
      'pexels-371900.webp',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Solutions"
          heading="Built for every renewable energy site"
          description="Whether you operate a wind farm, a hydropower dam, or a mixed-use site, PlanetWatch adapts to your environment and your species of concern."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  </div>
                </div>
                <p className="p-6 text-muted leading-relaxed">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
