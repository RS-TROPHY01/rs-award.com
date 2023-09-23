import Product from "@/components/Section/Product";
import FinishedAcrylic from "@/components/Data/FinishedAcrylic";

export default function PreviewProduct() {
  return <Product products={FinishedAcrylic} limit={5} />;
}
