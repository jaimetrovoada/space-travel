import React, { useState } from "react";
import data from "data.json";
import { Data, Destination } from "@/types";
import Image from "next/image";

const Destination = () => {
  const [destination, setDestination] = useState<Destination>(
    data.destinations[0]
  );

  return (
    <div className="flex flex-col items-center">
      <style jsx global>{`
        body {
          background-image: var(--destination-bg);
        }
      `}</style>
      <h2 className="tracking-wider">
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
            className={`${
              dest.name === destination.name ? "border-b-4 " : "text-secondary"
            } pb-2`}
            onClick={() => setDestination(dest)}
          >
            {dest.name}
          </button>
        ))}
      </div>
      <div className="text-center">
        <h3 className="font-bellefair text-5xl leading-[65px]">
          {destination.name}
        </h3>
        <p className="text-secondary">{destination.description}</p>
      </div>
      <div className="z-10 my-8 h-[1px] w-full bg-white/25 xl:block" />
      <div className="mb-8 text-center">
        <p className="text-secondary">AVG. DISTANCE</p>
        <p className="text-3xl">{destination.distance}</p>
      </div>
      <div className="text-center">
        <p className="text-secondary">EST. TRAVEL TIME</p>
        <p className="text-3xl">{destination.travel}</p>
      </div>
    </div>
  );
};

export default Destination;
