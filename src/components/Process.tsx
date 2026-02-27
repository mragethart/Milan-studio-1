import { motion } from 'motion/react';
import { Target, Compass, HeartHandshake } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <Target size={28} />,
      title: "Ujasníme vaše cíle",
      desc: "Společně probereme vaši aktuální situaci a definujeme, čeho chcete dosáhnout.",
      color: "text-primary",
      bg: "bg-primary/10",
      borderColor: "hover:border-primary"
    },
    {
      icon: <Compass size={28} />,
      title: "Dáme jim jasný směr",
      desc: "Vytvořím pro vás na míru šitý finanční plán, který vás dovede k vašim cílům.",
      color: "text-accent-blue",
      bg: "bg-accent-blue/10",
      borderColor: "hover:border-accent-blue"
    },
    {
      icon: <HeartHandshake size={28} />,
      title: "Zůstaneme v kontaktu",
      desc: "Pravidelně budeme plán aktualizovat a reagovat na změny ve vašem životě.",
      color: "text-accent-purple",
      bg: "bg-accent-purple/10",
      borderColor: "hover:border-accent-purple"
    },
  ];

  return (
    <section id="spoluprace" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Jak <span className="text-gradient">spolupracujeme?</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-accent-blue/20 to-accent-purple/20 -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className={`bg-white p-8 rounded-[32px] h-full relative group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-t-4 border-transparent ${step.borderColor} shadow-sm`}>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center shadow-inner`}>
                      {step.icon}
                    </div>
                    <span className="text-4xl font-display font-bold text-slate-100 group-hover:text-slate-200 transition-colors">0{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display text-slate-900 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 font-medium relative z-10 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
