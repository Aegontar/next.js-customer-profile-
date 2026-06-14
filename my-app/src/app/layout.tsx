import type { Metadata } from "next";

import "./globals.css";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page of the CRM application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
