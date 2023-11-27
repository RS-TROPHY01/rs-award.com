import HeroSection from "@/components/HeroSection";
import RSAWARD from "@/components/RSAWARD";
import { OrganizationJsonLd } from "next-seo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RSAWARD />
    </main>
  );
}
