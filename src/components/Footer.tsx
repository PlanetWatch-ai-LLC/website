const cols = [
  {
    title: 'Solutions',
    links: [
      { label: 'Onshore Wind', href: '#solutions' },
      { label: 'Offshore Wind', href: '#solutions' },
      { label: 'Hydropower', href: '#solutions' },
      { label: 'Solar & Mixed Sites', href: '#solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About / Team', href: '#team' },
      { label: 'Case Studies', href: '#cases' },
      { label: 'Investors', href: '#investors' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Regulatory Guides', href: '#' },
      { label: 'Support', href: '#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="inline-block bg-white rounded-xl px-4 py-3 mb-5">
              <img
                src="transparent-long.png"
                alt="PlanetWatch.ai"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              AI-powered biodiversity intelligence for renewable energy. Detect,
              classify, and protect sensitive species — on land and at sea.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-white font-semibold mb-4 text-sm">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm hover:text-[#03A9F4] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} PlanetWatch.ai — All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[#03A9F4] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#03A9F4] transition-colors">
              Legal Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
