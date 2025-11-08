import { ArrowRight, LineChart, Dumbbell } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-24 md:pt-32 md:pb-28">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/a4aLQv4G3mEwIOjv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <LineChart className="mr-2 h-3.5 w-3.5 text-emerald-600" />
              AI-powered training analytics
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Elevate your gym with a modern SaaS platform
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              PulseFit helps studios manage memberships, schedule classes, and track progress with real-time insights. Simple, beautiful, and built to convert.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Start free 14-day trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                <Dumbbell className="mr-2 h-4 w-4" />
                See features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <span>Trusted by 2,000+ members</span>
              <span>•</span>
              <span>No credit card required</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
              alt="Gym dashboard preview"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
