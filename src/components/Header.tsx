"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#FCB69F]/20 shadow-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#home" className="text-xl font-bold tracking-tight text-[#4A3F35] hover:text-[#FCB69F] transition-colors">
          MyPortfolio
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#6B5B4E] hover:text-[#FCB69F] font-bold transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#FCB69F] to-[#FFD5B8] text-[#4A3F35] font-semibold text-lg shadow hover:opacity-90 transition text-center"
          >
            Resume
          </a>
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-[#4A3F35] border-[#FCB69F]/40"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm border-t border-[#FCB69F]/20 px-4 pb-4">
          <div className="flex flex-col gap-4 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#6B5B4E] hover:text-[#FCB69F] font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#FCB69F] to-[#FFD5B8] text-[#4A3F35] font-semibold text-lg shadow hover:opacity-90 transition text-center"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
} 