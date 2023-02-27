import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface MenuHandle {
  toggleMenu: (
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

interface Props {}

// eslint-disable-next-line react/display-name
const Menu = forwardRef<MenuHandle, Props>((props, ref) => {
  const route = useRouter().pathname;
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<Array<HTMLAnchorElement>>([]);

  const toggleMenu = (
    isMenuVisible: boolean,
    setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsMenuVisible((prev) => !prev);
    if (!isMenuVisible) {
      menuRef.current?.classList.remove("w-0");
      menuRef.current?.classList.add("h-screen", "w-full", "max-w-[65%]");
    } else {
      menuRef.current?.classList.remove("h-screen", "w-full", "max-w-[65%]");
      menuRef.current?.classList.add("w-0");
    }
  };

  useImperativeHandle(ref, () => {
    return { toggleMenu };
  });

  useEffect(() => {
    const links = linksRef.current;
    links.forEach((element) => {
      if (
        element?.innerText.replace(/\d{1,2}\n/g, "").toLowerCase() ===
        route.replace("/", "").toLowerCase()
      ) {
        element.classList.remove(
          "md:border-b-transparent",
          "border-r-transparent"
        );
        element.classList.add("border-r-white", "md:border-b-white");
      }
    });
  });

  return (
    <div
      className="absolute top-0 right-0 z-10 flex w-0 overflow-hidden bg-tertiary/5 backdrop-blur-2xl transition-all md:static md:z-0 md:ml-auto md:flex md:h-24 md:w-full md:max-w-md md:flex-row xl:max-w-4xl"
      ref={menuRef}
    >
      <div className="flex h-full max-h-full w-full flex-col gap-8 pl-8 pt-28 md:mx-auto md:w-auto md:flex-row md:gap-9 md:p-0 xl:gap-16">
        <Link
          href="/"
          className={`flex items-center border-r-4 border-r-transparent text-tertiary md:border-r-0 md:border-b-4 md:border-b-transparent ${
            route === "/" ? "" : "hover:border-b-white/25"
          }`}
          ref={(el) => linksRef.current.push(el as HTMLAnchorElement)}
        >
          <strong className="mr-3 md:hidden xl:block">00</strong>HOME
        </Link>
        <Link
          href="/destination"
          className={`flex items-center border-r-4 border-r-transparent text-tertiary md:border-r-0 md:border-b-4 md:border-b-transparent ${
            route === "/destination" ? "" : "hover:border-b-white/25"
          }`}
          ref={(el) => linksRef.current.push(el as HTMLAnchorElement)}
        >
          <strong className="mr-3 md:hidden xl:block">01</strong> DESTINATION
        </Link>
        <Link
          href="/crew"
          className={`flex items-center border-r-4 border-r-transparent text-tertiary md:border-r-0 md:border-b-4 md:border-b-transparent ${
            route === "/crew" ? "" : "hover:border-b-white/25"
          }`}
          ref={(el) => linksRef.current.push(el as HTMLAnchorElement)}
        >
          <strong className="mr-3 md:hidden xl:block">02</strong>CREW
        </Link>
        <Link
          href="/technology"
          className={`flex items-center border-r-4 border-r-transparent text-tertiary md:border-r-0 md:border-b-4 md:border-b-transparent ${
            route === "/technology" ? "" : "hover:border-b-white/25"
          }`}
          ref={(el) => linksRef.current.push(el as HTMLAnchorElement)}
        >
          <strong className="mr-3 md:hidden xl:block">03</strong>TECHNOLOGY
        </Link>
      </div>
    </div>
  );
});

export default Menu;
