import { motion } from 'motion/react';
import { TrendingDown, Home, FileText, PiggyBank, ShieldAlert, HelpCircle } from 'lucide-react';

export default function PainPoints() {
  const points = [
    {
      icon: <TrendingDown className="text-orange-600" size={32} />,
      title: "Inflace jako požírač úspor",
      desc: "Peníze na běžném účtu ztrácí hodnotu rychleji, než je stíháte vydělat.",
    },
    {
      icon: <Home className="text-pink-600" size={32} />,
      title: "Sen o bydlení se vzdaluje",
      desc: "Hypotéky jsou drahé a podmínky složité. Bojíte se, že na vlastní bydlení nikdy nedosáhnete.",
    },
    {
      icon: <FileText className="text-purple-600" size={32} />,
      title: "Chaos ve smlouvách",
      desc: "Máte několik pojistek a spoření, ale nevíte, co přesně kryjí a zda nejsou zbytečně drahé.",
    },
    {
      icon: <PiggyBank className="text-blue-600" size={32} />,
      title: "Obavy o důchod",
      desc: "Státní důchod nebude stačit. Nevíte, kolik si odkládat, abyste si udrželi životní úroveň.",
    },
    {
      icon: <ShieldAlert className="text-primary-dark" size={32} />,
      title: "Zajištění rodiny",
      desc: "Co když se něco stane? Chcete mít jistotu, že vaše rodina bude finančně v bezpečí za každé situace.",
    },
    {
      icon: <HelpCircle className="text-slate-600" size={32} />,
      title: "Zmatek v produktech",
      desc: "Trh je přesycený nabídkami a vy nevíte, komu věřit a jaký produkt je pro vás ten pravý.",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Co vás <span className="text-gradient-purple">trápí?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong p-8 rounded-[32px] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-md border border-slate-100">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display text-slate-900">
                {point.title}
              </h3>
              <p className="text-slate-700 leading-relaxed font-medium">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
