"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { FaGithubSquare, FaPhone, FaRobot } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import {
  FaMapMarkerAlt,
  FaMobile,
  FaLaptopCode,
  FaSearch,
} from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Typewriter from "typewriter-effect";
import ProfileImage from "../card/profile";
import { headlineFont } from "@/lib/fontawesome";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="pt-28 sm:pt-36 mb-20 max-w-[60rem] text-center sm:mb-0 scroll-mt-[90rem]"
    >
      {/* Hero Image with Animation */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="relative">
          <ProfileImage />
        </div>
      </motion.div>

      {/* Team Name & Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-8 space-y-2"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="text-black/80 dark:text-white">
            <span className="relative">
              <span className={`${headlineFont.className} relative z-10`}>Hi, we're IFA Team 👋</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 dark:bg-primary/20 -z-10 transform -rotate-1"></span>
            </span>
          </span>
        </h1>
        <p className={`${headlineFont.className} text-gray-700 dark:text-gray-200 flex items-center justify-center gap-2 text-lg`}>
          <FaMapMarkerAlt className="text-tertiary dark:text-primary " /> Danang, Vietnam
        </p>
      </motion.div>

      {/* Dynamic Headline */}
      <motion.div
        className="mb-6 mt-12 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2
          className={`${headlineFont.className} text-sm sm:text-xl !leading-relaxed font-medium text-gray-700 dark:text-gray-200`}
        >
          <Typewriter
            options={{
              strings: [
                "Crafting Code, Shaping Futures.",
                "Mobile Expertise, Limitless Solutions.",
                "Apps that Power Web & Mobile Worlds.",
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 20,
            }}
          />
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 mb-20 sm:mb-12"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {[
          { icon: <FaMobile className="text-xl" />, text: "Mobile Apps" },
          { icon: <FaLaptopCode className="text-xl" />, text: "Web Solutions" },
          { icon: <FaRobot className="text-xl" />, text: "AI Integration" },
          { icon: <FaSearch className="text-xl" />, text: "SEO Optimize" },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* True Glass card - Very transparent */}
            <div className="glass-card relative overflow-hidden rounded-2xl backdrop-blur-md border transition-all duration-300 hover:backdrop-blur-lg group-hover:border-white/40 dark:group-hover:border-white/20">

              {/* Ultra subtle gradient overlay - barely visible */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 dark:from-white/5 dark:via-transparent dark:to-white/5" />

              {/* Subtle inner highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center p-6 sm:p-8 min-h-[120px] sm:min-h-[140px]">
                {/* Icon with subtle glow */}
                <div className="relative mb-3 sm:mb-4">
                  <div className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300 transform group-hover:scale-105">
                    {service.icon}
                  </div>
                </div>

                {/* Text - contrasted for readability */}
                <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-100 text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {service.text}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* CTA Button */}
      <motion.div
        className="flex flex-col items-center justify-center gap-3 px-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="#contact"
          className="backdrop-blur-[0.5rem] group bg-gradient-to-r from-primary/90 to-primary/50 text-white text-base px-8 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:shadow-lg hover:from-primary hover:to-primary/80 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Start Your Project With Us{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
      {/* Social Links */}
      <motion.div
        className="flex flex-row items-center justify-center gap-3 text-lg font-medium mt-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <a
          className="bg-white p-3 text-gray-700 hover:text-primary flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
          href="https://discord.gg/MdtF7raJ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join us on Discord"
        >
          <BsDiscord className="text-xl" />
        </a>

        <a
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-primary active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
          href="https://github.com/IFA-AP-01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View our GitHub projects"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-primary active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
          href="tel:+84859885874"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Call us"
        >
          <FaPhone />
        </a>
      </motion.div>
    </section>
  );
}
