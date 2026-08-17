import { useEffect, useState } from 'react'

export function ScrollProgress({ containerId }: { containerId: string }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = document.getElementById(containerId)
    if (!el) return

    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [containerId])

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, boxShadow: '0 0 8px rgb(var(--accent) / 0.6)' }}
      />
    </div>
  )
}
