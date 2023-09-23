import Product from "@/components/Section/Product"; // Adjust the path as needed
import FinishedCrystal from "@/components/Data/FinishedCrystal"; // Adjust the path as needed
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>โล่รางวัลคริสตัลสำเร็จรูป</title>
        <meta name="description" content="โล่รางวัลคริสตัลสำเร็จรูป" />
        <meta
          name="keywords"
          content="โล่รางวัล, โล่รางวัลคริสตัลสำเร็จรูป, โล่รางวัลคริสตัล, RS AWARD, AWARD"
        />
      </Head>
      <div className="mx-auto container">
        <div className="p-4">
          <h1 className="text-center m-4 font-bold">โล่รางวัลคริสตัล</h1>
          <Product products={FinishedCrystal} />
        </div>
      </div>
    </>
  );
}
