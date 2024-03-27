import React from "react";
import Image from "next/image";

interface InfoCardsProps {
  icon: string;
  title: string;
  description: string;
}

const InfoCards = ({ icon, title, description }: InfoCardsProps) => {
  return (
    <div className="flex flex-col items-center gap-8 lg:items-start">
      <div className="flex items-center lg:items-start">
        <Image src={icon} alt="icon" width={50} height={50} />
      </div>
      <h3 className="text-xl font-light text-primary-darkBlue">{title}</h3>
      <p className="text-center text-xs leading-5 text-neutral-grayishBlue lg:text-left">
        {description}
      </p>
    </div>
  );
};

export default InfoCards;
