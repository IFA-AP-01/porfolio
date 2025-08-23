import { headlineFont } from "@/lib/fontawesome";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  highlight?: string; // New prop for the text to highlight
};

export default function SectionHeading({ children, highlight }: SectionHeadingProps) {
  const renderChildren = () => {
    if (!highlight || typeof children !== "string") {
      return children;
    }

    const parts = children.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="highlight">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <h2 className={`${headlineFont.className} text-xl sm:text-3xl capitalize mb-8 text-center font-bold`}>
      {renderChildren()}
    </h2>
  );
}