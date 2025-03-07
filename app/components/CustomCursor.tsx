"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(true)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  // Check for desktop device
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !('ontouchstart' in window))
    }
    
    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)
    
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  // Mouse movement effect
  useEffect(() => {
    if (!isDesktop) return // Don't add listeners if not desktop

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [mouseX, mouseY, isDesktop])

  // Don't render anything if not desktop
  if (!isDesktop) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x: smoothX, y: smoothY }}
    >
      <div className="relative -translate-x-6 -translate-y-6 w-12 h-12 border-2 border-blue-400 rounded-full opacity-80 shadow-[0_0_15px_rgba(96,165,250,0.6)]" />
    </motion.div>
  )
}