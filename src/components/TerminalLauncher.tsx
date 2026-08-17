import { motion } from 'framer-motion'
import { Terminal as TerminalIcon } from 'lucide-react'

export function TerminalLauncher({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 font-mono text-xs px-4 py-2.5 rounded-full border border-border bg-panel/90 backdrop-blur-md text-ink hover:border-accent hover:text-accent shadow-lg transition-colors focus-ring"
      aria-label="Open terminal"
    >
      <TerminalIcon size={14} /> gj terminal
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
    </motion.button>
  )
}
