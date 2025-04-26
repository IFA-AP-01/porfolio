"use client";

import { useRef, useState } from "react";
import { membersData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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
      <section className="flex flex-row items-center bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <motion.div 
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[70%] flex flex-col h-full"
          animate={{
            x: isHovered ? 4 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="block sm:hidden">
            <Image
              className="mt-2 w-[4rem] h-[4rem] rounded-full shadow-md dark:ring-gray-500 my-auto"
              src={imageUrl}
              alt="Bordered avatar"
            />
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto -space-x-6">
            {tags.map((tag, index) => (
              <motion.li 
                key={index} 
                className="transition hover:scale-[1.15]"
                animate={{ 
                  y: isHovered ? index % 2 === 0 ? -4 : -2 : 0,
                  transition: { delay: index * 0.05, duration: 0.3 }
                }}
              >
                <Image
                  className="m-1 w-10 h-10 rounded-full bg-white dark:bg-gray-600"
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
            className="w-[10rem] h-[10rem] object-cover transition-all hover:scale-[1.15] rounded-full shadow-md dark:ring-gray-500 my-auto"
            src={imageUrl}
            alt="Bordered avatar"
          />
        </motion.div>
      </section>
    </motion.div>
  );
}