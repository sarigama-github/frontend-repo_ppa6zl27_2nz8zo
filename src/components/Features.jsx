import { motion } from 'framer-motion'
import { Shield, Lock, Activity, Cloud, Scan, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Adaptive Threat Defense',
    desc: 'Behavioral analytics and ML models identify novel attacks in milliseconds.',
  },
  {
    icon: Lock,
    title: 'Zero-Trust Access',
    desc: 'Granular policies and continuous verification across users, devices, and services.',
  },
  {
    icon: Activity,
    title: 'Real-time Detection',
    desc: 'Stream processing detects anomalies across your entire cloud footprint.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    desc: 'First-class support for multi-cloud, containers, and serverless architectures.',
  },
  {
    icon: Scan,
    title: 'Agentless Visibility',
    desc: 'Instant coverage with API-level scanning and deep config analysis.',
  },
  {
    icon: Zap,
    title: 'Automated Response',
    desc: 'Playbooks that isolate, remediate, and verify — all in seconds.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#0a0f14]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_65%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white">
            Security without friction
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="mt-3 text-slate-300">
            Powerful capabilities that fit the way your team ships software.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="group rounded-2xl border border-emerald-500/15 bg-slate-900/40 p-6 hover:bg-slate-900/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-slate-900 grid place-content-center shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                <f.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
