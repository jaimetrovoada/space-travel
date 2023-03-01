import Link from "next/link";
import React from "react";

const ExploreBtn = () => {
  return (
    <button className="relative aspect-square h-[150px] rounded-full bg-white md:h-56 md:w-56 xl:before:transition-all xl:hover:before:absolute xl:hover:before:-inset-1/2 xl:hover:before:-z-10 xl:hover:before:block xl:hover:before:aspect-square xl:hover:before:h-[450px] xl:hover:before:rounded-full  xl:hover:before:bg-white/10">
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
