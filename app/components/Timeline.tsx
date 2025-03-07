"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: 2023,
    title: "4AM Officially Launched",
    description: "Started offering web development and digital solutions to businesses worldwide.",
    details:
      "With a focus on building modern, high-performance websites, 4AM quickly gained traction, delivering customized solutions for startups and small businesses.",
  },
  {
    year: 2023,
    title: "First E-Commerce Platform",
    description: "Developed a fully functional online store for a niche market.",
    details:
      "Designed and built an e-commerce website for a plant-based products brand, implementing features like role-based authentication, Stripe payments, and multi-language support.",
  },
  {
    year: 2024,
    title: "Expanding into AI & Automation",
    description: "Integrated AI-powered features into client projects.",
    details:
      "Worked on AI-driven solutions, including an image generation platform using Vertex AI and an AI-powered stock analysis module, enhancing automation in various industries.",
  },
  {
    year: 2024,
    title: "Enterprise-Level Web Development",
    description: "Secured larger projects with complex backend architectures.",
    details:
      "Built a real-time IoT monitoring dashboard for industrial use, leveraging AWS services like Lambda, DynamoDB, and S3 to handle high-volume data efficiently.",
  },
];


const FlowerIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Add resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

   return (
    <section ref={containerRef} className="py-12 md:py-20 bg-background overflow-hidden" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Our Journey
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
            The evolution of Flowers & Saints through the years
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <motion.div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/20"
            style={{ scaleY: scaleX }}
          />

          {/* Flower icon */}
          <motion.div
            className={`sticky top-1/2 left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-10 text-primary ${
              isMobile ? 'hidden' : ''
            }`}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <FlowerIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
          </motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
  isMobile
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
  isMobile: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-6 md:mb-8 flex justify-between items-start w-full ${
        !isMobile && index % 2 === 0 ? "flex-row-reverse" : "flex-row"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {!isMobile && <div className="w-5/12" />}
      <div className="z-20 mr-4 md:mr-0">
        <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className={`${isMobile ? 'flex-1' : 'w-5/12'} cursor-pointer`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
      >
        <div className="p-3 md:p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="text-sm md:text-base font-bold text-primary">{event.year}</span>
          <h3 className="text-base md:text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-sm md:text-base text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-xs md:text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}