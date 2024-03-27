import Image from "next/image";
import React from "react";
import Button from "./components/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary-darkBlue px-10 py-11  text-neutral-white lg:px-36">
      <div className="flex flex-col items-center justify-between lg:flex-row ">
        <div className="flex w-1/2 flex-col items-center justify-center lg:flex-row lg:justify-between">
          <div className="flex flex-col items-start gap-8 lg:gap-14">
            <Image src={"/logo-white.svg"} alt="logo" width={139} height={20} />
            <div className="flex gap-4">
              <Image
                src={"/icon-facebook.svg"}
                alt="facebook"
                width={20}
                height={20}
              />
              <Image
                src={"/icon-youtube.svg"}
                alt="youtube"
                width={20}
                height={20}
              />
              <Image
                src={"/icon-twitter.svg"}
                alt="twitter"
                width={20}
                height={20}
              />
              <Image
                src={"/icon-pinterest.svg"}
                alt="pinterest"
                width={20}
                height={20}
              />
              <Image
                src={"/icon-instagram.svg"}
                alt="instagram"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 lg:m-0 lg:flex-row lg:gap-10">
            <div className="flex flex-col items-center justify-center gap-4 text-xs text-neutral-veryLightGray lg:items-start">
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Contact</Link>
              <Link href={"#"}>Blog</Link>
            </div>
            <div className="mb-8 flex flex-col items-center justify-center gap-4 text-xs text-neutral-veryLightGray lg:m-0 lg:items-start">
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Support</Link>
              <Link href={"#"}>Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 lg:items-end lg:gap-8">
          <Button>Request Invite</Button>
          <p className="text-xs text-neutral-grayishBlue">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
