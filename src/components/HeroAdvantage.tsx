import React from "react";
import Image from "next/image";
import { Link } from "../navigation";
import Img from "@/assets/img/skyscraper.png";
import Certificate from "@/assets/icons/certificate.svg";
import Growth from "@/assets/icons/Growth.svg";
import HouseKey from "@/assets/icons/house key.svg";

import { useTranslations } from "next-intl";

export default function HeroAdvantage() {
  const t = useTranslations("AvantagesPage");

  return (
    <div className="max-w-screen-xl mx-auto flex items-center space-x-24 my-20">
      <Image
        src={Img}
        alt="buildings à Dubai - Swiss immo Dubai"
        width={450}
        height={600}
        className=""
      />
      <div>
        <h2 className="text-4xl">
          {t("pourquoi")}  {""} 
          <span className="text-[#B5A88E]">Swiss Immo Dubai ?</span>
        </h2>
        <h4 className="text-[#B5A88E] my-4 text-lg">{t("sectionTxt")}</h4>
        <div>
          <div className="flex items-start my-6 space-x-6">
            <Image src={HouseKey} alt="" />
            <div>
              <h3 className="text-lg font-bold pb-2">{t("solution")}</h3>
              <p>{t("solutionSub")}</p>
              <Link href="#" className="block pt-4 font-semibold">
                {t("mieuxConnaitre")}
              </Link>
            </div>
          </div>

          <div className="flex items-start my-6 space-x-6">
            <Image src={Growth} alt="" />
            <div>
              <h3 className="text-lg font-bold pb-2">{t("appartements")}</h3>
              <p>{t("appartementsSub")}</p>
              <Link href="#" className="block pt-4 font-semibold">
                {t("voirSelection")}
              </Link>
            </div>
          </div>

          <div className="flex items-start my-6 space-x-6">
            <Image src={Certificate} alt="" />
            <div>
              <h3 className="text-lg font-bold pb-2">{t("rendements")}</h3>
              <p>{t("rendementSub")}</p>
              <Link href="#" className="block pt-4 font-semibold">
                {t("nousContacte")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
