import { motion } from 'framer-motion'

const quotes = [
  {
    author: 'CTO, CloudFinTech',
    quote:
      'We consolidated three tools into one and improved MTTR by 46%. The automated playbooks are a game changer.',
  },
  {
    author: 'Head of Security, NovaAI',
    quote:
      'The only platform that keeps up with our AI-first development pace without compromising on security.',
  },
  {
    author: 'VP Eng, ScaleOps',
    quote:
      'Deployment took minutes. Visibility was immediate. Our auditors loved the built-in reporting.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#0a0f14]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_65%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white">
            Trusted by modern teams
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="mt-3 text-slate-300">
            Stories from customers who ship fast and stay secure.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.figure key={q.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="rounded-2xl border border-emerald-500/15 bg-slate-900/50 p-6">
              <blockquote className="text-slate-200">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-emerald-300/90">{q.author}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
