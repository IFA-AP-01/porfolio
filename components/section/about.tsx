"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import {
  SiAndroid,
  SiApple,
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiGraphql,
  SiRedux,
  SiPython,
  SiDjango,
  SiWordpress,
  SiWoocommerce,
  SiVercel,
  SiSpring,
  SiNestjs
} from "react-icons/si";
const skillIcons: { [key: string]: JSX.Element } = {
  Android: <SiAndroid />,
  iOS: <SiApple />,
  KMP: <SiKotlin />,
  Spring: <SiSpring />,
  NestJs: <SiNestjs />,
  Kotlin: <SiKotlin />,
  Swift: <SiSwift />,
  Flutter: <SiFlutter />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  Vue: <SiVuedotjs />,
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  Supabase: <SiSupabase />,
  Firebase: <SiFirebase />,
  GraphQL: <SiGraphql />,
  Redux: <SiRedux />,
  Python: <SiPython />,
  Django: <SiDjango />,
  WordPress: <SiWordpress />,
  WooCommerce: <SiWoocommerce />,
  Vercel: <SiVercel />,
};
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

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
      <SectionHeading highlight="About">About</SectionHeading>
      <p className="mb-3"></p>
      <h3 className="font-bold text-sm sm:text-md text-center">
        💥 Welcome! We are a dedicated team specializing in developing
        high-quality applications and solutions across various platforms. 😊😊
      </h3>{" "}
      <ul className="mt-8 list-disc text-sm text-gray-800 dark:text-white/80">
        <li>
          We are developers with 5 years of experience in developing
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
      <h3 className="font-bold mt-8 text-sm sm:text-md">
        The technologies we used
      </h3>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-4">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-md text-sm px-5 py-2 dark:bg-white/10 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/20 transition-colors flex items-center gap-2"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {/* Render the icon if it exists */}
            {skillIcons[skill] || <span className="w-5 h-5" />}
            <span>{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
