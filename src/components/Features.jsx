import { Calendar, Users, CreditCard, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Class calendars, trainer availability, and waitlists that update in real time.'
  },
  {
    icon: Users,
    title: 'Member Management',
    desc: 'Profiles, progress tracking, and communication in one clean dashboard.'
  },
  {
    icon: CreditCard,
    title: 'Payments & Billing',
    desc: 'Plans, invoices, and automated renewals with Stripe integration.'
  },
  {
    icon: BarChart3,
    title: 'Performance Insights',
    desc: 'Track attendance, revenue, and session utilization with easy reports.'
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    desc: 'SSO, role-based access, audit logs, and enterprise-grade security.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything your gym runs on</h2>
          <p className="mt-3 text-slate-600">A streamlined toolkit that helps you grow memberships, keep classes full, and delight members.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-tr from-rose-500 via-fuchsia-500 to-indigo-500 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
