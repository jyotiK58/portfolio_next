"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
  animate?: boolean;
}

export default function SocialIcons({
  className,
  iconClassName,
  animate = true,
}: SocialIconsProps) {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/rosni.koirala.71",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/____roshnee/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jyoti-koirala-3619092b8/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/jyotiK58", label: "GitHub" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      className={cn("flex items-center gap-3", className)}
      variants={animate ? container : undefined}
      initial={animate ? "hidden" : undefined}
      animate={animate ? "show" : undefined}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          aria-label={social.label}
          variants={animate ? item : undefined}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors",
            iconClassName
          )}
        >
          <social.icon className="w-4 h-4" />
        </motion.a>
      ))}
    </motion.div>
  );
}
