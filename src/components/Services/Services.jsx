"use client";
import React from "react";
import RedBg from "../../assets/redbg2.png";
import { CiPen } from "react-icons/ci";
import { IoFolderOpen } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Website Development",
    icon: <CiPen className="text-3xl" />,
    link: "/services",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    delay: 1.2,
  },
  {
    id: 2,
    title: "Web Development",
    icon: <IoFolderOpen className="text-3xl" />,
    link: "/services",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    delay: 1.6,
  },
  {
    id: 3,
    title: "App Development",
    icon: <RiComputerFill className="text-3xl" />,
    link: "/services",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    delay: 2,
  },
];

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
                <h1 className="text-3xl lg:text-4xl font-bold">Services</h1>
                <p className="text-white/70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, distinctio alias, cupiditate minus at dolorem vel
                  adipisci eveniet, rem vitae veritatis iure laborum
                  necessitatibus.
                </p>
                <div className="flex items-center gap-4">
                  <button className="bg-white text-primary rounded font-bold px-5 text-xs py-3 md:text-base hover:red-shadow">
                    Know More
                  </button>
                  <button className="border border-white/50 rounded-lg px-4 text-xs md:text-base flex items-center gap-2 md:py-3">
                    <FiDownload />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
            {/* Services Cards could go here */}
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ServicesData.map((service) => {
                  return (
                    <motion.div className="flex flex-col gap-4 justify-center items-start p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <div className="text-primary/80 bg-white/70 rounded-full p-2">
                        {service.icon}
                      </div>
                      <h1 className="text-2xl font-bold">{service.title}</h1>
                      <p className="text-sm text-white/70">{service.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
