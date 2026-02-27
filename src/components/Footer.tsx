export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-white/10 relative z-10">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
            <span className="font-display font-bold">M</span>
          </div>
          <span className="font-display font-bold text-white text-lg">
            Milan Levíček
          </span>
        </div>
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Milan Levíček. Všechna práva
          vyhrazena.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
