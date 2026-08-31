
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Terminal,
  Layers3,
  Check,
  Sparkles,
  ArrowUpRight,
  Cpu,
  Braces,
} from "lucide-react";

/* =========================================================
   SKILL DATA
========================================================= */

const skillCategories = [
  {
    id: "frontend",
    icon: Code2,
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, interactive and accessible interfaces with modern frontend technologies.",
    gradient: "from-blue-500 to-cyan-400",
    technologies: [
      {
        name: "React.js",
        level: "Advanced",
        description: "Component-based UI development",
      },
      {
        name: "JavaScript",
        level: "Advanced",
        description: "Modern ES6+ development",
      },
      {
        name: "HTML5",
        level: "Advanced",
        description: "Semantic web structure",
      },
      {
        name: "CSS3",
        level: "Advanced",
        description: "Modern responsive styling",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        description: "Utility-first UI development",
      },
      {
        name: "Redux",
        level: "Advanced",
        description: "Application state management",
      },
    ],
  },

  {
    id: "backend",
    icon: Server,
    number: "02",
    title: "Backend Development",
    description:
      "Developing secure APIs and backend systems that power reliable web applications.",
    gradient: "from-emerald-500 to-teal-400",
    technologies: [
      {
        name: "Node.js",
        level: "Advanced",
        description: "Server-side JavaScript",
      },
      {
        name: "Express.js",
        level: "Advanced",
        description: "REST API development",
      },
      {
        name: "REST APIs",
        level: "Advanced",
        description: "API architecture & integration",
      },
      {
        name: "Authentication",
        level: "Advanced",
        description: "Secure user authentication",
      },
      {
        name: "JWT",
        level: "Advanced",
        description: "Token-based authorization",
      },
    ],
  },

  {
    id: "database",
    icon: Database,
    number: "03",
    title: "Database & Data",
    description:
      "Designing structured data systems with a focus on reliability, relationships and performance.",
    gradient: "from-violet-500 to-indigo-400",
    technologies: [
      {
        name: "MySQL",
        level: "Intermediate",
        description: "Relational database systems",
      },
      {
        name: "MongoDB",
        level: "Advanced",
        description: "NoSQL database development",
      },
      {
        name: "SQL",
        level: "Advanced",
        description: "Queries & data management",
      },
      {
        name: "Database Design",
        level: "Intermediate",
        description: "Schema & relationships",
      },
      {
        name: "Mongoose",
        level: "Intermediate",
        description: "MongoDB data modeling",
      },
    ],
  },

  {
    id: "tools",
    icon: GitBranch,
    number: "04",
    title: "Tools & Workflow",
    description:
      "Using modern development tools to manage, test, debug and deploy applications efficiently.",
    gradient: "from-orange-500 to-amber-400",
    technologies: [
      {
        name: "Git",
        level: "Advanced",
        description: "Version control",
      },
      {
        name: "GitHub",
        level: "Advanced",
        description: "Code collaboration",
      },
      {
        name: "VS Code",
        level: "Advanced",
        description: "Development environment",
      },
      {
        name: "Postman",
        level: "Advanced",
        description: "API testing",
      },
      {
        name: "Docker",
        level: "Intermediate",
        description: "Containerized development",
      },
    ],
  },
];

/* =========================================================
   TECHNOLOGY ITEM
========================================================= */

const TechnologyItem = ({
  technology,
  index,
  gradient,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -8,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
      }}
      whileHover={{
        x: 3,
      }}
      className="
        group/item
        flex
        items-center
        justify-between
        gap-4
        px-3
        py-3
        rounded-xl
        bg-white/[0.02]
        border
        border-white/[0.05]
        hover:border-white/[0.10]
        hover:bg-white/[0.035]
        transition-all
        duration-300
      "
    >
      {/* Left */}

      <div className="flex items-center gap-3 min-w-0">
        <div
          className={`
            w-8
            h-8
            shrink-0
            rounded-lg
            bg-gradient-to-br
            ${gradient}
            opacity-80
            flex
            items-center
            justify-center
          `}
        >
          <Check
            size={14}
            className="text-white"
            strokeWidth={2.5}
          />
        </div>

        <div className="min-w-0">
          <p
            className="
              text-sm
              font-semibold
              text-slate-200
              truncate
              group-hover/item:text-white
              transition-colors
            "
          >
            {technology.name}
          </p>

          <p
            className="
              text-[10px]
              sm:text-[11px]
              text-slate-500
              truncate
              mt-0.5
            "
          >
            {technology.description}
          </p>
        </div>
      </div>

      {/* Level */}

      <span
        className="
          shrink-0
          text-[10px]
          sm:text-[11px]
          font-medium
          text-slate-500
          px-2
          py-1
          rounded-md
          bg-white/[0.03]
          border
          border-white/[0.05]
        "
      >
        {technology.level}
      </span>
    </motion.div>
  );
};

/* =========================================================
   CATEGORY CARD
========================================================= */

const SkillCategory = ({
  category,
  index,
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const Icon = category.icon;

  return (
    <motion.article
      ref={ref}
      initial={{
        opacity: 0,
        y: 35,
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
        duration: 0.65,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        rounded-2xl
        overflow-hidden
      "
    >
      {/* Outer border */}

      <div
        className="
          absolute
          inset-0
          rounded-2xl
          bg-gradient-to-br
          from-white/[0.09]
          to-white/[0.02]
        "
      />

      {/* Card */}

      <div
        className="
          relative
          h-full
          rounded-2xl
          bg-[#090e1a]
          border
          border-white/[0.07]
          p-5
          sm:p-6
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            -top-20
            -right-20
            w-40
            h-40
            rounded-full
            bg-blue-500/[0.05]
            blur-[70px]
            group-hover:bg-blue-500/[0.09]
            transition-colors
            duration-700
            pointer-events-none
          "
        />

        {/* =================================================
            CARD HEADER
        ================================================= */}

        <div className="flex items-start justify-between">
          <div
            className="
              w-12
              h-12
              rounded-xl
              flex
              items-center
              justify-center
              bg-white/[0.04]
              border
              border-white/[0.07]
              text-blue-400
              group-hover:border-blue-500/20
              group-hover:bg-blue-500/[0.07]
              transition-all
              duration-300
            "
          >
            <Icon size={22} />
          </div>

          <span
            className="
              text-xs
              font-semibold
              tracking-[0.18em]
              text-slate-600
              group-hover:text-slate-400
              transition-colors
            "
          >
            {category.number}
          </span>
        </div>

        {/* Title */}

        <h3
          className="
            mt-6
            text-lg
            sm:text-xl
            font-bold
            tracking-tight
            text-white
          "
        >
          {category.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-2.5
            text-sm
            leading-6
            text-slate-500
          "
        >
          {category.description}
        </p>

        {/* Divider */}

        <div
          className="
            h-px
            bg-white/[0.06]
            my-5
          "
        />

        {/* Technologies */}

        <div className="space-y-2">
          {category.technologies.map(
            (technology, technologyIndex) => (
              <TechnologyItem
                key={technology.name}
                technology={technology}
                index={technologyIndex}
                gradient={category.gradient}
              />
            )
          )}
        </div>

        {/* Bottom line */}

        <div
          className={`
            absolute
            bottom-0
            left-0
            right-0
            h-[2px]
            bg-gradient-to-r
            ${category.gradient}
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
          `}
        />
      </div>
    </motion.article>
  );
};

/* =========================================================
   SKILLS SECTION
========================================================= */

const Skills = () => {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#060912]
        py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

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

        {/* Blue glow */}

        <div
          className="
            absolute
            top-1/4
            -left-56
            w-[550px]
            h-[550px]
            rounded-full
            bg-blue-600/[0.055]
            blur-[140px]
          "
        />

        {/* Violet glow */}

        <div
          className="
            absolute
            bottom-1/4
            -right-56
            w-[550px]
            h-[550px]
            rounded-full
            bg-violet-600/[0.055]
            blur-[140px]
          "
        />
      </div>

      {/* ===================================================
          CONTAINER
      =================================================== */}

      <div
        ref={containerRef}
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
        {/* =================================================
            HEADER
        ================================================= */}

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
            mb-14
            lg:mb-18
          "
        >
          {/* Badge */}

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

            Skills & Expertise
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
            The tools behind
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
              the work.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-base
              sm:text-lg
              leading-8
              text-slate-400
            "
          >
            A practical technology stack focused on
            building maintainable, scalable and
            high-quality digital products.
          </p>
        </motion.div>

        {/* =================================================
            CORE STACK OVERVIEW
        ================================================= */}

        <motion.div
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
            delay: 0.25,
          }}
          className="
            mb-10
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            p-5
            sm:p-6
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              justify-between
              gap-6
            "
          >
            {/* Left */}

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
                  from-blue-500/10
                  to-violet-500/10
                  border
                  border-blue-500/10
                  text-blue-400
                "
              >
                <Cpu size={20} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.16em]
                    font-semibold
                    text-slate-500
                  "
                >
                  Primary Stack
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Technologies I use regularly
                </p>
              </div>
            </div>

            {/* Stack */}

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {[
                "React.js",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MySQL",
                "MongoDB",
                "Tailwind CSS",
                "Git",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    px-3
                    py-1.5
                    rounded-lg
                    bg-white/[0.035]
                    border
                    border-white/[0.06]
                    text-xs
                    font-medium
                    text-slate-400
                    hover:text-white
                    hover:border-blue-500/20
                    hover:bg-blue-500/[0.05]
                    transition-all
                  "
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =================================================
            SKILL CATEGORIES
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            lg:gap-6
          "
        >
          {skillCategories.map(
            (category, index) => (
              <SkillCategory
                key={category.id}
                category={category}
                index={index}
              />
            )
          )}
        </div>

        {/* =================================================
            DEVELOPMENT PHILOSOPHY
        ================================================= */}

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
            delay: 0.65,
            duration: 0.6,
          }}
          className="
            relative
            mt-10
            rounded-2xl
            overflow-hidden
            border
            border-white/[0.07]
            bg-white/[0.02]
          "
        >
          {/* Background glow */}

          <div
            className="
              absolute
              -right-24
              -top-24
              w-64
              h-64
              rounded-full
              bg-blue-500/[0.06]
              blur-[100px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              lg:flex-row
              lg:items-center
              justify-between
              gap-8
              p-6
              sm:p-8
            "
          >
            {/* Text */}

            <div className="max-w-xl">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-blue-400
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                "
              >
                <Braces size={14} />

                Development Philosophy
              </div>

              <h3
                className="
                  mt-3
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-white
                "
              >
                Technology is a tool.
                <span className="text-slate-400">
                  {" "}
                  The real goal is solving the problem.
                </span>
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                I focus on choosing the right technology
                for each project instead of using tools
                simply because they are popular. Clean
                architecture, usability and long-term
                maintainability guide my development
                decisions.
              </p>
            </div>

            {/* Principles */}

            <div
              className="
                grid
                grid-cols-2
                gap-2
                sm:gap-3
                shrink-0
              "
            >
              {[
                {
                  icon: Layers3,
                  text: "Scalable",
                },
                {
                  icon: Terminal,
                  text: "Maintainable",
                },
                {
                  icon: ShieldCheckIcon,
                  text: "Reliable",
                },
                {
                  icon: ZapIcon,
                  text: "Efficient",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="
                      min-w-[125px]
                      px-4
                      py-3
                      rounded-xl
                      bg-white/[0.025]
                      border
                      border-white/[0.06]
                    "
                  >
                    <Icon
                      size={17}
                      className="text-blue-400 mb-2"
                    />

                    <p
                      className="
                        text-xs
                        font-medium
                        text-slate-300
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 0.9,
          }}
          className="
            mt-10
            flex
            justify-center
          "
        >
          <a
            href="#projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-slate-400
              hover:text-white
              transition-colors
            "
          >
            See how I use these skills in real projects

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
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   SMALL ICON COMPONENTS
========================================================= */

const ShieldCheckIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ZapIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z" />
  </svg>
);

export default Skills;

