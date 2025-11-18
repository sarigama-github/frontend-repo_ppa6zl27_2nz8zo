import { useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-emerald-500/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.45)]">
            <ShieldCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <span className="text-white font-semibold tracking-tight group-hover:text-emerald-300 transition-colors">AegisGuard</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-200/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 px-1 py-2 rounded transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg px-4 py-2 bg-emerald-500 text-slate-900 font-semibold shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors">
            Get Started
          </a>
        </div>

        <button aria-label="Open menu" className="md:hidden text-slate-200 hover:text-white" onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900/95 border-t border-emerald-500/20">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold">Menu</span>
              <button aria-label="Close menu" className="text-slate-200 hover:text-white" onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/80">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-lg px-4 py-2 bg-emerald-500 text-slate-900 font-semibold shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:bg-emerald-400">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
