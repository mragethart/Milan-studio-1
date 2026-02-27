import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-dark rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Pojďme se <span className="text-primary">potkat</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 font-medium">
                Napište mi, zavolejte, nebo si rovnou rezervujte termín v mém kalendáři. První káva je na mě.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Telefon</p>
                    <p className="text-xl font-bold">+420 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-xl font-bold">milan@levicek.cz</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent-purple">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Kancelář</p>
                    <p className="text-xl font-bold">Václavské náměstí 1, Praha</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="text-primary" size={20} /> Klíčová výhoda
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-3xl relative">
                <div className="text-primary mb-4">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                    <path d="M14.017 21L16.41 14.596H11.996V3H21.004V14.596L18.59 21H14.017ZM4.017 21L6.41 14.596H1.996V3H11.004V14.596L8.59 21H4.017Z" />
                  </svg>
                </div>
                <p className="text-slate-300 mb-4 italic font-medium">"Investování pro mě byla španělská vesnice. Milan mi vše vysvětlil lidsky a srozumitelně. Doporučuji!"</p>
                <div className="flex items-center gap-3">
                  <img src="https://picsum.photos/seed/karel1/100/100" alt="Karel Dvořák" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Karel Dvořák</h4>
                    <p className="text-xs text-slate-400 font-medium">Podnikatel</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <form
                className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl space-y-4 backdrop-blur-md"
                onSubmit={(e) => e.preventDefault()}
              >
                <h3 className="text-2xl font-bold text-white mb-6 font-display">
                  Napište mi zprávu
                </h3>
                <div>
                  <input
                    type="text"
                    placeholder="Vaše jméno"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Váš email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Váš telefon"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="S čím vám mohu pomoci?"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none font-medium"
                  ></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_10px_30px_-10px_rgba(0,204,153,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(0,204,153,0.8)] hover:-translate-y-1">
                  Odeslat zprávu <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
