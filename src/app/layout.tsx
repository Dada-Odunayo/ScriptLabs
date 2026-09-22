import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScriptLabs | Software, AI, and Embedded Systems",
  description:
    "ScriptLabs builds reliable mobile apps, web platforms, AI/ML solutions, embedded systems, and CMMS platforms.",
  verification: {
    google: "-lkWWlQw_u9ymFh3v8RGCbruTRPTcBHdjgHCO_LThzc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
