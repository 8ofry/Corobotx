import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CorobotX — Engineering Smart Automation",
  description:
    "Industrial Systems Integrator. Robotics, Automation, Energy and Building Management for smart factories across the MENA region.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
