import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScriptLabs | Software, AI, and Embedded Systems",
  description:
    "ScriptLabs builds reliable mobile apps, web platforms, AI/ML solutions, embedded systems, and CMMS platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
