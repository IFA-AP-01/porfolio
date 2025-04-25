import { faHome, faBook, faUsers, faFolder, faTools, faPhone } from '@fortawesome/free-solid-svg-icons';
import colorNoteImg from "@/public/colorNoteImg.png";
import tiziImg from "@/public/tiziImg.png";
import vtvImg from "@/public/vtvImg.png";
import liveSpeakerImg from "@/public/liveSpeakerImg.png";
import aardwolfImg from "@/public/aardwolfImg.png";
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
import woocommerceImg from "@/public/woocommerce.png";
import wordpressImg from "@/public/wordpress.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: faHome,
  },
  {
    name: "About",
    hash: "#about",
    icon: faBook,
  },
  {
    name: "Members",
    hash: "#members",
    icon: faUsers,
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: faFolder,
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: faTools,
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: faPhone,
  },
] as const;

export const projectsData = [
  {
    title: "Live Speaker",
    description:
      "Discover Livespeaker, the innovative voice translation tool that facilitates multilingual communication.",
    tags: ["Kotlin", "KMP", "Firebase", "Deepgram", "Gemini"],
    imageUrl: liveSpeakerImg,
    videoUrl: "",
  },
  {
    title: "Aardwolf India",
    description:
      "Aardwolf manufactures material handling equipment for the stone, glass and metal industries. ",
    tags: ["Wordpress", "PHP", "Elementor", "Woocomerce"],
    imageUrl: aardwolfImg,
    videoUrl: "https://res.cloudinary.com/huyhunhngc/video/upload/v1745581016/Aardwolf_India_spzjiy.mp4",
  },
  {
    title: "Tizi News",
    description:
      "Channel for buying and selling real estate, jobs, classifieds. Managed and operated by VNCT Investment and Trading Joint Stock Company.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Android", "Java"],
    imageUrl: tiziImg,
    videoUrl: "",
  },
  {
    title: "ColorNote",
    description:
      "ColorNote is a simple yet powerful note-taking application that allows users to efficiently jot down and organize information.",
    tags: ["Android", "Kotlin", "Github Action"],
    imageUrl: colorNoteImg,
    videoUrl: "",
  },
  {
    title: "King Of Vietnamese",
    description:
      "The application is an educational game designed to improve the Vietnamese language skills of players, arranges words based on shuffled characters.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Github Action"],
    imageUrl: vtvImg,
    videoUrl: "",
  },
] as const;

export const membersData = [
  {
    title: "Le Duc Thang",
    description:
      "5+ years of in-depth experience in iOS application development. Participated in numerous projects requiring performance optimization and enhanced security.",
    tags: [SwiftImg, flutterImg, AppleImg, wordpressImg, woocommerceImg],
    imageUrl: ThangDevImg,
  },
  {
    title: "Ho Ngoc Dung",
    description:
      "A mobile developer. Having 3+ years of experience and strong knowledge of Android/Kotlin, Flutter/Dart. Having extensive experience in publishing applications.",
    tags: [flutterImg, AndroidImg, SwiftImg, KotlinImg, AppleImg, wordpressImg, woocommerceImg],
    imageUrl: DevDungImg,
  },
  {
    title: "Huynh Ngoc Huy",
    description:
      "Experienced in developing high-performance applications with a focus on following best practices. Participated in projects related to e-commerce, social networks, chat, and work reservations.",
    tags: [AndroidImg, KotlinImg, flutterImg, NestJsImg, NextJsImg, wordpressImg, woocommerceImg],
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
  "MongoDB",
  "FireBase",
  "Supabase",
  "Vercel",
  "MySQL",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Kotlin",
  "Swift",
  "Flutter",
  "Framer Motion",
  "WordPress",
  "Elementor",
  "WooCommerce",
] as const;
