"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import image1 from "../../public/case-studies/case1.png"
import image2 from "../../public/case-studies/case2.png"
import image3 from "../../public/case-studies/case3.png"
import image4 from "../../public/case-studies/case4.png"
import image1_1 from "../../public/case-studies/case1.1.png"

const projects = [
  {
    id: "supwarden", // Use a string to match the dynamic route
    title: "Supwarden: Keychain Management & Real-Time Chat App",
    description: "Clean and modern visual communication for a tech startup",
    imageUrl: image1,
    category: "Web Development",
  },
  {
    id: "cms",
    title: "Fully responsive Landing Page with Headless CMS integration (Sanity)",
    description: "Developed a fully responsive landing page for a startup using Next.js with modern features for performance and scalability. Integrated Sanity Headless CMS to power a dynamic newsfeed page, enabling seamless content updates with on-demand ISR (Incremental Static Regeneration) for optimized caching and revalidation. The project also includes Google Maps integration to display location information. Styled with Tailwind CSS for a clean and responsive design, and hosted on AWS Amplify for reliable deployment and scalability.",
    imageUrl: image2,
    category: "Web Design",
  },
  {
    id: "aws",
    title: "IoT Real-Time Industry Dashboard with AWS Integration",
    description: "Developed a real-time IoT monitoring dashboard using Next.js to display sensor data from DynamoDB with interactive graphs. Implemented AWS Lambda functions for efficient handling of large data downloads, storing data in S3 buckets for secure retrieval. The dashboard also tracks motor statuses, providing critical insights for industrial operations. Designed for a startup, this scalable solution ensures high performance and robust data management.",
    imageUrl: image3,
    category: "Mobile App",
  },
  {
    id: "ai",
    title: "AI Image Generator App (Vertex Ai Model Integration)",
    description: "This AI-powered image generator app is built with Next.js and TypeScript, featuring a secure and scalable backend. It uses APIs to interact with the Stable Diffusion v1.4 model, deployed on Vertex AI for seamless image generation. Images are securely stored in Google Cloud Storage buckets and retrieved for display, with a history tab to view previously generated images. Security is ensured with GCP service account JSON keys and carefully defined IAM roles for access control.",
    imageUrl: image4,
    category: "Mobile App",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-background" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl" >Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our minimalist designs and creative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={typeof project.imageUrl === "string" ? project.imageUrl : project.imageUrl.src}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  
                  {/* 🔥 Updated: Link to Dynamic Case Study Page */}
                  <Link href={`/case-studies/${project.id}`} className="text-primary hover:underline inline-flex items-center">
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
