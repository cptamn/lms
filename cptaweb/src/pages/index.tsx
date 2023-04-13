import Head from "next/head";
import Header from "@/components/Header";
import MembershipFees from "../components/MembershipFees";

export default function Home() {
  return (
    <>
      <Head>
        <title key="title">
          Нүүр хуудас | Монгол Улсын Татварын Мэргэшсэн зөвлөхийн нийгэмлэг
        </title>
      </Head>
      <Header />
      <MembershipFees />
    </>
  );
}
