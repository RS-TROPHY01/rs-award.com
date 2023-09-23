import React from "react";
import Categories from "@/components/Section/Categories";
import Why from "@/components/Section/RSAWARD";
import Head from "next/head";
export default function award() {
  return (
    <>
      <Head>
        <title>
          RS AWARD | โล่รางวัลคริสตัล |โล่รางวัลอะคริลิค | กล่องโล่รางวัล |
          โล่รางวัลไม้
        </title>
        <meta
          name="description"
          content="โล่รางวัลคริสตัล |โล่รางวัลอะคริลิค | กล่องโล่รางวัล | โล่รางวัลไม้"
        />
        <meta
          name="keywords"
          content="โล่รางวัล, โล่รางวัลอะคริลิค, โล่รางวัลอะคริลิคสั่งทำ, โล่รางวัลอะคริลิคสำเร็จรูป, โล่รางวัลไม้, โล่รางวัลคริสตัล, กล่องโล่รางวัล, RS AWARD, AWARD"
        />
      </Head>
      <Categories />
      <Why />
    </>
  );
}
