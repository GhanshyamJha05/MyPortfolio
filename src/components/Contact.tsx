import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Check, Copy, Send, Loader2 } from 'lucide-react'
import { profile } from '../data/profile'
import { Section } from './Section'

const SOCIALS = [
  { href: profile.social.github, icon: Github, label: 'GitHub' },
  { href: profile.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: profile.social.twitter, icon: Twitter, label: 'Twitter / X' },
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulate network request. Replace with Formspree / EmailJS logic here.
    setTimeout(() => {
      setFormStatus('success')
      setTimeout(() => setFormStatus('idle'), 5000)
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  return (
    <Section id="contact" className="justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        {/* Left Side: Copy & Info */}
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
          <h2 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tight mb-4">Let's build<br />something together.</h2>
          <p className="text-muted text-lg max-w-md leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is open!
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={copyEmail}
              className="flex items-center gap-2 font-mono text-sm px-6 py-3.5 rounded-full border border-border bg-panel text-ink hover:border-accent hover:text-accent shadow-sm transition-colors focus-ring"
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
              {copied ? 'Copied to clipboard!' : profile.email}
            </motion.button>
          </div>

          {profile.quote && (
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12 max-w-md border-l-2 border-accent pl-5"
            >
              <p className="text-xl text-ink/90 italic leading-snug">&ldquo;{profile.quote}&rdquo;</p>
            </motion.blockquote>
          )}
        </motion.div>

        {/* Right Side: Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-panel/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-border shadow-xl relative overflow-hidden"
          >
            {formStatus === 'success' && (
              <div className="absolute inset-0 z-10 bg-panel/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-4">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-ink mb-2">Message Sent!</h3>
                <p className="text-muted">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            )}
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-mono text-xs text-muted uppercase tracking-wider ml-1">Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                placeholder="John Doe"
                className="w-full bg-bg/50 border border-border rounded-xl px-4 py-3 text-ink placeholder:text-muted/50 focus:border-accent focus:bg-panel transition-colors focus-ring"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-mono text-xs text-muted uppercase tracking-wider ml-1">Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                placeholder="john@example.com"
                className="w-full bg-bg/50 border border-border rounded-xl px-4 py-3 text-ink placeholder:text-muted/50 focus:border-accent focus:bg-panel transition-colors focus-ring"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-xs text-muted uppercase tracking-wider ml-1">Message</label>
              <textarea 
                id="message" 
                required 
                rows={4}
                placeholder="How can I help you?"
                className="w-full bg-bg/50 border border-border rounded-xl px-4 py-3 text-ink placeholder:text-muted/50 focus:border-accent focus:bg-panel transition-colors focus-ring resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="mt-2 w-full flex items-center justify-center gap-2 font-mono text-sm px-6 py-4 rounded-xl bg-accent text-bg font-bold hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] focus-ring"
            >
              {formStatus === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
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
              className="text-muted hover:text-accent p-1 transition-colors focus-ring rounded-lg"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </footer>
    </Section>
  )
}

