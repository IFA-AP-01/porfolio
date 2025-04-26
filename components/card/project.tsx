"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  timeline,
  description,
  tags,
  imageUrl,
  videoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-4 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-4 relative sm:h-[20rem] hover:bg-gray-100 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[40%] flex flex-col h-full sm:group-even:ml-[25rem]">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="font-bold mt-2 leading-relaxed text-gray-900 dark:text-white/90 text-xs">
            {timeline}
          </p>
          <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/60 text-sm">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-1 sm:mt-auto">
        {tags.map((tag, index) => (
          <li
            className="bg-[#e5e5e5] text-gray-600 dark:bg-black/[0.8] px-3 py-1 text-[0.7rem] tracking-wider rounded-md dark:text-white/70"
            key={index}
          >
            {tag}
          </li>
        ))}
          </ul>
        </div>

        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            className="absolute hidden sm:block top-0 -right-0 w-[27rem] h-full object-cover
             transition 
              group-hover:scale-[1.05]
              group-even:right-[initial] group-even:-left-0"
          />
        ) : (
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-10 -right-40 w-[36rem] rounded-t-lg shadow-2xl
              transition 
              group-hover:scale-[1.1]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2

              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2

              group-even:right-[initial] group-even:-left-40"
          />
        )}
      </section>
    </motion.div>
  );
}
