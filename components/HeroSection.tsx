import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="relative h-full">
      <Image
        src="/panel/hero_section.webp"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        alt="RS AWARD PANEL"
        aria-label=""
        priority={true} // Set this to true for eager loading, or false for lazy loading
      />
    </div>
  );
}
