import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/nav";

const ranade = localFont({
  src: [
    {
      path: "../fonts/Ranade-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Ranade-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Ranade-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Ranade-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Ranade-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-ranade",
});

export const metadata: Metadata = {
  title: "urban-broccoli",
  description: "Branded receipts your customers can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ranade.variable}>
      <body
        className={`min-h-screen bg-[#0a0907] text-white ${ranade.className}`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
