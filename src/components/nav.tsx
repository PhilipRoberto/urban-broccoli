"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Text from "./ui/custom/text";

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: "Features", href: "#features" },
  { title: "How it works", href: "#how-it-works" },
  { title: "Pricing", href: "#pricing" },
];

function linksList(l: NavLink[]) {
  return l.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className="text-xs sm:text-sm lg:text-base text-muted hover:text-paper transition-colors hover:opacity-50 cursor-pointer"
    >
      {link.title}
    </a>
  ));
}

export function Navigation() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between border-b border-[#2a2820] px-4 sm:px-8 lg:px-10 xl:px-16 2xl:px-20 py-4 sm:py-5 lg:py-6 fixed top-0 left-0 right-0 z-50 bg-background">
      <Text
        textContent="urban-broccoli"
        className="text-2xl cursor-pointer font-serif"
        onClick={() => router.push("/")}
      />
      <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
        <div className="hidden sm:flex gap-4 lg:gap-8 xl:gap-10 2xl:gap-12">
          {linksList(navLinks)}
        </div>
        <Button
          onClick={() => router.push("#pricing")}
          className="cursor-pointer hover:opacity-90"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
}
