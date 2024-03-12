import React from "react";
import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import { Link } from "../navigation";

export default function Navbar() {
  const t = useTranslations("Home");

  // Extract the navigation object keys from the translations
  const navigationKeys = Object.keys(t.raw("navigation"));

  return (
    <>
      <Header />
      <nav className="sm:flex hidden items-center justify-center">
        <ul className="absolute top-8 flex items-center space-x-5 text-white">
          {navigationKeys.map((key) => (
            <li key={key} className="text-[16px] hover:text-[#00DDFF] animate pop delay-1">
              <Link href={`/${key}`}>{t(`navigation.${key}`)}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
