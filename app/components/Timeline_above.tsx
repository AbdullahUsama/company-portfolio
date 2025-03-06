"use client"

import { motion } from "framer-motion"

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 15 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            {/* <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px rgb(156 163 175)", // tailwind gray-400
              }}
            >
              4AM - We Develop, Design, Deliver, 
            </span> */}
            <span className="text-4xl sm:text-4xl md:text-5xl font-bold px-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality - Make Your Ideas Reality
            </span>

          </div>
        ))}
      </motion.div>
    </div>
  )
}
