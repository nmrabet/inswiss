import React from "react";
import { useTranslations } from "next-intl";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";
import Quote from "@/assets/icons/quotemark.svg";

export default function Testimony() {
  const t = useTranslations("Home");

  return (
    <div className="bg-[#FAF9F7]">
      <div className="py-24">
        <div className="text-center">
          <h2 className="text-[32px] mb-4">{t("testimonial")}</h2>
          <p className="w-[900px] mx-auto text-[#8A8477]">
            {t("tesimonialPres")}
          </p>
        </div>
        <div className="bg-house">
          <div className="flex h-[450px] max-w-screen-lg mx-auto space-x-10 pt-14">
            <div className="rounded-lg bg-[#FAF9F7] p-8 space-y-3">
              <Image src={Quote} height={52} width={52} alt="" />
              <p>
                Nunc hendrerit, justo vel ultricfsfs ieseleifend, ex ex pretium
                leo acfn ibus nulla eros consectetur eros. Cras vive neque at
                elit rutrum, id dictum magn hendrerit.
              </p>
              <div className="flex items-center pt-10 space-x-4">
                <div className="size-12 bg-gray-300 rounded-lg"></div>
                <h6>Jane Doe</h6>
              </div>
            </div>
            <div className="rounded-lg bg-[#FAF9F7] p-8 space-y-3">
              <Image src={Quote} height={52} width={52} alt="" />
              <p>
                Nunc hendrerit, justo vel ultricfsfs ieseleifend, ex ex pretium
                leo acfn ibus nulla eros consectetur eros. Cras vive neque at
                elit rutrum, id dictum magn hendrerit.
              </p>
              <div className="flex items-center pt-10 space-x-4">
                <div className="size-12 bg-gray-300 rounded-lg"></div>
                <h6>Jane Doe</h6>
              </div>
            </div>
            <div className="rounded-lg bg-[#FAF9F7] p-8 space-y-3">
              <Image src={Quote} height={52} width={52} alt="" />
              <p>
                Nunc hendrerit, justo vel ultricfsfs ieseleifend, ex ex pretium
                leo acfn ibus nulla eros consectetur eros. Cras vive neque at
                elit rutrum, id dictum magn hendrerit.
              </p>
              <div className="flex items-center pt-10 space-x-4">
                <div className="size-12 bg-gray-300 rounded-lg"></div>
                <h6>Jane Doe</h6>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <VideoPlayer />
      </div>
    </div>
  );
}
