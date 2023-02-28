import React from "react";

interface Props {
  sub: string;
  title: string;
  className?: string;
}
const PageTitle: React.FC<Props> = ({ sub, title }) => {
  return (
    <h2 className="text-center font-barlowCondensed tracking-[2.7px] md:self-start md:text-left md:text-xl md:tracking-[3.38px] xl:ml-40 xl:text-[28px] xl:tracking-[4.72px]">
      <strong className="mr-4 text-white/25">{sub}</strong>
      {title}
    </h2>
  );
};

export default PageTitle;
