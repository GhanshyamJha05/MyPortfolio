import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { Section, SectionHeading } from './Section'

const LEVEL_WIDTH: Record<string, string> = {
  Expert: '95%',
  Advanced: '80%',
  Intermediate: '60%',
  Beginner: '35%',
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="stack.json" title="Skills" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
        {skills.map((group) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-mono text-sm text-accent mb-4 uppercase tracking-wide">{group.category}</h3>
            <div className="space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-ink text-sm">{skill.name}</span>
                    <span className="font-mono text-xs text-muted">{skill.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-border overflow-hidden mb-1.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: LEVEL_WIDTH[skill.level] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{skill.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
