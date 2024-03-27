import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";
import Menu from "./components/Menu";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-10 flex w-full max-w-screen-xl items-center justify-between bg-neutral-white px-10 py-8 lg:px-36">
      <Link href="/" className="h-5 cursor-pointer">
        <Image src="./logo.svg" alt="Easybank Logo" width={139} height={20} />
      </Link>
      <nav className="hidden h-5 text-neutral-grayishBlue lg:block">
        <ul className="flex h-16 w-full items-center justify-between gap-10 border-b-4 border-[transparent] ">
          <li className="hover:bg-gradient-to-r h-16 from-primary-limeGreen to-primary-brightCyan hover:bg-[length:100%_4px] hover:bg-bottom hover:bg-no-repeat hover:text-primary-darkBlue ">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-gradient-to-r h-16 from-primary-limeGreen to-primary-brightCyan hover:bg-[length:100%_4px] hover:bg-bottom hover:bg-no-repeat hover:text-primary-darkBlue ">
            <Link href="#">About</Link>
          </li>
          <li className="hover:bg-gradient-to-r h-16 from-primary-limeGreen to-primary-brightCyan hover:bg-[length:100%_4px] hover:bg-bottom hover:bg-no-repeat hover:text-primary-darkBlue ">
            <Link href="#">Contact</Link>
          </li>
          <li className="hover:bg-gradient-to-r h-16 from-primary-limeGreen to-primary-brightCyan hover:bg-[length:100%_4px] hover:bg-bottom hover:bg-no-repeat hover:text-primary-darkBlue ">
            <Link href="#">Blog</Link>
          </li>
          <li className="hover:bg-gradient-to-r h-16 from-primary-limeGreen to-primary-brightCyan hover:bg-[length:100%_4px] hover:bg-bottom hover:bg-no-repeat hover:text-primary-darkBlue ">
            <Link href="#">Careers</Link>
          </li>
        </ul>
      </nav>
      <div className="lg:hidden">
        <Menu />
      </div>
      <div className="hidden lg:block">
        <Button>Request Invite</Button>
      </div>
    </header>
  );
};

export default Header;
