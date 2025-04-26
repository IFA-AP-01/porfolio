"use client";

import { useTheme } from "@/context/theme-context";
import React, { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        theme === "light" ? "#faf8f1" : "#131313"
      );
    }
  }, [theme]);

  return (
    <button
      className="fixed top-5 right-5 sm:bottom-5 sm:bottom-auto bg-white w-[3rem] h-[3rem] shadow-lg  backdrop-blur-[0.5rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
