"use client";

import { useRef } from "react";
import { membersData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@react-email/components";

type MemberProps = (typeof membersData)[number];

export default function Member({
  title,
  description,
  tags,
  imageUrl,
}: MemberProps) {
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
    >
      <section className="flex flex-row items-center bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[70%] flex flex-col h-full sm:group-even:ml-[10rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <div className="block sm:hidden">
            <Image
              className="mt-2 w-[4rem] h-[4rem] rounded-full ring-2 ring-gray-300 dark:ring-gray-500 my-auto"
              src={imageUrl}
              alt="Bordered avatar"
            />
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto -space-x-6">
            {tags.map((tag, index) => (
              <li key={index} className="transition hover:scale-[1.15]">
                <Image
                  className="m-1 w-10 h-10 border-2 rounded-full bg-white dark:bg-gray-600"
                  src={tag}
                  alt=""
                />
              </li>
            ))}
          </ul>
          <div className="flex flex-row space-x-4">
            <button
              type="button"
              className="mt-3 w-28 h-8 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
            >
              Resume
            </button>
            <button
              type="button"
              className="mt-3 w-36 h-8 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
            >
              Profile
            </button>
          </div>
        </div>

        <Image
          className="absolute hidden sm:block w-[10rem] h-[10rem]
          object-cover
          transition-all
          hover:scale-[1.15]
          group-odd:right-[initial] group-odd:right-10
          rounded-full ring-2 ring-gray-300 dark:ring-gray-500 my-auto"
          src={imageUrl}
          alt="Bordered avatar"
        />
      </section>
    </motion.div>
  );
}
