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
      <PageTitle sub="02" title="MEET YOUR CREW" />
      <div className="mt-8 flex flex-1 flex-col items-center md:mx-auto md:max-w-[458px]">
        <div className="w-full border-b border-b-white/25 md:order-3 md:mt-auto md:border-b-0">
          <Image
            src={crew.images.webp}
            width={456}
            height={572}
            alt={`image of ${crew.name}`}
            className="mx-auto h-[222px] w-[177px] object-contain md:h-[572px] md:w-[456px]"
          />
        </div>
        <div className="my-8 flex flex-row gap-4 md:order-2">
          {data.crew.map((data) => (
            <button
              key={data.name}
              className={`h-[10px] w-[10px] rounded-full ${
                data.name === crew.name
                  ? "bg-white"
                  : "bg-white/25 hover:bg-white/50"
              }`}
              onClick={() => setCrew(data)}
            />
          ))}
        </div>
        <div className="text-center md:order-1">
          <p className="font-bellefair text-white/50 md:text-2xl">
            {crew.role.toUpperCase()}
          </p>
          <p className="mt-2 mb-4 font-bellefair text-2xl md:text-[40px]">
            {crew.name.toUpperCase()}
          </p>
          <Description text={crew.bio} />
        </div>
      </div>
    </>
  );
};

export default Crew;
