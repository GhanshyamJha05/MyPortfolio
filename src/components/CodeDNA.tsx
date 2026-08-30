import { useEffect, useRef, useState } from 'react'
import { dnaNodes, type DnaNode } from '../data/codedna'
import { Section, SectionHeading } from './Section'
import { HackathonJourney } from './HackathonJourney'

const W = 340
const H = 520
const AMPLITUDE = 74
const TURNS = 3

export function CodeDNA() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const timeRef = useRef(0)
  const [hovered, setHovered] = useState<DnaNode | null>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.width = `${W}px`
    canvas.style.height = `${H}px`
    ctx.scale(dpr, dpr)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cx = W / 2
    const spacing = H / (dnaNodes.length + 1)

    const nodeX = (i: number, side: 0 | 1, t: number) => {
      const y = spacing * (i + 1)
      const phase = side === 0 ? 0 : Math.PI
      return cx + AMPLITUDE * Math.sin((y / H) * Math.PI * TURNS + t + phase)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H)

      // backbone strands
      for (let side = 0; side < 2; side++) {
        ctx.beginPath()
        for (let y = 0; y <= H; y += 3) {
          const phase = side === 0 ? 0 : Math.PI
          const x = cx + AMPLITUDE * Math.sin((y / H) * Math.PI * TURNS + t + phase)
          if (y === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = side === 0 ? 'rgba(240,168,51,0.18)' : 'rgba(240,168,51,0.10)'
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      dnaNodes.forEach((node, i) => {
        const y = spacing * (i + 1)
        const x0 = nodeX(i, 0, t)
        const x1 = nodeX(i, 1, t)

        // rung
        ctx.beginPath()
        ctx.moveTo(x0, y)
        ctx.lineTo(x1, y)
        ctx.strokeStyle = 'rgba(255,255,255,0.06)'
        ctx.lineWidth = 1
        ctx.stroke()

        // back node (depth illusion via sin sign)
        const frontIsLeft = Math.sin((y / H) * Math.PI * TURNS + t) > 0

        const drawNode = (x: number, hex: string, emphasize: boolean) => {
          const r = emphasize ? 10 : 7
          ctx.beginPath()
          ctx.arc(x, y, r, 0, Math.PI * 2)
          
          // Add glow effect
          ctx.shadowBlur = emphasize ? 20 : 10
          ctx.shadowColor = hex
          
          ctx.fillStyle = hex + (emphasize ? '55' : '30')
          ctx.fill()
          ctx.strokeStyle = hex + (emphasize ? 'cc' : '80')
          ctx.lineWidth = emphasize ? 1.8 : 1.2
          ctx.stroke()
          
          // Reset shadow for performance on other elements
          ctx.shadowBlur = 0
        }

        if (frontIsLeft) {
          drawNode(x1, node.color, false)
          drawNode(x0, node.color, true)
        } else {
          drawNode(x0, node.color, false)
          drawNode(x1, node.color, true)
        }

        // label on the emphasized (front) node
        const labelX = frontIsLeft ? x0 : x1
        ctx.fillStyle = node.color
        ctx.font = '600 8px "JetBrains Mono", monospace'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.label.slice(0, 4), labelX, y)
      })
    }

    const animate = () => {
      timeRef.current += reduceMotion ? 0 : 0.008
      draw(timeRef.current)
      rafRef.current = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const handleMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    setMouse({ x: e.clientX, y: e.clientY })

    const cx = W / 2
    const spacing = H / (dnaNodes.length + 1)
    let found: DnaNode | null = null

    dnaNodes.forEach((node, i) => {
      const y = spacing * (i + 1)
      for (const side of [0, 1] as const) {
        const phase = side === 0 ? 0 : Math.PI
        const x = cx + AMPLITUDE * Math.sin((y / H) * Math.PI * TURNS + timeRef.current + phase)
        if (Math.hypot(mx - x, my - y) < 14) found = node
      }
    })
    setHovered(found)
  }

  return (
    <Section id="codedna">
      <SectionHeading eyebrow="unique_feature" title="Code DNA" />
      <p className="text-muted -mt-8 mb-10 max-w-xl">
        A rotating helix of my real tech stack. Hover a node to see where it's actually been used.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div ref={wrapRef} className="relative flex justify-center">
          <canvas
            ref={canvasRef}
            onMouseMove={handleMove}
            onMouseLeave={() => setHovered(null)}
            className="cursor-crosshair"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgb(var(--accent) / 0.06) 0%, transparent 70%)',
            }}
          />
        </div>

        <HackathonJourney />
      </div>

      {hovered && (
        <div
          className="fixed z-50 pointer-events-none transition-opacity"
          style={{ left: mouse.x + 16, top: mouse.y - 36 }}
        >
          <div
            className="bg-panel border rounded-xl px-3 py-2 shadow-xl max-w-[220px]"
            style={{ borderColor: hovered.color + '55' }}
          >
            <p className="text-xs font-bold font-mono" style={{ color: hovered.color }}>
              {hovered.label}
            </p>
            <p className="text-xs text-muted mt-0.5">{hovered.detail}</p>
          </div>
        </div>
      )}
    </Section>
  )
}
