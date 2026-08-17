import { motion } from 'framer-motion'
import { ExternalLink, Github, FileText } from 'lucide-react'
import { projects } from '../data/projects'
import { Section, SectionHeading } from './Section'

const ICONS: Record<string, typeof ExternalLink> = {
  'Visit Site': ExternalLink,
  GitHub: Github,
  'Case Study': FileText,
}

export function Projects() {
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

  return (
    <Section id="projects">
      <SectionHeading eyebrow="things_ive_built" title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group bg-panel border border-border rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-[0_12px_40px_rgb(var(--accent)/0.1)] transition-[border-color,box-shadow]"
          >
            <div className="aspect-video bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center border-b border-border overflow-hidden">
              <span className="font-mono text-4xl font-bold text-accent/30 group-hover:text-accent/60 group-hover:scale-110 transition-all duration-300">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div className="p-6">
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                {project.status}
              </span>
              <h3 className="text-xl font-bold mt-3">{project.title}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-1 rounded-md border border-border text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-5">
                {project.links.map((link) => {
                  const Icon = ICONS[link.label] ?? ExternalLink
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-mono text-ink hover:text-accent transition-colors focus-ring rounded"
                    >
                      <Icon size={14} /> {link.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
