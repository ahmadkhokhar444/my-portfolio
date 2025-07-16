import React from "react";
import { NavLinks } from "./Navbar";
import Link from "next/link";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div className="md:hidden">
      <div
        className={`fixed top-0 ${
          showMenu ? "left-0" : "-left-full"
        } z-[999] bg-black text-white h-screen w-[75%] pt-20 pl-10 duration-300 rounded-r-xl shadow-md flex flex-col justify-between`}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowMenu(false)}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          ✕
        </button>

        {/* Menu section */}
        <div>
          <ul>
            {NavLinks.map((link) => (
              <li key={link.id} className="py-6">
                <Link
                  href={link.link}
                  onClick={() => setShowMenu(false)}
                  className="text-2xl font-medium text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer section */}
        <div className="pb-6 pr-4 text-sm text-white/60">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://www.youtube.com/@AhmadKhokhar_444"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              AK47
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
