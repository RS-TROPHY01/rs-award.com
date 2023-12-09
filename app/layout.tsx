import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { SocialBar } from "@/components/SocialBar";
import Script from "next/script";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  icons: "/favicon.ico",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RS AWARD",
    legalName: "RUAMSUK PLATING LIMITED PARTNERSHIP",
    url: "http://www.rs-award.com",
    logo: "http://www.rs-award.com/favicon.ico",
    foundingDate: "2006",
    founders: [
      {
        "@type": "Person",
        name: "Sombut Thammasorn",
      },
      {
        "@type": "Person",
        name: "Sukanya Puangsorn",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tiwanon Road",
      addressLocality: "Pathum Thani",
      addressRegion: "TH",
      postalCode: "12000",
      addressCountry: "Thailand",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: ["+66-64-937-0011", "+66-64-937-0033", "+66-64-937-0066"],
      email: ["ruamsukplating@gmail.com", "ruamsukplating@hotmail.com"],
    },
    sameAs: [
      "http://www.rs-trophy.com",
      "http://www.rs-medal.com",
      "https://www.facebook.com/RSTrophy01",
    ],
  };
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
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
          strategy="lazyOnload"
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className + " bg-white "}>
        <AppHeader />
        <main className="mx-auto max-w-6xl">{children}</main>
        <SocialBar />
        <AppFooter />
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
      </body>
    </html>
  );
}
