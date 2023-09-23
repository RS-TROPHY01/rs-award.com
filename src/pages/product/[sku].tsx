import Head from "next/head";
import { ProductProps } from "@/components/Props/Product";
import FinishedAcrylic from "@/components/Data/FinishedAcrylic";
import FinishedCrystal from "@/components/Data/FinishedCrystal";
import { socials } from "@/components/Navigations/SocialBar";
import Link from "next/link";
import RSAWARD from "@/components/Section/RSAWARD";

const products = FinishedAcrylic.concat(FinishedCrystal);

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { sku: product.sku },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { sku: string } }) {
  const product = products.find((b) => b.sku === params.sku);
  return {
    props: {
      product,
    },
  };
}

const ProductPage: React.FC<{ product: ProductProps }> = ({ product }) => {
  return (
    <>
      <Head>
        <title>RS AWARD | {product.sku}</title>
        <meta name="description" content={product.sku} />
        <meta name="keywords" content={product.sku} />
      </Head>
      <div className="p-3">
        <div className="grid grid-1 lg:grid-cols-6 mx-auto max-w-2xl lg:max-w-7xl px-4 gap-2 py-6">
          <div className="col-span-1 lg:col-span-4">
            <img src="\test\1600900.png" />
          </div>
          <div className="col-span-1 lg:col-span-2 my-auto px-4">
            <div className="">
              <div>
                <h1 className="w-full xl:text-6xl ">
                  โล่รางวัล
                  <br />
                  {product.sku}
                </h1>
              </div>
              <div>
                {!(product.price === "") && (
                  <p className="font-bold xl:text-4xl">{product.price} บาท</p>
                )}

                {!(
                  product.width === "" &&
                  product.length === "" &&
                  product.height === ""
                ) && (
                  <p>
                    {product.width} x {product.length} x {product.height} mm
                  </p>
                )}
              </div>
            </div>
            <div>
              <h3>ติดต่อ/สอบถามได้ที่</h3>
              {socials.map((social, index) => (
                <Link
                  aria-label={social.alt}
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex my-auto transition-transform duration-300 hover:scale-110  ${
                    (social.alt === "phone logo" ||
                      social.alt === "gmail logo") &&
                    "lock lg:hidden"
                  }`}
                >
                  <img
                    loading="lazy"
                    src={social.src}
                    alt={social.alt}
                    width={50}
                    height={50}
                  />
                  <p className="my-auto">{social.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <RSAWARD />
      </div>
    </>
  );
};

export default ProductPage;
