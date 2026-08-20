import { Globe, Settings, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
}

// 1. Projects Data
const projects: Project[] = [
  {
    id: 1,
    title: "Project Backend",
    category: "Web Dev",
    description:"Backend application built to handle data processing, authentication, database management, and RESTful API services using modern backend technologies.",
    tech: ["Express.js", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/AnnisaGit28/Project-Backend",
  },
];

// 2. Data Skills
const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "HTML5 / CSS3", level: "Advanced", percentage: 90 },
      { name: "JavaScript (ES6+)", level: "Advanced", percentage: 85 },
      { name: "React.js", level: "Intermediate", percentage: 75 },
      { name: "Next.js (App Router)", level: "Intermediate", percentage: 70 },
      { name: "Tailwind CSS", level: "Advanced", percentage: 90 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Settings,
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 70 },
      { name: "Express.js", level: "Intermediate", percentage: 75 },
      { name: "MySQL", level: "Intermediate", percentage: 80 },
      { name: "RESTful API Development", level: "Intermediate", percentage: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: "Advanced", percentage: 85 },
      { name: "Figma (UI/UX)", level: "Intermediate", percentage: 70 },
      { name: "Postman", level: "Advanced", percentage: 80 },
      { name: "VS Code", level: "Advanced", percentage: 95 },
    ],
  },
];

// 3. Data Sertifikat
const certificates: Certificate[] = [
 {
    id: 1,
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    date: "Januari 2026",
    credentialId: "DICODING-GRX5J6WLYX0M",
    verificationUrl: "https://www.dicoding.com/certificates/53XEK7R5VXRN",
    image: "/certificates/GRX5J6WLYX0M.png",
  },
  {
    id: 2,
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    date: "Januari 2026",
    credentialId: "DICODING-KEXL2K250ZG2",
    verificationUrl: "https://dicoding.com/certificates/KEXL2K250ZG2",
    image: "/certificates/KEXL2K250ZG2.png",
  },
  {
    id: 3,
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    date: "Januari 2026",
    credentialId: "DICODING-JLX158V15Z72",
    verificationUrl: "https://www.dicoding.com/certificates/JLX158V15Z72",
    image: "/certificates/JLX158V15Z72.png",
  },
  {
    id: 4,
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    date: "Januari 2026",
    credentialId: "DICODING-GRX5J6WLYX0M",
    verificationUrl: "https://www.dicoding.com/certificates/GRX5J6WLYX0M",
    image: "/certificates/GRX5J6WLYX0M.png",
  },
];

// 4. Data Testimoni
const testimonials: Testimonial[] = [
   {
    id: 1,
    name: "Muhammad Saad, S.Pd., M.Pd",
    role: "Kepala Sekolah",
    company: "SMK Telkom",
    avatar: "👨🏻‍🏫",
    stars: 5,
    quote:
      "Annisa menunjukkan semangat belajar yang tinggi, bertanggung jawab dalam menyelesaikan tugas, serta memiliki potensi yang baik untuk terus berkembang di bidang teknologi dan pemrograman.",
  },
  {
    id: 2,
    name: "Farid Mawardi, S.Pd., M.Pd",
    role: "Kepala Jurusan RPL",
    company: "SMK Telkom",
    avatar: "👨🏻‍🏫",
    stars: 5,
    quote:
      "Annisa menunjukkan kemampuan dalam memahami pemrograman dan mampu menyelesaikan project yang diberikan",
  },
  {
    id: 3,
    name: "Ali Akbar, S.Kom., M.Pd",
    role: "Guru Produktif Web & Mobile",
    company: "SMK Telkom",
    avatar: "👨🏻‍🏫",
    stars: 5,
    quote:
    "Annisa mampu memahami dasar JavaScript, database MySQL, dan konsep CRUD dengan baik serta menunjukkan kemampuan dalam menerapkan materi yang dipelajari ke dalam project.",
  },
  {
    id: 4,
    name: "Muh. Alif Anhar, S.Kom",
    role: "Guru Produktif Web & Mobile",
    company: "SMK Telkom",
    avatar: "👨🏻‍🏫",
    stars: 5,
    quote:
    "Annisa memiliki kemampuan yang baik dalam memahami konsep backend, khususnya dalam pengembangan API, pengelolaan database, dan penerapan logika pemrograman, serta menunjukkan ketelitian dan kemauan belajar yang konsisten dalam setiap project",
  },
  {
    id: 5,
    name: "Andi Hanifah Putri Rani, S.Kom",
    role: "Guru Produktif Web & Mobile",
    company: "SMK Telkom",
    avatar: "👩🏻‍🏫",
    stars: 4,
    quote:
      "Annisa menunjukkan kemampuan yang baik dalam mempelajari Laravel, aktif dalam memahami materi, dan mampu menerapkan konsep yang dipelajari ke dalam project dengan cukup baik",
  },
  {
    id: 6,
    name: "Indah",
    role: "Teman Sekelas",
    company: "XII RPL 1",
    avatar: "👧🏻",
    stars: 4,
    quote:
      "Annisa selalu berusaha menyelesaikan tugas yang diberikan dengan baik dan cukup mampu dalam bekerja sama.",
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProjects(): Promise<Project[]> {
  await delay(1200);
  return projects;
}

export async function getSkills(): Promise<SkillGroup[]> {
  await delay(1000);
  return skillGroups;
}

export async function getCertificates(): Promise<Certificate[]> {
  await delay(1200);
  return certificates;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(800);
  return testimonials;
}