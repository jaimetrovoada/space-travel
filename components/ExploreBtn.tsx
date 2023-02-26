import Link from "next/link";
import React from "react";

const ExploreBtn = () => {
  return (
    <button className="h-36 w-36 rounded-full bg-white md:h-56 md:w-56">
      <Link
        href="/destination"
        className={`flex h-full w-full items-center justify-center  rounded-full font-bellefair text-xl text-black md:text-3xl`}
      >
        Explore
      </Link>
    </button>
  );
};

export default ExploreBtn;
