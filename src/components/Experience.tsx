import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus, MapPin } from 'lucide-react'
import { experienceTabs, type ExperienceEntry, type ExperienceTab } from '../data/experience'
import { achievements } from '../data/achievements'
import { Section, SectionHeading } from './Section'

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="min-w-[300px] md:min-w-[380px] snap-start bg-panel border border-border rounded-2xl p-6 flex-shrink-0 hover:border-accent/40 hover:shadow-[0_8px_30px_rgb(var(--accent)/0.08)] transition-[border-color,box-shadow]"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center font-mono text-accent font-bold">
          {entry.org.replace(/[\[\]]/g, '').slice(0, 2).toUpperCase()}
        </div>
        <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-border text-muted">
          {entry.type}
        </span>
      </div>
      <h3 className="text-lg font-bold text-ink">{entry.org}</h3>
      <p className="text-accent font-mono text-sm mt-0.5">{entry.role}</p>
      <p className="text-muted text-sm mt-2">{entry.dates}</p>
      <p className="text-muted text-xs flex items-center gap-1 mt-1">
        <MapPin size={12} /> {entry.location}
      </p>
      <p className={`text-sm text-ink/80 mt-4 leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
        {entry.description}
      </p>
      {entry.tags && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {entry.tags.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-md border border-border text-muted">
              {t}
            </span>
          ))}
        </div>
      )}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 flex items-center gap-1 text-xs font-mono text-accent hover:underline focus-ring rounded"
      >
        {expanded ? <Minus size={12} /> : <Plus size={12} />} {expanded ? 'Show less' : 'Read more'}
      </button>
    </motion.article>
  )
}

const ICONS: Record<string, string> = { shark: '🦈', yolo: '⚡', quickdraw: '🎯' }

export function Experience() {
  const [tab, setTab] = useState<ExperienceTab>('hackathons')
  const active = experienceTabs.find((t) => t.id === tab)!

  return (
    <Section id="experience" compact>
      <SectionHeading eyebrow="career.log" title="Experience" />
      <p className="text-muted mb-6 -mt-8 font-mono text-sm">Swipe through my professional journey →</p>

      <div className="flex gap-2 mb-6 font-mono text-sm">
        {experienceTabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-full border transition-colors focus-ring ${
              tab === t.id
                ? 'bg-accent text-bg border-accent font-semibold'
                : 'border-border text-muted hover:text-ink'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div key={tab} className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
        {active.data.map((entry) => (
          <ExperienceCard key={entry.id} entry={entry} />
        ))}
      </div>

      <div className="mt-10">
        <p className="font-mono text-xs text-muted mb-3">GitHub achievements</p>
        <div className="flex flex-wrap gap-2">
          {achievements.map((a) => (
            <span
              key={a.label}
              className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-panel text-ink flex items-center gap-1.5"
            >
              <span>{ICONS[a.icon]}</span> {a.label}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
