"use client";
import React from "react";
import Proj6 from "../../assets/proj4.png";
import Proj5 from "../../assets/proj5.png";
import Proj7 from "../../assets/proj7.png";
import Image from "next/image";
import { motion } from "framer-motion";

// Project list with delay per card
const ProjectsData = [
  {
    id: 2,
    title: "Ecommerce Web",
    link_1: "https://11-ecommerce-web.netlify.app/",
    link_2: "https://github.com/ahmadkhokhar444/12_ecommerce-web",
    desc: "A full-featured ecommerce website with product listings, shopping cart, secure checkout, and user account management.",
    img: Proj5,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Omnifood Web",
    link_1: "https://omnifood-js-proj.netlify.app/",
    link_2:
      "https://github.com/ahmadkhokhar444/Build-Responsive-Real-World-Websites-with-HTML-and-CSS-Pracice-FROM-ME/",
    desc: "A full-featured Food Restaurant website with different types of food, secure checkout, and user account management.",
    img: Proj6,
    delay: 0.6,
  },
  {
    id: 4,
    title: "Sailor Website Bootstrap",
    link_1: "https://ahmadwebmanproj2.netlify.app/",
    link_2: "https://github.com/ahmadkhokhar444/Sailor",
    desc: "A full-featured ecommerce company website with product listings, shopping cart, secure checkout and user account management.",
    img: Proj7,
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

const Projects2 = () => {
  return (
    <section className="bg-black text-white">
      {/* Changed py-20 xl:py-36 to py-10 xl:py-10 */}
      <div className="container py-10 xl:py-10 space-y-36">
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
              <Image
                src={project.img}
                alt={project.title}
                className="w-full h-44"
              />
              <div className="space-y-2 p-4">
                <h1 className="text-xl font-bold">{project.title}</h1>
                <p>{project.desc}</p>
              </div>
              {/* Button section: Now part of the normal flow, changes max-height on hover */}
              <div
                className="flex justify-around items-center pt-4
            max-h-0 opacity-0 overflow-hidden
            group-hover:max-h-40 group-hover:opacity-100
            transition-all duration-300 ease-out pb-20" /* Changed pb-5 to pb-20, and removed mb-20 */
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

export default Projects2;
