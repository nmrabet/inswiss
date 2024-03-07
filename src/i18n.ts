import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === "fr"
        ? // When using Turbopack, this will enable HMR for `fr`
          import("../content/fr.json")
        : import(`../content/${locale}.json`))
    ).default,
  };
});
