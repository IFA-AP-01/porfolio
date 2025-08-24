import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center z-50">
      <small className="mb-2 block text-xs right-0 text-gray-900 dark:text-white/80 z-50">
      &copy; {new Date().getFullYear()} IFA Team. All rights reserved.
      </small>
    </footer>
  );
}
