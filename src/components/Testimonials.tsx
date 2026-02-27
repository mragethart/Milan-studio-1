import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Karel Dvořák",
      role: "Podnikatel",
      text: "Investování pro mě byla španělská vesnice. Milan mi vše vysvětlil lidsky a srozumitelně. Doporučuji!",
      img: "https://picsum.photos/seed/karel1/100/100",
    },
    {
      name: "Karel Dvořák",
      role: "Podnikatel",
      text: "Investování pro mě byla španělská vesnice. Milan mi vše vysvětlil lidsky a srozumitelně. Doporučuji!",
      img: "https://picsum.photos/seed/karel2/100/100",
    },
    {
      name: "Karel Dvořák",
      role: "Podnikatel",
      text: "Investování pro mě byla španělská vesnice. Milan mi vše vysvětlil lidsky a srozumitelně. Doporučuji!",
      img: "https://picsum.photos/seed/karel3/100/100",
    },
  ];

  return (
    <section id="reference" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Co říkají <span className="text-gradient">moji klienti?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong p-8 rounded-[32px] relative"
            >
              <div className="text-primary mb-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-20"
                >
                  <path d="M14.017 21L16.41 14.596H11.996V3H21.004V14.596L18.59 21H14.017ZM4.017 21L6.41 14.596H1.996V3H11.004V14.596L8.59 21H4.017Z" />
                </svg>
              </div>
              <p className="text-slate-800 mb-8 italic font-medium leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-600 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#kontakt" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:-translate-y-1">
            Konzultace zdarma <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
