import Head from "next/head";
import Header from "@/components/Header";
import SliderSection from "@/components/SliderSection";
import LatestNews from "@/components/LatestNews";
import HomeSectionTwo from "@/components/HomeSectionTwo";
import axios from "axios";

export default function Home({ news }: { news: any }) {
  return (
    <>
      <Head>
        <title key="title">
          Нүүр хуудас | Монгол Улсын Татварын Мэргэшсэн зөвлөхийн нийгэмлэг
        </title>
      </Head>

      <SliderSection />
      <LatestNews items={news} />
      <div className="w-[1299px] mx-auto">
        <HomeSectionTwo />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(`http://localhost:8080/todos`);

  const news = await res.data;
  console.log(news);

  // Pass data to the page via props
  return { props: { news } };
}
