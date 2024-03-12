import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Presentation from "@/components/Presentation";
import Description from "@/components/Description";
import Pricing from "@/components/Pricing";
import PreviewProject from "@/components/PreviewProject";
import Testimony from "@/components/Testimony";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import VideoBanner from "@/components/VideoBanner";

export default function Home() {
  return (
    <>
      <Navbar />

      <Intro />

      <Presentation />

      <Description />

      <Pricing />

      <PreviewProject />

      <Testimony />

      <VideoBanner />

      <Footer />

      <ScrollToTop />
    </>
  );
}
