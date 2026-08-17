import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Check, Copy } from 'lucide-react'
import { profile } from '../data/profile'
import { Section } from './Section'

const SOCIALS = [
  { href: profile.social.github, icon: Github, label: 'GitHub' },
  { href: profile.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: profile.social.twitter, icon: Twitter, label: 'Twitter / X' },
]

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <Section id="contact" className="justify-between">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-accent mb-2 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            // say_hello
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight">Get in touch</h2>
          <p className="text-muted text-lg mt-4 max-w-xl">
            Open to roles, collabs, or a good conversation.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={copyEmail}
              className="flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors focus-ring"
            >
              {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
              {copied ? 'Copied!' : profile.email}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-full bg-accent text-bg font-semibold focus-ring"
            >
              <Mail size={16} /> Send Email
            </motion.a>
          </div>

          {profile.quote && (
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12 max-w-2xl border-l-2 border-accent pl-5"
            >
              <p className="text-xl md:text-2xl text-ink/90 italic leading-snug">&ldquo;{profile.quote}&rdquo;</p>
            </motion.blockquote>
          )}
        </motion.div>
      </div>

      <footer className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          Designed &amp; developed by {profile.name} · © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-muted hover:text-accent transition-colors focus-ring rounded"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </footer>
    </Section>
  )
}
