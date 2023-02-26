import React from "react";
import Nav from "./Nav";
import { barlowCondensed, bellefair } from "@/styles/fonts";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <main
        className={`${bellefair.variable} ${barlowCondensed.variable} flex-auto px-6 text-tertiary md:px-10 `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
