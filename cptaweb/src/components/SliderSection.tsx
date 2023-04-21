import Image from "next/image";
import { FC } from "react";
import React from "react";
import arrowLeft from "../assets/ArrowLeft.svg";
import arrowRight from "../assets/ArrowRigth.svg";
import SlideBox from "../assets/slideBox.svg";

const SliderSection: FC = () => (
  <div className=" h-[675px] bg-gradient-to-r from-slate-50 to-slate-400 relative">
    <div className="w-[1299px] mx-auto ">
      <h1 className="text-6xl-bold max-w-[700px] pt-[188px] ">
        Labaid testing and Laboratory Center.
      </h1>
      <p className="text-20xl-medium text-[#9AA5B3] pt-6">
        Maecenas convallis eros eget libero viverra, id sodales libero semper.
      </p>
      <div className="flex items-center gap-3 pt-10">
        <button className="py-3.5 px-8 bg-[#3764EB] text-white rounded-md ">
          + Contact Us
        </button>
        <button>Have A Nice Day Save Jone!</button>
      </div>
      <Image
        src={arrowRight}
        alt="arrowLeft"
        width={72}
        height={50}
        className="absolute top-80 left-16 cursor-pointer"
      />
      <Image
        src={arrowLeft}
        alt="arrowLeft"
        width={72}
        height={50}
        className="absolute top-80 right-16 cursor-pointer"
      />
      <Image
        src={SlideBox}
        alt="SlideBox"
        width={100}
        height={180}
        className="absolute top-96 left-0 "
      />
    </div>
  </div>
);

export default SliderSection;
