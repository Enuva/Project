import Header from "@/components/Home/Header/Header";
import Partners from "@/components/Home/Partners/Partners";
import RoadMap from "@/components/Home/RoadMap/RoadMap";
import Nav from "@/components/Shared/Nav";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 0);
  }, []);

  return (
    <>
      <Head>
        <title>CRYPTO</title>
      </Head>

      {/* components */}
      <Nav />
      <Header />
      <Partners />
      <RoadMap />
    </>
  );
}
