"use client";

import { useRef } from "react";
import Logo from "../assets/img/logo-w.svg";
import LangSwitcher from "./LangSwitcher";
import Image from "next/image";
import { Link } from "../navigation";
import AE from "@/assets/icons/ae.svg";
import CH from "@/assets/icons/ch.svg";

const Header = () => {
  const themeSwitcherRef = useRef<HTMLDivElement>(null);

  return (
    <header className="glass-bg text-white flex items-center justify-between py-4 shadow shadow-gray-200 bg-baseOne transition-colors duration-300 lg:px-[70px] sm:px-[40px] px-[16px]">
      <div>
        <Link href={"/"}>
          <Image
            src={Logo}
            width={"200"}
            height={"60"}
            alt="logo"
            className="mix-blend-lighten"
          />
        </Link>
      </div>

      <div className="flex items-center">
        <div className="border-r-2 px-6">
          <div className="flex space-x-2 mb-1">
            <Image src={AE} alt="" width={20} height={30} />
            <a href="tel:+971 58 166 6723" className="text-[15px] hover:text-[#00DDFF]">+971 58 166 6723</a>
          </div>
          <div className="flex space-x-2">
            <Image src={CH} alt="" width={20} height={30} />
            <a href="tel:+41 76 423 20 43" className="text-[15px] hover:text-[#00DDFF]">+41 76 423 20 43</a>
          </div>
        </div>
        <div ref={themeSwitcherRef}>
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
