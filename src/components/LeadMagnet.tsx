import { ArrowRight, Download, TrendingUp, Shield } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section id="prirucka" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent-blue to-accent-purple"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-purple rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
            <div className="w-full lg:w-1/2">
              <div className="mb-8 text-center lg:text-left">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                  Příručka finančního zdraví <span className="text-primary">ZDARMA</span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed font-medium">
                  Stáhněte si příručku 5 kroků k finančnímu zdraví, ať máte jasný přehled co nejdříve.
                </p>
              </div>

              <form className="space-y-4 max-w-md mx-auto lg:mx-0" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="email"
                    placeholder="Váš email"
                    className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all text-white font-medium placeholder-white/50"
                  />
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-display font-bold text-lg tracking-wide py-4 px-6 rounded-full shadow-[0_8px_24px_-8px_rgba(0,204,153,0.5)] hover:shadow-[0_12px_32px_-8px_rgba(0,204,153,0.6)] hover:-translate-y-1 transform transition-all duration-300 flex items-center justify-center gap-3">
                  Stáhnout ZDARMA! <ArrowRight size={20} />
                </button>
              </form>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-md mx-auto transform perspective-1000 hover:rotate-y-0 transition-transform duration-500">
                <div className="bg-slate-800/80 backdrop-blur-md rounded-[32px] overflow-hidden relative aspect-[4/3] flex flex-col items-center justify-center text-center p-8 border border-slate-600 shadow-2xl">
                  <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(0,204,153,0.15),transparent_60%)] animate-pulse"></div>

                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,204,153,0.2)]">
                      <Download className="text-primary w-12 h-12 drop-shadow-[0_0_10px_rgba(0,204,153,0.5)]" />
                    </div>
                    <div>
                      <h3 className="text-white font-display text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                        FINANČNÍ
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-200 to-white">
                          ZDRAVÍ
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="absolute top-8 right-4 bg-slate-900/80 p-3 rounded-xl flex items-center gap-3 animate-[bounce_4s_infinite] border border-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                      <TrendingUp size={16} />
                    </div>
                    <div className="text-left">
                      <p className="text-white text-xs font-bold">+12.4%</p>
                      <p className="text-slate-400 text-[9px]">Růst</p>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-4 bg-slate-900/80 p-3 rounded-xl flex items-center gap-3 animate-[bounce_5s_infinite_reverse] border border-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Shield size={16} />
                    </div>
                    <div className="text-left">
                      <p className="text-white text-xs font-bold">
                        Zabezpečeno
                      </p>
                      <p className="text-slate-400 text-[9px]">AES-256</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
