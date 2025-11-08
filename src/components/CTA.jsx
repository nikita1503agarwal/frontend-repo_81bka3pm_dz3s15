import { Check } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-rose-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to grow your gym?</h2>
            <p className="mt-3 text-slate-700">Start your free trial and get access to every feature. No credit card required.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Cancel anytime</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> 24/7 support</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> No setup fees</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <input type="text" name="name" placeholder="Full name" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="email" name="email" placeholder="Work email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="text" name="gym" placeholder="Gym or studio name" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Start free trial</button>
              <p className="text-xs text-slate-500">By continuing, you agree to our Terms and Privacy Policy.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
