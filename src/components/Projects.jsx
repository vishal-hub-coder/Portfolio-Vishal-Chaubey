import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";

import {
  ExternalLink,
  Github,
  X,
  ArrowUpRight,
  ShoppingCart,
  MessageCircle,
  LayoutDashboard,
  MessagesSquare,
  BriefcaseBusiness,
  Sparkles,
  CheckCircle2,
  Code2,
  Layers3,
} from "lucide-react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    title: "E-Commerce Platform",
    shortTitle: "E-Commerce",
    description:
      "A modern shopping platform with product discovery, cart management, secure checkout and order tracking.",
    fullDescription:
      "A complete e-commerce platform designed for a smooth and scalable shopping experience. It includes authentication, product management, shopping cart, secure checkout, payment integration, order tracking and an admin dashboard.",
    tags: ["React.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    icon: ShoppingCart,
    number: "01",
    category: "Full Stack",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "Social Media App",
    shortTitle: "Social Platform",
    description:
      "A social networking platform with posts, profiles, real-time messaging and interactive notifications.",
    fullDescription:
      "A feature-rich social platform where users can create profiles, publish posts, like and comment on content, communicate in real time and receive instant notifications.",
    tags: ["React.js", "Express", "MongoDB", "Socket.io", "AWS S3"],
    icon: MessageCircle,
    number: "02",
    category: "Web Application",
    gradient: "from-purple-400 via-fuchsia-500 to-pink-600",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "CRM ERP System",
    shortTitle: "CRM / ERP",
    description:
      "A business management system designed to manage customers, operations, workflows and business data.",
    fullDescription:
      "A professional CRM and ERP solution focused on improving business productivity. The system provides structured dashboards, customer management, workflow handling, reporting and business operations management.",
    tags: ["React.js", "DotNet Core", "SQL Server", "Framer Motion"],
    icon: LayoutDashboard,
    number: "03",
    category: "Enterprise",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "Chat Application",
    shortTitle: "Real-Time Chat",
    description:
      "Real-time communication application with chat rooms, direct messages, file sharing and reactions.",
    fullDescription:
      "A real-time messaging platform built for fast communication. Users can join rooms, send direct messages, share files, react to messages and communicate instantly.",
    tags: ["React.js", "Socket.io", "Node.js", "MongoDB"],
    icon: MessagesSquare,
    number: "04",
    category: "Real-Time App",
    gradient: "from-orange-400 via-red-500 to-rose-600",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    shortTitle: "Portfolio",
    description:
      "A premium developer portfolio with smooth animations, responsive layouts and interactive experiences.",
    fullDescription:
      "A modern developer portfolio created to showcase technical skills, professional services and selected projects through an immersive and responsive user experience.",
    tags: ["React.js", "Framer Motion", "Tailwind CSS", "Vite"],
    icon: BriefcaseBusiness,
    number: "05",
    category: "Portfolio",
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    liveLink: "#",
    githubLink: "#",
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index, onOpen }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const Icon = project.icon;

  return (
    <motion.article
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
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
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative ${
        project.featured ? "lg:col-span-1" : ""
      }`}
    >
      <motion.div
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="relative h-full overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] backdrop-blur-xl"
      >
        {/* -------------------------------------------------
            CARD GLOW
        ------------------------------------------------- */}

        <div
          className={`absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 blur-[90px] transition-all duration-700 group-hover:opacity-20`}
        />

        {/* -------------------------------------------------
            TOP PROJECT PREVIEW
        ------------------------------------------------- */}

        <div className="relative h-64 overflow-hidden border-b border-white/[0.06]">
          {/* Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.13]`}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Decorative circles */}
          <motion.div
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute -left-20 -bottom-24 h-48 w-48 rounded-full border border-white/10"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Project Number */}
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold tracking-wider text-white/70 backdrop-blur-md">
              {project.number}
            </span>

            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/60 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{
                scale: 1.12,
                rotate: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className={`relative flex h-28 w-28 items-center justify-center rounded-[30px] bg-gradient-to-br ${project.gradient} shadow-2xl`}
            >
              <div className="absolute inset-[1px] rounded-[29px] bg-slate-950/25" />

              <Icon
                size={52}
                strokeWidth={1.5}
                className="relative z-10 text-white"
              />

              <div className="absolute inset-0 rounded-[30px] bg-white/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          </div>

          {/* Hover buttons */}
          <div className="absolute inset-0 flex items-end justify-end p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <motion.button
              onClick={() => onOpen(project)}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md"
              aria-label={`View ${project.title}`}
            >
              <ArrowUpRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* -------------------------------------------------
            CONTENT
        ------------------------------------------------- */}

        <div className="relative p-6 md:p-7">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/80">
                {project.category}
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                {project.title}
              </h3>
            </div>

            <motion.div
              whileHover={{
                rotate: 45,
              }}
              className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-400 sm:flex"
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          <p className="mb-6 line-clamp-3 text-sm leading-7 text-slate-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom line */}
          <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
            <button
              onClick={() => onOpen(project)}
              className="group/link flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-400"
            >
              View Case Study

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </button>

            <div
              className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${project.gradient} opacity-60 transition-all duration-300 group-hover:w-20 group-hover:opacity-100`}
            />
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

/* =========================================================
   PROJECT MODAL
========================================================= */

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const Icon = project.icon;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
          y: 30,
        }}
        transition={{
          duration: 0.35,
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[30px] border border-white/10 bg-[#080d18] shadow-2xl"
      >
        {/* Modal Hero */}
        <div className="relative h-56 overflow-hidden md:h-72">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_50%)]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`flex h-28 w-28 items-center justify-center rounded-[30px] bg-gradient-to-br ${project.gradient} shadow-2xl`}
            >
              <Icon
                size={54}
                strokeWidth={1.5}
                className="text-white"
              />
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white backdrop-blur-md transition-colors hover:bg-white/10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-9">
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              {project.category}
            </p>

            <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              {project.title}
            </h3>
          </div>

          <p className="mb-8 text-base leading-8 text-slate-400">
            {project.fullDescription}
          </p>

          {/* Technology */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <Code2
                size={18}
                className="text-cyan-400"
              />

              <h4 className="font-semibold text-white">
                Technologies
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.05] px-4 py-2 text-sm text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="grid gap-3 sm:grid-cols-2">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/10"
            >
              <ExternalLink size={19} />
              Live Demo
            </motion.a>

            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition-colors hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <Github size={19} />
              Source Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   MAIN PROJECTS SECTION
========================================================= */

const Projects = () => {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-purple-500/[0.07] blur-[120px]" />

        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 mx-auto max-w-7xl px-4 md:px-8"
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              delay: 0.15,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-sm font-medium text-cyan-300"
          >
            <Sparkles size={15} />

            Selected Work

            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Projects That
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Make an Impact
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            A selection of projects where design, engineering and
            performance come together to create meaningful digital
            experiences.
          </p>

          {/* Small stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Layers3
                size={16}
                className="text-cyan-400"
              />
              Modern Architecture
            </div>

            <div className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={16}
                className="text-emerald-400"
              />
              Production Ready
            </div>

            <div className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <div className="flex items-center gap-2">
              <Code2
                size={16}
                className="text-purple-400"
              />
              Clean Code
            </div>
          </div>
        </motion.div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {/* =================================================
            GITHUB CTA
        ================================================= */}

        <motion.div
          className="mt-16 text-center"
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
            delay: 0.8,
          }}
        >
          <p className="mb-5 text-sm text-slate-500">
            Want to explore more of my work?
          </p>

          <motion.a
            href="https://github.com/vishal-hub-coder"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <Github
              size={20}
              className="transition-transform duration-300 group-hover:rotate-12"
            />

            View More on GitHub

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </motion.div>
      </div>

      {/* =====================================================
          MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

