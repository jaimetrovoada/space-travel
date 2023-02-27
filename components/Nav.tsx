import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Menu, { MenuHandle } from "./Menu";

export default function Nav() {
  const menuRef = useRef<MenuHandle>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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
        onClick={() =>
          menuRef.current?.toggleMenu(isMenuVisible, setIsMenuVisible)
        }
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
      <Menu ref={menuRef} />
    </header>
  );
}
