import React from "react";
import Image from "next/image";
import Button from "./components/Button";

const HeroSection = () => {
  return (
    <div className="lg: flex flex-none flex-col bg-neutral-veryLightGray lg:grid lg:h-[520px] lg:min-w-[1220px] lg:grid-cols-5 lg:pl-36 lg:pr-0">
      <div className="order-2 flex flex-col items-center justify-center gap-6 px-10 py-10 lg:order-1 lg:col-span-2 lg:h-[520px] lg:py-0">
        <h1 className="text-center text-4xl font-light leading-[3rem] text-primary-darkBlue lg:text-left">
          Next generation digital banking
        </h1>
        <p className="text-center text-neutral-grayishBlue lg:text-left">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button>Request Invite</Button>
      </div>
      <div className="lg:bg-topRight order-1 h-[290px] bg-bg-intro-mobile bg-cover bg-top bg-no-repeat lg:order-2 lg:col-span-3 lg:h-[760px] lg:overflow-x-hidden lg:bg-bg-intro-desktop ">
        <div className="lg:hidden ">
          <Image
            src="/image-mockups.png"
            alt="mockups"
            width={338}
            height={290}
            className="relative -inset-y-24  mx-auto"
          />
        </div>
        <div className="hidden lg:block ">
          <Image
            src="/image-mockups.png"
            alt="large mockups"
            width={620}
            height={820}
            className="relative -inset-y-24  inset-x-32 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
