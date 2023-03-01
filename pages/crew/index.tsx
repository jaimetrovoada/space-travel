import Image from "next/image";
import React, { useState } from "react";
import data from "data.json";
import PageTitle from "@/components/PageTitle";
import Description from "@/components/Description";

const Crew = () => {
  const [crew, setCrew] = useState(data.crew[0]);

  return (
    <>
      <style jsx global>
        {`
          body {
            background-image: var(--crew-bg);
          }
        `}
      </style>
      <PageTitle sub="02" title="MEET YOUR CREW" className="xl:hidden" />
      <div className="mt-8 flex flex-1 flex-col items-center md:mx-auto md:max-w-[458px] xl:mx-0 xl:max-w-none xl:flex-row xl:items-end xl:justify-center">
        <div className="w-full border-b border-b-white/25 md:order-2 md:mt-auto md:border-b-0 xl:mt-0 xl:ml-[81px] xl:w-auto">
          <Image
            src={crew.images.webp}
            width={568}
            height={712}
            alt={`image of ${crew.name}`}
            className="h-[222px] w-[177px] object-contain md:h-[572px] md:w-[456px] xl:h-[712px] xl:w-[568px]"
          />
        </div>
        <div className="flex flex-col md:order-1 xl:max-w-[488px]">
          <div className="my-8 mx-auto flex flex-row gap-4 md:order-2 xl:mx-0 xl:mb-[94px]">
            {data.crew.map((data) => (
              <button
                key={data.name}
                className={`h-[10px] w-[10px] rounded-full xl:h-[15px] xl:w-[15px] ${
                  data.name === crew.name
                    ? "bg-white"
                    : "bg-white/25 hover:bg-white/50"
                }`}
                onClick={() => setCrew(data)}
              />
            ))}
          </div>
          <div className="text-center md:order-1 xl:mb-[120px] xl:h-full xl:text-left">
            <PageTitle
              sub="02"
              title="MEET YOUR CREW"
              className="hidden xl:ml-0 xl:mt-3 xl:block"
            />
            <p className="font-bellefair text-white/50 md:text-2xl xl:mt-[154px] xl:text-[32px]">
              {crew.role.toUpperCase()}
            </p>
            <p className="mt-2 mb-4 font-bellefair text-2xl md:text-[40px] xl:mt-[15px] xl:mb-[27px] xl:text-[56px]">
              {crew.name.toUpperCase()}
            </p>
            <Description
              text={crew.bio}
              className="xl:max-w-[444px] xl:text-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
