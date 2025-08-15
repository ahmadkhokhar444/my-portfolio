"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import HeroImg from "../../assets/red-man.png";
import Circle from "../../assets/hero-circle.png";
import Wall from "../../assets/hero-wall.png";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

// ✅ Background image config (Next.js compatible)
const wallBackground = {
  backgroundImage: `url(${Wall.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

// ✅ Framer motion variant for scroll-triggered animation
export const slideUp = (delay = 0) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

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
              <motion.p
                variants={slideUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="text-4xl font-poppins"
              >
                Hello, I'm{" "}
              </motion.p>

              <motion.p
                variants={slideUp(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="text-5xl lg:text-7xl font-satisfy text-outline"
              >
                Ahmad Mustafa
              </motion.p>

              <motion.p
                variants={slideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="text-sm leading-snug"
              >
                A professional frontend developer crafts responsive,
                user-friendly web interfaces using modern frameworks, ensures
                cross-browser compatibility, optimizes performance, and
                collaborates with designers to deliver seamless digital
                experiences.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={slideUp(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="flex gap-4 justify-center md:justify-start"
              >
                <button className="btn">Know More</button>
                <a
                  href="/resume.pdf"
                  download
                  className="btn bg-white text-black hover:bg-gray-200 transition-all duration-300"
                >
                  Download Resume
                </a>
              </motion.div>

              {/* Stats section */}
              <motion.div
                ref={statsRef}
                variants={slideUp(1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="flex justify-around bg-gradient-to-b from-primary/50 to-black border-2 border-primary/80 rounded-xl hover:red-shadow hover:scale-105 duration-300 md:max-w-[400px] !mt-[44px] p-4"
              >
                {[
                  { label: "Experience", end: 5 },
                  { label: "Projects", end: 199 },
                  { label: "Clients", end: 55 },
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <p className="text-2xl font-bold">
                      {hasMounted && statsInView && (
                        <CountUp
                          start={0}
                          end={stat.end}
                          suffix="+"
                          delay={2.5}
                        />
                      )}
                    </p>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
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
