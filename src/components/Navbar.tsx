import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Why PlanetWatch', href: '#why' },
  { label: 'How It Works', href: '#how' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img
            src="transparent-long.png"
            alt="PlanetWatch.ai"
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#1F2937] hover:text-[#03A9F4] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#03A9F4] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0292d1] transition-colors duration-200"
          >
            Request a Demo
          </a>
        </nav>

        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="text-[#1F2937]" size={24} /> : <Menu className="text-[#1F2937]" size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#1F2937] font-medium text-sm hover:text-[#03A9F4] transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#03A9F4] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-[#0292d1] transition-colors"
            onClick={() => setOpen(false)}
          >
            Request a Demo
          </a>
        </div>
      )}
    </header>
  );
}
