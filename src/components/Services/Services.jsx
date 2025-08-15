"use client";
import React from "react";
import RedBg from "../../assets/redbg2.png";
import { RiReactjsLine } from "react-icons/ri";
import { IoCodeSlash } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// ✅ Services Data
const ServicesData = [
  {
    id: 1,
    title: "React and Next JS",
    icon: <RiReactjsLine className="text-3xl" />,
    desc: "Building scalable, high-performance web apps with React and Next.js, using component-driven architecture, SSR, routing, and seamless integration with modern APIs and developer tools.",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Web Development",
    icon: <IoCodeSlash className="text-3xl" />,
    desc: "Professional web development services including custom websites, dynamic web apps, backend integration, responsive layouts, and performance optimization for seamless user experiences across all devices and browsers.",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Web Designing",
    icon: <MdDesignServices className="text-3xl" />,
    desc: "Creative web designing focused on modern UI/UX principles, visual aesthetics, intuitive navigation, and branding to deliver engaging, user-friendly interfaces tailored to your business needs.",
    delay: 0.6,
  },
];

// ✅ Animation variant
export const slideUp = (delay = 0) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Services = () => {
  const scrollToHero = () => {
    const el = document.getElementById("hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${RedBg.src})` }}
    >
      <div className="bg-gradient-to-b from-black to-primary/5 text-white pt-40 min-h-screen">
        <div className="container py-30 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Info */}
            <div className="flex flex-col justify-center">
              <div className="text-left space-y-7 lg:max-w-[400px]">
                <motion.h1
                  variants={slideUp(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-3xl lg:text-4xl font-bold"
                >
                  Services
                </motion.h1>

                <motion.p
                  variants={slideUp(0.4)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-white/70"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, distinctio alias, cupiditate minus at dolorem vel
                  adipisci eveniet, rem vitae veritatis iure laborum
                  necessitatibus.
                </motion.p>

                <motion.div
                  variants={slideUp(0.6)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-center gap-4"
                >
                  {/* Know More */}
                  <button
                    type="button"
                    onClick={scrollToHero}
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition duration-300"
                  >
                    Know More
                  </button>

                  {/* ✅ Unified Resume Button */}
                 

                  <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-block text-lg py-1 px-4 transition-all duration-300 hover:scale-110"
              >
              <FiDownload className="text-lg" />
                Download Resume
              </a>
                </motion.div>
              </div>
            </div>

            {/* Service Cards */}
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ServicesData.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={slideUp(service.delay)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col gap-4 justify-center items-start p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:red-shadow-card"
                  >
                    <div className="text-primary/80 bg-white/70 rounded-full p-2">
                      {service.icon}
                    </div>
                    <h1 className="text-2xl font-bold">{service.title}</h1>
                    <p className="text-sm text-white/70">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
