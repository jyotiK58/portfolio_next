"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/section-heading";
import { Server, Database, Layers, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";

// Define types for the skill data structure
type SkillLevel = "Advanced" | "Intermediate" | "Beginner";
type SkillBadge = "Expert" | "Proficient" | "Learning";

interface Skill {
  name: string;
  level: SkillLevel;
  badge: SkillBadge;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  color: string;
  skills: Skill[];
  featuredTools: string[];
}

interface SkillsData {
  [key: string]: SkillCategory;
}

const skillsData: SkillsData = {
  frontend: {
    title: "Frontend",
    icon: Globe,
    description:
      "Creating responsive, interactive user interfaces with modern frameworks and libraries",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "HTML5/CSS3", level: "Advanced", badge: "Expert" },
      { name: "JavaScript/ES6+", level: "Advanced", badge: "Expert" },
      { name: "React.js", level: "Advanced", badge: "Expert" },
      { name: "Tailwind CSS", level: "Advanced", badge: "Expert" },
      { name: "TypeScript", level: "Intermediate", badge: "Proficient" },
      { name: "Redux", level: "Intermediate", badge: "Proficient" },
      { name: "Responsive Design", level: "Advanced", badge: "Expert" },
      { name: "Bootstrap", level: "Advanced", badge: "Expert" },
    ],
    featuredTools: ["VS Code", "Chrome DevTools", "Figma"],
  },
  backend: {
    title: "Backend",
    icon: Server,
    description:
      "Building robust server-side applications with scalable architecture and efficient data handling",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Node.js", level: "Advanced", badge: "Proficient" },
      { name: "Express.js", level: "Advanced", badge: "Proficient" },
      { name: "PHP", level: "Intermediate", badge: "Proficient" },
      { name: "Laravel", level: "Intermediate", badge: "Proficient" },
      { name: "RESTful APIs", level: "Advanced", badge: "Expert" },
    ],
    featuredTools: ["Postman", "Docker", "JWT"],
  },
  database: {
    title: "Database",
    icon: Database,
    description:
      "Designing and implementing database structures for efficient data storage and retrieval",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "MongoDB", level: "Advanced", badge: "Proficient" },
      { name: "MySQL", level: "Advanced", badge: "Proficient" },
      { name: "PostgreSQL", level: "Intermediate", badge: "Proficient" },
      { name: "Database Design", level: "Advanced", badge: "Expert" },
      { name: "Data Modeling", level: "Intermediate", badge: "Proficient" },
    ],
    featuredTools: ["MongoDB Atlas", "MySQL Workbench", "PostgreSQL"],
  },
  tools: {
    title: "Tools & Methods",
    icon: Layers,
    description:
      "Utilizing modern development workflow tools and methodologies",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Git & GitHub", level: "Advanced", badge: "Expert" },
      { name: "Agile/Scrum", level: "Advanced", badge: "Proficient" },
      { name: "Responsive Design", level: "Advanced", badge: "Expert" },
      { name: "Testing", level: "Intermediate", badge: "Proficient" },

      { name: "SEO", level: "Intermediate", badge: "Proficient" },
    ],
    featuredTools: ["GitHub", "Vercel", "Netlify", "Jira"],
  },
};

interface BadgeProps {
  level: SkillBadge;
}

const BadgeComponent: React.FC<BadgeProps> = ({ level }) => {
  const colorMap: Record<SkillBadge, string> = {
    Expert: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
    Proficient: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
    Learning: "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20",
  };

  return (
    <Badge
      variant="outline"
      className={`${colorMap[level]} border-none font-normal`}
    >
      {level}
    </Badge>
  );
};

interface SkillCategoryProps {
  category: string;
  isActive: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  category,
  isActive,
}) => {
  const { title, icon: Icon, color, description } = skillsData[category];
  const skills = skillsData[category].skills;
  const featuredTools = skillsData[category].featuredTools;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      <motion.div variants={itemVariants} className="lg:col-span-1">
        <div className="sticky top-24 space-y-4">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>

          <div className="pt-4">
            <h4 className="text-sm uppercase text-muted-foreground font-medium mb-2">
              Tools I Use
            </h4>
            <div className="flex flex-wrap gap-2">
              {featuredTools.map((tool: string) => (
                <Badge key={tool} variant="secondary" className="text-xs">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="lg:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill: Skill, index: number) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{skill.name}</h4>
                <BadgeComponent level={skill.badge} />
              </div>
              <div className="w-full bg-background/70 rounded-full h-2 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${color}`}
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      skill.level === "Advanced"
                        ? "90%"
                        : skill.level === "Intermediate"
                        ? "70%"
                        : "50%",
                  }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const iconMap: Record<string, React.ReactNode> = {
    frontend: <Globe className="h-4 w-4 mr-2" />,
    backend: <Server className="h-4 w-4 mr-2" />,
    database: <Database className="h-4 w-4 mr-2" />,
    tools: <Layers className="h-4 w-4 mr-2" />,
  };

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-background/50"
    >
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="My Expertise & Technologies"
        />

        <div className="mt-12">
          <Tabs
            defaultValue="frontend"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 bg-background border border-border/50">
                <TabsTrigger
                  value="frontend"
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-pink-500/10 data-[state=active]:to-rose-500/10 data-[state=active]:text-foreground flex items-center justify-center"
                >
                  {iconMap.frontend}
                  Frontend
                </TabsTrigger>
                <TabsTrigger
                  value="backend"
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500/10 data-[state=active]:to-indigo-500/10 data-[state=active]:text-foreground flex items-center justify-center"
                >
                  {iconMap.backend}
                  Backend
                </TabsTrigger>
                <TabsTrigger
                  value="database"
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500/10 data-[state=active]:to-cyan-500/10 data-[state=active]:text-foreground flex items-center justify-center"
                >
                  {iconMap.database}
                  Database
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500/10 data-[state=active]:to-orange-500/10 data-[state=active]:text-foreground flex items-center justify-center"
                >
                  {iconMap.tools}
                  Tools
                </TabsTrigger>
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              <TabsContent value="frontend" className="mt-0">
                <SkillCategory
                  category="frontend"
                  isActive={activeCategory === "frontend"}
                />
              </TabsContent>
              <TabsContent value="backend" className="mt-0">
                <SkillCategory
                  category="backend"
                  isActive={activeCategory === "backend"}
                />
              </TabsContent>
              <TabsContent value="database" className="mt-0">
                <SkillCategory
                  category="database"
                  isActive={activeCategory === "database"}
                />
              </TabsContent>
              <TabsContent value="tools" className="mt-0">
                <SkillCategory
                  category="tools"
                  isActive={activeCategory === "tools"}
                />
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
