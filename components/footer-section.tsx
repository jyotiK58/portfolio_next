"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SocialIcons from "@/components/social-icons";
import { ArrowUp } from "lucide-react";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-background py-12 overflow-hidden border-t border-border/10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-block">
              <h3 className="text-xl font-bold gradient-text mb-3">
                Jyoti Koirala
              </h3>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md text-sm">
              Full stack developer specializing in creating beautiful,
              functional, and user-friendly websites and applications.
            </p>
            <SocialIcons />
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out"
                >
                  <Link href={link.href} className="">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Kathmandu, Nepal</li>
              <li>jyotikoirala@example.com</li>
              <li>+977 9749418772</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-border/10">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Jyoti Koirala. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
