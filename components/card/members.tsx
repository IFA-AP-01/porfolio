"use client";

import { useRef, useState } from "react";
import { membersData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { epilogueFont } from "@/lib/fontawesome";

type MemberProps = (typeof membersData)[number];

export default function Member({
  title,
  description,
  tags,
  imageUrl,
}: MemberProps) {
  const [isHovered, setIsHovered] = useState(false);
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
      className="group mb-3 sm:mb-8 last:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <section className="flex flex-row items-center bg-white max-w-[50rem] rounded-lg overflow-hidden sm:pr-8 relative sm:h-[15rem] hover:bg-gray-50 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <motion.div 
          className="pt-4 pb-7 px-5 sm:pl-8 sm:pr-2 sm:pt-8 sm:max-w-[70%] flex flex-col h-full"
          animate={{
            x: isHovered ? 4 : 0
          }}
          transition={{ duration: 0.4 }}
        >
            <h3 className={`${epilogueFont.className} text-xl font-semibold hidden sm:block`}>{title}</h3>
            <div className="block sm:hidden flex items-center gap-4 mt-2">
            <Image
              className="w-[4rem] h-[4rem] mb-4 rounded-full shadow-md dark:ring-gray-500 object-cover"
              src={imageUrl}
              alt="Bordered avatar"
            />
            <h3 className={`${epilogueFont.className} text-lg font-semibold mb-4`}>{title}</h3>
            </div>
          <p className="mt-2 leading-relaxed text-black dark:text-white/80 text-xs sm:text-sm">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto -space-x-6">
            {tags.map((tag, index) => (
              <motion.li 
                key={index} 
                className="transition hover:scale-[1.1]"
                animate={{ 
                  y: isHovered ? index % 2 === 0 ? -4 : -2 : 0,
                  transition: { delay: index * 0.05, duration: 0.3 }
                }}
              >
                <Image
                  className="m-1 w-8 rounded-full bg-white dark:bg-gray-600"
                  src={tag}
                  alt={`Tag ${index}`}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="absolute hidden sm:block right-10 my-auto"
          animate={{
            scale: isHovered ? 1.08 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <Image
            className="w-[8rem] h-[8rem] object-cover transition-all hover:scale-[1.15] rounded-full shadow-md dark:ring-gray-500 my-auto"
            src={imageUrl}
            alt="Bordered avatar"
          />
        </motion.div>
      </section>
    </motion.div>
  );
}