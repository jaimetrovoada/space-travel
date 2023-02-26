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
    <div className="flex flex-col items-center md:pt-10">
      <style jsx global>{`
        body {
          background-image: var(--destination-bg);
        }
      `}</style>
      <h2 className="font-barlowCondensed tracking-wide md:self-start md:text-xl">
        <strong className="mr-4 text-white/25">01</strong>
        PICK YOUR DESTINATION
      </h2>
      <Image
        src={destination.images.webp}
        width={170}
        height={170}
        alt={`image of ${destination.name}`}
        className="mb-6 mt-8"
      />

      <div className="mb-5 flex flex-row gap-7">
        {data.destinations.map((dest: Destination, index: number) => (
          <button
            key={`${index} - ${dest.name}`}
            className={`border-b-4 border-b-transparent pb-2 font-barlowCondensed ${
              dest.name === destination.name
                ? null
                : "text-secondary hover:border-b-white/25"
            }`}
            onClick={() => setDestination(dest)}
            ref={(el) => (buttonsRef.current[index] = el as HTMLButtonElement)}
          >
            {dest.name.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="text-center md:max-w-xl">
        <h3 className="font-bellefair text-5xl leading-[65px] md:text-[80px] md:leading-[92px]">
          {destination.name.toUpperCase()}
        </h3>
        <p className="text-secondary md:leading-6">{destination.description}</p>
      </div>
      <div className="z-10 my-8 h-[1px] w-full bg-white/25 md:mt-12 md:mb-7 md:max-w-xl xl:block" />
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="text-center">
          <p className="font-barlowCondensed text-sm text-secondary md:mb-3">
            AVG. DISTANCE
          </p>
          <p className="font-bellefair text-3xl">
            {destination.distance.toUpperCase()}
          </p>
        </div>
        <div className="text-center">
          <p className="font-barlowCondensed text-sm text-secondary md:mb-3">
            EST. TRAVEL TIME
          </p>
          <p className="font-bellefair text-3xl">
            {destination.travel.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
