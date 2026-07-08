import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const links = [
  { label: 'Why PlanetWatch', href: '#why' },
  { label: 'How It Works', href: '#how' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Team', href: '#team' },
  { label: 'Investors', href: '#investors' },
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
              className="text-sm font-medium text-ink hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <Button href="#contact" size="sm">
            Request a Demo
          </Button>
        </nav>

        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="text-ink" size={24} /> : <Menu className="text-ink" size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink font-medium text-sm hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button href="#contact" size="sm" className="text-center" onClick={() => setOpen(false)}>
            Request a Demo
          </Button>
        </div>
      )}
    </header>
  );
}
