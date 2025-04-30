import { useState, useEffect } from 'react';
import Image from "next/image";
import teamImage from "@/public/logo.webp";

export default function ProfileImage() {
  return (
    <div className="flex items-center justify-center h-50 w-full">
      <div className="relative w-48 h-48">
        {/* SVG for the colored border with CSS animation */}
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          style={{
            animation: "spin 12s linear infinite"
          }}
        >
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="none" 
            strokeWidth="2"
            strokeDasharray="100.5 201" 
            stroke="#ed5407" 
          />
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="none" 
            strokeWidth="2"
            strokeDasharray="100.5 201" 
            stroke="#12e281" 
            strokeDashoffset="-100.5"
          />
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="none" 
            strokeWidth="2"
            strokeDasharray="100.5 201" 
            stroke="#24a5ee" 
            strokeDashoffset="-201"
          />
        </svg>
        
        {/* Image container */}
        <div className="absolute inset-2 rounded-full overflow-hidden shadow-lg">
        <Image
            src={teamImage}
            alt="IFA Team"
            width="250"
            height="250"
            priority={true}
            className="h-48 w-48 rounded-full object-cover shadow-lg  bg-white/30 dark:bg-gray-700/20"
          />
        </div>
        
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}