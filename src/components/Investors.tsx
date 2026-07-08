import { TrendingUp, Globe2, Users } from 'lucide-react';

const INVESTOR_STATS = [
  { value: '$XX B', label: 'Addressable market across wind, hydro & solar' },
  { value: 'X', label: 'Pilot sites in active deployment' },
  { value: 'X%', label: 'Target YoY growth' },
];

const VISION_POINTS = [
  {
    icon: TrendingUp,
    title: 'A growing regulatory tailwind',
    text: 'Environmental compliance requirements for renewable energy sites are tightening worldwide, expanding the addressable market for automated monitoring.',
  },
  {
    icon: Globe2,
    title: 'Built to scale globally',
    text: 'Our edge-computing architecture deploys on any site, with or without connectivity — from a single wind farm to a multi-country fleet.',
  },
  {
    icon: Users,
    title: 'A team that has done this before',
    text: 'Deep AI, hardware, and go-to-market experience across our founding team, focused squarely on the renewable energy sector.',
  },
];

export default function Investors() {
  return (
    <section id="investors" className="py-24 lg:py-32 bg-[#0a1628] relative overflow-hidden">
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
            For Investors
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
            Investing in the future of renewable energy compliance
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            PlanetWatch sits at the intersection of two accelerating markets —
            renewable energy deployment and environmental compliance —
            with a proven team and a technology already running in the field.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6 mb-16 pb-16 border-b border-white/10">
          {INVESTOR_STATS.map((s) => (
            <div key={s.label} className="max-w-[220px]">
              <p className="text-3xl font-bold text-[#03A9F4]">{s.value}</p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {VISION_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <Icon className="text-[#03A9F4] mb-5" size={32} />
                <h3 className="text-lg font-bold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#team"
            className="text-sm font-semibold text-white hover:text-[#03A9F4] transition-colors underline underline-offset-4"
          >
            Meet the team behind PlanetWatch
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#03A9F4] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0292d1] transition-colors duration-200"
          >
            Investor inquiries
          </a>
        </div>
      </div>
    </section>
  );
}
