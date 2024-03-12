import React from "react";
import { useTranslations } from "next-intl";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Caroussel from "@/components/Caroussel";
export default function PreviewProject() {
  const t = useTranslations("Home");

  return (
    <div>
      <div className="bg-[#FAF9F7] py-20">
        <div className="max-w-screen-xl ms-48">
          <h2 className="text-[32px] mb-4">{t("exclusiveProject")}</h2>
          <p className="w-[900px] text-[#8A8477]">{t("withUs")}</p>
          <div className="my-14 ">
            <Caroussel />
          </div>
          <button className="border-2 border-[#B5A88E] text-[#B5A88E] py-4 px-8 flex items-center space-x-2">
            <span>{t("selectionBtn")} </span>
            <FaArrowRightFromBracket />
          </button>
        </div>
      </div>
      <div className="text-center my-24">
        <h5 className=" text-[28px] max-w-[1000px] mx-auto">{t("banner")}</h5>
        <p className="my-4">{t("bannerSub")}</p>
        <button className="my-8 mx-auto bg-[#B5A88E] text-white py-4 px-8 flex items-center space-x-2">
          <span>{t("knowMore")}</span> <FaArrowRightFromBracket />
        </button>
      </div>
    </div>
  );
}
