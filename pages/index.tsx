import Image from "next/image";
import ExploreBtn from "@/components/ExploreBtn";

export default function Home() {
  return (
    <div className="h-full">
      <p className="text-center text-secondary">SO, YOU WANT TO TRAVEL TO</p>
      <p
        className={`my-4 text-center font-bellefair text-[80px] leading-[100px] text-tertiary`}
      >
        SPACE
      </p>
      <p className="text-center leading-6 text-secondary">
        Let&apos;s face it; if you want to go to space, you might as well
        genuinely go to outer space and not hover kind of on the edge of it.
        Well sit back, and relax because we&apos;ll give you a truly out of this
        world experience!
      </p>
      <div className="mx-auto mt-20 w-fit">
        <ExploreBtn />
      </div>
    </div>
  );
}
