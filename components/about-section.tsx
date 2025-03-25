"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Phone, MapPin, Mail, Briefcase } from "lucide-react";
import SectionHeading from "@/components/section-heading";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+977 9749418772" },
    { icon: MapPin, label: "Location", value: "Koteshwor, Kathmandu" },
    { icon: Mail, label: "Email", value: "jyotikoirala58@gmail.com" },
    { icon: Briefcase, label: "Freelance", value: "Available" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-bg overflow-hidden"
    >
      <div className="container">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/roshni_profile.jpg"
                  alt="Jyoti Koirala"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/20 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-secondary/20 -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Full Stack Developer
            </h3>

            <p className="text-lg mb-6">
              I am an enthusiastic and highly motivated individual with a
              passion for creating exceptional web experiences. With expertise
              in both frontend and backend technologies, I bring ideas to life
              through clean code and intuitive design.
            </p>

            <p className="text-muted-foreground mb-8">
              I am hardworking and goal-driven, always striving to achieve
              excellence in every task I undertake. Continuously seeking
              opportunities for growth and self-improvement, I am dedicated to
              advancing my skills and contributing positively to any team I am
              part of.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild className="rounded-full px-6 group">
              <a href="/Jyoti-Resume.pdf" download>
                Download CV
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
