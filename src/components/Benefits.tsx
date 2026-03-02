import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="proc-se-mnou" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
          <div
            className="absolute top-0 right-0 w-full h-full bg-[url('https://picsum.photos/seed/pattern/1920/1080')] opacity-10 mix-blend-overlay object-cover pointer-events-none"
            referrerPolicy="no-referrer"
          ></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-purple rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                Proč do toho jít <span className="text-primary">společně?</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna aellentesque sit amet sapien fringilla. Or sit amet, consectetur adipiscing elit.
              </p>

              <a href="#kontakt" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all shadow-[0_8px_24px_-8px_rgba(0,204,153,0.5)] hover:shadow-[0_12px_32px_-8px_rgba(0,204,153,0.6)] hover:-translate-y-1">
                Konzultace zdarma <ArrowRight size={20} />
              </a>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-600 rounded-3xl p-6 text-center shadow-xl">
                  <div className="w-12 h-12 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">EFP</h4>
                  <p className="text-sm text-slate-300 font-medium">certifikovaný finanční poradce</p>
                </div>
                
                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-600 rounded-3xl p-6 text-center transform translate-y-8 shadow-xl">
                  <div className="w-12 h-12 mx-auto bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Plním</h4>
                  <p className="text-sm text-slate-300 font-medium">vaše cíle</p>
                </div>
                
                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-600 rounded-3xl p-6 text-center shadow-xl">
                  <div className="text-4xl font-display font-bold text-purple-400 mb-2">7 let</div>
                  <p className="text-sm text-slate-300 font-medium">v oboru</p>
                </div>
                
                <div className="bg-slate-800/80 backdrop-blur-md border border-slate-600 rounded-3xl p-6 text-center transform translate-y-8 shadow-xl">
                  <div className="text-4xl font-display font-bold text-pink-400 mb-2">120+</div>
                  <p className="text-sm text-slate-300 font-medium">spokojených domácností</p>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <p className="text-slate-400 font-medium">
                  Úvodní konzultaci máte zcela <span className="text-white font-bold">Zdarma</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
