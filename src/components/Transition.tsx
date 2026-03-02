import { motion } from 'motion/react';

export default function Transition() {
  return (
    <section className="py-24 md:py-32 px-4 relative bg-slate-950 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Nemusíte na to být sami.<br />
            <span className="italic text-primary/90">Existuje cesta ven.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-blue to-accent-purple mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
