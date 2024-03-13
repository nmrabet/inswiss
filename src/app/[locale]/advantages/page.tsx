import MainPagesHeader from "@/components/MainPagesHeader";
import Navbar from "@/components/Navbar";
import React from "react";
import Advantages from "@/components/HeroAdvantage";
import { AccordionDemo } from "@/components/AccordionDemo";
import Footer from "@/components/Footer";

export default function Steps() {
  return (
    <>
      <Navbar />

      <MainPagesHeader />

      <Advantages />

      <AccordionDemo />

      <Footer />
    </>
  );
}
