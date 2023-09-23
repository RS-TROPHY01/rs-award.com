import React from "react";
import Categories from "@/components/Section/Categories";
import Why from "@/components/Section/RSAWARD";
import Head from "next/head";
export default function award() {
  return (
    <>
      <Head>
        <title>โล่รางวัลอะคริลิค | โล่รางวัลไม้ | โล่รางวัลคริสตัล</title>
        <meta
          name="description"
          content="โล่รางวัลอะคริลิค | โล่รางวัลไม้ | โล่รางวัลคริสตัล"
        />
        <meta
          name="keywords"
          content="โล่รางวัล, โล่รางวัลอะคริลิค, โล่รางวัลอะคริลิคสั่งทำ, โล่รางวัลอะคริลิคสำเร็จรูป, โล่รางวัลไม้, โล่รางวัลคริสตัล, RS AWARD, AWARD"
        />
      </Head>
      <Categories />
      <Why />
    </>
  );
}
