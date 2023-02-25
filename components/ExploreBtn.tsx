import Link from "next/link";
import React from "react";

const ExploreBtn = () => {
  return (
    <button className="h-36 w-36 rounded-full bg-white">
      <Link
        href="/destination"
        className={`flex h-full w-full items-center justify-center  rounded-full font-bellefair text-xl`}
      >
        Explore
      </Link>
    </button>
  );
};

export default ExploreBtn;
