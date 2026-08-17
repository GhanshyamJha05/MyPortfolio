import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Section, SectionHeading } from './Section'

export function About() {
  const [activeChip, setActiveChip] = useState<number | null>(null)

  return (
    <Section
      id="about"
      compact
    >
      <SectionHeading eyebrow="whoami" title="About" />

      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-ink">
            {profile.bioLong.split(/(\bSentinel CLI\b|\b56 public repositories\b)/).map((part, i) =>
              part === 'Sentinel CLI' || part === '56 public repositories' ? (
                <span key={i} className="text-accent font-semibold">{part}</span>
              ) : (
                part
              )
            )}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {profile.chips.map((chip, i) => (
              <motion.div key={chip.label} className="relative" whileHover={{ y: -2 }}>
                <button
                  onClick={() => setActiveChip(activeChip === i ? null : i)}
                  onMouseEnter={() => setActiveChip(i)}
                  onMouseLeave={() => setActiveChip(null)}
                  className="font-mono text-sm px-4 py-2 rounded-full border border-border bg-panel text-ink hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgb(var(--accent)/0.15)] transition-all focus-ring"
                >
                  {chip.label}
                </button>
                {activeChip === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute z-10 top-full mt-2 left-0 w-64 p-3 rounded-xl border border-border bg-panel shadow-xl text-sm text-muted"
                  >
                    {chip.detail}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm px-6 py-3 rounded-full bg-accent text-bg font-semibold focus-ring"
            >
              Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm px-6 py-3 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors focus-ring"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-row lg:flex-col gap-4"
        >
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-panel border border-border rounded-xl px-5 py-4 min-w-[120px] hover:border-accent/40 transition-colors"
            >
              <p className="text-2xl font-bold text-accent font-mono">{stat.value}</p>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
