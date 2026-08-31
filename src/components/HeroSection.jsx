import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import { Typewriter } from "react-simple-typewriter";

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
  MousePointer2,
  ExternalLink,
  BriefcaseBusiness,
  Globe,
  CheckCircle2,
} from "lucide-react";

import v2 from "../assets/v2.jpeg";

/* =========================================================
   PARTICLE BACKGROUND
========================================================= */

const ParticleBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 15 + 12,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* =========================================================
   FLOATING ORB
========================================================= */

const FloatingOrb = ({
  className = "",
  duration = 8,
  delay = 0,
}) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        x: [0, 25, 0],
        y: [0, -20, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

/* =========================================================
   HERO SECTION
========================================================= */

const HeroSection = () => {
  const containerRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  /* -------------------------------------------------------
     Scroll Animation
  ------------------------------------------------------- */

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /*
    IMPORTANT:
    Previously content opacity was going from 1 -> 0.
    That caused the complete hero content to disappear
    while scrolling.

    Now we only use a very subtle movement.
  */

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 45]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.95]
  );

  const smoothY = useSpring(contentY, {
    stiffness: 90,
    damping: 25,
  });

  /* -------------------------------------------------------
     Mouse Parallax
  ------------------------------------------------------- */

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 14;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 14;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  /* -------------------------------------------------------
     Highlights
  ------------------------------------------------------- */

  const highlights = [
    {
      icon: Code2,
      title: "Clean Development",
      description: "Maintainable & scalable code",
    },
    {
      icon: Layers3,
      title: "Modern Stack",
      description: "React, Node.js & APIs",
    },
    {
      icon: Rocket,
      title: "Production Ready",
      description: "Fast & reliable applications",
    },
  ];

  /* -------------------------------------------------------
     V-Tech Highlights
  ------------------------------------------------------- */

  const workHighlights = [
    "Business Websites",
    "ERP & CRM Systems",
    "Custom Web Applications",
    "Modern UI/UX",
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-[#060912]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Base Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.12),transparent_35%)]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* Floating Orbs */}

        <FloatingOrb
          className="
            -top-32
            -left-40
            w-[420px]
            h-[420px]
            bg-blue-600/10
          "
          duration={10}
        />

        <FloatingOrb
          className="
            bottom-0
            -right-40
            w-[480px]
            h-[480px]
            bg-violet-600/10
          "
          duration={12}
          delay={1}
        />

        <FloatingOrb
          className="
            top-[40%]
            left-[45%]
            w-[300px]
            h-[300px]
            bg-indigo-500/[0.06]
          "
          duration={14}
          delay={2}
        />

        <ParticleBackground />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <motion.div
        style={{
          y: smoothY,
        }}
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          pt-28
          pb-24
          lg:pt-32
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.05fr_0.95fr]
            items-center
            gap-14
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            className="max-w-3xl"
          >
            {/* Small Intro */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                inline-flex
                items-center
                gap-3
                mb-6
                px-3
                py-2
                rounded-full
                bg-white/[0.025]
                border
                border-white/[0.07]
                backdrop-blur-xl
              "
            >
              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-8
                  h-8
                  rounded-full
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  text-blue-400
                "
              >
                <Sparkles size={15} />
              </span>

              <span className="text-xs sm:text-sm font-medium text-slate-400">
                Building digital experiences that matter
              </span>
            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                text-[2.7rem]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.6rem]
                xl:text-[5.1rem]
                font-bold
                tracking-[-0.04em]
                leading-[1.05]
              "
            >
              I build
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-indigo-400
                  to-violet-400
                  bg-clip-text
                  text-transparent
                "
              >
                digital products
              </span>

              <br />

              <span className="text-white">
                people love to use.
              </span>
            </motion.h1>

            {/* Typewriter */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-7"
            >
              <div
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-medium
                  text-slate-400
                "
              >
                I am a{" "}

                <span
                  className="
                    text-blue-400
                    font-semibold
                  "
                >
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                      "React.js Developer",
                      "Node.js Developer",
                      "Software Developer",
                      "Problem Solver",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={45}
                    delaySpeed={1600}
                  />
                </span>
              </div>
            </motion.div>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
              className="
                mt-6
                max-w-2xl
                text-base
                sm:text-lg
                leading-8
                text-slate-400
              "
            >
              I design and develop modern web applications
              that combine thoughtful user experiences,
              clean architecture, and reliable performance.
              From frontend interfaces to backend systems,
              I turn ideas into real-world products.
            </motion.p>

            {/* =================================================
                V-TECH SOFTWARE WORK CARD
            ================================================= */}

            <motion.a
              href="https://v-tech-sofware.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                block
                mt-8
                max-w-2xl
                rounded-2xl
                overflow-hidden
                border
                border-blue-500/15
                bg-gradient-to-br
                from-blue-500/[0.08]
                via-white/[0.025]
                to-violet-500/[0.06]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-400/30
              "
            >
              {/* Card Glow */}

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-40
                  h-40
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                  group-hover:bg-blue-500/20
                  transition-all
                "
              />

              <div className="relative p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-blue-500/10
                        border
                        border-blue-500/20
                        text-blue-400
                        shrink-0
                      "
                    >
                      <BriefcaseBusiness size={21} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          V-Tech Software
                        </h3>

                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1
                            px-2
                            py-0.5
                            rounded-full
                            bg-emerald-500/10
                            border
                            border-emerald-500/15
                            text-[10px]
                            font-medium
                            text-emerald-400
                          "
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Working
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 mt-1">
                        Real-world software & web development
                      </p>
                    </div>
                  </div>

                  <ExternalLink
                    size={17}
                    className="
                      text-slate-600
                      group-hover:text-blue-400
                      transition-colors
                      shrink-0
                    "
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {workHighlights.map((item) => (
                    <span
                      key={item}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        px-2.5
                        py-1.5
                        rounded-lg
                        bg-white/[0.035]
                        border
                        border-white/[0.06]
                        text-[11px]
                        text-slate-400
                      "
                    >
                      <CheckCircle2
                        size={12}
                        className="text-blue-400"
                      />

                      {item}
                    </span>
                  ))}
                </div>

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-blue-400
                  "
                >
                  <Globe size={14} />

                  Visit V-Tech Software

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>
            </motion.a>

            {/* =================================================
                CTA
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.85,
              }}
              className="
                flex
                flex-wrap
                items-center
                gap-4
                mt-8
              "
            >
              {/* Primary CTA */}

              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  sm:px-7
                  py-3.5
                  rounded-xl
                  overflow-hidden
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  text-white
                  font-semibold
                  shadow-xl
                  shadow-blue-600/10
                "
              >
                <span className="relative z-10">
                  View My Work
                </span>

                <ArrowRight
                  size={18}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

                <span
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-violet-600
                    to-blue-600
                    translate-x-full
                    group-hover:translate-x-0
                    transition-transform
                    duration-500
                  "
                />
              </motion.a>

              {/* CV */}

              <motion.a
                href="/Vishal-Chaubey-CV.pdf"
                download
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  sm:px-7
                  py-3.5
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  text-slate-200
                  font-semibold
                  backdrop-blur-xl
                  hover:bg-white/[0.07]
                  hover:border-white/20
                  transition-all
                "
              >
                <Download size={18} />

                Download CV
              </motion.a>
            </motion.div>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              className="
                flex
                items-center
                gap-3
                mt-7
              "
            >
              <span className="text-xs text-slate-600 mr-2">
                Find me on
              </span>

              <a
                href="https://github.com/vishal-hub-coder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/[0.03]
                  border
                  border-white/[0.06]
                  text-slate-500
                  hover:text-white
                  hover:bg-white/[0.08]
                  transition-all
                "
              >
                <Github size={17} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/[0.03]
                  border
                  border-white/[0.06]
                  text-slate-500
                  hover:text-white
                  hover:bg-white/[0.08]
                  transition-all
                "
              >
                <Linkedin size={17} />
              </a>

              <a
                href="mailto:vishalchaubey.dev@gmail.com"
                aria-label="Email"
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/[0.03]
                  border
                  border-white/[0.06]
                  text-slate-500
                  hover:text-white
                  hover:bg-white/[0.08]
                  transition-all
                "
              >
                <Mail size={17} />
              </a>
            </motion.div>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
              }}
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-3
                mt-10
                max-w-2xl
              "
            >
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      group
                      p-4
                      rounded-2xl
                      bg-white/[0.025]
                      border
                      border-white/[0.06]
                      hover:border-blue-500/20
                      transition-all
                    "
                  >
                    <div
                      className="
                        w-9
                        h-9
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        bg-blue-500/10
                        text-blue-400
                        mb-3
                        group-hover:bg-blue-500/15
                        transition-colors
                      "
                    >
                      <Icon size={17} />
                    </div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                        text-slate-200
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-slate-500
                      "
                    >
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <motion.div
            style={{
              x: -mousePosition.x * 0.7,
              y: -mousePosition.y * 0.7,
              scale: imageScale,
            }}
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.45,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              items-center
              justify-center
              lg:justify-end
              mt-4
              lg:mt-0
            "
          >
            {/* Ambient Glow */}

            <div
              className="
                absolute
                w-[300px]
                h-[300px]
                sm:w-[420px]
                sm:h-[420px]
                rounded-full
                bg-blue-600/10
                blur-[100px]
              "
            />

            {/* Image Wrapper */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                w-[270px]
                sm:w-[350px]
                md:w-[410px]
                lg:w-[450px]
                aspect-square
              "
            >
              {/* Outer Ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-5
                  rounded-full
                  border
                  border-dashed
                  border-blue-500/20
                "
              />

              {/* Second Ring */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-10
                  rounded-full
                  border
                  border-violet-500/10
                "
              />

              {/* Main Image */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-br
                  from-blue-500
                  via-indigo-500
                  to-violet-600
                  p-[2px]
                  shadow-2xl
                  shadow-blue-500/15
                "
              >
                <div
                  className="
                    w-full
                    h-full
                    rounded-full
                    bg-[#080C16]
                    p-2
                  "
                >
                  <img
                    src={v2}
                    alt="Vishal Chaubey"
                    className="
                      w-full
                      h-full
                      rounded-full
                      object-cover
                      object-center
                    "
                  />
                </div>
              </div>

              {/* Image Overlay */}

              <div
                className="
                  absolute
                  inset-2
                  rounded-full
                  bg-gradient-to-t
                  from-[#060912]/20
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />

              {/* =================================================
                  AVAILABLE BADGE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  delay: 1.3,
                  type: "spring",
                  stiffness: 180,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  absolute
                  bottom-2
                  left-[-5px]
                  sm:left-[-35px]
                  px-4
                  py-3
                  rounded-2xl
                  bg-[#0B101C]/90
                  backdrop-blur-xl
                  border
                  border-white/[0.08]
                  shadow-xl
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      relative
                      flex
                      w-9
                      h-9
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-500/10
                      text-emerald-400
                    "
                  >
                    <span
                      className="
                        absolute
                        w-2
                        h-2
                        rounded-full
                        bg-emerald-400
                        animate-pulse
                      "
                    />
                  </span>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Available
                    </p>

                    <p className="text-[11px] text-slate-500">
                      For new opportunities
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  TECH BADGE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  delay: 1.5,
                  type: "spring",
                  stiffness: 180,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                className="
                  absolute
                  top-4
                  right-[-5px]
                  sm:right-[-30px]
                  px-4
                  py-3
                  rounded-2xl
                  bg-[#0B101C]/90
                  backdrop-blur-xl
                  border
                  border-white/[0.08]
                  shadow-xl
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-xl
                      bg-blue-500/10
                      text-blue-400
                    "
                  >
                    <Code2 size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Modern Stack
                    </p>

                    <p className="text-[11px] text-slate-500">
                      React · Node · MySQL
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Dot */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  top-1/4
                  -right-12
                  w-2
                  h-2
                  rounded-full
                  bg-blue-400
                  shadow-lg
                  shadow-blue-400/50
                "
              />

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="
                  absolute
                  bottom-1/4
                  -left-12
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-violet-400
                  shadow-lg
                  shadow-violet-400/50
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
        }}
        className="
          hidden
          md:flex
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-slate-600
          hover:text-slate-400
          transition-colors
        "
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <MousePointer2 size={15} />
        </motion.div>
      </motion.a>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#060912]
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
};

export default HeroSection;