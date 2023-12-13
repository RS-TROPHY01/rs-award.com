import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "RS AWARD | เกี่ยวกับเรา",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลคุณภาพดีแข็งแรงทนทาน โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords: "RS AWARD, โล่รางวัล",
};
export default function aboutus() {
  return (
    <div>
      <section className="flex items-center py-4 font-poppins">
        <div className="justify-center flex-1 mx-auto ">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative lg:max-w-md">
                <img
                  src="\logo\RSTROPHY.ico"
                  alt="aboutimage"
                  className="relative z-10 object-cover w-full rounded h-96"
                />
                <div className="absolute bottom-0 right-0 z-10 p-4 bg-gray-900 rounded shadow -mr-11 ">
                  <p className="text-lg font-semibold md:w-72">
                    <span className="text-white">นึงถึงโล่รางวัล</span>
                    <br /> <span className="text-white">นึงถึง RS AWARD</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                <span className="text-sm  uppercase ">เกี่ยวกับเรา ?</span>
                <h1 className="mt-2 text-3xl font-black  md:text-5xl ">
                  RS AWARD
                </h1>
              </div>
              <p className="mb-6 text-base leading-7 ">
                Rs AWARD
                เป็นบริษัทจัดจำหน่วยโล่รางวัลชั้นนำในประเทศด้วยราคาโรงงาน
                โดยจัดจำหน่ายโล่รางวัล ราคาย่อมเยา เปี่ยมคุณภาพ
              </p>
              <div className="m-auto">
                <h3>วิธีการชำระเงิน</h3>
                <div className="flex m-auto p-2">
                  <img className="w-10" src="\logo\SCB.jpg" />
                  <div className="my-auto p-1">329 2 66927 8</div>
                </div>
                <div className="flex m-auto p-2">
                  <img className="w-10" src="\logo\KBank.jpg" />
                  <div className="my-auto p-1">018 8 83682 8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
