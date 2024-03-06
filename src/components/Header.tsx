"use client";

import { useRef } from "react";
import Logo from "../assets/img/logo-w.svg";
import LangSwitcher from "./LangSwitcher";
import Image from "next/image";

const Header = () => {
  const themeSwitcherRef = useRef<HTMLDivElement>(null);

  return (
    <header className="glass-bg text-white flex items-center justify-between py-4 shadow shadow-gray-200 bg-baseOne transition-colors duration-300 lg:px-[160px] sm:px-[40px] px-[16px]">
      <div>
        <Image
          src={Logo}
          width={"200"}
          height={"60"}
          alt="logo"
          className="mix-blend-lighten"
        />
      </div>

      <div ref={themeSwitcherRef}>
        <LangSwitcher />
      </div>
    </header>
  );
};

export default Header;
