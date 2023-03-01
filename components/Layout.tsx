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
        className={`${bellefair.variable} ${barlowCondensed.variable} flex flex-auto flex-col text-tertiary`}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
