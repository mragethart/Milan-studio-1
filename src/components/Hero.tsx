import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 px-4 relative overflow-hidden">
      {/* Dekorativní tvary na pozadí */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border-[40px] border-slate-200/30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full border-[20px] border-accent-blue/5"></div>
        <svg className="absolute top-32 left-10 opacity-20" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle fill="#94a3b8" cx="2" cy="2" r="2"></circle>
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dots)"></rect>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] xl:w-[60%] text-center lg:text-left relative z-10"
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <span className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-1.5 rounded-full text-sm font-bold text-slate-700 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>Investice
              </span>
              <span className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-1.5 rounded-full text-sm font-bold text-slate-700 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>Hypotéky
              </span>
              <span className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-1.5 rounded-full text-sm font-bold text-slate-700 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>Pojištění
              </span>
            </div>

            {/* Nadpis vynuceně na 2 řádky na větších displejích */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] font-bold leading-[1.15] tracking-tight mb-6 text-slate-900">
              Cesta která dává smysl <br className="hidden sm:block" />
              <span className="text-gradient">pro váš růst a klidnou mysl.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-700 mb-8 max-w-2xl mx-auto lg:mx-0 font-body leading-relaxed font-medium">
              Nezávislý poradce s certifikací EFP. Již mnoho let vnáším řád do financí svých klientů s majetkem přesahujícím 140 milionů korun.
            </p>

            <div className="flex flex-col gap-4 mb-10 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3 text-slate-800 font-bold text-lg">
                <CheckCircle2 className="text-primary shrink-0" size={24} /> 
                Ušetřím vám čas i peníze
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-bold text-lg">
                <CheckCircle2 className="text-primary shrink-0" size={24} /> 
                7+ let zkušeností v oboru financí
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-bold text-lg">
                <CheckCircle2 className="text-primary shrink-0" size={24} /> 
                Otevřeně, férově a srozumitelně
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#kontakt" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_10px_30px_-10px_rgba(0,204,153,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(0,204,153,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2">
                Konzultace zdarma <ArrowRight size={20} />
              </a>
              <a href="#spoluprace" className="w-full sm:w-auto bg-white border border-slate-200 px-8 py-4 rounded-full font-bold text-lg text-slate-900 hover:bg-slate-50 hover:shadow-md transition-all flex items-center justify-center gap-2">
                Jak to funguje?
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[45%] xl:w-[40%] relative mt-12 lg:mt-0"
          >
            <div className="relative aspect-[4/5] w-full max-w-[420px] ml-auto mr-0">
              <div className="absolute top-10 right-10 w-64 h-64 bg-accent-purple/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
              
              <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
                {/* Zde je placeholder obrázek. Uživatel si ho nahradí za svou fotku. */}
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Milan Levíček" className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                
                {/* Posledních 12 míst badge */}
                <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg border border-red-400/50 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  Posledních 12 míst
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logos moved above the fold / directly under hero content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-200/60"
        >
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Za podpory největších institucí v ČR</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl md:text-2xl font-display font-bold text-slate-800">Česká spořitelna</span>
            <span className="text-xl md:text-2xl font-display font-bold text-slate-800">ČSOB</span>
            <span className="text-xl md:text-2xl font-display font-bold text-slate-800">Komerční banka</span>
            <span className="text-xl md:text-2xl font-display font-bold text-slate-800">Raiffeisenbank</span>
            <span className="text-xl md:text-2xl font-display font-bold text-slate-800">MONETA</span>
            <span className="text-xl md:text-2xl font-display font-bold text-slate-800">Generali Česká</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
