export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free and grow at your pace. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold">Starter</h3>
            <p className="mt-2 text-sm text-slate-600">For boutique studios getting online</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-extrabold">$29</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>Up to 2 staff accounts</li>
              <li>100 active members</li>
              <li>Basic reports</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Start free</a>
          </div>

          {/* Growth */}
          <div className="relative rounded-2xl border-2 border-indigo-500 bg-white p-8 shadow-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">Most popular</div>
            <h3 className="text-lg font-semibold">Growth</h3>
            <p className="mt-2 text-sm text-slate-600">Everything you need to scale</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-extrabold">$79</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>Unlimited staff</li>
              <li>1,000 active members</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500">Choose Growth</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="mt-2 text-sm text-slate-600">For multi-location operations</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-extrabold">$149</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>Unlimited members</li>
              <li>Custom roles & SSO</li>
              <li>Dedicated success manager</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
