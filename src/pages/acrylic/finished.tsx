import FinishedAcrylic from "@/components/Data/FinishedAcrylic";
import Product from "@/components/Section/Product";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>RS AWARD | โล่รางวัลอะคริลิคสำเร็จรูป</title>
        <meta name="description" content="โล่รางวัลอะคริลิคสำเร็จรูป" />
        <meta
          name="keywords"
          content="โล่รางวัล, โล่รางวัลอะคริลิค, โล่รางวัลอะคริลิคสำเร็จรูป, RS AWARD, AWARD"
        />
      </Head>
      <div className="mx-auto container">
        <div className="p-4">
          <h1 className="text-center">โล่รางวัลอะคริลิคสำเร็จรูป</h1>
          <div className="p-4">
            <Product products={FinishedAcrylic} />
          </div>
        </div>
      </div>
    </>
  );
}
