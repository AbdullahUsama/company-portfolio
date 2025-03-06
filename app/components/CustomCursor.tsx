"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x: smoothX, y: smoothY }}
    >
      <div className="relative -translate-x-6 -translate-y-6 w-12 h-12 border-2 border-blue-400 rounded-full opacity-80 shadow-[0_0_15px_rgba(96,165,250,0.6)]" />
    </motion.div>
  )
}
