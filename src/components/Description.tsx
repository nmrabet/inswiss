import Image from "next/image";
import React from "react";
import Img from "@/assets/img/img.webp";
import { useTranslations } from "next-intl";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Description() {
  const t = useTranslations("Home");

  return (
    <div className="my-10 flex items-center justify-center space-x-20 mx-auto max-w-screen-xl ">
      <Image src={Img} alt="buildings in Dubai" width={470} height={540} />
      <div>
        <h6 className="text-[#B5A88E] text-[16px]">{t("services")}</h6>
        <h3 className="text-[32px] w-[550px]">{t("servicesTitle")}</h3>
        <div className="flex space-x-4 my-4 items-center">
          <div className="w-[100px] h-[120px] bg-[#B5A88E] rounded-md text-white py-6">
            <p className="[writing-mode:vertical-lr] text-[12px] pt-2 h-16	mx-auto text-center">
              {t("success")}
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[20px]">{t("servicesSub")}</h4>
            <p className="text-[#B5A88E]">{t("servicesText")}</p>
          </div>
        </div>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <IoMdCheckmarkCircleOutline color="#B5A88E" />
              <span>{t("rendement")}</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoMdCheckmarkCircleOutline color="#B5A88E" />
              <span>{t("residence")}</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoMdCheckmarkCircleOutline color="#B5A88E" />
              <span>{t("object")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
