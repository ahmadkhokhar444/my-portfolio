"use client";
import React from "react";
import BannerImg from "../../assets/man2.png";
import Grains from "../../assets/grains.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

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
          <div className="flex items-end">
            <Image
              src={BannerImg}
              alt="banner"
              className="w-[300px] lg:w-[400px]"
            />
          </div>
          {/* Banner Info */}
          <div className="flex flex-col justify-center">
            <div className="text-left space-y-7 lg:max-w-[400px]">
              <h1 className="text-3xl lg:text-4xl font-bold">
                I am a Full Stack Developer
              </h1>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, distinctio alias, cupiditate minus at dolorem vel
                adipisci eveniet, rem vitae veritatis iure laborum
                necessitatibus.
              </p>
              <div className="flex items-center gap-4">
                <button className="btn text-xs py-3 md:text-base">
                  Know More
                </button>
                <button className="border border-white/50 rounded-lg px-4 text-xs md:text-base flex items-center gap-2 md:py-3">
                  <FiDownload />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
