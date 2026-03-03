import { motion } from 'motion/react';
import { TrendingDown, Home, FileText, PiggyBank, ShieldAlert, HelpCircle } from 'lucide-react';

export default function PainPoints() {
  const points = [
    {
      icon: <TrendingDown className="text-red-500" size={24} />,
      title: "Inflace jako požírač úspor",
      desc: "Peníze na běžném účtu ztrácí hodnotu rychleji, než je stíháte vydělat. Pokud vaše úspory neleží na správných místech, inflace z nich každý den ukrajuje.",
      color: "red",
      bgShape: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-100" fill="currentColor">
          <path d="M0,0 L100,0 L100,100 Z" opacity="0.5" />
          <circle cx="30" cy="70" r="20" />
        </svg>
      )
    },
    {
      icon: <Home className="text-orange-500" size={24} />,
      title: "Sen o bydlení se vzdaluje",
      desc: "Hypotéky jsou drahé a podmínky složité. Bojíte se, že na vlastní bydlení nikdy nedosáhnete a budete muset žít v nájmu.",
      color: "orange",
      bgShape: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-orange-100" fill="currentColor">
          <rect x="10" y="40" width="80" height="50" rx="10" opacity="0.5" />
          <polygon points="50,10 90,40 10,40" />
        </svg>
      )
    },
    {
      icon: <FileText className="text-red-500" size={24} />,
      title: "Chaos ve smlouvách",
      desc: "Máte několik pojistek a spoření, ale nevíte, co přesně kryjí a zda nejsou zbytečně drahé. Platíte za něco, co možná ani nepotřebujete.",
      color: "red",
      bgShape: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-100" fill="currentColor">
          <rect x="20" y="10" width="45" height="65" rx="8" transform="rotate(-15 42 42)" opacity="0.5" />
          <rect x="35" y="25" width="45" height="65" rx="8" transform="rotate(5 57 57)" />
        </svg>
      )
    },
    {
      icon: <PiggyBank className="text-orange-500" size={24} />,
      title: "Obavy o důchod",
      desc: "Státní důchod nebude stačit. Nevíte, kolik si odkládat, abyste si udrželi životní úroveň a zajistili si klidné stáří.",
      color: "orange",
      bgShape: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-orange-100" fill="currentColor">
          <circle cx="50" cy="50" r="40" opacity="0.3" />
          <circle cx="50" cy="50" r="25" />
        </svg>
      )
    },
    {
      icon: <ShieldAlert className="text-red-500" size={24} />,
      title: "Zajištění rodiny",
      desc: "Co když se něco stane? Chcete mít jistotu, že vaše rodina bude finančně v bezpečí za každé situace a nepřijde o střechu nad hlavou.",
      color: "red",
      bgShape: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-100" fill="currentColor">
          <path d="M50,10 C80,10 90,40 90,60 C90,80 50,95 50,95 C50,95 10,80 10,60 C10,40 20,10 50,10 Z" opacity="0.5" />
          <circle cx="50" cy="40" r="15" />
        </svg>
      )
    },
    {
      icon: <HelpCircle className="text-orange-500" size={24} />,
      title: "Zmatek v produktech",
      desc: "Trh je přesycený nabídkami a vy nevíte, komu věřit a jaký produkt je pro vás ten pravý. Pomohu vám se zorientovat a vybrat to nejlepší.",
      color: "orange",
      bgShape: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-orange-100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
          <path d="M20,50 Q50,10 80,50 T20,50" />
          <circle cx="50" cy="50" r="12" fill="currentColor" stroke="none" opacity="0.5" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 relative bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            Realita dneška
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Co vás <span className="text-gradient-purple">trápí?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white p-8 md:p-10 rounded-[2rem] shadow-sm ring-1 ring-slate-900/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${point.color === 'red' ? 'from-red-50/50' : 'from-orange-50/50'} to-transparent`} />

              {/* Header: Icon + Number */}
              <div className="relative z-10 flex justify-between items-start mb-8">
                {/* Icon Container */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                    {point.bgShape}
                  </div>
                  <div className="relative z-10 bg-white/80 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border border-white group-hover:bg-white transition-colors duration-300">
                    {point.icon}
                  </div>
                </div>
                
                {/* Number */}
                <span className="text-slate-100 font-display font-bold text-4xl group-hover:text-slate-200 transition-colors duration-300 select-none">
                  0{i + 1}
                </span>
              </div>

              <h3 className={`relative z-10 text-xl font-bold mb-4 font-display text-slate-900 transition-colors duration-300 ${point.color === 'red' ? 'group-hover:text-red-600' : 'group-hover:text-orange-600'}`}>
                {point.title}
              </h3>
              <p className="relative z-10 leading-relaxed text-slate-600">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
