import { useRef, useState, ReactNode } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

export function MagneticButton({ children, className = '', onClick, href, target, rel }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  // Spring physics for smooth magnetic pull
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })

  // Parallax effect for the text inside
  const textX = useTransform(x, (val) => val * 0.4)
  const textY = useTransform(y, (val) => val * 0.4)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    
    // Calculate distance from center of button
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Max pull distance
    const maxPull = 15
    
    // Calculate new position
    const moveX = ((e.clientX - centerX) / (rect.width / 2)) * maxPull
    const moveY = ((e.clientY - centerY) / (rect.height / 2)) * maxPull
    
    x.set(moveX)
    y.set(moveY)
  }

  const handleMouseLeave = () => {
    setHovered(false)
    x.set(0)
    y.set(0)
  }

  const innerContent = (
    <motion.div
      style={{ x: textX, y: textY }}
      className="w-full h-full flex items-center justify-center pointer-events-none"
    >
      {children}
    </motion.div>
  )

  const commonProps = {
    ref: ref as any,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: handleMouseLeave,
    onClick,
    className: `relative flex items-center justify-center ${className}`,
    style: { x, y }
  }

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...commonProps}>
        {innerContent}
      </motion.a>
    )
  }

  return (
    <motion.button {...commonProps}>
      {innerContent}
    </motion.button>
  )
}
