import { Html, Head, Main, NextScript } from "next/document";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { SocialBar } from "@/components/SocialBar";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Your Head contents here */}
        {/* Google Tag Manager (script) */}
        <script
          id="googletagmanager"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M86WK6ZW');
          `,
          }}
        />
        {/* Include other head-related elements here */}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M86WK6ZW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AppHeader />
        <main className="mx-auto max-w-6xl py-4 items-center px-2">
          <Main />
        </main>
        <SocialBar />
        <AppFooter />
        <NextScript />
      </body>
    </Html>
  );
}
