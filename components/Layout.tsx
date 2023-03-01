import React from "react";
import Nav from "./Nav";
import { barlowCondensed, bellefair } from "@/styles/fonts";
import Head from "next/head";
import { useRouter } from "next/router";
import { routeNamesMap } from "@/utils";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const title = routeNamesMap.get(router.pathname)?.toUpperCase();
  return (
    <>
      <Head>
        <title>SPACE TOURISM | {title}</title>
      </Head>
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
