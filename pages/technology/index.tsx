import React, { useState } from "react";
import data from "data.json";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Description from "@/components/Description";
import Name from "@/components/Name";

const Technology = () => {
  const [tech, setTech] = useState(data.technology[0]);
  return (
    <>
      <style jsx global>
        {`
          body {
            background-image: var(--technology-bg);
          }
        `}
      </style>
      <div className="md:pt-[40px]">
        <PageTitle sub="03" title="SPACE LAUNCH 101" className="md:ml-9" />
        <div>
          <div className="my-8 md:my-14">
            <Image
              src={tech.images.landscape}
              width={1920}
              height={1080}
              alt="image of space launch"
            />
          </div>
          <div className="flex flex-col items-center px-6">
            <div className="flex flex-row gap-4">
              {data.technology.map((data, i) => (
                <button
                  key={data.name}
                  className={`aspect-square h-[40px] rounded-full font-bellefair md:h-[60px] xl:h-[15px] xl:w-[15px] ${
                    data.name === tech.name
                      ? "bg-white text-black"
                      : "border border-white/25 hover:bg-white/50"
                  }`}
                  onClick={() => setTech(data)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="mt-7">
              <p className="text-center font-barlowCondensed text-sm tracking-[2.36px] text-secondary md:text-base md:tracking-[2.7px]">
                THE TERMINOLOGY...
              </p>
              <Name text={tech.name} className="text-center md:my-4" />
              <Description
                text={tech.description.replaceAll("-", "\u2011")}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
