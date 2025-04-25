import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-xl sm:text-2xl capitalize mb-8 text-center font-bold">
      {children}
    </h2>
  );
}
