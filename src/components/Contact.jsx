
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";

import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  ArrowUpRight,
  Clock3,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // -----------------------------
  // Contact Information
  // -----------------------------

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vtechsoftwarevishal@gmail.com",
      href: "mailto:vtechsoftwarevishal@gmail.com",
      description: "Drop me an email anytime",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9326870893",
      href: "tel:+919876543210",
      description: "Available for project discussions",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      description: "Available for remote projects",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock3,
      label: "Availability",
      value: "Open for Work",
      href: "#",
      description: "Freelance & full-time opportunities",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  // -----------------------------
  // Form Validation
  // -----------------------------

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formState.name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Please enter your message";
    } else if (formState.message.trim().length < 10) {
      newErrors.message =
        "Message should contain at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // -----------------------------
  // Submit
  // -----------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("sending");

    // Replace this with your backend API later
    setTimeout(() => {
      setStatus("success");

      setFormState({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});

      setTimeout(() => {
        setStatus(null);
      }, 4000);
    }, 1800);
  };

  // -----------------------------
  // Input Change
  // -----------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (status === "success") {
      setStatus(null);
    }
  };

  // -----------------------------
  // Animation Variants
  // -----------------------------

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-20 md:py-32"
    >
      {/* =====================================
          BACKGROUND
      ====================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================
          MAIN CONTAINER
      ====================================== */}

      <div
        ref={containerRef}
        className="relative z-10 mx-auto max-w-7xl px-4 md:px-8"
      >
        {/* =====================================
            HEADER
        ====================================== */}

        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          {/* Badge */}

          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <MessageSquare size={16} />

            Let's Connect

            <Sparkles size={14} />
          </motion.div>

          {/* Heading */}

          <h2 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Have an idea, project, or opportunity in mind?
            Let's discuss it and turn your vision into a
            powerful digital experience.
          </p>
        </motion.div>

        {/* =====================================
            CONTENT GRID
        ====================================== */}

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* =====================================
              LEFT SIDE
          ====================================== */}

          <motion.div
            className="lg:col-span-2"
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            {/* Intro Card */}

            <div className="mb-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-7">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/20">
                <MessageSquare
                  size={27}
                  className="text-white"
                />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white">
                Let's Talk About Your Project
              </h3>

              <p className="leading-relaxed text-slate-400">
                Whether you need a complete web application,
                an API, a business website, or help improving
                an existing project, I'm always open to
                discussing new ideas.
              </p>
            </div>

            {/* Contact Cards */}

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;

                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.5,
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
                  >
                    {/* Hover glow */}

                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.05]`}
                    />

                    {/* Icon */}

                    <div
                      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg`}
                    >
                      <Icon
                        size={22}
                        className="text-white"
                      />
                    </div>

                    {/* Text */}

                    <div className="relative min-w-0 flex-1">
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                        {info.label}
                      </p>

                      <p className="truncate font-semibold text-white">
                        {info.value}
                      </p>

                      <p className="mt-1 truncate text-xs text-slate-500">
                        {info.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="relative text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================
              RIGHT SIDE FORM
          ====================================== */}

          <motion.div
            className="lg:col-span-3"
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl md:p-8 lg:p-10">
              {/* Top Glow */}

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

              {/* Form Header */}

              <div className="relative mb-8">
                <p className="mb-2 text-sm font-medium text-cyan-400">
                  HAVE A PROJECT?
                </p>

                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Send Me a Message
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Fill out the form and I'll get back to you
                  as soon as possible.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative space-y-6"
              >
                {/* =====================================
                    NAME
                ====================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.5,
                  }}
                >
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>

                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Vishal Chaubey"
                      autoComplete="name"
                      className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-slate-600 ${
                        errors.name
                          ? "border-red-500/70 focus:border-red-400"
                          : "border-white/10 focus:border-cyan-500/70 focus:ring-4 focus:ring-cyan-500/10"
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{
                          opacity: 0,
                          height: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        className="mt-2 flex items-center gap-1.5 text-sm text-red-400"
                      >
                        <AlertCircle size={14} />
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* =====================================
                    EMAIL
                ====================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.6,
                  }}
                >
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="vtechsoftwarevishal@gmail.com"
                      autoComplete="email"
                      className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-slate-600 ${
                        errors.email
                          ? "border-red-500/70 focus:border-red-400"
                          : "border-white/10 focus:border-cyan-500/70 focus:ring-4 focus:ring-cyan-500/10"
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{
                          opacity: 0,
                          height: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        className="mt-2 flex items-center gap-1.5 text-sm text-red-400"
                      >
                        <AlertCircle size={14} />
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* =====================================
                    MESSAGE
                ====================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.7,
                  }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300"
                    >
                      Your Message
                    </label>

                    <span className="text-xs text-slate-600">
                      {formState.message.length}/1000
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={(e) => {
                      if (e.target.value.length <= 1000) {
                        handleChange(e);
                      }
                    }}
                    placeholder="Tell me about your project, requirements, budget, timeline..."
                    rows={6}
                    className={`w-full resize-none rounded-xl border bg-slate-900/70 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-slate-600 ${
                      errors.message
                        ? "border-red-500/70 focus:border-red-400"
                        : "border-white/10 focus:border-cyan-500/70 focus:ring-4 focus:ring-cyan-500/10"
                    }`}
                  />

                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{
                          opacity: 0,
                          height: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        className="mt-2 flex items-center gap-1.5 text-sm text-red-400"
                      >
                        <AlertCircle size={14} />
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* =====================================
                    SUCCESS MESSAGE
                ====================================== */}

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.97,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      className="flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4"
                    >
                      <CheckCircle
                        size={20}
                        className="mt-0.5 shrink-0 text-green-400"
                      />

                      <div>
                        <p className="font-semibold text-green-400">
                          Message sent successfully!
                        </p>

                        <p className="mt-1 text-sm text-green-400/70">
                          Thanks for reaching out. I'll get
                          back to you soon.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* =====================================
                    SUBMIT BUTTON
                ====================================== */}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={
                    status !== "sending"
                      ? {
                          scale: 1.01,
                        }
                      : {}
                  }
                  whileTap={
                    status !== "sending"
                      ? {
                          scale: 0.98,
                        }
                      : {}
                  }
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {/* Shine */}

                  <motion.div
                    className="absolute inset-y-0 -left-20 w-16 skew-x-[-20deg] bg-white/20"
                    animate={{
                      x: ["0%", "700%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />

                  <span className="relative flex items-center justify-center gap-2">
                    <AnimatePresence mode="wait">
                      {status === "sending" ? (
                        <motion.span
                          key="sending"
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          className="flex items-center gap-2"
                        >
                          <motion.span
                            className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />

                          Sending Message...
                        </motion.span>
                      ) : status === "success" ? (
                        <motion.span
                          key="success"
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle size={20} />

                          Message Sent
                        </motion.span>
                      ) : (
                        <motion.span
                          key="default"
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                          }}
                          className="flex items-center gap-2"
                        >
                          <Send
                            size={19}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />

                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </motion.button>

                {/* Privacy text */}

                <p className="text-center text-xs text-slate-600">
                  I'll only use your information to respond
                  to your message.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* =====================================
            BOTTOM CTA
        ====================================== */}

        <motion.div
          className="mt-12 text-center"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 0.9,
          }}
        >
          <p className="text-sm text-slate-500">
            Prefer email?
            <a
              href="mailto:vishalchaubey.dev@gmail.com"
              className="ml-2 font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Let's talk directly →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

