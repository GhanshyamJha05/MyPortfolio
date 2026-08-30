import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Section, SectionHeading } from './Section'
import { MagneticButton } from './MagneticButton'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

export function About() {
  const [activeChip, setActiveChip] = useState<number | null>(null)

  // Split the bio by spaces to animate word-by-word
  const words = profile.bioLong.split(' ')

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
          <motion.p 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl md:text-2xl leading-relaxed text-ink flex flex-wrap gap-x-2 gap-y-1"
          >
            {words.map((word, i) => {
              const isHighlight = word.includes('Sentinel') || word.includes('CLI') || word.includes('56') || word.includes('repositories')
              return (
                <motion.span 
                  key={i} 
                  variants={itemVariants}
                  className={isHighlight ? 'text-accent font-semibold' : ''}
                >
                  {word}
                </motion.span>
              )
            })}
          </motion.p>

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
            <MagneticButton
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm px-6 py-3 rounded-full bg-accent text-bg font-semibold focus-ring inline-block"
            >
              Resume
            </MagneticButton>
            <MagneticButton
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm px-6 py-3 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors focus-ring inline-block"
            >
              LinkedIn
            </MagneticButton>
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
