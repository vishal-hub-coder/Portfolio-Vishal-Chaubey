
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "home",
        "about",
        "services",
        "skills",
        "projects",
        "contact",
      ];

      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/vishal-hub-coder",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vishal-chaubey-07445a2b8/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:vtechsoftwarevishal@gmail.com",
      label: "Email",
    },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ================= HEADER ================= */}

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#070B14]/85 backdrop-blur-2xl border-b border-white/[0.07] shadow-2xl shadow-black/20"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            max-w-7xl mx-auto
            px-5 sm:px-6 lg:px-8
            h-[76px]
            flex items-center justify-between
          "
        >
          {/* ================= LOGO ================= */}

          <motion.a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Logo Icon */}

            <div
              className="
                relative
                w-10 h-10
                rounded-xl
                flex items-center justify-center
                bg-gradient-to-br from-blue-500 to-violet-600
                shadow-lg shadow-blue-500/20
                overflow-hidden
              "
            >
              <div
                className="
                  absolute inset-[1px]
                  rounded-[11px]
                  bg-[#090D18]
                  flex items-center justify-center
                "
              >
                <span
                  className="
                    text-sm font-black
                    bg-gradient-to-r
                    from-blue-400
                    to-violet-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  VC
                </span>
              </div>

              {/* Shine */}
              <motion.div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                "
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.7 }}
              />
            </div>

            {/* Brand Name */}

            <div className="hidden sm:block leading-none">
              <p className="text-[15px] font-bold text-white tracking-wide">
                Vishal Chaubey
              </p>

              <p className="text-[10px] text-slate-500 mt-1 tracking-[0.18em] uppercase">
                Full Stack Developer
              </p>
            </div>
          </motion.a>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden lg:flex items-center">
            <div
              className="
                flex items-center
                gap-1
                p-1.5
                rounded-2xl
                bg-white/[0.035]
                border border-white/[0.06]
                backdrop-blur-xl
              "
            >
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.1 + index * 0.06,
                    }}
                    whileHover={{ y: -1 }}
                    className={`
                      relative
                      px-4
                      py-2.5
                      rounded-xl
                      text-[13px]
                      font-medium
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-slate-100"
                      }
                    `}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="
                          absolute
                          inset-0
                          rounded-xl
                          bg-white/[0.07]
                          border border-white/[0.06]
                        "
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {link.name}
                    </span>

                    {/* Hover underline */}

                    {!isActive && (
                      <span
                        className="
                          absolute
                          left-4
                          right-4
                          bottom-1.5
                          h-px
                          scale-x-0
                          origin-left
                          bg-gradient-to-r
                          from-blue-400
                          to-violet-500
                          transition-transform
                          duration-300
                          group-hover:scale-x-100
                        "
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </nav>

          {/* ================= RIGHT SIDE ================= */}

          <div className="hidden lg:flex items-center gap-4">
            {/* Social Icons */}

            <div className="flex items-center gap-1.5">
              {socialLinks.slice(0, 3).map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      y: -3,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="
                      w-9 h-9
                      rounded-xl
                      flex items-center justify-center
                      text-slate-500
                      hover:text-white
                      bg-white/[0.03]
                      hover:bg-white/[0.08]
                      border border-transparent
                      hover:border-white/[0.08]
                      transition-all
                      duration-300
                    "
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}

            <div className="h-7 w-px bg-white/[0.08]" />

            {/* CTA */}

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                text-sm
                font-semibold
                text-white
                bg-gradient-to-r
                from-blue-600
                to-violet-600
                hover:from-blue-500
                hover:to-violet-500
                shadow-lg
                shadow-blue-500/10
                transition-all
              "
            >
              Let's Talk

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </motion.a>
          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <motion.button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="
              lg:hidden
              relative
              w-10 h-10
              rounded-xl
              flex items-center justify-center
              bg-white/[0.05]
              border border-white/[0.08]
              text-slate-300
              hover:text-white
              hover:bg-white/[0.08]
              transition-all
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                >
                  <X size={21} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                >
                  <Menu size={21} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="
                  fixed
                  inset-0
                  top-[76px]
                  bg-black/50
                  backdrop-blur-sm
                  lg:hidden
                "
              />

              {/* Menu Panel */}

              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="
                  relative
                  lg:hidden
                  border-t
                  border-white/[0.06]
                  bg-[#080C16]/95
                  backdrop-blur-2xl
                  shadow-2xl
                "
              >
                <nav className="max-w-7xl mx-auto p-5">
                  <div className="space-y-1">
                    {navLinks.map((link) => {
                      const isActive =
                        activeSection === link.id;

                      return (
                        <motion.a
                          key={link.name}
                          variants={mobileItemVariants}
                          href={link.href}
                          onClick={closeMenu}
                          className={`
                            flex items-center
                            justify-between
                            px-4 py-3.5
                            rounded-xl
                            text-base
                            font-medium
                            transition-all
                            ${
                              isActive
                                ? "text-white bg-white/[0.06]"
                                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                            }
                          `}
                        >
                          <span>{link.name}</span>

                          {isActive && (
                            <span
                              className="
                                w-1.5 h-1.5
                                rounded-full
                                bg-blue-400
                                shadow-lg
                                shadow-blue-400/50
                              "
                            />
                          )}
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* Mobile Divider */}

                  <div className="my-5 h-px bg-white/[0.07]" />

                  {/* Mobile Social + CTA */}

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;

                        return (
                          <motion.a
                            key={social.label}
                            variants={mobileItemVariants}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            whileHover={{
                              scale: 1.08,
                            }}
                            whileTap={{
                              scale: 0.94,
                            }}
                            className="
                              w-10 h-10
                              rounded-xl
                              flex items-center justify-center
                              bg-white/[0.04]
                              border border-white/[0.06]
                              text-slate-400
                              hover:text-white
                              hover:bg-white/[0.08]
                              transition-all
                            "
                          >
                            <Icon size={17} />
                          </motion.a>
                        );
                      })}
                    </div>

                    <motion.a
                      variants={mobileItemVariants}
                      href="#contact"
                      onClick={closeMenu}
                      className="
                        flex items-center gap-2
                        px-4 py-2.5
                        rounded-xl
                        text-sm
                        font-semibold
                        text-white
                        bg-gradient-to-r
                        from-blue-600
                        to-violet-600
                      "
                    >
                      Let's Talk
                      <ArrowUpRight size={15} />
                    </motion.a>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;

