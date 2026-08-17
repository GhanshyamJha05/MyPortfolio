import { motion } from 'framer-motion'
import { testimonials } from '../data/testimonials'
import { Section, SectionHeading } from './Section'

export function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <Section id="testimonials">
      <SectionHeading eyebrow="kind_words" title="Testimonials" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="bg-panel border border-border rounded-2xl p-6"
          >
            <p className="text-ink/90 leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center font-mono text-xs text-accent font-bold">
                {t.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-muted">{t.title}</p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  )
}
