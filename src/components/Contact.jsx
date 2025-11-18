import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! We will reach out shortly.')
  }

  return (
    <section id="contact" className="relative py-24 bg-[#070b0f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_65%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white">
            Get in touch
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="mt-3 text-slate-300">
            Tell us about your environment and we’ll tailor a demo.
          </motion.p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-300 mb-1">Name</label>
              <input id="name" name="name" required className="w-full rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-300 mb-1">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="jane@company.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full rounded-lg bg-slate-900/70 border border-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="What would you like to secure?" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-emerald-300/80" role="status">{status}</p>
            <button type="submit" className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
              Request Demo
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
