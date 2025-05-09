"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import teamImage from "@/public/logo.webp";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        theme === "light" ? "#faf8f1" : "#131313"
      );
    }
  }, [theme]);

  return (
    <header className="z-[999] relative">
      <Link href="/">
        <Image
          src={teamImage}
          alt="IFA"
          width="50"
          height="50"
          priority={true}
          className="w-10 object-cover fixed top-5 left-5 z-1000 hidden  sm:inline-flex"
        />
      </Link>
      <motion.div
        className="fixed bottom-8 sm:top-4 left-1/2 h-16 w-[90%] max-w-[30rem] rounded-full border border-gray-300 border-opacity-40 bg-white bg-opacity-70 shadow-lg backdrop-blur-[0.5rem] sm:bottom-6 sm:h-16 sm:w-[100%] sm:max-w-[38rem] dark:border-black/20 dark:bg-black/30 dark:bg-opacity-70"
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        className="fixed bottom-8 sm:top-4 left-1/2 flex h-16 w-[100%] max-w-[36rem] -translate-x-1/2 items-center justify-center sm:bottom-6 sm:h-16 sm:w-[100%] sm:max-w-[40rem]"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <ul className="flex w-full items-center justify-evenly gap-1 px-6 text-[0.9rem] font-medium text-gray-500 sm:gap-2 sm:px-2 sm:flex-nowrap sm:justify-center">
          {links.map((link) => (
            <motion.li
              className="h-4/4 flex items-center justify-center relative px-1"
              key={link.hash}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-200 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-white":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <span className="sm:hidden">
                  <FontAwesomeIcon icon={link.icon} />
                </span>
                <span className="hidden sm:inline-flex items-center gap-2 text-gray-700 dark:text-white hover:scale-[1.15] active:scale-105 transition-all">
                  {link.name === activeSection && (
                    <FontAwesomeIcon icon={link.icon} />
                  )}
                  {link.name}
                </span>

                {link.name === activeSection && (
                  <motion.span
                    className="bg-black/10 rounded-full absolute inset-0 -z-10 dark:bg-white/10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
          <motion.li
              className="h-4/4 flex items-center justify-center relative px-4 hidden sm:inline-flex"
              key="theme"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
            <button
                  className="fixed w-[3rem] h-[3rem] text-gray-700 dark:text-white rounded-full flex items-center justify-center hover:scale-[1.2] active:scale-105 transition-all"
                  onClick={toggleTheme}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  {theme === "light" ? <BsSun /> : <BsMoon />}
                </button>
            </motion.li>
        </ul>
      </nav>
    </header>
  );
}
