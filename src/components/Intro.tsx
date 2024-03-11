import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "@/assets/img/logo-w.svg";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "../navigation";

export default function Intro() {
  const t = useTranslations("Home");
  // Extract the navigation object keys from the translations
  const navigationKeys = Object.keys(t.raw("navigation"));
  return (
    <>
      <main className="background lg:px-[160px] sm:px-[40px] px-[16px] bg-gray-50 h-[100vh]">
        <div className="flex md:flex-col flex-col items-start justify-between space-y-10 md:pt-32 pt-12 md:text-left text-center">
          <aside className="md:w-auto w-full md:block flex items-center justify-center md:pt-0 pt-10">
            <Image
              src={Logo}
              width={"600"}
              height={"600"}
              alt="logo swiss immo dubai"
              className="animate pop delay-2"
            />
          </aside>
          <aside className="max-w-[750px] md:mr-20">
            <h2 className="md:text-6xl text-white text-3xl animate pop delay-1">
              {t("title")}
            </h2>
          </aside>
          <aside className="md:w-auto w-full md:block flex items-center justify-center md:pt-0 pt-10">
            <button className="mt-10 py-3 px-6 bg-[#00DDFF] text-white flex items-center animate pop delay-2">
              <Link href="/amazingdubai">
                <span className="mr-3">{t("heroBtn")}</span>
              </Link>
              <FaArrowRightFromBracket />
            </button>
          </aside>
        </div>
      </main>
    </>
  );
}
