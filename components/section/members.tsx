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
