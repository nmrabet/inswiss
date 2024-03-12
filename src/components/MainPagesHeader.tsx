import React from "react";
import { Link } from "../navigation";
import { useTranslations } from "next-intl";

export default function MainPagesHeader() {
    const t = useTranslations("AvantagesPage");

  return (
    <>
      <main className="background-process lg:px-[160px] sm:px-[40px] px-[16px] bg-gray-50 h-[100vh]">
        <div className="flex md:flex-col flex-col items-start justify-between space-y-10 md:pt-48 pt-12 md:text-left text-center">
          <aside className="md:w-auto w-full md:block flex items-center justify-center md:pt-0 pt-10">
            <p className="text-2xl text-white">{t("welcome")}</p>
          </aside>
          <aside className="max-w-[750px] md:mr-20">
            <h2 className="md:text-6xl text-white text-3xl animate pop delay-1">
              {t("lesAvantages")}
            </h2>
          </aside>
        </div>
      </main>
    </>
  );
}
