import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaid Nagori | Software Developer & Data Analyst",
  description:
    "Portfolio of Zaid Nagori, a Software Developer and Data Analyst focused on full-stack applications and data-driven solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
