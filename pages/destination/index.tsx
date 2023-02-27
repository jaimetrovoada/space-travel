import React, { useEffect, useState } from "react";
import data from "data.json";
import { Data, Destination } from "@/types";
import Image from "next/image";

const Destination = () => {
  const [destination, setDestination] = useState<Destination>(
    data.destinations[0]
  );

  const buttonsRef = React.useRef<Array<HTMLButtonElement>>([]);
  useEffect(() => {
    const button = buttonsRef.current;
    button.forEach((element) => {
      if (element.innerText.toLowerCase() === destination.name.toLowerCase()) {
        element.classList.remove("border-b-transparent");
        element.classList.add("border-b-white");
      }
    });
  });

  return (
    <>
      <style jsx global>{`
        body {
          background-image: var(--destination-bg);
        }
      `}</style>
      <div className="md:pt-10">
        <h2 className="text-center font-barlowCondensed tracking-wide md:self-start md:text-left md:text-xl xl:ml-40 xl:text-[28px] xl:tracking-[4.72px]">
          <strong className="mr-4 text-white/25">01</strong>
          PICK YOUR DESTINATION
        </h2>
        <div className="flex flex-col items-center xl:flex-row xl:justify-center xl:gap-40 xl:pt-16">
          <Image
            src={destination.images.webp}
            width={445}
            height={445}
            alt={`image of ${destination.name}`}
            className="mb-6 mt-8 h-[170px] w-[170px] md:h-[300px] md:w-[300px] xl:mb-0 xl:mt-0 xl:h-[445px] xl:w-[445px]"
          />

          <div className="flex flex-col items-center xl:max-w-[445px] xl:items-baseline">
            <div className="mb-5 flex flex-row gap-7 xl:mb-9">
              {data.destinations.map((dest: Destination, index: number) => (
                <button
                  key={`${index} - ${dest.name}`}
                  className={`border-b-4 border-b-transparent pb-2 font-barlowCondensed xl:tracking-[2.7px] ${
                    dest.name === destination.name
                      ? null
                      : "text-secondary hover:border-b-white/25"
                  }`}
                  onClick={() => setDestination(dest)}
                  ref={(el) =>
                    (buttonsRef.current[index] = el as HTMLButtonElement)
                  }
                >
                  {dest.name.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="text-center md:max-w-xl xl:text-left">
              <h3 className="font-bellefair text-5xl leading-[65px] md:text-[80px] md:leading-[92px] xl:mb-3 xl:text-[100px] xl:leading-[115px]">
                {destination.name.toUpperCase()}
              </h3>
              <p className="text-secondary md:leading-6 xl:text-lg xl:leading-8">
                {destination.description}
              </p>
            </div>
            <div className="z-10 my-8 h-[1px] w-full bg-white/25 md:mt-12 md:mb-7 md:max-w-xl xl:block" />
            <div className="flex flex-col items-center gap-8 text-center md:flex-row xl:gap-20 xl:text-left">
              <div>
                <p className="font-barlowCondensed text-sm text-secondary md:mb-3 xl:tracking-[2.36px]">
                  AVG. DISTANCE
                </p>
                <p className="font-bellefair text-3xl xl:text-[28px]">
                  {destination.distance.toUpperCase()}
                </p>
              </div>
              <div>
                <p className="font-barlowCondensed text-sm text-secondary md:mb-3 xl:tracking-[2.36px]">
                  EST. TRAVEL TIME
                </p>
                <p className="font-bellefair text-3xl xl:text-[28px]">
                  {destination.travel.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
