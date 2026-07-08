import { Quote } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const cases = [
  {
    tag: 'Edge Computing',
    title: 'PTZ System: Autonomous 24/7 Avifaune Surveillance',
    text: 'A fully autonomous pan-tilt-zoom surveillance system running 100% on edge computing — detecting and tracking birds around the clock without cloud dependency.',
    image:
      'pexels-16015461.webp',
    metric: '20+ units deployed',
  },
  {
    tag: 'Agricultural Curtailment',
    title: 'Agricultural Curtailment Module',
    text: 'An innovative module that detects farming activity in real time to manage collision risk for necrophagous and granivorous birds near rural wind farms.',
    image:
      'pexels-1112080.webp',
  },
  {
    tag: 'Benchmark Study',
    title: 'Avian Detection System Comparison in a Wind Farm',
    text: 'In a southern France wind farm, we tested multiple AI algorithms in real time to reduce false positives and improve reactivity — protecting birds while keeping the park efficient.',
    image:
      'pexels-414837.webp',
  },
  {
    tag: 'Protected Species',
    title: 'Black Stork Environmental Study',
    text: 'Using AI and real-time trajectory analysis, we detected black storks, mapped collision risk zones, and optimized turbine placement to meet strict environmental requirements.',
    image:
      'pexels-1661179.webp',
  },
] satisfies {
  tag: string;
  title: string;
  text: string;
  image: string;
  metric?: string;
  quote?: { text: string; author: string };
}[];

export default function Cases() {
  return (
    <section id="cases" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Traction &amp; Results"
          eyebrowColor="moss"
          heading="Real projects, quantified impact"
          description="A passionate team combining AI expertise with ecological commitment, backed by a strategic environmental partnership with Calidris, for a harmonious coexistence between energy and biodiversity."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {c.tag}
                </span>
                {c.metric && (
                  <span className="absolute top-4 right-4 bg-leaf text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {c.metric}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <p className="text-muted leading-relaxed">{c.text}</p>
                {c.quote && (
                  <div className="mt-5 pt-5 border-t border-gray-100 flex gap-3">
                    <Quote className="text-primary shrink-0" size={20} />
                    <div>
                      <p className="text-ink italic leading-relaxed">
                        "{c.quote.text}"
                      </p>
                      <p className="text-sm text-muted mt-2">
                        {c.quote.author}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
