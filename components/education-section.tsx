"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import {
  GraduationCap,
  Calendar,
  Building,
  MapPin,
  ChevronDown,
  BookOpen,
  Award,
  Star,
} from "lucide-react";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  image: string;
  color: string;
  courses?: string[];
  achievements?: string[];
}

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const educationData: EducationItem[] = [
    {
      id: "bca",
      degree: "Bachelor of Computer Application",
      institution: "Orchid International College",
      location: "BijayaChowk Gaushala, Kathmandu",
      period: "2020 - Present",
      description:
        "Currently pursuing a Bachelor's degree in Computer Application, focusing on developing comprehensive knowledge in various aspects of computer science and application development.",
      image: "/orchid.png",
      color: "from-primary/40 to-primary/10",
      courses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Development",
        "Object-Oriented Programming",
        "Software Engineering",
        "Mobile Application Development",
      ],
    },
    {
      id: "plus2",
      degree: "+2 in Science",
      institution: "Advance Academy Secondary School",
      location: "Kathmandu, Nepal",
      period: "2018 - 2020",
      description:
        "Completed higher secondary education with a specialization in Science, establishing a strong foundation in physics, chemistry, and mathematics.",
      image: "/advance.jpg",
      color: "from-secondary/40 to-secondary/10",
      courses: ["Physics", "Mathematics", "Chemistry", "English"],
      achievements: [
        "Graduated with distinction (75%)",
        "Active participant in academic competitions",
      ],
    },
    {
      id: "school",
      degree: "Secondary Education",
      institution: "Gyan Jyoti Secondary English Boarding School",
      location: "Hariwon-9 'Nayaroad', Sarlahi, Nepal",
      period: "2016 - 2018",
      description:
        "Completed secondary education with a strong academic foundation in science and mathematics while actively engaging in extracurricular activities.",
      image: "/gyanjyoti.jpg",
      color: "from-primary/40 to-secondary/10",
      achievements: [
        "Graduated with honors",
        "Participated in national science fair",
        "Captain of school mathematics team",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.4,
        },
        opacity: {
          duration: 0.3,
          delay: 0.1,
        },
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
      },
    }),
  };

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,hsl(var(--secondary)/0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOWE4ZDQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <div className="container max-w-5xl px-4 mx-auto">
        <SectionHeading title="Education" subtitle="Academic Journey" />

        {/* Timeline container */}
        <div className="relative mt-16">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden md:block"></div>

          {/* Mobile center line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 md:hidden"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`mb-16 md:mb-24 relative ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                } md:w-1/2 pl-16 md:pl-0`}
              >
                {/* Timeline dot - Desktop */}
                <motion.div
                  className={`absolute top-0 ${
                    index % 2 === 0
                      ? "md:right-0 md:-mr-3"
                      : "md:left-0 md:-ml-3"
                  } w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary hidden md:flex items-center justify-center z-10`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </motion.div>

                {/* Timeline dot - Mobile */}
                <motion.div
                  className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex md:hidden items-center justify-center z-10 ml-5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  className={`bg-gradient-to-br ${edu.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-border/10`}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-start"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-muted-foreground mb-3 text-sm ${
                      index % 2 === 0 ? "md:text-left" : "md:text-left"
                    }`}
                  >
                    <Building className="h-4 w-4 shrink-0" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-muted-foreground mb-4 text-sm ${
                      index % 2 === 0 ? "md:text-left" : "md:text-left"
                    }`}
                  >
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Accordion button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleAccordion(edu.id)}
                    className={`w-full mt-2 flex items-center justify-center gap-2 ${
                      index % 2 === 0
                        ? "md:justify-center"
                        : "md:justify-center"
                    }`}
                  >
                    {expandedId === edu.id ? "Show Less" : "Show More"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        expandedId === edu.id ? "rotate-180" : ""
                      }`}
                    />
                  </Button>

                  {/* Accordion content */}
                  <AnimatePresence>
                    {expandedId === edu.id && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={accordionVariants}
                        className="mt-4 pt-4 border-t border-border/30"
                      >
                        <div
                          className={`space-y-6 ${
                            index % 2 === 0 ? "md:text-left" : "md:text-left"
                          }`}
                        >
                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {edu.description}
                          </p>

                          {/* Image */}
                          <div className="relative h-48 rounded-lg overflow-hidden">
                            <Image
                              src={edu.image || "/placeholder.svg"}
                              alt={edu.institution}
                              height={0}
                              width={0}
                              className="h-48 w-full object-contain transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          </div>

                          {/* Courses */}
                          {edu.courses && (
                            <div>
                              <div
                                className={`flex items-center gap-2 mb-3 ${
                                  index % 2 === 0
                                    ? "md:justify-start"
                                    : "md:justify-start"
                                }`}
                              >
                                <BookOpen className="h-4 w-4 text-primary" />
                                <h4 className="font-semibold">Key Courses</h4>
                              </div>
                              <div className="grid grid-cols-1 gap-2">
                                {edu.courses.map((course, i) => (
                                  <motion.div
                                    key={course}
                                    custom={i}
                                    variants={listItemVariants}
                                    className={`flex items-center gap-2 ${
                                      index % 2 === 0
                                        ? "md:justify-start"
                                        : "md:justify-start"
                                    }`}
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                    <span className="text-sm">{course}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Achievements */}
                          {edu.achievements && (
                            <div>
                              <div
                                className={`flex items-center gap-2 mb-3 ${
                                  index % 2 === 0
                                    ? "md:justify-start"
                                    : "md:justify-start"
                                }`}
                              >
                                <Award className="h-4 w-4 text-primary" />
                                <h4 className="font-semibold">Achievements</h4>
                              </div>
                              <div className="grid grid-cols-1 gap-2">
                                {edu.achievements.map((achievement, i) => (
                                  <motion.div
                                    key={achievement}
                                    custom={i}
                                    variants={listItemVariants}
                                    className={`flex items-center gap-2 ${
                                      index % 2 === 0
                                        ? "md:justify-start"
                                        : "md:justify-start"
                                    }`}
                                  >
                                    <Star className="h-4 w-4 text-primary shrink-0" />
                                    <span className="text-sm">
                                      {achievement}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
