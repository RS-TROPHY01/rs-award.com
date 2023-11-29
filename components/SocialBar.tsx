import Link from "next/link";
export const socials = [
  {
    name: "ถ้วยรางวัลราคาโรงงาน RS Trophy",
    href: "https://www.m.me/RSTrophy01",
    src: "/logo/facebook.svg",
    alt: "facebook logo",
  },
  {
    name: "@rs.trophy",
    href: "http://line.me/ti/p/@rs.trophy",
    src: "/logo/line.svg",
    alt: "line logo",
  },
  {
    name: "0649370011",
    href: "tel:0649370011",
    src: "/logo/phone.svg",
    alt: "phone logo",
  },
  {
    name: "ruamsukplating@gmail.com",
    href: "mailto:ruamsukplating@gmail.com",
    src: "/logo/gmail.svg",
    alt: "gmail logo",
  },
  {
    name: "Rs trophy ร่วมสุขถ้วยรางวัล",
    href: "https://goo.gl/maps/yNtcKifRHViNarrv6",
    src: "/logo/googlemaps.svg",
    alt: "google map logo",
  },
];

export function SocialBar() {
  return (
    <div className="mx-auto rounded-t-lg shadow bg-gray-900 sticky bottom-0 w-full py-1">
      <div className="mx-auto max-w-screen-xl px-3 flex justify-center items-center w-full h-full">
        <div className="flex-shrink-0 flex items-center space-x-4 md:space-x-0">
          {socials.map((social, index) => (
            <Link
              aria-label={social.alt}
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                loading="lazy"
                src={social.src}
                alt={social.alt}
                width={50}
                height={50}
                className={`transition-transform duration-300 hover:scale-110 ${
                  (social.alt === "phone logo" ||
                    social.alt === "gmail logo") &&
                  "lock md:hidden"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
