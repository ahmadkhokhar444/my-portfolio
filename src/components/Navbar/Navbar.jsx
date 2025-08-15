"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
  },
];
const Navbar = () => {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white">
      <div className="container flex items-center justify-between py-5 relative z-[9999]">
        {/* Logo section */}
        <div>
          <Link href="/">
            <div className="flex items-center">
              <div className="h-[40px] w-[40px] flex justify-center items-center bg-primary rounded-full text-white text-3xl font-bold">
                P
              </div>
              <h1 className="text-3xl font-bold">ortfolio</h1>
            </div>
          </Link>
        </div>
        {/* Links section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            {NavLinks.map((link) => {
              const isActive = pathname === link.link;
              return (
                <li key={link.id}>
                  <Link
                    className={`${isActive
                      ? "text-primary text-xl font-bold hover:text-white"
                      : ""
                      } inline-block text-lg py-1 px-4 hover:red-shadow hover:bg-primary transition-all duration-300 hover:scale-110`}
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <button className="btn">
              <a href="./resume.pdf">Get Resume</a>
            </button>
          </ul>
        </div>
        {/* Mobile menu section */}
        <div className="md:hidden">
          <MdMenu onClick={toggleMenu} className="text-4xl" />
        </div>
        {/* Mobile sidebar section */}
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
