"use client";

import { useRouter } from "next/navigation";

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: "Features", href: "#features" },
  { title: "How it works", href: "#how-it-works" },
  { title: "Pricing", href: "#pricing" },
];

export function Navigation() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between border-b border-[#2a2820] px-10 py-5">
      <button
        onClick={() => router.push("/")}
        className="font-serif text-xl text-paper cursor-pointer hover:opacity-80 transition-opacity"
      >
        receipt<span className="text-gold">ly</span>
      </button>
      
      <div className="flex flex-1 justify-end items-center gap-8">
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-paper transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
        
        <button className="bg-gold text-ink border-none px-5 py-2 rounded text-sm font-medium cursor-pointer hover:bg-gold-light transition-colors">
          Get started
        </button>
      </div>
    </nav>
  );
}
