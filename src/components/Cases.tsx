const cases = [
  {
    tag: 'Edge Computing',
    title: 'PTZ System: Autonomous 24/7 Avifaune Surveillance',
    text: 'A fully autonomous pan-tilt-zoom surveillance system running 100% on edge computing — detecting and tracking birds around the clock without cloud dependency.',
    image:
      'pexels-16015461.jpg',
  },
  {
    tag: 'Agricultural Curtailment',
    title: 'Agricultural Curtailment Module',
    text: 'An innovative module that detects farming activity in real time to manage collision risk for necrophagous and granivorous birds near rural wind farms.',
    image:
      'pexels-1112080.jpg',
  },
  {
    tag: 'Benchmark Study',
    title: 'Avian Detection System Comparison in a Wind Farm',
    text: 'In a southern France wind farm, we tested multiple AI algorithms in real time to reduce false positives and improve reactivity — protecting birds while keeping the park efficient.',
    image:
      'pexels-414837.jpg',
  },
  {
    tag: 'Protected Species',
    title: 'Black Stork Environmental Study',
    text: 'Using AI and real-time trajectory analysis, we detected black storks, mapped collision risk zones, and optimized turbine placement to meet strict environmental requirements.',
    image:
      'pexels-1661179.jpg',
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-[#8BC34A] font-semibold text-sm uppercase tracking-widest mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-5">
            Real projects, measurable impact
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A passionate team combining AI expertise with ecological commitment
            for a harmonious coexistence between energy and biodiversity.
          </p>
        </div>

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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#03A9F4] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-[#03A9F4] transition-colors">
                  {c.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
