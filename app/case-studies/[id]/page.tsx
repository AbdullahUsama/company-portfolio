"use client"
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";
import image1 from "../../../public/case-studies/case1.png"
import image1_1 from "../../../public/case-studies/case1.1.png"
import image1_2 from "../../../public/case-studies/case1.2.png"
import image1_3 from "../../../public/case-studies/case1.3.png"
import image1_4 from "../../../public/case-studies/case1.5.png"
import image1_5 from "../../../public/case-studies/case1.6.png"
import image1_6 from "../../../public/case-studies/case1.7.png"

import image2 from "../../../public/case-studies/case2.png"
import image2_1 from "../../../public/case-studies/case2.1.png"
import image2_2 from "../../../public/case-studies/case2.2.png"
import image2_3 from "../../../public/case-studies/case2.3.png"
import image2_4 from "../../../public/case-studies/case2.4.png"
import image2_5 from "../../../public/case-studies/case2.5.png"

import image3 from "../../../public/case-studies/case3.png"
import image3_1 from "../../../public/case-studies/case3.1.png"
import image3_2 from "../../../public/case-studies/case3.2.png"

import image4 from "../../../public/case-studies/case4.png"
import image4_1 from "../../../public/case-studies/case4.1.png"
import image4_2 from "../../../public/case-studies/case4.2.png"
import image4_3 from "../../../public/case-studies/case4.3.png"

import image5 from "../../../public/case-studies/case5.png"
import image5_1 from "../../../public/case-studies/case5.1.png"
import image5_2 from "../../../public/case-studies/case5.2.png"
import image5_3 from "../../../public/case-studies/case5.3.png"
import image5_4 from "../../../public/case-studies/case5.4.png"
import image5_5 from "../../../public/case-studies/case5.5.png"
import image5_6 from "../../../public/case-studies/case5.6.png"
import image5_7 from "../../../public/case-studies/case5.7.png"
import image5_8 from "../../../public/case-studies/case5.8.png"
import image5_9 from "../../../public/case-studies/case5.9.png"

type MediaItem = {
  type: 'image' | 'video';
  url: StaticImageData | string;
}

type Project = {
    id: string;
    title: string;
    description: string;
    // imageUrl: StaticImageData;
    // imageUrls: StaticImageData[];
    mediaItems: MediaItem[]; // Replace imageUrls with mediaItems
    category: string;
    overview: string;
    problem: string;
    approach: string;
    mainFeatures: string[];
    stack: string[];
    timeline: string;
    client: string;
    services: string[];
    tools: string[];
    scopeOfWork: string[];
    year: string;
    targetAudience: string;
    industry: string[];
  }

  const projects: Project[] = [
    {
        id: "supwarden",
        title: "Supwarden: Keychain Management & Real-Time Chat App",
        description: "Clean and modern visual communication for a tech startup",
        // imageUrl: image1,
        // imageUrls: [image1, image1_1,image1_2,image1_3,image1_4,image1_5,image1_6],
        mediaItems: [
          { type: 'image', url: image1 },
          { type: 'video', url: '/case-studies/case1_vid.mp4' },
          { type: 'image', url: image1_1 },
          { type: 'image', url: image1_2 },
          { type: 'image', url: image1_3 },
          { type: 'image', url: image1_4 },
          { type: 'image', url: image1_5 },
          { type: 'image', url: image1_6 },
        ],
        category: "Web Development",
        overview: "Supwarden is a cutting-edge keychain management application designed to enhance the security, accessibility, and collaboration of credential sharing. It enables individuals and teams to securely organize, store, and share keychains while ensuring real-time synchronization and seamless communication. The platform integrates advanced user access controls, real-time chat features, and robust data portability options, making it ideal for both personal and professional environments. Whether you need to manage sensitive credentials within a team or securely access your keychains on the go, Supwarden provides a streamlined and intuitive solution..",
        problem: "Teams often struggle with secure password sharing, relying on unsafe methods like spreadsheets or messaging apps. Traditional password managers lack real-time collaboration and granular access control, leading to inefficiencies. Additionally, data portability is limited, making it hard to migrate or back up credentials. Many solutions also fail to provide a fully optimized mobile experience.",
        approach: "We built Supwarden with a security-first and collaboration-driven approach using Next.js, TypeScript, and Prisma. It supports role-based access control (RBAC) for fine-grained permissions, WebSocket-powered real-time communication, and audit logging for security tracking. A simple export/import system ensures easy data portability, while a fully responsive UI with TailwindCSS guarantees a seamless experience on all devices.",
        mainFeatures: [
          "Secure Keychain Management – Organize personal and shared keychains efficiently.",
          "Granular Access Control – Assign and revoke permissions dynamically.",
          "Real-Time Collaboration – Integrated chat and instant updates via WebSockets.",
          "Data Portability – Easy export/import for backups and migration.",
          "Cross-Device Accessibility – Fully responsive design for desktop and mobile."
        ],
        stack: [
          "Next.js",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "WebSocket",
          "TailwindCSS"
        ],
        timeline: "3 months",
        client: "Tech Startup",
        services: ["Web Development", "UI/UX Design", "Database Architecture"],
      
      tools: [ "Next.js", "TypeScript", "PostgreSQL","WebSocket","TailwindCSS"],
      scopeOfWork: ["Research", "UI-UX Design", "Web Development", "Tech Support "],
      year: "2023-2024",
      targetAudience: "People in a Corporation",
      industry: ["Software", "Tech", "Security"],
  },
  {
    id: "cms",
    title: "Next.js Landing Page with CMS & Google Maps Integration",
    description: "A high-performance, fully responsive landing page for a startup, powered by modern web technologies.",
    mediaItems: [
      { type: 'image', url: image2 },
      { type: 'image', url: image2_1 },
      { type: 'image', url: image2_2 },
      { type: 'image', url: image2_3 },
      // { type: 'image', url: image2_4 },
      { type: 'image', url: image2_5 },
    ],
    category: "Web Development",
    overview: "Developed a fully responsive landing page using Next.js, designed to provide a seamless user experience with modern performance optimizations. The project includes a dynamic newsfeed powered by Sanity Headless CMS, ensuring real-time content updates with Incremental Static Regeneration (ISR). Integrated Google Maps to display location-based data, making the website more interactive and informative. Styled with Tailwind CSS for a clean and scalable design, and hosted on AWS Amplify for reliable deployment and scalability.",
    problem: "Startups often need a fast, scalable, and easily maintainable landing page that supports dynamic content updates without affecting performance. Traditional CMS solutions can be bulky and slow, while manually managing static pages lacks flexibility. Ensuring real-time updates, a responsive UI, and smooth integrations while maintaining high performance can be challenging.",
    approach: "Implemented a modern Jamstack architecture using Next.js for server-side rendering and static generation, combined with Sanity Headless CMS for seamless content management. Integrated on-demand Incremental Static Regeneration (ISR) to optimize performance and caching. Used GraphQL to fetch CMS data efficiently, and incorporated Google Maps for dynamic location rendering. Tailwind CSS ensured a fully responsive UI, while AWS Amplify provided reliable hosting and CI/CD automation.",
    mainFeatures: [
      "Fully Responsive UI – Optimized for mobile and desktop users.",
      "Dynamic Newsfeed – Managed via Sanity CMS with real-time updates.",
      "Google Maps Integration – Displays interactive location-based data.",
      "Incremental Static Regeneration – Ensures fresh content with optimized caching.",
      "Scalable Hosting – Deployed on AWS Amplify for high availability."
    ],
    stack: [
      "Next.js",
      "Sanity CMS",
      "GraphQL",
      "Tailwind CSS",
      "AWS Amplify"
    ],
    timeline: "2 months",
    client: "Startup",
    services: ["Web Development", "UI/UX Design", "CMS Integration"],
    tools: ["Next.js", "Sanity CMS", "GraphQL", "Tailwind CSS", "AWS Amplify"],
    scopeOfWork: ["Research", "UI/UX Design", "Web Development"],
    year: "2023-2024",
    targetAudience: "Startups & Businesses",
    industry: ["Technology", "Digital Services", "SaaS"]
}
,
{
  id: "aws",
  title: "Real-Time IoT Monitoring Dashboard with AWS Integration",
  description: "A scalable and interactive IoT dashboard for real-time sensor data visualization and industrial monitoring.",
  mediaItems: [
    { type: 'image', url: image3 },
    { type: 'image', url: image3_1 },
    { type: 'image', url: image3_2 },
  ],
  category: "Web Development",
  overview: "Developed a real-time IoT monitoring dashboard using Next.js to visualize sensor data from Amazon DynamoDB with interactive graphs. The system tracks motor statuses and provides critical insights for industrial operations. AWS Lambda functions efficiently handle large data downloads, storing records in S3 buckets for secure retrieval. Designed for a startup, this solution ensures high performance, scalability, and robust data management.",
  problem: "Industrial operations require real-time sensor monitoring, but traditional systems often suffer from slow data retrieval, inefficient storage solutions, and limited scalability. Handling large sensor data streams while ensuring real-time insights and cost-effective storage presents a significant challenge.",
  approach: "Built a scalable IoT monitoring solution using Next.js for a responsive UI and real-time data visualization. Amazon DynamoDB was used for fast, low-latency storage of sensor data, while AWS Lambda functions processed and managed large data downloads. Secure data retrieval was ensured through AWS S3 storage. AWS Amplify provided reliable deployment and CI/CD automation, ensuring smooth scalability and maintenance.",
  mainFeatures: [
    "Real-Time Sensor Monitoring – Live updates from DynamoDB.",
    "Interactive Data Visualization – Graphs and charts for insightful analytics.",
    "Efficient Data Processing – AWS Lambda for handling large-scale downloads.",
    "Secure Data Storage – Integration with AWS S3 for backups and retrieval.",
    "Scalable & Cloud-Hosted – Fully deployed using AWS Amplify."
  ],
  stack: [
    "Next.js",
    "Amazon DynamoDB",
    "AWS Lambda",
    "AWS S3",
    "AWS Amplify"
  ],
  timeline: "3 months",
  client: "Tech Startup",
  services: ["Web Development", "API Development", "Cloud Architecture"],
  tools: ["Next.js", "Amazon DynamoDB", "AWS Lambda", "AWS S3", "AWS Amplify"],
  scopeOfWork: ["Research", "Web Development", "Cloud Integration"],
  year: "2023-2024",
  targetAudience: "Industrial IoT & Smart Manufacturing",
  industry: ["Technology", "IoT", "Industrial Automation"]
},

{
  id: "ai",
  title: "AI-Powered Image Generator with Stable Diffusion",
  description: "A Next.js and TypeScript-based AI image generation platform leveraging Stable Diffusion on Vertex AI.",
  mediaItems: [
    { type: 'image', url: image4 },
    { type: 'image', url: image4_1 },
    { type: 'image', url: image4_2 },
    { type: 'image', url: image4_3 },
  ],
  category: "AI Development",
  overview: "Developed an AI-powered image generator using Next.js and TypeScript, integrating Stable Diffusion v1.4 via Vertex AI for seamless image creation. The platform features secure storage of generated images in Google Cloud Storage buckets and includes a history tab for easy access to past results. Robust IAM roles and GCP service account JSON keys ensure secure access control and data integrity.",
  problem: "Generating high-quality AI images requires substantial computational power, efficient model deployment, and secure storage. Many solutions lack a seamless user experience, fail to store and retrieve previous generations efficiently, and require complex infrastructure setups.",
  approach: "Built a scalable and secure AI image generator using Next.js for the frontend and Vertex AI for model deployment. Integrated Google Cloud Storage for managing generated images and enforced IAM-based access control for security. Optimized API interactions for smooth image retrieval and added a history tab for enhanced user experience.",
  mainFeatures: [
    "AI Image Generation – Stable Diffusion v1.4 via Vertex AI.",
    "Cloud Storage – Securely store and retrieve generated images.",
    "History Tracking – View previously generated images.",
    "Secure Access Control – IAM roles and GCP service account integration.",
    "Scalable Backend – Optimized Next.js and TypeScript setup."
  ],
  stack: [
    "Next.js",
    "TypeScript",
    "Stable Diffusion",
    "Vertex AI",
    "Google Cloud Storage",
    "Tailwind CSS"
  ],
  timeline: "3 months",
  client: "Tech Startup",
  services: ["AI Model Integration", "Web Development", "Cloud Architecture"],
  tools: ["Next.js", "Vertex AI", "Google Cloud Storage", "Tailwind CSS"],
  scopeOfWork: ["Research", "AI Model Integration", "Web Development"],
  year: "2023-2024",
  targetAudience: "Artists, Designers, AI Enthusiasts",
  industry: ["Artificial Intelligence", "Creative Technology", "Cloud Computing"]
},
{
  id: "comm",
  title: "E-Commerce Platform for Plants & Gardening Products",
  description: "A modern e-commerce platform for plants and gardening essentials, featuring authentication, multi-language support, and secure payments.",
  mediaItems: [
    { type: "image", url: image5 },
    { type: "image", url: image5_1 },
    { type: "image", url: image5_2 },
    { type: "image", url: image5_3 },
    { type: "image", url: image5_4 },
    { type: "image", url: image5_5 },
    { type: "image", url: image5_6 },
    { type: "image", url: image5_7 },
    { type: "image", url: image5_8 },
    { type: "image", url: image5_9 },
  ],
  category: "E-Commerce Development",
  overview: "Developed a feature-rich e-commerce platform for selling plants and related products. The platform supports role-based authentication via Clerk.com, multi-language support (Urdu/English) with React-i18n, and secure payments through Stripe. Users can browse categorized products, switch between light and dark mode, and manage inventory via an admin panel with full CRUD functionality.",
  problem: "Many plant e-commerce platforms lack seamless user authentication, efficient product management, and multilingual support. Additionally, secure payment integration and a responsive shopping experience are often missing.",
  approach: "Built with a MERN stack (MongoDB, Express, React, Node.js), leveraging Clerk.com for role-based authentication, React-i18n for localization, and Stripe for secure transactions. Implemented product category filtering, dark mode, and an intuitive admin panel for easy product management.",
  mainFeatures: [
    "Role-Based Authentication – Clerk.com for secure access control.",
    "Multi-Language Support – Urdu and English via React-i18n.",
    "Secure Payments – Integrated Stripe for seamless transactions.",
    "Product Category Filtering – Enhanced user shopping experience.",
    "Dark Mode – User-friendly UI customization.",
    "Admin Panel – Full CRUD functionality for product management."
  ],
  stack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Clerk.com",
    "React-i18n",
    "Stripe"
  ],
  timeline: "2 months",
  client: "E-Commerce Startup",
  services: ["Web Development", "Authentication", "Payment Integration"],
  tools: ["React", "MongoDB", "Node.js", "Express", "Stripe", "Clerk.com"],
  scopeOfWork: ["Frontend & Backend Development", "UI/UX Design", "Admin Panel"],
  year: "2023-2024",
  targetAudience: "Plant Enthusiasts, Gardeners, Home Decor Shoppers",
  industry: ["E-Commerce", "Gardening", "Home & Living"]
}


];

export default function CaseStudyPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);
    if (!project) return notFound();
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? project.mediaItems.length - 1 : prev - 1));
    };
    
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === project.mediaItems.length - 1 ? 0 : prev + 1));
    };
    return (
        <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Updated Image Card */}
            <div className="relative rounded-3xl overflow-hidden h-fit group">
            <div className="relative h-[600px]">
            {project.mediaItems[currentIndex].type === 'image' ? (
              <Image
                src={project.mediaItems[currentIndex].url as StaticImageData}
                alt={project.title}
                fill
                className="object-contain transition-opacity duration-150"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <video
              src={project.mediaItems[currentIndex].url as string}
              className="w-full h-full object-contain"
              controls
              playsInline // Add this
              preload="auto" // Add this
              controlsList="nodownload" // Add this
              autoPlay
              muted
              loop
            >
              {/* Add fallback message */}
              Your browser does not support the video tag.
            </video>
            )}
          </div>
  
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-background/80 text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Previous image"
                >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
  
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-background/80 text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Next image"
                >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
  
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm">
  {currentIndex + 1} / {project.mediaItems.length}
</div>
            </div>

      
              {/* Project Info Card */}
              <div className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/10 h-fit">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Tools used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span key={index} className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Scope of work</h3>
                    <p className="text-muted-foreground">{project.scopeOfWork.join(" / ")}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Year</h3>
                    <p className="text-muted-foreground">{project.year}</p>
                  </div>
                  {/* <div>
                    <h3 className="text-lg font-semibold mb-2">Category</h3>
                    <p className="text-muted-foreground">Rock Climbing</p>
                  </div> */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Target Audience</h3>
                    <p className="text-muted-foreground">{project.targetAudience}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Industry</h3>
                    <p className="text-muted-foreground">{project.industry.join(", ")}</p>
                  </div>
                </div>
              </div>
              </div>
      
               {/* Separator Line */}
        <div className="w-full flex items-center justify-center mb-16 mt-16">
          <div className="h-px w-96 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Linear Content Section */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
          </div>

          {/* Problem Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Problem</h2>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          {/* Approach Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
          </div>

          {/* Features Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Main Feature Set</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              {project.mainFeatures.map((feature, index) => (
                <li key={index} className="leading-relaxed">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Stack Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Development Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}