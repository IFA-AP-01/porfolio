"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28 mx-[16px] flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About IFA team</SectionHeading>
      <p className="mb-3"></p>
      <h2 className="font-bold text-xl text-center">
        Welcome! We are a dedicated team specializing in developing high-quality
        applications and solutions across various platforms.
      </h2>{" "}
      <ul className="mt-8  list-disc">
        <li>
          We are developers with 3 to 5 years of experience in developing
          applications on Android, iOS, Flutter, and websites. We have
          participated in complex business projects, projects with stringent
          security requirements, and several IoT projects.
        </li>
        <li>
          We have experience working with marketing and design teams to optimize
          products for end users.
        </li>
        <li>
          Passionate about exploring and catching up with new technology trends,
          and always experimenting with personal projects.
        </li>
      </ul>
      <h3 className="font-bold mt-8">The technologies we used</h3>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-4">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
