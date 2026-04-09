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
    <nav className="flex items-center justify-between border-b border-[#2a2820] px-4 sm:px-8 lg:px-10 xl:px-16 2xl:px-20 py-4 sm:py-5 lg:py-6">
      <button
        onClick={() => router.push("/")}
        className="font-serif text-lg sm:text-xl lg:text-2xl xl:text-2xl text-paper cursor-pointer hover:opacity-80 transition-opacity shrink-0"
      >
        receipt<span className="text-gold">ly</span>
      </button>
      
      <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
        <div className="hidden sm:flex gap-4 lg:gap-8 xl:gap-10 2xl:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm lg:text-base text-muted hover:text-paper transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
        
        <button className="bg-gold text-ink border-none px-4 sm:px-5 lg:px-6 py-2 lg:py-2.5 rounded text-xs sm:text-sm lg:text-base font-medium cursor-pointer hover:bg-gold-light transition-colors shrink-0">
          Get started
        </button>
      </div>
    </nav>
  );
}
