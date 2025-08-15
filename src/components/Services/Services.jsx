"use client";
import React from "react";
import RedBg from "../../assets/redbg2.png";
import { CiPen } from "react-icons/ci"; // This icon is imported but not used. You can remove it if not needed.
import { RiReactjsLine } from "react-icons/ri";
import { IoCodeSlash } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FiDownload } from "react-icons/fi"; // ✅ MISSING IMPORT: You need to import FiDownload
import { motion } from "framer-motion";

// ✅ Data for services

const ServicesData = [
  {
    id: 1,
    title: "React and Next JS",
    icon: <RiReactjsLine className="text-3xl" />, // Updated icon for React/Next.js
    link: "/services",
    desc: "Building scalable, high-performance web apps with React and Next.js, using component-driven architecture, SSR, routing, and seamless integration with modern APIs and developer tools.",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Web Development",
    icon: <IoCodeSlash className="text-3xl" />, // Updated icon for Web Development
    link: "/services",
    desc: "Professional web development services including custom websites, dynamic web apps, backend integration, responsive layouts, and performance optimization for seamless user experiences across all devices and browsers.",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Web Designing",
    icon: <MdDesignServices className="text-3xl" />, // Updated icon for Web Designing
    link: "/services",
    desc: "Creative web designing focused on modern UI/UX principles, visual aesthetics, intuitive navigation, and branding to deliver engaging, user-friendly interfaces tailored to your business needs.",
    delay: 0.6,
  },
];

// ✅ SlideUp animation variant
export const slideUp = (delay = 0) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

const Services = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${RedBg.src})` }}
    >
      <div className="bg-gradient-to-b from-black to-primary/5 text-white pt-40 min-h-screen">
        <div className="container py-30 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services Info */}
            <div className="flex flex-col justify-center">
              <div className="text-left space-y-7 lg:max-w-[400px]">
                <motion.h1
                  variants={slideUp(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-3xl lg:text-4xl font-bold"
                >
                  Services
                </motion.h1>
                <motion.p
                  variants={slideUp(0.4)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
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
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-center gap-4"
                >
                  {/* Know More button */}
                  <button
                    className="bg-white text-primary rounded font-bold px-5 text-xs py-3 md:text-base
               hover:shadow-[0_0_20px_6px_rgba(239,68,68,0.6)]
               transition-shadow duration-300"
                  >
                    Know More
                  </button>

                  {/* Download Resume button */}
                  <a
                    href="/resume.pdf"
                    download
                    className="border border-white/50 rounded-lg px-4 text-xs md:text-base flex items-center gap-2 md:py-3 hover:bg-white hover:text-primary transition-colors duration-300"
                  >
                    <FiDownload />
                    Download Resume
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Services Cards */}
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ServicesData.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={slideUp(service.delay)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex flex-col gap-4 justify-center items-start p-6 bg-white/20 backdrop-blur-sm rounded-2xl
                               hover:scale-105 transition-transform duration-300
                               hover:shadow-lg hover:red-shadow-card
                              "
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
