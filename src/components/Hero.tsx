import { motion } from 'framer-motion'
import { ArrowDown, Terminal as TerminalIcon } from 'lucide-react'
import { profile } from '../data/profile'
import { achievements } from '../data/achievements'
import { MagneticButton } from './MagneticButton'

const PREVIEW_LINES: [string, string][] = [
  ['gj --stack', 'Go · Python · TypeScript · FastAPI · LangGraph'],
  ['gj --github', `${profile.stats[0].value} repos · ${profile.stats[1].value} stars · ${profile.stats[2].value} PRs`],
  ['gj --status', 'Open to roles, collabs, or a good conversation'],
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export function Hero({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  return (
    <section
      id="home"
      className="snap-section min-h-screen w-full flex flex-col justify-center relative px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: 'rgb(var(--accent))' }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.p
            variants={itemVariants}
            className="font-mono text-accent text-sm md:text-base mb-6"
          >
            <span className="text-muted">&gt;</span> {profile.kicker}
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight leading-[1.02] flex flex-col"
          >
            <motion.span variants={itemVariants}>{profile.name}.</motion.span>
            <motion.span variants={itemVariants} className="text-muted">I build things.</motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-lg md:text-xl text-muted leading-relaxed"
          >
            {profile.pitch}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm px-6 py-3 rounded-full bg-accent text-bg font-semibold focus-ring"
            >
              Resume
            </MagneticButton>
            <MagneticButton
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-6 py-3 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors focus-ring bg-bg/50 backdrop-blur-sm"
            >
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-wrap gap-10 font-mono"
          >
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <MagneticButton
            onClick={onOpenTerminal}
            className="text-left w-full rounded-xl border border-border bg-panel overflow-hidden shadow-2xl font-mono text-xs md:text-sm hover:border-accent/50 transition-colors focus-ring block"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#151318] border-b border-border w-full">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-muted text-[11px]">gj@portfolio ~ bash</span>
            </div>
            <div className="p-4 space-y-2 w-full">
              {PREVIEW_LINES.map(([cmd, out]) => (
                <div key={cmd}>
                  <p className="text-ink">
                    <span className="text-accent">$</span> {cmd}
                  </p>
                  <p className="text-muted pl-3">{out}</p>
                </div>
              ))}
              <p className="text-accent flex items-center gap-1 pt-1">
                <TerminalIcon size={12} /> click to open full terminal
                <span className="w-1.5 h-3.5 bg-accent inline-block animate-blink ml-1" />
              </p>
            </div>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-14 flex flex-wrap gap-2"
      >
        {achievements.map((a) => (
          <span key={a.label} className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted">
            {a.label}
          </span>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  )
}
