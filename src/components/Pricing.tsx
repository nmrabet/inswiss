import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { ImQuotesRight } from "react-icons/im";
import Dubai from "@/assets/img/dubai-marina-at-night-united-arab-emirates.webp";

export default function Pricing() {
  const t = useTranslations("Home");

  return (
    <div className="my-44 flex items-center space-x-24 max-w-screen-xl mx-auto">
      <Image
        src={Dubai}
        alt="Dubai la nuit"
        width={557}
        height={714}
        className="rounded-xl"
      />
      <div>
        <p className="text-[22px]">{t("buyinDubai")}</p>
        <p className="text-[16px] py-8">{t("pricing")}</p>
      </div>
      <ImQuotesRight />
    </div>
  );
}
