import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { Section, SectionHeading } from './Section'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="stack.json" title="Skills" />

      <div className="space-y-20">
        {skills.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: groupIdx * 0.1, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-6 mb-8">
              <h3 className="font-mono text-sm font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-lg border border-accent/20 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                {group.category}
              </h3>
              <div className="h-px bg-gradient-to-r from-accent/50 to-transparent flex-grow" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {group.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl bg-panel/50 backdrop-blur-md border border-border/60 overflow-hidden transition-all duration-500 hover:border-accent/60 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                >
                  {/* Dynamic Gradient Background that reveals on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-150 group-hover:scale-100" />
                  
                  {/* Intense glowing orb effect */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-75" />
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-bold text-ink text-lg tracking-tight group-hover:text-accent transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <span className="font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full bg-bg text-muted border border-border group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/40 transition-all duration-300 shadow-sm">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mt-auto group-hover:text-ink/90 transition-colors duration-300">
                      {skill.detail}
                    </p>
                  </div>
                  
                  {/* Subtle edge highlight on hover */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/5 rounded-2xl transition-colors duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
