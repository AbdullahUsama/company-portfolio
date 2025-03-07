"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  const cursorX = useSpring(0, { damping: 25, stiffness: 150 })
  const cursorY = useSpring(0, { damping: 25, stiffness: 150 })

  // Add check for desktop device
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !('ontouchstart' in window))
    }
    
    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)
    
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) return // Don't add listeners if not desktop

    const mouseMoveHandler = (event: MouseEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    const mouseOverHandler = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        (event.target.tagName.toLowerCase() === "a" ||
          event.target.tagName.toLowerCase() === "button" ||
          event.target.closest("a") ||
          event.target.closest("button"))
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    document.addEventListener("mousemove", mouseMoveHandler)
    document.addEventListener("mouseover", mouseOverHandler)

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler)
      document.removeEventListener("mouseover", mouseOverHandler)
    }
  }, [cursorX, cursorY, isDesktop])

  // Don't render anything if not desktop
  if (!isDesktop) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none mix-blend-difference z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-white dark:bg-white"
          animate={{
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{ type: "spring", damping: 15, stiffness: 150 }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none mix-blend-difference z-50"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-white" />
      </motion.div>
    </>
  )
}