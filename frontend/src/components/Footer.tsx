"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const quickLinks = [
    {href: "/", label: "Home"},
    {href: "/about", label: "About"},
    {href: "/skills", label: "Skills"},
    {href: "/certificates", label: "Certificates"},
    {href: "/portofolio", label: "Portofolio"},
    {href: "/testimonials", label: "Testimonial"},
    {href: "/contact", label: "Contact"},
];

const socialLinks = [
    {href: "https://github.com/AnnisaGit28", label: "GitHub"},
    {href: "https://www.linkedin.com/in/nur-annisa-anwar-4201b3373/", label: "LinkedIn"},
    {href: "https://www.instagram.com/annisasnx/", label: "Instagram"},
];

export default function Footer() {
  const pathname = usePathname();

  // Jangan tampilkan Footer publik di halaman admin
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Isi untuk brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-3">
              MyPortofolio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Siswa XII RPL 1 yang passionate di bidang web development.
              Membangun pengalaman melalui project nyata dan terus belajar
              teknologi terbaru.
            </p>
          </div>

          {/* Link Linknya */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial Medianya */}
          <div>
            <h4 className="text-white font-semibold mb-3">Social Media</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tombol Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <p className="text-gray-600">Built with Next.js &amp; Tailwind CSS</p>
            <span className="text-gray-700">&bull;</span>
            <Link
              href="/admin"
              className="text-xs text-gray-500 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}