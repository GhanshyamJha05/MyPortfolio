import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TechMarquee } from './components/TechMarquee'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { CodeDNA } from './components/CodeDNA'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Terminal } from './components/Terminal'
import { TerminalLauncher } from './components/TerminalLauncher'
import { CustomCursor } from './components/CustomCursor'
import { ScrollProgress } from './components/ScrollProgress'
import { ParticleField } from './components/ParticleField'
import { MouseSpotlight } from './components/MouseSpotlight'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  const [terminalOpen, setTerminalOpen] = useState(false)
  const openTerminal = () => setTerminalOpen(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setTerminalOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative min-h-screen text-ink bg-bg font-sans selection:bg-accent/30 selection:text-accent">
      <CustomCursor />
      <ScrollProgress />
      <MouseSpotlight />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleField count={90} />
      </div>
      <Navbar theme={theme} onToggleTheme={toggle} onOpenTerminal={openTerminal} />
      <main className="relative z-[1]">
        <Hero onOpenTerminal={openTerminal} />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CodeDNA />
        <Testimonials />
        <Contact />
      </main>
      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
      {!terminalOpen && <TerminalLauncher onOpen={openTerminal} />}
    </div>
  )
}
