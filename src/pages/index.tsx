import React from "react";
import Head from "next/head";
import Categories from "@/components/Section/Categories";
import RSAWARD from "@/components/Section/RSAWARD";
import HeroSection from "@/components/Section/HeroSection";
import Promotion from "@/components/Section/Promotion";
export default function Home() {
  return (
    <>
      <Head>
        <title>RS AWARD | จัดจำหน่ายโล่รางวัล | โล่รางวัลราคาโรงงาน</title>
        <meta
          name="description"
          content="RS AWARD จัดจำหน่ายโล่รางวัลราคาโรงงาน"
        />
        <meta
          name="keywords"
          content="โล่รางวัล, โล่รางวัลอะคริลิค, โล่รางวัลอะคริลิคสั่งทำ, โล่รางวัลอะคริลิคสำเร็จรูป, โล่รางวัลไม้, โล่รางวัลคริสตัล, RS AWARD, AWARD"
        />
      </Head>
      <HeroSection />
      <Categories />
      <Promotion />
      <RSAWARD />
    </>
  );
}
