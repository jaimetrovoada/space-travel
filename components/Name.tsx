import React, { HTMLAttributes } from "react";

interface Props {
  text: string;
  className?: HTMLAttributes<HTMLElement>["className"];
}

const Name: React.FC<Props> = ({ text, className }) => {
  return (
    <p
      className={
        "mt-2 mb-4 font-bellefair text-2xl md:text-[40px] xl:mt-[15px] xl:mb-[27px] xl:text-[56px] xl:leading-[64px]" +
        " " +
        className
      }
    >
      {text.toUpperCase()}
    </p>
  );
};

export default Name;
