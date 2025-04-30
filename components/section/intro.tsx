"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  FaMapMarkerAlt,
  FaMobile,
  FaLaptopCode,
  FaCode,
  FaCloudUploadAlt,
  FaSearch
} from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Typewriter from "typewriter-effect";
import ProfileImage from "../card/profile";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-[60rem] text-center sm:mb-0 scroll-mt-[90rem]"
    >
      {/* Hero Image with Animation */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="relative">
          <ProfileImage/>
        </div>
      </motion.div>

      {/* Team Name & Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-8 space-y-2"
      >
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          <span className="text-gray-700 dark:text-gray-200">
            <span className="relative">
              <span className="relative z-10">Hi, we're IFA Team 👋</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 -z-10 transform -rotate-1"></span>
            </span>
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2 text-lg">
          <FaMapMarkerAlt /> Danang, Vietnam
        </p>
      </motion.div>

      {/* Dynamic Headline */}
      <motion.div
        className="mb-10 mt-6 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2
          className="text-sm sm:text-xl !leading-relaxed font-medium text-gray-700 dark:text-gray-200"
          style={{ fontFamily: "Consolas, monospace" }}
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

      {/* Services Highlights */}
      <motion.div
        className="grid grid-cols-4 sm:grid-cols-4 gap-3 px-4 mb-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {[
          { icon: <FaMobile className="text-xl" />, text: "Mobile Apps" },
          { icon: <FaLaptopCode className="text-xl" />, text: "Web Solutions" },
          { icon: <FaCode className="text-xl" />, text: "UX/UI" },
          { icon: <FaSearch className="text-xl" />, text: "SEO Optimize" },
        ].map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/40 shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-blue-500 mb-2">{service.icon}</div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
              {service.text}
            </span>
          </div>
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
          className="group bg-gradient-to-r from-gray-600 to-gray-400 text-white text-base px-8 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:shadow-lg hover:from-gray-700 hover:to-gray-600 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Start Your Project With Us{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
    </section>
  );
}
