import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { Section, SectionHeading } from './Section'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="stack.json" title="Skills" />

      <div className="space-y-16">
        {skills.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
          >
            <h3 className="font-mono text-sm text-accent mb-6 uppercase tracking-wide flex items-center gap-4">
              <span>{group.category}</span>
              <div className="h-px bg-border flex-grow opacity-50" />
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -4 }}
                  className="group relative p-5 rounded-2xl bg-panel border border-border/50 overflow-hidden transition-all duration-300 hover:border-accent/50"
                  style={{ boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                >
                  {/* Glowing background gradient that fades in on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-transparent group-hover:from-accent/10 transition-colors duration-500" />
                  
                  {/* A soft glowing orb in the top right, revealed on hover */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-semibold text-ink text-base">{skill.name}</span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-full bg-border text-muted group-hover:text-accent border border-transparent transition-colors">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed mt-auto">{skill.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
