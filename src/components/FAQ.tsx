import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "Kolik stojí první schůzka?",
      a: "Úvodní konzultace je zcela zdarma a nezávazná. Probereme vaši situaci a zjistíme, zda vám mohu pomoci.",
    },
    {
      q: "Jak probíhá spolupráce?",
      a: "Nejprve si ujasníme vaše cíle, následně pro vás připravím finanční plán na míru a poté zůstaneme v kontaktu pro jeho pravidelnou aktualizaci.",
    },
    {
      q: "Co vše vaše služby zahrnují?",
      a: "Zajišťuji komplexní finanční poradenství – od investic a spoření, přes hypotéky a financování bydlení, až po pojištění rizik a zajištění rodiny.",
    },
    {
      q: "Dosáhnu s vámi na vyšší hypotéku než v bance?",
      a: "Díky spolupráci s naprostou většinou bank na trhu dokážu najít řešení i v situacích, kdy vás vaše domovská banka odmítne nebo nabídne nevýhodné podmínky.",
    },
    {
      q: "Jaký kapitál potřebuji pro začátek investování?",
      a: "Začít investovat lze už od několika stokorun měsíčně. Důležitější než počáteční částka je pravidelnost a správně nastavená strategie.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Často se <span className="text-gradient">ptáte</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-strong rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-lg text-slate-800"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  className={`text-primary transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-slate-700 font-medium">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
