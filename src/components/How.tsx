import { ScanEye, Brain, Gauge, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: ScanEye,
    title: 'Identify, Classify, Count',
    text: 'Track populations of birds, bats, and migratory fish. Estimate abundance, evolution, and survival rates to inform new ecosystem preservation strategies.',
  },
  {
    icon: Brain,
    title: 'Understand Ecosystems',
    text: 'Through image, sound, and trajectory analysis, PlanetWatch delivers a clearer picture of how installations impact local wildlife.',
  },
  {
    icon: Gauge,
    title: 'Optimize Processes',
    text: 'Reduce collision mortality and eliminate unnecessary emergency turbine shutdowns with predictive, data-driven mitigation.',
  },
  {
    icon: ShieldCheck,
    title: 'Prevent & Protect',
    text: 'A simple, reliable, scalable solution to manage installations in harmony with surrounding ecosystems — and meet growing regulatory demands.',
  },
];

export default function How() {
  return (
    <section id="how" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-[#8BC34A] font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-5">
            From real-time detection to predictive analysis
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            PlanetWatch combines machine learning and deep learning to acquire,
            interpret, and classify data intelligently — a complete pipeline from
            the field to actionable insight.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#03A9F4] via-[#8BC34A] to-[#34C759] opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
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
      </div>
    </section>
  );
}
