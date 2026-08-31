import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  ArrowUp,
  Code2,
  ArrowRight,
  MapPin,
  Phone,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/vishal-hub-coder",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:vtechsoftwarevishal@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "UI/UX Development",
    "Backend Development",
    "API Integration",
    "Performance Optimization",
    "Custom Solutions",
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      {/* =========================
          TOP GRADIENT LINE
      ========================== */}

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================
            CTA SECTION
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-16 md:py-20"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 md:p-12">
            {/* CTA Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* CTA Content */}
              <div className="text-center md:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
                  <Sparkles size={15} />
                  Have an idea?
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Build Something{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Amazing
                  </span>
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  Have a project, startup idea, or business solution in mind?
                  Let's turn your vision into a powerful digital experience.
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection("#contact")}
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.96 }}
                className="group shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
              >
                Start a Project
                <ArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* =========================
            MAIN FOOTER
        ========================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 pb-14">
          {/* =========================
              BRAND
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="inline-flex items-center gap-3 mb-5 group"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-cyan-500/30 blur-lg group-hover:bg-purple-500/40 transition-all" />

                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg">
                  <Code2 size={23} className="text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Vishal
                  </span>{" "}
                  <span className="text-white">Chaubey</span>
                </h3>

                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  Full Stack Developer
                </p>
              </div>
            </a>

            <p className="text-slate-400 leading-relaxed text-sm max-w-sm mb-6">
              I build modern, scalable and high-performance web applications
              with clean code, thoughtful design and powerful technologies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-10 h-10 rounded-xl border border-slate-800 bg-slate-900/70 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
                  >
                    <Icon
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* =========================
              QUICK LINKS
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-6">
              <span className="text-white">Quick</span>{" "}
              <span className="text-cyan-400">Links</span>
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />

                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* =========================
              SERVICES
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-6">
              <span className="text-white">What I</span>{" "}
              <span className="text-purple-400">Do</span>
            </h4>

            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* =========================
              CONTACT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-6">
              <span className="text-white">Get in</span>{" "}
              <span className="text-cyan-400">Touch</span>
            </h4>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:vishalchaubey.dev@gmail.com"
                className="group flex items-start gap-3"
              >
                <div className="w-9 h-9 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Mail size={16} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">Email</p>

                  <p className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors break-all">
                    vishalchaubey.dev@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919326870893"
                className="group flex items-start gap-3"
              >
                <div className="w-9 h-9 shrink-0 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Phone size={16} className="text-purple-400" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">Phone</p>

                  <p className="text-sm text-slate-300 group-hover:text-purple-400 transition-colors">
                    +91 9326870893
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <MapPin size={16} className="text-blue-400" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">Location</p>

                  <p className="text-sm text-slate-300">India</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              Available for freelance projects
            </div>
          </motion.div>
        </div>

        {/* =========================
            DIVIDER
        ========================== */}

        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* =========================
            BOTTOM FOOTER
        ========================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="py-7 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300 font-medium">
              Vishal Chaubey
            </span>
            . All rights reserved.
          </p>

          {/* Made With */}
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Crafted with
            <Heart
              size={15}
              className="text-red-500 fill-red-500 animate-pulse"
            />
            using
            <span className="text-cyan-400">React</span>
            &
            <span className="text-purple-400">Framer Motion</span>
          </p>

          {/* Back To Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Back to top

            <span className="w-9 h-9 rounded-lg border border-slate-800 bg-slate-900 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-all">
              <ArrowUp
                size={17}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* =========================
          FLOATING BACK TO TOP
      ========================== */}

      <motion.button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.1,
          rotate: -3,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="fixed bottom-6 right-5 md:right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-xl shadow-cyan-500/20 border border-white/10"
      >
        <ArrowUp size={21} className="text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;