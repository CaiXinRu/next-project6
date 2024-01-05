import React from "react";
import { Inter } from "next/font/google";
import IndexPage from "./indexPage";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IndexPage />
      <Navbar />
      <div className={inter.className}>{children}</div>
    </>
  );
}
