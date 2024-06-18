import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Dashboard from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OCD",
  description: "OpenCode Developers Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* <StarsCanvas /> */}
        {/* <Navbar /> */}
        <Dashboard />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
