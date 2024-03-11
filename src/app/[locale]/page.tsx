import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Presentation from "@/components/Presentation";
import Description from "@/components/Description";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Presentation />
      <Description />
      <Pricing />
    </>
  );
}
