import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const route = useRouter().pathname;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const innerMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
    if (!isMenuVisible) {
      menuRef.current?.classList.remove("w-0");
      menuRef.current?.classList.add("h-screen", "w-full", "max-w-[65%]");
    } else {
      menuRef.current?.classList.remove("h-screen", "w-full", "max-w-[65%]");
      menuRef.current?.classList.add("w-0");
    }
  };

  return (
    <header className="flex flex-initial flex-row items-center justify-between p-6 md:p-0 xl:pt-10">
      <Image
        src="/assets/shared/logo.svg"
        width={48}
        height={48}
        alt={"space tourism logo"}
        className="w-10 md:ml-9 xl:ml-14 xl:w-auto"
      />
      <div className="z-10 ml-16 -mr-4 hidden h-[1px] w-full max-w-md bg-white/25 xl:block" />
      <button
        className="absolute right-6 z-20 md:hidden"
        onClick={() => toggleMenu()}
      >
        <Image
          src={
            isMenuVisible
              ? "/assets/shared/icon-close.svg"
              : "/assets/shared/icon-hamburger.svg"
          }
          width={24}
          height={24}
          alt="open menu"
        />
      </button>
      <div
        className="absolute top-0 right-0 z-10 flex w-0 overflow-hidden bg-tertiary/5 backdrop-blur-2xl transition-all md:static md:z-0 md:ml-auto md:flex md:h-24 md:w-full md:max-w-md md:flex-row xl:max-w-4xl"
        ref={menuRef}
      >
        <div
          className="flex h-full max-h-full w-full flex-col gap-8 pl-8 pt-28 md:mx-auto md:w-auto md:flex-row md:gap-9 md:p-0 xl:gap-16"
          ref={innerMenuRef}
        >
          <Link
            href="/"
            className={`flex items-center text-tertiary ${
              route === "/" ? "border-r-4 md:border-r-0 md:border-b-4" : null
            }`}
          >
            <strong className="mr-3 md:hidden xl:block">00</strong>HOME
          </Link>
          <Link
            href="/destination"
            className={`flex items-center text-tertiary ${
              route === "/destination"
                ? "border-r-4 md:border-r-0 md:border-b-4"
                : null
            }`}
          >
            <strong className="mr-3 md:hidden xl:block">01</strong> DESTINATION
          </Link>
          <Link
            href="/crew"
            className={`flex items-center text-tertiary ${
              route === "/crew"
                ? "border-r-4 md:border-r-0 md:border-b-4"
                : null
            }`}
          >
            <strong className="mr-3 md:hidden xl:block">02</strong>CREW
          </Link>
          <Link
            href="/technology"
            className={`flex items-center text-tertiary ${
              route === "/technology"
                ? "border-r-4 md:border-r-0 md:border-b-4"
                : null
            }`}
          >
            <strong className="mr-3 md:hidden xl:block">03</strong>TECHNOLOGY
          </Link>
        </div>
      </div>
    </header>
  );
}
