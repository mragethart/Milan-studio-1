import { motion } from 'motion/react';
import { LineChart, Home, Shield, ArrowRight } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      id: "bydleni",
      icon: <Home size={28} />,
      title: "Hypotéky a bydlení",
      desc: "Najdeme pro vás tu nejvýhodnější hypotéku na trhu. Bez zbytečného papírování a skrytých poplatků.",
      colorClass: "text-primary",
      bgClass: "bg-primary",
      shadowClass: "shadow-primary/30",
      lightBgClass: "bg-primary/5",
      borderHoverClass: "hover:border-primary/30",
      svgHoverClass: "group-hover:text-primary group-hover:rotate-12 group-hover:scale-110",
      btnHoverClass: "hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20",
      decorativeSvg: (
        <svg viewBox="0 0 200 200" className="w-full h-full transition-all duration-700 ease-in-out text-primary/10">
          <circle cx="100" cy="100" r="60" className="fill-current" />
          <circle cx="100" cy="100" r="60" className="stroke-current opacity-50" strokeWidth="4" fill="none" transform="translate(15, 15)" />
        </svg>
      )
    },
    {
      id: "investice",
      icon: <LineChart size={28} />,
      title: "Spoření a investice",
      desc: "Zhodnoťte své úspory chytře. Vytvoříme investiční portfolio, které porazí inflaci a zajistí vaši budoucnost.",
      colorClass: "text-accent-blue",
      bgClass: "bg-accent-blue",
      shadowClass: "shadow-accent-blue/30",
      lightBgClass: "bg-accent-blue/5",
      borderHoverClass: "hover:border-accent-blue/30",
      svgHoverClass: "group-hover:text-accent-blue group-hover:-rotate-12 group-hover:scale-110",
      btnHoverClass: "hover:bg-accent-blue hover:text-white hover:shadow-lg hover:shadow-accent-blue/20",
      decorativeSvg: (
        <svg viewBox="0 0 200 200" className="w-full h-full transition-all duration-700 ease-in-out text-accent-blue/10">
          <rect x="40" y="40" width="120" height="120" rx="30" className="fill-current" transform="rotate(15 100 100)" />
          <rect x="40" y="40" width="120" height="120" rx="30" className="stroke-current opacity-50" strokeWidth="4" fill="none" transform="rotate(-10 100 100)" />
        </svg>
      )
    },
    {
      id: "pojisteni",
      icon: <Shield size={28} />,
      title: "Pojištění rizik",
      desc: "Chraňte to nejcennější. Nastavíme vaše pojistky tak, aby vás podržely v nečekaných životních situacích.",
      colorClass: "text-accent-purple",
      bgClass: "bg-accent-purple",
      shadowClass: "shadow-accent-purple/30",
      lightBgClass: "bg-accent-purple/5",
      borderHoverClass: "hover:border-accent-purple/30",
      svgHoverClass: "group-hover:text-accent-purple group-hover:rotate-45 group-hover:scale-110",
      btnHoverClass: "hover:bg-accent-purple hover:text-white hover:shadow-lg hover:shadow-accent-purple/20",
      decorativeSvg: (
        <svg viewBox="0 0 200 200" className="w-full h-full transition-all duration-700 ease-in-out text-accent-purple/10">
          {/* Hexagons symbolize strength, structure, and protection */}
          <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" className="fill-current" transform="rotate(-10 100 100)" />
          <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" className="stroke-current opacity-50" strokeWidth="4" fill="none" transform="rotate(20 100 100)" />
        </svg>
      )
    },
  ];

  return (
    <section id="sluzby" className="py-24 md:py-32 px-4 relative bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Moje služby
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
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
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-white p-8 md:p-10 rounded-[2rem] flex flex-col items-center text-center border border-slate-100 shadow-xl shadow-slate-200/50 ring-1 ring-slate-900/5 hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-500 relative group ${sol.borderHoverClass} hover:-translate-y-2 overflow-hidden`}
            >
              {/* Icon Area */}
              <div className="relative w-full h-40 flex items-center justify-center mb-8">
                {/* Decorative SVG */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${sol.svgHoverClass}`}>
                  <div className="w-48 h-48">
                    {sol.decorativeSvg}
                  </div>
                </div>
                
                {/* Solid Icon Block */}
                <div className={`relative z-10 w-16 h-16 rounded-2xl ${sol.bgClass} text-white flex items-center justify-center shadow-xl ${sol.shadowClass} group-hover:scale-110 transition-all duration-500`}>
                  {sol.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-display text-slate-900 group-hover:text-slate-800 transition-colors">
                {sol.title}
              </h3>
              <p className="text-slate-600 mb-10 flex-grow leading-relaxed">
                {sol.desc}
              </p>
              
              <a 
                href="#kontakt" 
                className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${sol.lightBgClass} ${sol.colorClass} ${sol.btnHoverClass} mt-auto group/btn`}
              >
                Zjistit více <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
