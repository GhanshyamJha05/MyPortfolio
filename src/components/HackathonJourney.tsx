import { motion } from 'framer-motion'
import { hackathonJourney } from '../data/hackathons'
import { achievements } from '../data/achievements'

const ACHIEVEMENT_ICONS: Record<string, string> = { shark: '🦈', yolo: '⚡', quickdraw: '🎯' }

export function HackathonJourney() {
  return (
    <div>
      <h3 className="text-xl font-extrabold text-ink mb-2">Hackathon Journey</h3>
      <p className="text-muted text-sm mb-8">
        Every hackathon shaped how I think about backend systems under pressure.
      </p>

      <div className="relative">
        <div
          className="absolute left-4 top-4 bottom-4 w-px"
          style={{ background: 'linear-gradient(to bottom, rgb(var(--accent) / 0.4), rgb(var(--accent) / 0.05))' }}
        />

        <div className="space-y-4">
          {hackathonJourney.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 items-start"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm z-10"
                style={{ background: item.color + '18', border: `1.5px solid ${item.color}55` }}
              >
                {item.icon}
              </div>
              <div className="flex-1 bg-panel border border-border rounded-xl p-4 hover:border-accent/40 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-sm font-bold text-ink">{item.event}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-mono font-semibold flex-shrink-0"
                    style={{ background: item.color + '18', color: item.color }}
                  >
                    {item.date}
                  </span>
                </div>
                <span className="text-xs text-muted font-mono">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-panel border border-border rounded-xl">
        <p className="text-xs text-muted font-mono mb-3">GITHUB ACHIEVEMENTS</p>
        <div className="flex flex-wrap gap-2">
          {achievements.map((a) => (
            <span
              key={a.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border border-border bg-bg/40 text-ink"
            >
              <span>{ACHIEVEMENT_ICONS[a.icon]}</span> {a.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
