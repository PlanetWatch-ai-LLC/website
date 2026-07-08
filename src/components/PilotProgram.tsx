import { PhoneCall, MapPinned, Rocket, BarChart3, ArrowRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';

const PILOT_STEPS = [
  {
    icon: PhoneCall,
    title: 'Discovery Call',
    text: 'We learn about your site, species of concern, and current monitoring or curtailment constraints.',
  },
  {
    icon: MapPinned,
    title: 'Site Assessment',
    text: 'Our team scopes sensor placement and success metrics tailored to your installation.',
  },
  {
    icon: Rocket,
    title: '90-Day Pilot Deployment',
    text: 'PlanetWatch is installed and running on your site, delivering real-time detection data from day one.',
  },
  {
    icon: BarChart3,
    title: 'Results Review',
    text: 'We review measured impact together and define a path to full rollout.',
  },
];

export default function PilotProgram() {
  return (
    <section id="pilot" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Pilot Program"
          eyebrowColor="moss"
          heading="See PlanetWatch on your site in 90 days"
          description="A low-risk, structured path for operators to evaluate real-time biodiversity monitoring before committing to a full deployment."
        />

        <div className="relative mb-16">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-moss to-leaf opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILOT_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-6 shadow-sm">
                    <Icon size={26} className="text-primary" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-leaf text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button href="#contact" size="lg" elevated>
            Apply for the Pilot Program
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
