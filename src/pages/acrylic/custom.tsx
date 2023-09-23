import CustomAcrylic from "@/components/Section/CustomAcrylic";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>โล่รางวัลอะคริลิคสำเร็จรูป</title>
        <meta name="description" content="โล่รางวัลอะคริลิคสำเร็จรูป" />
        <meta
          name="keywords"
          content="โล่รางวัล, โล่รางวัลอะคริลิค, โล่รางวัลอะคริลิคสำเร็จรูป, RS AWARD, AWARD"
        />
      </Head>
      <div className="mx-auto container">
        <h1 className="text-center">โล่รางวัลอะคริลิคสั่งทำ</h1>
        <div className="p-4">
          <CustomAcrylic />
        </div>
      </div>
    </>
  );
}
