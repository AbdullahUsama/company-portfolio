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
import image3 from "../../../public/case-studies/case3.png"
import image4 from "../../../public/case-studies/case4.png"


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
      scopeOfWork: ["Research", "UI-UX Design", "Mobile App"],
      year: "2023-2024",
      targetAudience: "Intermediate Climbers",
      industry: ["Sports", "Fitness", "Rock Climbing"],
  },
  {
    id: "cms",
    title: "Supwarden: Keychain Management & Real-Time Chat App",
    description: "Clean and modern visual communication for a tech startup",
    // imageUrl: image1,
    // imageUrls: [image1, image1_1,image1_2,image1_3,image1_4,image1_5,image1_6],
    mediaItems: [
      { type: 'image', url: image2},
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
  scopeOfWork: ["Research", "UI-UX Design", "Mobile App"],
  year: "2023-2024",
  targetAudience: "Intermediate Climbers",
  industry: ["Sports", "Fitness", "Rock Climbing"],
},
{
  id: "aws",
  title: "Supwarden: Keychain Management & Real-Time Chat App",
  description: "Clean and modern visual communication for a tech startup",
  // imageUrl: image1,
  // imageUrls: [image1, image1_1,image1_2,image1_3,image1_4,image1_5,image1_6],
  mediaItems: [
    { type: 'image', url: image3},
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
scopeOfWork: ["Research", "UI-UX Design", "Mobile App"],
year: "2023-2024",
targetAudience: "Intermediate Climbers",
industry: ["Sports", "Fitness", "Rock Climbing"],
},
{
  id: "ai",
  title: "Supwarden: Keychain Management & Real-Time Chat App",
  description: "Clean and modern visual communication for a tech startup",
  // imageUrl: image1,
  // imageUrls: [image1, image1_1,image1_2,image1_3,image1_4,image1_5,image1_6],
  mediaItems: [
    { type: 'image', url: image3},
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
scopeOfWork: ["Research", "UI-UX Design", "Mobile App"],
year: "2023-2024",
targetAudience: "Intermediate Climbers",
industry: ["Sports", "Fitness", "Rock Climbing"],
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
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Category</h3>
                    <p className="text-muted-foreground">Rock Climbing</p>
                  </div>
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