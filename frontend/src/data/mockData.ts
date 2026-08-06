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
  icon: string;
  skills: Skill[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
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
    icon: "🌐",
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
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 70 },
      { name: "Express.js", level: "Intermediate", percentage: 75 },
      { name: "MySQL", level: "Intermediate", percentage: 80 },
      { name: "RESTful API Development", level: "Intermediate", percentage: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
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
    credentialId: "DICODING-53XEK7R5VXRN",
    verificationUrl: "https://www.dicoding.com/certificates/53XEK7R5VXRN",
  },
  {
    id: 2,
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    date: "Januari 2026",
    credentialId: "DICODING-KEXL2K250ZG2",
    verificationUrl: "https://dicoding.com/certificates/KEXL2K250ZG2",
  },
  {
    id: 3,
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    date: "Januari 2026",
    credentialId: "DICODING-JLX158V15Z72",
    verificationUrl: "https://www.dicoding.com/certificates/JLX158V15Z72",
  },
  {
    id: 4,
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    date: "Januari 2026",
    credentialId: "DICODING-GRX5J6WLYX0M",
    verificationUrl: "https://www.dicoding.com/certificates/GRX5J6WLYX0M",
  },
];

// 4. Data Testimoni
const testimonials: Testimonial[] = [
 {
    id: 1,
    name: "Farid",
    role: "Kepala Jurusan RPL",
    company: "SMK Telkom",
    avatar: "👨‍🏫",
    stars: 5,
    quote:
      "Annisa menunjukkan kemampuan dalam memahami pemrograman dan mampu menyelesaikan project yang diberikan",
  },
  {
    id: 2,
    name: "Martin",
    role: "Teman Sekelas",
    company: "XII RPL 1",
    avatar: "🧑",
    stars: 4,
    quote:
      "Belajar kelompok bareng Annisa selalu asik. Dia menjelaskan konsep pemrograman yang susah dengan bahasa yang gampang dimengerti oleh teman-teman.",
  },
  {
    id: 3,
    name: "Alif",
    role: "Guru Produktif Web & Mobile",
    company: "SMK Telkom",
    avatar: "👨‍🏫",
    stars: 5,
    quote:
      "Pemahaman Annisa terhadap framework Next.js dan Tailwind CSS v4 di usianya sekarang sangat mengagumkan. Proyek-proyeknya dikerjakan dengan sangat rapi.",
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