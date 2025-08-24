"use client";

import React, { useMemo } from "react";
import SectionHeading from "../section-heading";
import { membersData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Member from "../card/members";

export default function Members() {
  const { ref } = useSectionInView("Members", 0.5);

  // Memoize members data to prevent unnecessary re-renders
  const memoizedMembers = useMemo(() => membersData, []);

  return (
    <section ref={ref} id="members" className="scroll-mt-28 mb-28">
      <SectionHeading highlight="Members">Members</SectionHeading>
      <p className="text-gray-700 mb-8 dark:text-white/80 max-w-[36rem] text-center mx-auto text-md font-bold">
        Meet our team of talented developers who are passionate about creating amazing products. 😊
      </p>
      <div className="space-y-4">
        {memoizedMembers.map((member, index) => (
          <Member key={member.title} {...member} />
        ))}
      </div>
    </section>
  );
}
