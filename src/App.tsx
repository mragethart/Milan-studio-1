/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Solutions from "./components/Solutions";
import Process from "./components/Process";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import LeadMagnet from "./components/LeadMagnet";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-body overflow-x-hidden relative selection:bg-primary selection:text-white bg-grid-pattern">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent-purple/10 blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-accent-blue/10 blur-[150px] mix-blend-multiply animate-blob animation-delay-4000"></div>
        <div className="absolute top-[60%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-pink-400/10 blur-[100px] mix-blend-multiply animate-blob animation-delay-6000"></div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <PainPoints />
        <Solutions />
        <Process />
        <Benefits />
        <Testimonials />
        <LeadMagnet />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
