import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['Up to 3 services', 'Basic detection', 'Email support'],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$49/mo',
    features: ['Unlimited services', 'Advanced analytics', '24/7 chat support', 'Team access'],
    cta: 'Start Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['SAML/SSO', 'Dedicated CSM', 'Custom playbooks', 'SOC 2 reports'],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-[#070b0f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_65%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white">
            Straightforward, scalable pricing
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="mt-3 text-slate-300">
            Start free. Upgrade as your security program grows.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`relative rounded-2xl border ${t.popular ? 'border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.25)]' : 'border-indigo-500/20'} bg-slate-900/50 p-6` }>
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 text-slate-900 text-xs font-semibold px-3 py-1 shadow-[0_0_20px_rgba(16,185,129,0.5)]">Most Popular</span>
              )}
              <h3 className="text-white font-semibold">{t.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-white">{t.price}</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 w-full ${t.popular ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400' : 'border border-slate-700 text-slate-200 hover:bg-slate-800'} transition-colors`}>{t.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
