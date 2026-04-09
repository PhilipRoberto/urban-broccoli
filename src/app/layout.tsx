import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/nav";

export const metadata: Metadata = {
  title: "Receiptly - Branded Receipts for Nigerian Businesses",
  description: "Create branded, signed receipts in seconds. Share via WhatsApp, email or download — with a QR code your customers can verify.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
