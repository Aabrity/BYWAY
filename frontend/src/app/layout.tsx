import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTab from "@/Components/Header";
import FooterTab from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByWay",
  description: "Your Travel Partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <link rel="icon" href="/assets/logo" sizes="any"></link>
      <head />
      <body>
        <HeaderTab />
        {children}
      <FooterTab />
      </body>
    </html>
  );
}