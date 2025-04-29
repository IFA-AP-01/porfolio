"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsDiscord } from "react-icons/bs";
import { FaGithubSquare, FaPhone } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import teamImage from "@/public/logo.webp";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-[90rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div>
            <Image
              src={teamImage}
              alt="IFA"
              width="200"
              height="200"
              priority={true}
              className="h-36 w-36 rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

      <motion.h1
        className="mb-2 mt-10 sm:mt-4 px-1 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-gray-800 dark:text-gray-200">
          Hi, we're  <span className="highlight">IFA Team </span>👋
        </span>
      </motion.h1>
      <span className="text-gray-700 dark:text-gray-200">Danang, Vietnam</span>
      <motion.h2
        className="mb-10 mt-8 sm:mt-8 px-4 text-md font-medium !leading-[1.5] sm:text-xl text-gray-700 dark:text-gray-200"
        style={{ fontFamily: "Consolas, monospace" }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Typewriter
          options={{
            strings: [
              "Building Apps for Web & Mobile Vibes.",
              "Crafting Code, Shaping Futures.",
              "Mobile Expertise, Limitless Solutions.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.h2>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white text-sm px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact us{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://discord.gg/MdtF7raJ"
          target="_blank"
        >
          <BsDiscord />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/IFA-AP-01"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="tel:+84859885874"
          target="_blank"
        >
          <FaPhone />
        </a>
      </motion.div>
    </section>
  );
}
