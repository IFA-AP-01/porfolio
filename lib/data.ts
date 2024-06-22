import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaAndroid, FaSwift } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import flutterImg from "@/public/Flutter.png";
import AndroidImg from "@/public/Android.png";
import SwiftImg from "@/public/Swift.png";
import KotlinImg from "@/public/Kotlin.png";
import AppleImg from "@/public/Apple.png";
import NextJsImg from "@/public/NextJs.png";
import NestJsImg from "@/public/NestJs.png";
import DevDungImg  from "@/public/DevDung.png";
import ThangDevImg  from "@/public/ThangDev.jpg";
import HuyDevImg  from "@/public/HuyDev.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Members",
    hash: "#members",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const membersData = [
  {
    title: "Le Duc Thang",
    description:
      "5+ years of in-depth experience in iOS application development. Participated in numerous projects requiring performance optimization and enhanced security.",
    tags: [SwiftImg, flutterImg, AppleImg],
    imageUrl: ThangDevImg,
  },
  {
    title: "Ho Ngoc Dung",
    description:
      "A mobile developer. Having 3+ years of experience and strong knowledge of Android/Kotlin, Flutter/Dart. Having extensive experience in publishing applications.",
    tags: [flutterImg, AndroidImg, SwiftImg, KotlinImg, AppleImg],
    imageUrl: DevDungImg,
  },
  {
    title: "Huynh Ngoc Huy",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [AndroidImg, KotlinImg, flutterImg, NestJsImg, NextJsImg],
    imageUrl: HuyDevImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
