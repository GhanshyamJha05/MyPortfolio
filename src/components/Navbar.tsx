import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Terminal as TerminalIcon } from 'lucide-react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar({
  theme,
  onToggleTheme,
  onOpenTerminal,
}: {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  onOpenTerminal: () => void
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id))

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl mt-3 px-4">
        <div className="flex items-center justify-between rounded-full border border-border bg-panel/70 backdrop-blur-md px-4 py-2.5 shadow-lg shadow-black/10">
          <button
            onClick={() => scrollTo('home')}
            className="font-mono font-bold text-lg text-ink hover:text-accent transition-colors focus-ring rounded"
            aria-label="Go to top"
          >
            {profile.initials}<span className="text-accent">.</span>
          </button>

          <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-full transition-colors focus-ring ${
                    active === item.id
                      ? 'text-accent bg-accent/10'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={onOpenTerminal}
              title="Open terminal"
              className="p-2 rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-colors focus-ring"
              aria-label="Open terminal easter egg"
            >
              <TerminalIcon size={16} />
            </button>
            <button
              onClick={onToggleTheme}
              title="Toggle theme"
              className="p-2 rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-colors focus-ring"
              aria-label="Toggle dark and light mode"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm px-3 py-1.5 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors focus-ring"
            >
              Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="font-mono text-sm px-3 py-1.5 rounded-full bg-accent text-bg font-semibold hover:opacity-90 transition-opacity focus-ring"
            >
              Get in touch
            </button>
          </div>

          <button
            className="md:hidden p-2 text-ink focus-ring rounded"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-2 rounded-2xl border border-border bg-panel/95 backdrop-blur-md"
            >
              <ul className="flex flex-col p-3 font-mono text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors ${
                        active === item.id ? 'text-accent bg-accent/10' : 'text-muted'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="flex gap-2 px-3 pt-2">
                  <button onClick={onToggleTheme} className="flex-1 py-2 rounded-lg border border-border text-ink text-center">
                    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                  </button>
                  <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="flex-1 py-2 rounded-lg border border-border text-ink text-center">
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
