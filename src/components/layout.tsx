import React from "react";
import IndexPage from "./indexPage";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IndexPage />
      <Navbar />
      <div>{children}</div>
    </>
  );
}
