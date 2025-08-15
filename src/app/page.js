"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";

export const slideUp = (delay = 0) => ({
  initial: {
    y: 50, // ✅ Fix: not `h`
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const page = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <Services />
      <Projects />
      <ContactForm />
    </main>
  );
};

export default page;
