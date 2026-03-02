import { motion } from 'motion/react';
import { LineChart, Home, Shield, ArrowRight } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      tag: "RŮST",
      icon: <LineChart size={28} />,
      title: "Spoření a investice",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna aellentesque sit amet sapien fringilla.",
      color: "text-primary",
      bg: "bg-primary/10",
      btnBg: "bg-primary hover:bg-primary-dark",
    },
    {
      tag: "BYDLENÍ",
      icon: <Home size={28} />,
      title: "Hypotéky a financování",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna aellentesque sit amet sapien fringilla.",
      color: "text-accent-blue",
      bg: "bg-accent-blue/10",
      btnBg: "bg-accent-blue hover:bg-blue-600",
    },
    {
      tag: "JISTOTA",
      icon: <Shield size={28} />,
      title: "Pojištění rizik",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna aellentesque sit amet sapien fringilla.",
      color: "text-accent-purple",
      bg: "bg-accent-purple/10",
      btnBg: "bg-accent-purple hover:bg-purple-600",
    },
  ];

  return (
    <section id="sluzby" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Co za vás <span className="text-gradient">vyřeším?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong p-8 md:p-10 rounded-3xl flex flex-col h-full"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className={`w-14 h-14 rounded-2xl ${sol.bg} ${sol.color} flex items-center justify-center`}>
                  {sol.icon}
                </div>
                <span className="text-xs font-bold tracking-[0.15em] text-slate-500 uppercase">{sol.tag}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-display text-slate-900">
                {sol.title}
              </h3>
              <p className="text-slate-600 mb-8 flex-grow">
                {sol.desc}
              </p>
              
              <a href="#kontakt" className={`inline-flex items-center justify-center gap-2 w-full ${sol.btnBg} text-white font-bold py-4 rounded-full transition-colors mt-auto`}>
                Konzultace zdarma <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
