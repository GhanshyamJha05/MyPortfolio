export function TechMarquee() {
  const techs = [
    'Go (Golang)', 'Python', 'TypeScript', 'PostgreSQL', 
    'Docker', 'FastAPI', 'Next.js', 'React',
    'OpenAI', 'LangGraph', 'REST APIs', 'MongoDB'
  ]

  // Double the array for seamless infinite scrolling
  const marqueeItems = [...techs, ...techs]

  return (
    <div className="relative w-full py-12 md:py-20 overflow-hidden bg-bg border-y border-border/50 flex flex-col justify-center snap-section">
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg z-10 pointer-events-none w-full" />
      
      <div className="flex w-max animate-marquee">
        {marqueeItems.map((tech, i) => (
          <div 
            key={`${tech}-${i}`} 
            className="flex items-center justify-center px-8 md:px-12"
          >
            <span className="font-sans font-extrabold text-5xl md:text-7xl tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px rgb(var(--accent) / 0.4)' }}>
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
