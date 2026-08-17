import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'

type Line = { type: 'input' | 'output'; text: string }

const COMMANDS = ['help', 'about', 'skills', 'projects', 'github', 'linkedin', 'resume', 'contact', 'whoami', 'clear']

function runCommand(cmd: string): string[] {
  const c = cmd.trim().toLowerCase()
  switch (c) {
    case 'help':
      return [
        'Available commands:',
        ...COMMANDS.map((x) => `  ${x}`),
      ]
    case 'about':
      return [profile.pitch]
    case 'skills':
      return skills.map((g) => `${g.category}: ${g.skills.map((s) => s.name).join(', ')}`)
    case 'projects':
      return projects.filter((p) => p.featured).map((p) => `${p.title} — ${p.status}`)
    case 'github':
      return [profile.social.github]
    case 'linkedin':
      return [profile.social.linkedin]
    case 'resume':
      return [`Opening resume at ${profile.resumeUrl} ...`]
    case 'contact':
      return [profile.email]
    case 'whoami':
      return [`${profile.name} — ${profile.title}`]
    case 'clear':
      return ['__CLEAR__']
    case '':
      return []
    default:
      return [`command not found: ${c}`, `type 'help' to see available commands`]
  }
}

export function Terminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: `Welcome to GJ_TERM v1.0 — type 'help' to get started.` },
  ])
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = value
    const output = runCommand(cmd)

    if (output[0] === '__CLEAR__') {
      setLines([])
      setValue('')
      return
    }

    setLines((prev) => [
      ...prev,
      { type: 'input', text: cmd },
      ...output.map((o) => ({ type: 'output' as const, text: o })),
    ])

    if (cmd.trim().toLowerCase() === 'resume') {
      window.open(profile.resumeUrl, '_blank')
    }

    setValue('')
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-[#0d0d10] border border-border rounded-xl overflow-hidden shadow-2xl font-mono text-sm"
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#151518] border-b border-border">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-muted text-xs">gj_term — zsh</span>
              </div>
              <button onClick={onClose} className="text-muted hover:text-ink focus-ring rounded" aria-label="Close terminal">
                <X size={16} />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-1.5" onClick={() => inputRef.current?.focus()}>
              {lines.map((line, i) => (
                <div key={i}>
                  {line.type === 'input' ? (
                    <p className="text-ink">
                      <span className="text-accent">guest@ghanshyam</span>
                      <span className="text-muted">:~$</span> {line.text}
                    </p>
                  ) : (
                    <p className="text-muted whitespace-pre-wrap">{line.text}</p>
                  )}
                </div>
              ))}
              <form onSubmit={submit} className="flex items-center gap-1.5">
                <span className="text-accent">guest@ghanshyam</span>
                <span className="text-muted">:~$</span>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-ink"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal command input"
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
