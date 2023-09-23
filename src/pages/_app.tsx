import "../styles/app.css";
import AppHeader from "@/components/Navigations/AppHeader";
import AppFooter from "@/components/Navigations/AppFooter";
import { SocialBar } from "@/components/Navigations/SocialBar";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
      <SocialBar />
      <AppFooter />
    </>
  );
}
