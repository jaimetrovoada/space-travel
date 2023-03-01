import React, { HTMLAttributes } from "react";

interface Props {
  text: string;
  className?: HTMLAttributes<HTMLElement>["className"];
}

const Description: React.FC<Props> = ({ text, className }) => {
  return (
    <p
      className={
        "text-center text-[15px] leading-6 text-secondary md:text-base md:leading-[28px] xl:text-lg xl:leading-8 " +
        className
      }
    >
      {text}
    </p>
  );
};

export default Description;
