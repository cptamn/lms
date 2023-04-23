import Head from "next/head";
import Header from "@/components/Header";
import SliderSection from "@/components/SliderSection";
import LatestNews from "@/components/LatestNews";
import HomeSectionTwo from "@/components/HomeSectionTwo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title key="title">
          Нүүр хуудас | Монгол Улсын Татварын Мэргэшсэн зөвлөхийн нийгэмлэг
        </title>
      </Head>

      <SliderSection />
      <LatestNews />
      <HomeSectionTwo />
    </>
  );
}
