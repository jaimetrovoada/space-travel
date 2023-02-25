import React from "react";
import { Bellefair } from "@next/font/google";
import Nav from "./Nav";

interface Props {
  children: React.ReactNode;
}

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <main className={`${bellefair.variable} flex h-full flex-col px-6 pt-12`}>
        {children}
      </main>
    </>
  );
};

export default Layout;
