import type { Metadata } from "next";
import { Metrophobic, Open_Sans } from "next/font/google";
import "../../globals.css";

type FontObject = {
  className: string;
};

const metrophobic: FontObject = Metrophobic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-metrophobic",
});

const openSans: FontObject = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
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
    <html
      lang={locale}
      className={`${openSans.variable} ${metrophobic.variable} font-sans`}
    >
      <body className={metrophobic.className}>{children}</body>
    </html>
  );
}
