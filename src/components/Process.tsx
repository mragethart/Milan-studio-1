import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Compass, HeartHandshake } from 'lucide-react';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      icon: <Target size={28} className="text-white" />,
      title: "Ujasníme vaše cíle",
      desc: "Společně probereme vaši aktuální situaci a definujeme, čeho chcete dosáhnout. Zjistíme, kde se nacházíte a kam směřujete.",
      bgColor: "bg-primary",
      textColor: "text-primary",
      shadow: "shadow-[0_0_30px_rgba(0,204,153,0.4)]",
    },
    {
      icon: <Compass size={28} className="text-white" />,
      title: "Dáme jim jasný směr",
      desc: "Vytvořím pro vás na míru šitý finanční plán, který vás dovede k vašim cílům. Vybereme ty správné nástroje a strategii.",
      bgColor: "bg-accent-blue",
      textColor: "text-accent-blue",
      shadow: "shadow-[0_0_30px_rgba(59,130,246,0.4)]",
    },
    {
      icon: <HeartHandshake size={28} className="text-white" />,
      title: "Zůstaneme v kontaktu",
      desc: "Pravidelně budeme plán aktualizovat a reagovat na změny ve vašem životě. Finance nejsou jednorázová věc, ale dlouhodobá cesta.",
      bgColor: "bg-accent-purple",
      textColor: "text-accent-purple",
      shadow: "shadow-[0_0_30px_rgba(139,92,246,0.4)]",
    },
  ];

  return (
    <section id="spoluprace" className="py-24 md:py-32 px-4 relative bg-slate-50 text-slate-900 overflow-hidden" ref={containerRef}>
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Jak <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-blue to-accent-purple">spolupracujeme?</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Proces, který vás zbaví stresu a dodá vašim financím jasný řád.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* The background line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>
          
          {/* The animated progress line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary via-accent-blue to-accent-purple -translate-x-1/2 rounded-full"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                      className={`w-16 h-16 rounded-full ${step.bgColor} ${step.shadow} flex items-center justify-center border-4 border-slate-50`}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                      className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group text-left"
                    >
                      <span className={`text-sm font-bold tracking-widest uppercase mb-3 block ${step.textColor}`}>Krok 0{i + 1}</span>
                      <h3 className="text-2xl font-bold mb-4 font-display text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
