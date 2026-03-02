import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Karel Dvořák",
      role: "Podnikatel",
      text: "Investování pro mě byla španělská vesnice. Milan mi vše vysvětlil lidsky a srozumitelně. Doporučuji!",
      img: "https://picsum.photos/seed/karel1/100/100",
    },
    {
      name: "Jana Nováková",
      role: "Lékařka",
      text: "Díky Milanovi mám konečně pořádek v pojistkách a vím, že je o moji rodinu postaráno. Skvělý přístup.",
      img: "https://picsum.photos/seed/jana/100/100",
    },
    {
      name: "Petr Svoboda",
      role: "IT Specialista",
      text: "Hypotéka vyřízena rychle a bez stresu. Milan zařídil mnohem lepší podmínky, než mi nabídli v bance.",
      img: "https://picsum.photos/seed/petr/100/100",
    },
    {
      name: "Lucie Černá",
      role: "Manažerka",
      text: "Konečně finanční poradce, který mi nic nenutí, ale opravdu naslouchá mým cílům. Naprostá spokojenost.",
      img: "https://picsum.photos/seed/lucie/100/100",
    },
    {
      name: "Martin Kučera",
      role: "OSVČ",
      text: "Dlouho jsem odkládal řešení důchodu. Milan mi ukázal cestu, která dává smysl a nezatíží můj rozpočet.",
      img: "https://picsum.photos/seed/martin/100/100",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section id="reference" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Co říkají <span className="text-gradient">moji klienti?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {getVisibleTestimonials().map((t, i) => {
              const isMiddle = i === 1;
              return (
                <motion.div
                  key={`${currentIndex}-${i}`}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: isMiddle ? 1.05 : 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`${isMiddle ? 'glass-dark z-10 shadow-2xl' : 'glass-strong opacity-80'} p-8 md:p-10 rounded-3xl relative flex flex-col`}
                >
                  <div className="mb-6 flex justify-between items-start">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className={isMiddle ? 'text-primary' : 'text-slate-300'}
                    >
                      <path d="M14.017 21L16.41 14.596H11.996V3H21.004V14.596L18.59 21H14.017ZM4.017 21L6.41 14.596H1.996V3H11.004V14.596L8.59 21H4.017Z" />
                    </svg>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className={`text-lg mb-8 leading-relaxed flex-grow ${isMiddle ? 'text-slate-200' : 'text-slate-700'}`}>"{t.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className={`font-bold ${isMiddle ? 'text-white' : 'text-slate-900'}`}>{t.name}</h4>
                      <p className={`text-sm font-medium ${isMiddle ? 'text-slate-400' : 'text-slate-600'}`}>{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-6 mb-16">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary hover:shadow-md transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary hover:shadow-md transition-all"
          >
            <ChevronRight size={24} />
          </button>
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
