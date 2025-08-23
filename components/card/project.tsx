"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { headlineFont } from "@/lib/fontawesome";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  timeline,
  description,
  tags,
  imageUrl,
  videoUrl,
  viewUrl,
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
      <section className="bg-white max-w-[56rem] rounded-lg overflow-hidden relative flex flex-col sm:flex-row sm:h-[20rem] hover:bg-gray-100 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            className="w-full h-48 sm:hidden object-cover rounded-t-lg object-top"
            controls={false}
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
          />
        ) : (
          <div className="w-full h-48 sm:hidden relative">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="object-cover object-top w-full h-full rounded-t-lg"
              fill
            />
          </div>
        )}

        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[40%] flex flex-col h-full sm:group-even:ml-[28rem]">
          <h3 className={`${headlineFont.className} text-md sm:text-xl font-semibold text-gray-900 dark:text-white/90`}>{title}</h3>
          <p className="font-bold mt-2 leading-relaxed text-gray-900 dark:text-white/90 text-xs">
            {timeline}
          </p>
          <p className="mt-2 leading-relaxed text-gray-900 dark:text-white/80 text-xs sm:text-sm">
            {description}
          </p>
            {viewUrl && (
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-primary flex items-center gap-1"
            >
              <span>Explore</span>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            )}
          <ul className="flex flex-wrap mt-4 gap-1 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-primary/20 text-tertiary px-3 py-1 text-[0.7rem] tracking-wider rounded-md dark:text-white/70"
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
            className="absolute hidden sm:block top-0 -right-0 w-[28rem] h-full rounded-lg object-cover
             transition 
              
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2
              group-hover:top-10

              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2
              group-even:right-[initial] group-even:-left-0"
            controls={false}
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
          />
        ) : (
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-0 -right-40 w-[38rem] rounded-lg h-full shadow-2xl object-cover object-top
              transition 
              group-hover:scale-[1.05]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2
              group-hover:top-10

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
