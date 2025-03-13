"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/section-heading";
import {
  Phone,
  MapPin,
  Mail,
  Send,
  CheckCircle,
  Clock,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real application, you would send the form data to your backend
      // For example:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // if (!response.ok) throw new Error('Failed to send message');

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setSubmitError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form when user navigates away and back
  useEffect(() => {
    return () => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormErrors({});
      setIsSubmitted(false);
      setIsSubmitting(false);
      setSubmitError(null);
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Koteshwor-32, Kathmandu, Nepal",
      link: "https://maps.google.com/?q=Koteshwor+Kathmandu+Nepal",
      linkText: "View on map",
    },
    {
      icon: Mail,
      title: "Email",
      details: "jyotikoirala@example.com",
      link: "mailto:jyotikoirala@example.com",
      linkText: "Send email",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+977 9749418772",
      link: "tel:+9779749418772",
      linkText: "Call me",
    },
  ];

  const workingHours = [
    { day: "Sunday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "Closed" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,hsl(var(--secondary)/0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOWE4ZDQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <div className="container">
        <SectionHeading title="Contact Me" subtitle="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="info">Contact Info</TabsTrigger>
                <TabsTrigger value="hours">Working Hours</TabsTrigger>
              </TabsList>

              <TabsContent value="info" className="mt-0">
                <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 gradient-text">
                      Let's Talk
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Feel free to reach out if you have any questions, project
                      inquiries, or just want to say hello. I'm always open to
                      discussing new projects and opportunities.
                    </p>

                    <div className="space-y-6">
                      {contactInfo.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + index * 0.1,
                          }}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg">
                              {item.title}
                            </h4>
                            <p className="text-muted-foreground mb-1">
                              {item.details}
                            </p>
                            {item.link && (
                              <a
                                href={item.link}
                                target={
                                  item.title === "Location"
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  item.title === "Location"
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                              >
                                {item.linkText}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hours" className="mt-0">
                <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold gradient-text">
                        Working Hours
                      </h3>
                    </div>

                    <p className="text-muted-foreground mb-8">
                      I'm available during the following hours. Feel free to
                      schedule a call or meeting during these times.
                    </p>

                    <div className="space-y-6">
                      {workingHours.map((schedule, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + index * 0.1,
                          }}
                          className="flex items-center justify-between p-4 rounded-xl bg-accent/10 backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                schedule.hours === "Closed"
                                  ? "bg-red-500"
                                  : "bg-green-500"
                              }`}
                            ></div>
                            <span className="font-medium">{schedule.day}</span>
                          </div>
                          <span
                            className={
                              schedule.hours === "Closed" ? "text-red-500" : ""
                            }
                          >
                            {schedule.hours}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm">
                          Please note that response times may vary based on my
                          current workload. For urgent matters, please contact
                          me directly via phone.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">
                    Send Me a Message
                  </h3>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="flex items-center justify-between"
                      >
                        <span>Your Name</span>
                        {formErrors.name && (
                          <span className="text-xs text-red-500">
                            {formErrors.name}
                          </span>
                        )}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting || isSubmitted}
                        className={`contact-input ${
                          formErrors.name
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center justify-between"
                      >
                        <span>Your Email</span>
                        {formErrors.email && (
                          <span className="text-xs text-red-500">
                            {formErrors.email}
                          </span>
                        )}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting || isSubmitted}
                        className={`contact-input ${
                          formErrors.email
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="flex items-center justify-between"
                    >
                      <span>Subject</span>
                      {formErrors.subject && (
                        <span className="text-xs text-red-500">
                          {formErrors.subject}
                        </span>
                      )}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      disabled={isSubmitting || isSubmitted}
                      className={`contact-input ${
                        formErrors.subject
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="flex items-center justify-between"
                    >
                      <span>Message</span>
                      {formErrors.message && (
                        <span className="text-xs text-red-500">
                          {formErrors.message}
                        </span>
                      )}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={6}
                      required
                      disabled={isSubmitting || isSubmitted}
                      className={`contact-input resize-none ${
                        formErrors.message
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <Button
                      type="submit"
                      className="w-full rounded-full"
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>

                    <AnimatePresence>
                      {isSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-0 left-0 right-0 bg-green-500 text-white p-3 rounded-md flex items-center justify-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4" />
                          Message sent successfully! I'll get back to you soon.
                        </motion.div>
                      )}

                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-0 left-0 right-0 bg-red-500 text-white p-3 rounded-md flex items-center justify-center gap-2"
                        >
                          <AlertCircle className="h-4 w-4" />
                          {submitError}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
