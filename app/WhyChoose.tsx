import React from "react";
import InfoCards from "./components/InfoCards";
import data from "@/data.json";

type BankOptions = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const Choose = () => {
  return (
    <div className="bg-neutral-lightGrayishBlue px-10 py-10 lg:h-[655px] lg:px-36 lg:py-0">
      <div className="flex h-full flex-col items-center justify-center gap-16 lg:items-start">
        <div className="text-center lg:text-left">
          <h2 className="mb-6 text-4xl font-light text-primary-darkBlue">
            Why choose Easybank?
          </h2>
          <p className="text-center text-neutral-grayishBlue lg:text-left">
            We leverage Open Banking to turn your bank account into your
            financial hub.
          </p>
          <p className="text-center text-neutral-grayishBlue lg:text-left">
            Control your finances like never before.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.bankOptions.map((option: BankOptions) => (
            <InfoCards
              key={option.id}
              icon={option.icon}
              title={option.title}
              description={option.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
