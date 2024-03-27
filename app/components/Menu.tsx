"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="block lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen && (
          <Image
            src="./icon-hamburger.svg"
            alt="Hamburger Icon"
            width={20}
            height={15}
          />
        )}
        {menuOpen && (
          <Image
            src="./icon-close.svg"
            alt="Close Icon"
            width={18}
            height={19}
          />
        )}
      </div>
      {menuOpen && (
        <div className="bg-gradient-to-b fixed left-0 top-20 h-[630px] w-full from-primary-darkBlue/70 to-primary-darkBlue/0">
          <nav className="fixed left-5 right-5 top-24  items-center rounded-lg bg-neutral-white py-10">
            <ul className="flex flex-col items-center gap-5 text-lg">
              <li>
                <Link
                  href="#"
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;
