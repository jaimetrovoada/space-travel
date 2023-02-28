import React from "react";

interface Props {
  text: string;
  className?: string;
}

const Description: React.FC<Props> = ({ text, className }) => {
  return (
    <p
      className={
        "text-[15px] leading-6 text-secondary md:text-base md:leading-[28px] xl:text-lg xl:leading-8 " +
        className
      }
    >
      {text}
    </p>
  );
};

export default Description;
