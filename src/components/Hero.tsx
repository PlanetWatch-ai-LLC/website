import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Light background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="pexels-9188.jpg"
          alt="Wind farm under a bright sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(#03A9F4 1px, transparent 1px), linear-gradient(90deg, #03A9F4 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#03A9F4]/10 border border-[#03A9F4]/30 text-[#03A9F4] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#34C759] animate-pulse" />
            AI-Powered Biodiversity Intelligence
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-tight mb-6">
            Protect Wildlife.
            <br />
            <span className="text-[#03A9F4]">Power the Future.</span>
          </h1>

          <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-xl">
            PlanetWatch.ai combines real-time computer vision and deep learning
            to detect, classify, and protect sensitive species around renewable
            energy installations — on land and at sea.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#03A9F4] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#0292d1] transition-all duration-200 shadow-lg hover:shadow-[#03A9F4]/40 hover:shadow-xl"
            >
              Request a Demo
              <ArrowRight size={18} />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 border border-[#03A9F4]/40 text-[#03A9F4] font-semibold px-7 py-3.5 rounded-full hover:bg-[#03A9F4]/10 transition-all duration-200"
            >
              <Play size={16} fill="#03A9F4" />
              See How It Works
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { value: '99%+', label: 'Detection accuracy' },
              { value: '<1s', label: 'Real-time response' },
              { value: '50+', label: 'Species classified' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-[#03A9F4]">{s.value}</p>
                <p className="text-sm text-[#6B7280] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F7F7F7] to-transparent z-10" />
    </section>
  );
}
