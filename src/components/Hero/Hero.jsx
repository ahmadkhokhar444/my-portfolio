"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeroImg from "../../assets/red-man.png";
import Circle from "../../assets/hero-circle.png";
import Wall from "../../assets/hero-wall.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// ✅ Background image config (Next.js compatible)
const wallBackground = {
  backgroundImage: `url(${Wall.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [hasMounted, setHasMounted] = useState(false);

  // ✅ Ensure CountUp only runs on the client
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section
      style={wallBackground}
      className="bg-black text-white min-h-screen w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-gradient-to-b from-primary/50 to-black">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
          {/* Brand info */}
          <div className="flex flex-col justify-center md:text-left py-14 md:py-0">
            <div className="text-center md:text-left space-y-6">
              <p className="text-4xl font-poppins">Hello, I'm </p>
              <p className="text-5xl lg:text-7xl font-satisfy text-outline">
                Brooklyn Gilbert
              </p>
              <p className="text-sm leading-snug">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia sequi itaque dolorum tempora aspernatur a vero
                similique alias quo molestias cum provident eos in
                exercitationem, quod, doloremque, vel doloribus porro.
              </p>
              <button className="btn">Know More</button>

              {/* Stats section */}
              <div className="flex justify-around bg-gradient-to-b from-primary/50 to-black border-2 border-primary/80 rounded-xl hover:red-shadow hover:scale-105 duration-300 md:max-w-[400px] !mt-[44px] p-4">
                {[
                  { label: "Experience", end: 5 },
                  { label: "Projects", end: 199 },
                  { label: "Clients", end: 55 },
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <p className="text-2xl font-bold">
                      {hasMounted && (
                        <CountUp
                          end={stat.end}
                          start={0}
                          suffix="+"
                          delay={1.4}
                          enableScrollSpy
                        />
                      )}
                    </p>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex justify-center md:justify-end items-center relative">
            <div className="bg-black rounded-3xl overflow-hidden h-[500px] flex items-end relative group hover:red-shadow hover:scale-105 duration-700">
              <Image
                src={Circle}
                alt="circle"
                className="absolute top-4 -left-0 -z-0 animate-spin group-hover:animate-pulse duration-300"
              />
              <Image
                src={HeroImg}
                alt="heroImg"
                className="w-[400px] relative z-10 group-hover:grayscale group-hover:scale-90 duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
