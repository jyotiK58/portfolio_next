"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "@/components/section-heading"
import SectionDivider from "@/components/section-divider"
import { Award, Building, ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Web Designing",
    issuer: "School of Information Technologies",
    description: "Completed the course learning about web designing held by the School of Information Technologies.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "MERN STACK",
    issuer: "Orchid International College",
    description: "Completed the course learning about the MERN FULL STACK held by the Orchid International College.",
    skills: ["MongoDB", "Express", "React", "Node.js"],
  },
]

export default function CertificatesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="certificates" className="relative py-20 md:py-32 bg-accent/20 overflow-hidden">
      <div className="container">
        <SectionHeading title="Certificates" subtitle="My Professional Development" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certificates.map((certificate, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="h-full overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{certificate.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span>{certificate.issuer}</span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <p className="text-muted-foreground mb-4">{certificate.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {certificate.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-accent/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        View Certificate <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SectionDivider type="curve" fillClassName="fill-background" />
    </section>
  )
}

