import { ArrowRight, Play } from 'lucide-react';
import Button from './ui/Button';
import { COLORS } from '../theme';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Light background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="pexels-16015461.webp"
          alt="Wind farm under a bright sky"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              `linear-gradient(${COLORS.primary} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.primary} 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
            AI-Powered Biodiversity Intelligence
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
            Protect Wildlife.
            <br />
            <span className="text-primary">Power the Future.</span>
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-10 max-w-xl">
            PlanetWatch.ai combines real-time computer vision and deep learning
            to detect, classify, and protect sensitive species around renewable
            energy installations — on land and at sea.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#contact" size="lg" elevated>
              Request a Demo
              <ArrowRight size={18} />
            </Button>
            <Button href="#how" size="lg" variant="outline">
              <Play size={16} fill="currentColor" />
              See How It Works
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { value: '99%+', label: 'Detection accuracy' },
              { value: '<1s', label: 'Real-time response' },
              { value: '50+', label: 'Species classified' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent z-10" />
    </section>
  );
}
