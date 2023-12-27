import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/styles/globals.css";

const fontFamily = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | NextCommerce",
    default: "NextCommerce",
  },
  description: "e-commerce made to study Next’s new features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={fontFamily.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  );
}
