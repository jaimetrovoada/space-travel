import Link from "next/link";
import React from "react";

const ExploreBtn = () => {
  return (
    <button className="relative aspect-square h-[150px] rounded-full bg-white outline outline-0 outline-white/10 transition-all hover:outline-[88px] md:h-56 md:w-56">
      <Link
        href="/destination"
        className={`flex h-full w-full items-center justify-center rounded-full font-bellefair text-[20px] text-xl tracking-[1.25px] text-black md:text-3xl`}
      >
        EXPLORE
      </Link>
    </button>
  );
};

export default ExploreBtn;
