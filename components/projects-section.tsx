"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SectionHeading from "@/components/section-heading";
import { ExternalLink, Github, CheckCircle } from "lucide-react";

const projects = [
  {
    id: "real-estate",
    title: "Real Estate Web App",
    description:
      "A comprehensive real estate platform that allows users to browse, search, and filter properties.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    detailedDescription:
      "A full-featured real estate application with user authentication, property listings, advanced search functionality, and admin dashboard for property management.",
    features: [
      "User authentication and profiles",
      "Property listing and management",
      "Advanced search with filters",
      "Favorites and saved searches",
      "Admin dashboard",
    ],
    demoLink: "#",
    githubLink: "https://github.com/jyotiK58/real-estae-mern",
  },
  {
    id: "bakery",
    title: "Bakery Management System",
    description:
      "A comprehensive system for managing bakery operations including inventory management, sales tracking, and order processing.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    detailedDescription:
      "A complete bakery management solution that helps bakery owners manage their inventory, track sales, process orders, and generate reports.",
    features: [
      "Inventory management",
      "Sales tracking and reporting",
      "Order processing",
      "Customer management",
      "Employee scheduling",
    ],
    demoLink: "#",
    githubLink:
      "https://github.com/jyotiK58/Collge_Project/tree/main/sqlRename",
  },
  {
    id: "academic-edu",
    title: "Academic Education Platform",
    description:
      "An educational platform providing academic resources, online learning modules, and student engagement tools.",
    image: "/academic.png",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    detailedDescription:
      "A comprehensive education portal built with Laravel and Bootstrap, offering online courses, student profiles, interactive learning materials, and assessment tools.",
    features: [
      "Online learning modules",
      "Student accounts and profiles",
      "Course enrollment and progress tracking",
      "Live classes and discussion forums",
      "Admin dashboard for content management",
    ],
    demoLink: "https://www.academic.edu.np/",
    githubLink: "https://github.com/jyotiK58/Academic_Ambition",
  },
  {
    id: "mandala-yoga",
    title: "Mandala Yoga Retreat",
    description:
      "A website for a peaceful yoga retreat offering various wellness programs and retreats.",
    image: "/mandala.png",
    technologies: ["Wix"],
    detailedDescription:
      "A yoga retreat website developed using Wix, featuring program details, an easy-to-use booking system, instructor profiles, and wellness blogs.",
    features: [
      "Retreat program listings",
      "Online booking and reservations",
      "Yoga instructor profiles",
      "User testimonials and reviews",
      "Blog and wellness tips",
    ],
    demoLink: "https://www.mandalayogaretreat.com/",
    githubLink: "#",
  },
  {
    id: "kids-learning-app",
    title: "Kids Learning App",
    description:
      "An interactive mobile app designed for kids to learn through engaging activities and games.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Java", "XML", "Android SDK", "PHP"],
    detailedDescription:
      "A fun and educational mobile app built with Java and XML for Android, offering interactive learning games, quizzes, and progress tracking.",
    features: [
      "Colorful UI and engaging animations",
      "Educational games and quizzes",
      "Audio-visual learning content",
      "Progress tracking and rewards",
      "Parental controls and analytics",
    ],
    demoLink: "#",
    githubLink: "https://github.com/jyotiK58/Project2KidsApp",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-background to-background/50"
    >
      <div className="container px-4 sm:px-6 mx-auto">
        <SectionHeading title="Projects" subtitle="My Recent Work" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs sm:text-sm"
                  >
                    View Details
                  </Button>
                  <div className="flex gap-2 ml-auto">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      asChild
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      asChild
                    >
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-0 sm:p-6">
            <DialogHeader className="p-4 sm:p-0">
              <DialogTitle className="text-xl sm:text-2xl">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            <div className="px-4 sm:px-0">
              <div className="relative aspect-video mt-4 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-6">
                {selectedProject.detailedDescription}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Button asChild className="w-full sm:w-auto">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
