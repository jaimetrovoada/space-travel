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
      <div>
        <div>
          <PageTitle sub="02" title="MEET YOUR CREW" />
          <div className="mt-8 flex flex-col items-center">
            <div className="w-full border-b border-b-white/25">
              <Image
                src={crew.images.webp}
                width={327}
                height={223}
                alt={`image of ${crew.name}`}
                className="mx-auto h-[222px] w-[177px] object-contain"
              />
            </div>
            <div className="my-8 flex flex-row gap-4">
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
            <div className="text-center">
              <p className="font-bellefair text-white/50">
                {crew.role.toUpperCase()}
              </p>
              <p className="mt-2 mb-4 font-bellefair text-2xl">
                {crew.name.toUpperCase()}
              </p>
              <Description text={crew.bio} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
