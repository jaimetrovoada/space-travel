import Image from "next/image";
import ExploreBtn from "@/components/ExploreBtn";
import Description from "@/components/Description";

export default function Home() {
  return (
    <div className="flex h-full flex-col px-6 pt-12 md:pt-24 xl:mx-40 xl:flex-row xl:items-end">
      <div className="flex flex-col items-center text-center xl:mb-32 xl:items-baseline xl:text-left">
        <p className="tracking-[2.7px] text-secondary md:text-xl xl:text-3xl font-barlowCondensed">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p
          className={`my-4 font-bellefair text-[80px] leading-[100px] text-tertiary md:text-[150px] md:leading-[150px]`}
        >
          SPACE
        </p>
        <Description
          text="
          Let's face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we'll give you a truly out of
          this world experience!
        "
        />
      </div>
      <div className="mx-auto mt-20 w-fit xl:mx-0 xl:mb-32 xl:ml-auto">
        <ExploreBtn />
      </div>
    </div>
  );
}
