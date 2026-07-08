import { PhoneCall, MapPinned, Rocket, BarChart3, ArrowRight } from 'lucide-react';

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
        <div className="max-w-3xl mb-16">
          <p className="text-[#8BC34A] font-semibold text-sm uppercase tracking-widest mb-3">
            Pilot Program
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-5">
            See PlanetWatch on your site in 90 days
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A low-risk, structured path for operators to evaluate real-time
            biodiversity monitoring before committing to a full deployment.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#03A9F4] via-[#8BC34A] to-[#34C759] opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILOT_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-[#03A9F4] flex items-center justify-center mb-6 shadow-sm">
                    <Icon size={26} className="text-[#03A9F4]" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#34C759] text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed text-sm">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#03A9F4] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#0292d1] transition-all duration-200 shadow-lg hover:shadow-[#03A9F4]/40 hover:shadow-xl"
          >
            Apply for the Pilot Program
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
