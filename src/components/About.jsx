
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Users,
  Clock,
  Heart,
  Target,
  Zap,
  Globe2,
  Code2,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  /* =========================================================
     STATS
  ========================================================= */

  const stats = [
    {
      icon: Award,
      number: "2+",
      label: "Years Experience",
      description: "Building modern web solutions",
    },
    {
      icon: Users,
      number: "30+",
      label: "Happy Clients",
      description: "Projects delivered successfully",
    },
    {
      icon: Clock,
      number: "50+",
      label: "Projects",
      description: "Websites & applications built",
    },
    {
      icon: Heart,
      number: "100%",
      label: "Commitment",
      description: "Focused on quality & results",
    },
  ];

  /* =========================================================
     HIGHLIGHTS
  ========================================================= */

  const highlights = [
    "Full Stack Development",
    "React.js Development",
    "Node.js & REST APIs",
    "Database Architecture",
    "Responsive UI Development",
    "Performance Optimization",
  ];

  /* =========================================================
     VALUES
  ========================================================= */

  const values = [
    {
      icon: Target,
      title: "Result Driven",
      desc: "I focus on solving real business problems, not just writing code.",
    },
    {
      icon: Zap,
      title: "Performance",
      desc: "Fast, responsive and optimized experiences across devices.",
    },
    {
      icon: Globe2,
      title: "Scalable",
      desc: "Applications designed with maintainability and future growth in mind.",
    },
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Structured, readable and maintainable development practices.",
    },
  ];

  /* =========================================================
     TECHNOLOGY
  ========================================================= */

  const technologies = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MySQL",
    "REST API",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="
        relative
        overflow-hidden
        bg-[#060912]
        py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            -top-40
            -left-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-blue-600/[0.07]
            blur-[120px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            -bottom-40
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-violet-600/[0.07]
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-16
            lg:mb-20
          "
        >
          {/* Label */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
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
              delay: 0.1,
              duration: 0.5,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              py-2
              rounded-full
              bg-blue-500/[0.07]
              border
              border-blue-500/15
              text-blue-400
              text-xs
              sm:text-sm
              font-medium
              mb-5
            "
          >
            <Sparkles size={14} />

            About Me
          </motion.div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[3.4rem]
              font-bold
              tracking-[-0.035em]
              leading-tight
              text-white
            "
          >
            Turning ideas into
            <span
              className="
                block
                mt-1
                bg-gradient-to-r
                from-blue-400
                via-indigo-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              meaningful digital products.
            </span>
          </h2>

          {/* Subtitle */}

          <p
            className="
              mt-5
              text-base
              sm:text-lg
              leading-8
              text-slate-400
              max-w-2xl
              mx-auto
            "
          >
            I enjoy combining thoughtful design, modern
            technologies and clean architecture to build
            digital experiences that are useful, reliable
            and built to grow.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN ABOUT GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.95fr_1.05fr]
            gap-10
            lg:gap-16
            items-start
          "
        >
          {/* =================================================
              LEFT — ABOUT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
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
              duration: 0.8,
              delay: 0.2,
            }}
          >
            {/* Intro Card */}

            <div
              className="
                relative
                rounded-3xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                backdrop-blur-xl
                p-6
                sm:p-8
                overflow-hidden
              "
            >
              {/* Card glow */}

              <div
                className="
                  absolute
                  -top-24
                  -right-24
                  w-48
                  h-48
                  rounded-full
                  bg-blue-500/[0.06]
                  blur-3xl
                  pointer-events-none
                "
              />

              {/* Top line */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-7
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-blue-500/15
                      to-violet-500/15
                      border
                      border-blue-500/10
                      text-blue-400
                    "
                  >
                    <BriefcaseBusiness size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Developer Profile
                    </p>

                    <p className="text-xs text-slate-500 mt-0.5">
                      Design · Development · Problem Solving
                    </p>
                  </div>
                </div>

                <span
                  className="
                    hidden
                    sm:flex
                    items-center
                    gap-2
                    text-xs
                    text-emerald-400
                  "
                >
                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-emerald-400
                      animate-pulse
                    "
                  />

                  Available
                </span>
              </div>

              {/* Heading */}

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  leading-tight
                  text-white
                "
              >
                Building with
                <span className="text-blue-400">
                  {" "}
                  purpose,
                </span>{" "}
                not just technology.
              </h3>

              {/* Paragraph */}

              <p
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  leading-7
                  text-slate-400
                "
              >
                I am a developer who enjoys turning ideas
                into practical digital solutions. My focus
                is on creating applications that are
                visually polished, easy to use and
                technically reliable.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  leading-7
                  text-slate-400
                "
              >
                From interactive React interfaces to
                backend APIs and database-driven systems,
                I enjoy working across the stack and
                understanding how every part of a product
                fits together.
              </p>

              {/* Divider */}

              <div className="h-px bg-white/[0.07] my-7" />

              {/* Highlights */}

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    font-semibold
                    text-slate-500
                    mb-4
                  "
                >
                  What I work with
                </p>

                <div className="flex flex-wrap gap-2">
                  {highlights.map((highlight, index) => (
                    <motion.span
                      key={highlight}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
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
                        delay: 0.45 + index * 0.05,
                      }}
                      whileHover={{
                        y: -2,
                      }}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-lg
                        bg-white/[0.035]
                        border
                        border-white/[0.06]
                        text-xs
                        sm:text-sm
                        text-slate-300
                        hover:text-white
                        hover:border-blue-500/20
                        hover:bg-blue-500/[0.05]
                        transition-all
                        duration-300
                      "
                    >
                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-blue-400
                        "
                      />

                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA */}

              <motion.a
                href="#contact"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  mt-8
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Let's work together

                <ArrowUpRight
                  size={17}
                  className="
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </motion.a>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — STATS + VALUES
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
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
              duration: 0.8,
              delay: 0.3,
            }}
          >
            {/* Stats */}

            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:gap-4
              "
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{
                      opacity: 0,
                      y: 25,
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
                      delay: 0.4 + index * 0.08,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      group
                      relative
                      rounded-2xl
                      p-5
                      sm:p-6
                      bg-white/[0.025]
                      border
                      border-white/[0.07]
                      overflow-hidden
                      transition-colors
                      duration-300
                      hover:border-blue-500/20
                    "
                  >
                    {/* Hover glow */}

                    <div
                      className="
                        absolute
                        -right-10
                        -top-10
                        w-28
                        h-28
                        rounded-full
                        bg-blue-500/[0.05]
                        blur-2xl
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                      "
                    />

                    <div
                      className="
                        relative
                        w-10
                        h-10
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-blue-500/[0.08]
                        border
                        border-blue-500/10
                        text-blue-400
                        mb-5
                      "
                    >
                      <Icon size={19} />
                    </div>

                    <div className="relative">
                      <div
                        className="
                          text-3xl
                          sm:text-4xl
                          font-bold
                          tracking-tight
                          text-white
                        "
                      >
                        {stat.number}
                      </div>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-medium
                          text-slate-300
                        "
                      >
                        {stat.label}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          sm:text-xs
                          leading-5
                          text-slate-500
                        "
                      >
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                VALUES CARD
            ================================================= */}

            <div
              className="
                mt-4
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.02]
                p-5
                sm:p-6
              "
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      text-slate-500
                      font-semibold
                    "
                  >
                    My approach
                  </p>

                  <h3
                    className="
                      mt-1
                      text-lg
                      font-semibold
                      text-white
                    "
                  >
                    How I build
                  </h3>
                </div>

                <div
                  className="
                    w-9
                    h-9
                    rounded-lg
                    bg-violet-500/[0.08]
                    border
                    border-violet-500/10
                    flex
                    items-center
                    justify-center
                    text-violet-400
                  "
                >
                  <Code2 size={17} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {values.map((value, index) => {
                  const Icon = value.icon;

                  return (
                    <motion.div
                      key={value.title}
                      initial={{
                        opacity: 0,
                        scale: 0.95,
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
                        delay: 0.7 + index * 0.08,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="
                        group
                        rounded-xl
                        p-4
                        bg-white/[0.025]
                        border
                        border-white/[0.05]
                        hover:border-white/[0.10]
                        transition-all
                      "
                    >
                      <div className="flex gap-3">
                        <div
                          className="
                            shrink-0
                            w-9
                            h-9
                            rounded-lg
                            flex
                            items-center
                            justify-center
                            bg-blue-500/[0.08]
                            text-blue-400
                            group-hover:bg-blue-500/[0.13]
                            transition-colors
                          "
                        >
                          <Icon size={17} />
                        </div>

                        <div>
                          <h4
                            className="
                              text-sm
                              font-semibold
                              text-slate-200
                            "
                          >
                            {value.title}
                          </h4>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-slate-500
                            "
                          >
                            {value.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            TECHNOLOGY STRIP
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.6,
          }}
          className="
            mt-14
            lg:mt-16
            rounded-2xl
            border
            border-white/[0.06]
            bg-white/[0.02]
            px-5
            py-5
            sm:px-7
            sm:py-6
          "
        >
          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              justify-between
              gap-5
            "
          >
            {/* Label */}

            <div className="flex items-center gap-3">
              <div
                className="
                  w-9
                  h-9
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  bg-blue-500/[0.08]
                  text-blue-400
                "
              >
                <Code2 size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Core Technologies
                </p>

                <p className="text-xs text-slate-500">
                  Tools I use to bring products to life
                </p>
              </div>
            </div>

            {/* Technologies */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    px-3
                    py-1.5
                    rounded-lg
                    bg-white/[0.035]
                    border
                    border-white/[0.06]
                    text-xs
                    font-medium
                    text-slate-400
                    hover:text-slate-200
                    hover:border-blue-500/15
                    transition-all
                  "
                >
                  <CheckCircle2
                    size={12}
                    className="text-blue-400"
                  />

                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

