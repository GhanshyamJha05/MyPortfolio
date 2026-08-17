import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section({
  id,
  children,
  className = '',
  compact = false,
  background,
  snap = true,
}: {
  id: string
  children: ReactNode
  className?: string
  compact?: boolean
  background?: ReactNode
  snap?: boolean
}) {
  return (
    <section
      id={id}
      className={`${snap ? 'snap-section' : ''} w-full px-6 md:px-12 lg:px-20 py-20 md:py-24 flex flex-col justify-center relative ${
        compact ? 'min-h-[60vh] md:min-h-[68vh]' : 'min-h-screen'
      } ${className}`}
    >
      {background}
      <div className="relative">{children}</div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="font-mono text-sm text-accent mb-2">// {eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight">{title}</h2>
    </motion.div>
  )
}
