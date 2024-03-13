import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export function AccordionDemo() {
  const t = useTranslations("AvantagesPage");

  return (
    <>
    <div className="max-w-screen-xl mx-auto flex justify-between my-24">
      <h2 className="text-5xl max-w-[500px]">{t("acheter")}</h2>
      <div className="flex items-center space-x-12 max-w-[500px]">
        <div>
          <p className="text-6xl">30%</p>
          <p className="">{t("profitsChiffres")}</p>
        </div>
        <div>
          <p className="text-6xl">85%</p>
          <p className="">{t("taux")}</p>
        </div>
      </div>
    </div>
      <Accordion
        type="single"
        collapsible
        className="max-w-screen-xl mx-auto mb-28 grid grid-rows-5 grid-flow-col gap-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{t("rendementsattractif")}</AccordionTrigger>
          <AccordionContent>{t("rendementsAttractifsTxt")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t("proprieteFonciere")}</AccordionTrigger>
          <AccordionContent>{t("proprieteFonciereTxt")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t("exonerationFiscal")}</AccordionTrigger>
          <AccordionContent>{t("exonerationFiscaleTxt")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{t("stabilite")}</AccordionTrigger>
          <AccordionContent>{t("stabiliteEconomique")} </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>{t("croissanceRapide")}</AccordionTrigger>
          <AccordionContent>{t("croissanteRapideTxt")} </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>{t("infrasctructure")}</AccordionTrigger>
          <AccordionContent>{t("infrasctructureText")} </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>{t("emplacement")}</AccordionTrigger>
          <AccordionContent>{t("emplacmentTxt")} </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>{t("marche")}</AccordionTrigger>
          <AccordionContent>{t("marcheTxt")} </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>{t("qualite")}</AccordionTrigger>
          <AccordionContent>{t("qualiteTxt")} </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>{t("perspectives")}</AccordionTrigger>
          <AccordionContent>{t("perspectivesTxt")} </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
