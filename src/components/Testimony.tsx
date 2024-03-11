import React from "react";
import { useTranslations } from "next-intl";

export default function Testimony() {
  const t = useTranslations("Home");

  return (
    <div className="bg-[#FAF9F7]">
      <div className="py-24">
          <div className="text-center">
            <h2 className="text-[32px] mb-4">{t("testimonial")}</h2>
            <p className="w-[900px] mx-auto text-[#8A8477]">{t("tesimonialPres")}</p>
          </div>
          <div className="bg-house"></div>
          <div></div>
      </div>
    </div>
  );
}
