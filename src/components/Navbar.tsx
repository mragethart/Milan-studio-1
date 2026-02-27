import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Služby', href: '#sluzby' },
    { name: 'Proč se mnou?', href: '#proc-se-mnou' },
    { name: 'Názory klientů', href: '#reference' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-sm py-4 border-b border-slate-200/50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              <span className="font-display font-bold text-xl">M</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-900">Milan Levíček</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#kontakt" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors shadow-md hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
              Konzultace zdarma
            </a>
          </nav>

          <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-bold text-slate-800 p-2 hover:bg-slate-50 rounded-xl" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#kontakt" className="bg-primary text-white text-center px-5 py-3 rounded-full text-base font-bold" onClick={() => setIsOpen(false)}>
            Konzultace zdarma
          </a>
        </div>
      )}
    </header>
  );
}
