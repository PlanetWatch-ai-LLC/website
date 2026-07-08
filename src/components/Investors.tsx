import { TrendingUp, Globe2, Users } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Button from './ui/Button';
import { COLORS } from '../theme';

const INVESTOR_STATS = [
  { value: '$543B', label: 'Global wind energy market by 2034, up from $174B in 2024' },
  { value: '$250M', label: 'Bird detection system market by 2033, at 7.77% CAGR' },
  { value: '20+', label: 'Units deployed in the field' },
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
    <section id="investors" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            `radial-gradient(circle at 20% 30%, ${COLORS.primary} 0%, transparent 40%), radial-gradient(circle at 80% 70%, ${COLORS.moss} 0%, transparent 40%)`,
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="For Investors"
          eyebrowColor="moss"
          dark
          heading="Investing in the future of renewable energy compliance"
          description="PlanetWatch sits at the intersection of two accelerating markets — renewable energy deployment and environmental compliance — with a patent-pending detection platform already running in the field and a strategic environmental partnership with Calidris."
        />

        <div className="flex flex-wrap gap-x-12 gap-y-6 mb-16 pb-16 border-b border-white/10">
          {INVESTOR_STATS.map((s) => (
            <div key={s.label} className="max-w-[220px]">
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {VISION_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <Card key={point.title} variant="dark" hover="glow">
                <Icon className="text-primary mb-5" size={32} />
                <h3 className="text-lg font-bold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {point.text}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#team"
            className="text-sm font-semibold text-white hover:text-primary transition-colors underline underline-offset-4"
          >
            Meet the team behind PlanetWatch
          </a>
          <Button href="#contact">Investor inquiries</Button>
        </div>
      </div>
    </section>
  );
}
