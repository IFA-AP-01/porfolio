"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { skillsJob } from "@/lib/data";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

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

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[75rem] mx-auto scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading highlight="We Do?">What We Do?</SectionHeading>
      <p className="text-gray-700 mb-8 dark:text-white/80 max-w-[36rem] text-center mx-auto text-sm sm:text-md">
        We are a team of experienced developers with a passion for creating high-quality applications and solutions. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {skillsJob.map((skill, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden max-w-[25rem] bg-white rounded-lg hover:shadow-xl transition-all duration-300 dark:bg-white/10"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col h-full">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-50 dark:bg-gray-900/30 p-1 rounded-lg mr-4">
                    <Image
                      src={skill.imageUrl}
                      alt={skill.title}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-left text-gray-800 dark:text-white">
                    {skill.title}
                  </h3>
                </div>
                
              </div>
              
              <div className="px-6 pb-6 text-left text-gray-600 dark:text-gray-300 flex-grow text-sm">
                <p>{skill.description || `Professional ${skill.title} services tailored to your business needs.`}</p>
              </div>
              
              <div className="px-6 pb-6 flex flex-wrap gap-2">
                {skill.tags && skill.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                   className="bg-[#e5e5e5] text-gray-600 dark:bg-black/[0.8] px-3 py-1 text-[0.7rem] tracking-wider rounded-md dark:text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
