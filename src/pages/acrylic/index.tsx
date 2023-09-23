import CustomAcrylic from "@/components/Section/CustomAcrylic";
import FinishedAcrylic from "@/components/Data/FinishedAcrylic";
import Product from "@/components/Section/Product";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>โล่รางวัลอะคริลิค</title>
        <meta name="description" content="โล่รางวัลอะคริลิคสำเร็จรูป" />
        <meta
          name="keywords"
          content="โล่รางวัล, โล่รางวัลอะคริลิค, โล่รางวัลอะคริลิคสำเร็จรูป, RS AWARD, AWARD"
        />
      </Head>
      <div className="mx-auto container">
        <div className="p-4">
          <h1 className="text-center">โล่รางวัลอะคริลิค</h1>
          <div className="p-4">
            <h2 className="text-center">โล่รางวัลอะคริลิคสำเร็จรูป</h2>
            <Product products={FinishedAcrylic} limit={8} />
          </div>
          <h2 className="text-center">โล่รางวัลอะคริลิคสั่งทำ</h2>
          <CustomAcrylic />
        </div>
      </div>
    </>
  );
}
