"use client";
import React from "react";
import BannerImg from "../../assets/man2.png";
import Grains from "../../assets/grains.png";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

// ✅ Scroll animation variants
export const slideUp = (delay = 0) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

const bgGrains = {
  backgroundImage: `url(${Grains.src})`,
  backgroundPosition: "center",
};

const Banner = () => {
  return (
    <section className="bg-black text-white">
      <div className="container">
        <div
          style={bgGrains}
          className="bg-gray-950 rounded-3xl py-14 px-5 grid grid-cols-1 md:grid-cols-2 space-y-2 md:space-y-0 translate-y-36"
        >
          {/* Banner Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideUp(0.3)}
            className="flex items-end"
          >
            <Image
              src={BannerImg}
              alt="banner"
              className="w-[300px] lg:w-[400px]"
            />
          </motion.div>

          {/* Banner Info */}
          <div className="flex flex-col justify-center">
            <div className="text-left space-y-7 lg:max-w-[400px]">
              <motion.h1
                variants={slideUp(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="text-3xl lg:text-4xl font-bold"
              >
                I am a Frontend Developer
              </motion.h1>

              <motion.p
                variants={slideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="text-white/70"
              >
                A professional frontend developer builds responsive,
                user-focused web interfaces, optimizes performance, ensures
                cross-browser compatibility, and collaborates with designers to
                deliver seamless digital experiences.
              </motion.p>

              <motion.div
                variants={slideUp(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="flex items-center gap-4"
              >
                <button className="btn text-xs py-3 md:text-base">
                  Know More
                </button>
                <button className="border border-white/50 rounded-lg px-4 text-xs md:text-base flex items-center gap-2 md:py-3">
                  <FiDownload />
                  Download Resume
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
