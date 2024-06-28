import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaAndroid, FaSwift } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import colorNoteImg from "@/public/colorNoteImg.png";
import tiziImg from "@/public/tiziImg.png";
import vtvImg from "@/public/vtvImg.png";
import sarlangKoreanImg from "@/public/vtvImg.png";
import flutterImg from "@/public/Flutter.png";
import AndroidImg from "@/public/Android.png";
import SwiftImg from "@/public/Swift.png";
import KotlinImg from "@/public/Kotlin.png";
import AppleImg from "@/public/Apple.png";
import NextJsImg from "@/public/NextJs.png";
import NestJsImg from "@/public/NestJs.png";
import DevDungImg from "@/public/DevDung.png";
import ThangDevImg from "@/public/ThangDev.jpg";
import HuyDevImg from "@/public/HuyDev.jpg";

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
    title: "Tizi News",
    description:
      "Channel for buying and selling real estate, jobs, classifieds. Managed and operated by VNCT Investment and Trading Joint Stock Company.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Android", "Java"],
    imageUrl: tiziImg,
  },
  {
    title: "ColorNote",
    description:
      "ColorNote is a simple yet powerful note-taking application that allows users to efficiently jot down and organize information.",
    tags: ["Android", "Kotlin", "Github Action"],
    imageUrl: colorNoteImg,
  },
  {
    title: "King Of Vietnamese",
    description:
      "The application is an educational game designed to improve the Vietnamese language skills of players, arranges words based on shuffled characters.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Github Action"],
    imageUrl: vtvImg,
  },
  {
    title: "Sarlang Korean",
    description:
      "Korean language learning app that enhances skills through effective lessons in dialogues, sentences, knowledge tests, and speaking practice.",
    tags: ["Android", "Kotlin", "Github Action", "CMake"],
    imageUrl: sarlangKoreanImg,
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
