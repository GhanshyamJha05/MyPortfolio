import { motion } from 'framer-motion'
import { Terminal as TerminalIcon } from 'lucide-react'
import { MagneticButton } from './MagneticButton'

export function TerminalLauncher({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <MagneticButton
        onClick={onOpen}
        className="flex items-center gap-2.5 font-mono text-xs px-4 py-2.5 rounded-full border border-border bg-panel/90 backdrop-blur-md text-ink hover:border-accent hover:text-accent shadow-lg transition-colors focus-ring"
      >
        <div className="flex items-center gap-1.5" aria-label="Open terminal (Cmd+K)">
          <TerminalIcon size={14} /> 
          <span>gj terminal</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded bg-bg text-muted border border-border/50 text-[10px]">
          <kbd>⌘</kbd><kbd>K</kbd>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse ml-0.5" />
      </MagneticButton>
    </motion.div>
  )
}
