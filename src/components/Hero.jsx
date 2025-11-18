import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-[#0a0f14] via-[#0a1218] to-[#0a0f14]">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f14]/30 via-[#0a1218]/50 to-[#0a0f14]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_50%)]" />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-400/10 px-3 py-1 text-emerald-300/90 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Secure by Design • SOC 2 Type II
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} viewport={{ once: true }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
          Trust at the speed of the network
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} viewport={{ once: true }} className="mt-4 max-w-2xl text-base sm:text-lg text-slate-300">
          AegisGuard is the cybersecurity platform that detects, prevents, and responds — seamlessly. Real-time protection engineered for modern cloud and AI-native teams.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} viewport={{ once: true }} className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#pricing" className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-emerald-500 text-slate-900 font-semibold shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            Start Free Trial
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            Explore Features
          </a>
        </motion.div>

        {/* parallax hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="mt-16 text-emerald-300/70 text-sm">
          Scroll to explore
        </motion.div>
      </div>
    </section>
  )
}
