import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#070b0f] text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-emerald-500/20 bg-[#05080b]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} AegisGuard, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-emerald-300">Features</a>
            <a href="#pricing" className="hover:text-emerald-300">Pricing</a>
            <a href="#contact" className="hover:text-emerald-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
