import { useEffect, useState } from 'react'

export function ScrollProgress({ containerId }: { containerId?: string }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      let max = 0
      let scrollY = 0
      
      if (containerId) {
        const el = document.getElementById(containerId)
        if (el) {
          max = el.scrollHeight - el.clientHeight
          scrollY = el.scrollTop
        }
      } else {
        max = document.documentElement.scrollHeight - window.innerHeight
        scrollY = window.scrollY
      }
      
      setProgress(max > 0 ? (scrollY / max) * 100 : 0)
    }

    const target = containerId ? document.getElementById(containerId) : window
    if (target) {
      target.addEventListener('scroll', onScroll, { passive: true })
      onScroll() // Init
    }
    
    return () => {
      if (target) target.removeEventListener('scroll', onScroll)
    }
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
