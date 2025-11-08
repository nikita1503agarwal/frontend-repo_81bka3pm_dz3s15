import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="font-inter text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-500 via-fuchsia-500 to-indigo-500" />
            <span className="text-sm font-semibold">PulseFit</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} PulseFit — All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
