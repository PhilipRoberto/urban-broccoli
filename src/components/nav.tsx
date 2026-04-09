"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface NavArrayProperties {
  title: string;
  href: string;
}

const navArray: NavArrayProperties[] = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "How it Works",
    href: "#how-it-works",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
];

function navigationLinks(): React.ReactNode {
  return navArray.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="text-lg opacity-40 hover:opacity-100 transition-opacity"
    >
      {item.title}
    </a>
  ));
}

export function Navigation(): React.ReactNode {
  const router: AppRouterInstance = useRouter();

  const handlePress = (): void => {
    router.push("/");
  };

  return (
    <nav className="flex justify-between items-center border-b border-b-white p-10">
      <h1 className="text-4xl cursor-pointer" onClick={handlePress}>
        urban-broccoli
      </h1>
      <div className="flex flex-1 justify-end items-center gap-20">
        <div className="flex gap gap-20">{navigationLinks()}</div>
        <Button
          variant="link"
          className="border border-white px-10 py-6 text-white cursor-pointer hover:opacity-50"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
}
