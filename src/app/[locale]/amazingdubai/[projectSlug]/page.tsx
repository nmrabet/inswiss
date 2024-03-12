import Navbar from "@/components/Navbar";
import React from "react";

export default function Page({
  params,
}: {
  params: {
    projectSlug: any;
    slug: string;
  };
}) {
  return (
    <>
      <Navbar />
    </>
  );
}
