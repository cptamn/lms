import Link from "next/link";
import React, { useEffect } from "react";
import { RxDividerVertical } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSectionTwo = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1200,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <div
        className="w-[1299px] mx-auto flex items-center justify-around border-t-2 border-solid py-14"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center w-[170px] h-[123px]">
          <h1 className="text-[#3764EB] text-3xl-bold pb-4">1687</h1>
          <p className="text-[#9AA5B3] text-center">
            Татварын Мэргэшсэн Зөвлөх
          </p>
        </div>
        <div className="flex flex-col items-center w-[170px] h-[123px]">
          <h1 className="text-[#3764EB] text-3xl-bold pb-4">40</h1>
          <p className="text-[#9AA5B3] text-center ">Багш</p>
        </div>
        <div className="flex flex-col items-center w-[170px] h-[123px]">
          <h1 className="text-[#3764EB] text-3xl-bold pb-4">10000</h1>
          <p className="text-[#9AA5B3] text-center">Суралцагч гишүүн</p>
        </div>
        <div className="flex flex-col items-center w-[170px] h-[123px]">
          <h1 className="text-[#3764EB] text-3xl-bold pb-4">38</h1>
          <p className="text-[#9AA5B3] text-center">
            Татварын итгэмжлэгдсэн хуулийн этгээд
          </p>
        </div>
      </div>
      <div className="flex w-full">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          <Link href="/tmz-company">
            <button className="btn btn-primary w-full">
              Татварын итгэмжлэгдсэн хуулийн этгээд
            </button>
          </Link>
        </div>
        <div className="divider divider-horizontal">
          <RxDividerVertical />
        </div>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          <Link href="/membersCpta">
            <button className="bg-[#3764EB] text-white h-20 px-[100%]">
              Татварын Мэргэшсэн Зөвлөх
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-4"></div> */}
    </>
  );
};

export default HomeSectionTwo;
