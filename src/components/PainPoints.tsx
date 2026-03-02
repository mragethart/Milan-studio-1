import { motion } from 'motion/react';
import { TrendingDown, Home, FileText, PiggyBank, ShieldAlert, HelpCircle } from 'lucide-react';

export default function PainPoints() {
  const points = [
    {
      icon: <TrendingDown className="text-red-500" size={28} />,
      title: "Inflace jako požírač úspor",
      desc: "Peníze na běžném účtu ztrácí hodnotu rychleji, než je stíháte vydělat. Pokud vaše úspory neleží na správných místech, inflace z nich každý den ukrajuje.",
    },
    {
      icon: <Home className="text-orange-500" size={28} />,
      title: "Sen o bydlení se vzdaluje",
      desc: "Hypotéky jsou drahé a podmínky složité. Bojíte se, že na vlastní bydlení nikdy nedosáhnete a budete muset žít v nájmu.",
    },
    {
      icon: <FileText className="text-red-500" size={28} />,
      title: "Chaos ve smlouvách",
      desc: "Máte několik pojistek a spoření, ale nevíte, co přesně kryjí a zda nejsou zbytečně drahé. Platíte za něco, co možná ani nepotřebujete.",
    },
    {
      icon: <PiggyBank className="text-orange-500" size={28} />,
      title: "Obavy o důchod",
      desc: "Státní důchod nebude stačit. Nevíte, kolik si odkládat, abyste si udrželi životní úroveň a zajistili si klidné stáří.",
    },
    {
      icon: <ShieldAlert className="text-red-500" size={28} />,
      title: "Zajištění rodiny",
      desc: "Co když se něco stane? Chcete mít jistotu, že vaše rodina bude finančně v bezpečí za každé situace a nepřijde o střechu nad hlavou.",
    },
    {
      icon: <HelpCircle className="text-orange-500" size={28} />,
      title: "Zmatek v produktech",
      desc: "Trh je přesycený nabídkami a vy nevíte, komu věřit a jaký produkt je pro vás ten pravý. Pomohu vám se zorientovat a vybrat to nejlepší.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 relative bg-[#FDFBFB] border-y border-slate-100">
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
              className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col overflow-hidden"
            >
              {/* Animated top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:via-orange-500 group-hover:to-red-500 transition-all duration-500"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                {point.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
