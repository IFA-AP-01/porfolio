"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { membersData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Member from "../card/members";

export default function Members() {
  const { ref } = useSectionInView("Members", 0.5);

  return (
    <section ref={ref} id="members" className="scroll-mt-28 mb-28">
      <SectionHeading>Members</SectionHeading>
      <p className="text-gray-700 mb-8 dark:text-white/80 max-w-[36rem] text-center mx-auto text-sm sm:text-md">
        Meet our team of talented developers who are passionate about creating amazing products. 😊
      </p>
      <div>
        {membersData.map((project, index) => (
          <React.Fragment key={index}>
            <Member {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
