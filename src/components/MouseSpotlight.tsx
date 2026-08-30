import { useEffect, useRef } from 'react'

export function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        // Center the spotlight on the cursor
        spotlightRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={spotlightRef}
        className="absolute -top-[400px] -left-[400px] w-[800px] h-[800px] rounded-full opacity-[0.05] blur-[100px] transition-transform duration-0 ease-linear"
        style={{
          background: 'radial-gradient(circle, rgb(var(--accent)) 0%, transparent 60%)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
