"use client"

import { motion } from "framer-motion"
import BackgroundPaths from "./background-paths"

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 opacity-30">
        <BackgroundPaths />
      </div>
      <div className="mx-auto w-full px-6 py-20 lg:px-8">
        <div className="mx-auto text-center">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient inline-block w-full"> We Develop. We Design.</span>
            <span className="text-gradient inline-block w-full">We Deliver.</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming ideas into exceptional digital experiences through innovative design and development solutions.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#portfolio"
              className="apple-button"
              onClick={(e) => handleScroll(e, 'portfolio')}
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 text-foreground"
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Get in Touch <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}