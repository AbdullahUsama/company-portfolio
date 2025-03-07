"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const features = [
  {
    title: "Custom App Development",
    description: "Scalable desktop and mobile applications (iOS & Android) for medium to large-scale startups & businesses.",
    icon: "💻",
  },
  {
    title: "AI Integration",
    description: "Leveraging Artificial Intelligence to transform digital products with technological advancements in multiple niches.",
    icon: "🤖",
  },
  {
    title: "No-Code Platforms",
    description: "Delivering time-sensitive & budget-effective solutions with all-in-one no-code stacks for small businesses.",
    icon: "⚡",
  },
  {
    title: "Staff Augmentation",
    description: "Collaborate with skilled professionals i-e designers, developers for your app development & long-term maintenance.",
    icon: "👥",
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    const updateSize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
      setIsMobile(window.innerWidth < 768)
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/20" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
          Why Choose Us
        </h2>
        
        {isMobile ? (
          // Mobile view - vertical stack
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-3xl shadow-lg flex flex-col justify-between border-2 border-transparent hover:border-primary/10 transition-all duration-300"
              >
                <div>
                  <div className="text-3xl md:text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-4">
                  {/* <a href="#" className="text-primary hover:underline text-sm md:text-base">
                    Learn more →
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop view - carousel
          <motion.div ref={carousel} className="cursor-grab overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
              animate={controls}
              style={{ x }}
              onDragEnd={handleDragEnd}
              className="flex"
            >
              {features.map((feature, index) => (
               <motion.div
               key={index}
               className="min-w-[220px] sm:min-w-[280px] lg:min-w-[280px] h-[300px] p-5 m-2 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
             >
               <div>
                 <div className="text-4xl mb-4">{feature.icon}</div>
                 <h3 className="text-xl font-semibold mb-2 text-foreground">
                   {feature.title}
                 </h3>
                 <p className="text-muted-foreground">{feature.description}</p>
               </div>
               <div className="mt-4">
                 {/* <a href="#" className="text-primary hover:underline">
                   Learn more →
                 </a> */}
               </div>
             </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}