import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-28">
      <div className="container">
        <div className="bg-gradient-to-r from-primary/50 to-primary/20 text-white py-12 border-2 border-primary rounded-2xl px-4 hover:red-shadow flex flex-col lg:flex-row gap-8 justify-around items-center duration-300">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">The Coding Journey</h2>
            <p>contact.92ahmadmustafa123@gmail.com</p>
            <p>copyright © 2025 The Coding Journey</p>
          </div>
          <div className="flex items-center gap-3 lg:gap-10">
            <div>
              <a href="#">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>
            <div>
              <a href="#">
                <FaFacebook className="text-4xl" />
              </a>
            </div>
            <div>
              <a href="#">
                <FaInstagram className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
