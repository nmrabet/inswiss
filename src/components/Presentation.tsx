import React from "react";
import { Link } from "../navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SelectionIcon from "@/assets/icons/house search.svg";
import ReservationIcon from "@/assets/icons/payment.svg";
import PlandepaiementIcon from "@/assets/icons/discount.svg";
import GeranceIcon from "@/assets/icons/contract.svg";
import ReventeIcon from "@/assets/icons/loan.svg";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Presensation() {
  const t = useTranslations("Home");

  return (
    <div>
      <div className="text-center pt-12 pb-16">
        <h2 className="text-[32px]">{t("intro")}</h2>
        <p className="text-[#B5A88E] pt-2 mx-auto max-w-screen-md">
          {t("subtitle")}
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-between space-x-10">
        <div className="space-y-3">
          <Image src={SelectionIcon} alt="" width="68" height="62.33" />
          <h3 className="text-[20px]">{t("selectiontitle")}</h3>
          <p className="text-[14px]">{t("selectiontext")}</p>
          <div>
            <Link
              href="/amazing-dubai"
              className="font-sans font-bold text-[#B5A88E]"
            >
              {t("selectionBtn")}
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <Image src={ReservationIcon} alt="" width="68" height="62.33" />
          <h3 className="text-[20px]">{t("reservationtitle")}</h3>
          <p className="text-[14px]">{t("reservationtxt")}</p>
          <div>
            <Link
              href="/amazing-dubai"
              className="font-sans font-bold text-[#B5A88E]"
            >
              {t("reservationBtn")}
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <Image src={PlandepaiementIcon} alt="" width="68" height="62.33" />
          <h3 className="text-[20px]">{t("plandepaiement")}</h3>
          <p className="text-[14px]">{t("plandepaiementtxt")}</p>
          <div>
            <Link
              href="/amazing-dubai"
              className="font-sans font-bold text-[#B5A88E]"
            >
              {t("plandepaiementBtn")}
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <Image src={GeranceIcon} alt="" width="68" height="62.33" />
          <h3 className="text-[20px]">{t("gerancetitre")}</h3>
          <p className="text-[14px]">{t("gerancetxt")}</p>
          <div>
            <Link
              href="/amazing-dubai"
              className="font-sans font-bold text-[#B5A88E]"
            >
              {t("geranceBtn")}
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <Image src={ReventeIcon} alt="" width="68" height="62.33" />
          <h3 className="text-[20px]">{t("revente")}</h3>
          <p className="text-[14px]">{t("reventetxt")}</p>
          <div>
            <Link
              href="/amazing-dubai"
              className="font-sans font-bold text-[#B5A88E]"
            >
              {t("reventeBtn")}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex space-x-16 justify-center py-20">
        <h4 className="font-bold text-[37px] font-open">{t("Besoindeconseil")}</h4>
        <button className="bg-[#B5A88E] text-white px-8 py-3 rounded-sm font-semibold">
          <Link href="/contact" className="flex items-center space-x-3">
            <span>{t("contactbtn")}</span> <FaArrowRightFromBracket />
          </Link>
        </button>
      </div>
    </div>
  );
}
