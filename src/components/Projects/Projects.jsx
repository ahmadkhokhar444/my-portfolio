"use client";
import React from "react";
import Proj1 from "../../assets/proj1.png";
import Proj3 from "../../assets/proj2.png";
import Proj2 from "../../assets/proj3.png";
import Image from "next/image";
import { motion } from "framer-motion";

// Project list with delay per card
const ProjectsData = [
  {
    id: 1,
    title: "Foodie Zone Website",
    link_1: "https://foodiezone-web.netlify.app/",
    link_2: "https://github.com/ahmadkhokhar444/12_ecommerce-web/",
    desc: "A modern restaurant and food delivery website featuring menu browsing, online ordering, and customer reviews.",
    img: Proj1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Space Web",
    link_1: "https://14-space-web.netlify.app/",
    link_2: "https://github.com/ahmadkhokhar444/15_Space_web",
    desc: "An interactive space exploration platform with real-time data, stunning visuals, and educational resources about the universe.",
    img: Proj2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Ecommerce Web",
    link_1: "https://14-ecommerce-store-web.netlify.app/",
    link_2: "https://github.com/ahmadkhokhar444/14_Ecomerce_web/",
    desc: "A full-featured ecommerce website with product listings, shopping cart, secure checkout, and user account management.",
    img: Proj3,
    delay: 0.6,
  },
];

// Slide up animation config
const slideUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Projects = () => {
  return (
    <section className="bg-black text-white">
      {/* Changed py-20 to py-10 (or py-5 for even less space) */}
      <div className="container py-10 xl:py-10 space-y-20">
        {/* heading title */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <p className="text-3xl lg:text-4xl mb-20 tracking-widest font-bold text-center uppercase relative z-20">
            Projects
          </p>
          <p className="text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">
            Projects
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-start">
          {ProjectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={slideUp(project.delay)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-black relative hover:z-10 hover:scale-110
                         border-2 border-red-700 
                         hover:border-red-900
                         hover:red-shadow 
                         p-4 rounded-xl duration-300 group space-y-5"
            >
              <Image src={project.img} alt={project.title} className="w-full" />
              <div className="space-y-2 p-4">
                <h1 className="text-xl font-bold">{project.title}</h1>
                <p>{project.desc}</p>
              </div>
              {/* Button section: Now part of the normal flow, changes max-height on hover */}
              <div
                className="flex justify-around items-center pt-4
                          max-h-0 opacity-0 overflow-hidden
                          group-hover:max-h-40 group-hover:opacity-100
                          transition-all duration-300 ease-out pb-5"
              >
                <a
                  href={project.link_1}
                  className="border-2 border-white px-4 py-2 rounded-lg text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href={project.link_2}
                  className="btn px-4 py-2 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
