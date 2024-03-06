import type { Metadata } from "next";
import { Metrophobic } from "next/font/google";
import "../../globals.css";

type FontObject = {
  className: string;
};

const metrophobic: FontObject = Metrophobic({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Swiss Immo Dubai",
  description: "Real estate in Dubai",
};

interface RootLayoutProps {
  children: React.ReactNode;
  locale: never;
}

export default function RootLayout({ children, locale }: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={metrophobic.className}>{children}</body>
    </html>
  );
}
