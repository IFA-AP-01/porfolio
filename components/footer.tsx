import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs right-0 text-gray-400">
        &copy; {new Date().getFullYear()} IFA Team. All rights reserved.
        From IFA team with love &hearts;
      </small>
    </footer>
  );
}
