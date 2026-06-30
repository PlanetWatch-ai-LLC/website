const cols = [
  {
    title: 'Solutions',
    links: ['Onshore Wind', 'Offshore Wind', 'Hydropower', 'Solar & Mixed Sites'],
  },
  {
    title: 'Company',
    links: ['About', 'Case Studies', 'Careers', 'Press'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Regulatory Guides', 'Support'],
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
                src="/create-a-new-version-with-the-logo-on-the-left-and.png"
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
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm hover:text-[#03A9F4] transition-colors"
                    >
                      {l}
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
