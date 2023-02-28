import React from "react";

interface Props {
  text: string;
  className?: string;
}

const Description: React.FC<Props> = ({ text }) => {
  return (
    <p className="text-[15px] leading-6 text-secondary xl:text-lg xl:leading-8">
      {text}
    </p>
  );
};

export default Description;
