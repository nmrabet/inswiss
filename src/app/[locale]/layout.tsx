import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

type FontObject = {
  className: string;
};

const inter: FontObject = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
