
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Cloud,
  ShieldCheck,
  ArrowUpRight,
  Check,
  Globe2,
  Zap,
  Sparkles,
} from "lucide-react";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    shortTitle: "Web Apps",
    description:
      "Modern, responsive web applications engineered for performance, usability and long-term scalability.",
    gradient: "from-blue-500 to-cyan-400",
    glow: "bg-blue-500",
    features: [
      "React.js",
      "Node.js",
      "REST APIs",
      "Scalable Architecture",
    ],
  },

  {
    number: "02",
    icon: Palette,
    title: "UI / UX Development",
    shortTitle: "UI / UX",
    description:
      "Clean and intuitive interfaces designed to make complex products feel simple, engaging and easy to use.",
    gradient: "from-indigo-500 to-violet-400",
    glow: "bg-indigo-500",
    features: [
      "Responsive UI",
      "Design Systems",
      "Micro Interactions",
      "Prototyping",
    ],
  },

  {
    number: "03",
    icon: Database,
    title: "Backend Development",
    shortTitle: "Backend",
    description:
      "Reliable server-side systems, APIs and database solutions built around security, performance and maintainability.",
    gradient: "from-emerald-500 to-teal-400",
    glow: "bg-emerald-500",
    features: [
      "Node.js",
      "Express.js",
      "MySQL",
      "API Integration",
    ],
  },

  {
    number: "04",
    icon: Smartphone,
    title: "Responsive Experiences",
    shortTitle: "Responsive",
    description:
      "Web experiences that adapt beautifully across desktops, tablets and mobile devices without compromising usability.",
    gradient: "from-orange-500 to-amber-400",
    glow: "bg-orange-500",
    features: [
      "Mobile First",
      "Cross Browser",
      "PWA",
      "Accessibility",
    ],
  },

  {
    number: "05",
    icon: Cloud,
    title: "Deployment & Cloud",
    shortTitle: "Cloud",
    description:
      "Production-ready deployment workflows designed to keep applications reliable, accessible and easy to maintain.",
    gradient: "from-cyan-500 to-blue-500",
    glow: "bg-cyan-500",
    features: [
      "Cloud Deployment",
      "CI / CD",
      "Vercel",
      "Server Setup",
    ],
  },

  {
    number: "06",
    icon: ShieldCheck,
    title: "Security & Optimization",
    shortTitle: "Optimization",
    description:
      "Improving application security, loading speed, technical quality and overall performance for better user experiences.",
    gradient: "from-violet-500 to-purple-400",
    glow: "bg-violet-500",
    features: [
      "Security",
      "Performance",
      "SEO",
      "Testing",
    ],
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const Icon = service.icon;

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
        ease: "easeOut",
      }}
      whileHover={{
        y: -7,
      }}
      className="
        group
        relative
        h-full
        rounded-2xl
        overflow-hidden
      "
    >
      {/* ===================================================
          CARD BORDER
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          rounded-2xl
          bg-gradient-to-br
          from-white/[0.10]
          via-white/[0.04]
          to-white/[0.02]
        "
      />

      {/* ===================================================
          CARD CONTENT
      =================================================== */}

      <div
        className="
          relative
          h-full
          rounded-2xl
          bg-[#090e1a]
          border
          border-white/[0.07]
          p-6
          sm:p-7
          overflow-hidden
        "
      >
        {/* =================================================
            AMBIENT GLOW
        ================================================= */}

        <div
          className={`
            absolute
            -top-24
            -right-24
            w-48
            h-48
            rounded-full
            ${service.glow}
            opacity-0
            blur-[80px]
            group-hover:opacity-[0.12]
            transition-opacity
            duration-700
            pointer-events-none
          `}
        />

        {/* =================================================
            TOP ROW
        ================================================= */}

        <div className="flex items-start justify-between">
          {/* Icon */}

          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 3,
            }}
            transition={{
              duration: 0.25,
            }}
            className={`
              relative
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-xl
              flex
              items-center
              justify-center
              bg-gradient-to-br
              ${service.gradient}
              shadow-lg
            `}
          >
            <Icon
              size={24}
              strokeWidth={1.8}
              className="text-white"
            />

            {/* Icon shine */}

            <div
              className="
                absolute
                inset-0
                rounded-xl
                bg-white/10
                opacity-0
                group-hover:opacity-100
                transition-opacity
              "
            />
          </motion.div>

          {/* Number */}

          <span
            className="
              text-xs
              font-semibold
              tracking-[0.2em]
              text-slate-600
              group-hover:text-slate-400
              transition-colors
            "
          >
            {service.number}
          </span>
        </div>

        {/* =================================================
            TITLE
        ================================================= */}

        <div className="mt-7">
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.18em]
              font-semibold
              text-slate-500
              mb-2
            "
          >
            {service.shortTitle}
          </p>

          <h3
            className="
              text-xl
              sm:text-[1.35rem]
              font-bold
              tracking-tight
              text-white
              group-hover:text-slate-100
              transition-colors
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-slate-400
            "
          >
            {service.description}
          </p>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          className="
            h-px
            bg-white/[0.06]
            my-6
            group-hover:bg-white/[0.10]
            transition-colors
          "
        />

        {/* =================================================
            FEATURES
        ================================================= */}

        <div className="space-y-2.5">
          {service.features.map((feature, featureIndex) => (
            <motion.div
              key={feature}
              initial={{
                opacity: 0,
                x: -8,
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
                delay:
                  0.25 +
                  index * 0.08 +
                  featureIndex * 0.04,
              }}
              className="
                flex
                items-center
                gap-2.5
                text-xs
                sm:text-sm
                text-slate-400
              "
            >
              <span
                className="
                  w-5
                  h-5
                  shrink-0
                  rounded-full
                  bg-white/[0.04]
                  border
                  border-white/[0.06]
                  flex
                  items-center
                  justify-center
                  group-hover:border-blue-500/20
                  group-hover:bg-blue-500/[0.06]
                  transition-all
                "
              >
                <Check
                  size={11}
                  className="text-blue-400"
                />
              </span>

              {feature}
            </motion.div>
          ))}
        </div>

        {/* =================================================
            BOTTOM ACTION
        ================================================= */}

        <div className="mt-7">
          <a
            href="#contact"
            className="
              group/action
              inline-flex
              items-center
              gap-2
              text-xs
              sm:text-sm
              font-semibold
              text-slate-400
              hover:text-white
              transition-colors
            "
          >
            Discuss a project

            <ArrowUpRight
              size={16}
              className="
                text-blue-400
                transition-transform
                duration-300
                group-hover/action:translate-x-1
                group-hover/action:-translate-y-1
              "
            />
          </a>
        </div>

        {/* =================================================
            BOTTOM GRADIENT LINE
        ================================================= */}

        <div
          className={`
            absolute
            bottom-0
            left-0
            right-0
            h-[2px]
            bg-gradient-to-r
            ${service.gradient}
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
   SERVICES SECTION
========================================================= */

const Services = () => {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="services"
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

        {/* Left Glow */}

        <div
          className="
            absolute
            top-1/4
            -left-48
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/[0.06]
            blur-[130px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            bottom-1/4
            -right-48
            w-[500px]
            h-[500px]
            rounded-full
            bg-violet-600/[0.06]
            blur-[130px]
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

            What I Do
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
            From concept to
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
              {" "}
              production.
            </span>
          </h2>

          {/* Description */}

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
            I help turn ideas into polished digital
            products through thoughtful design,
            reliable engineering and modern technology.
          </p>
        </motion.div>

        {/* =================================================
            SERVICES GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-5
            lg:gap-6
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM TRUST STRIP
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
            delay: 0.8,
            duration: 0.6,
          }}
          className="
            mt-12
            lg:mt-14
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
              sm:flex-row
              sm:items-center
              justify-between
              gap-5
            "
          >
            {/* Left */}

            <div className="flex items-center gap-3">
              <div
                className="
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
                "
              >
                <Zap size={18} />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Built for real-world results
                </p>

                <p
                  className="
                    text-xs
                    text-slate-500
                    mt-0.5
                  "
                >
                  Performance, usability and scalability
                  come first.
                </p>
              </div>
            </div>

            {/* Right */}

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {[
                "Clean Architecture",
                "Responsive",
                "Performance",
                "Scalable",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-1.5
                    rounded-lg
                    bg-white/[0.035]
                    border
                    border-white/[0.06]
                    text-[11px]
                    sm:text-xs
                    font-medium
                    text-slate-400
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

