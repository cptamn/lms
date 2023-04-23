import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { FC } from "react";
import React, { useState } from "react";
import arrowLeft from "../assets/ArrowLeft.svg";
import arrowRight from "../assets/ArrowRigth.svg";
import SlideBox from "../assets/slideBox.svg";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsFullscreen,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import slideIMG from "../assets/medeeZurag.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const slides = [
  {
    url: "https://via.placeholder.com/600x400",
  },
  {
    url: "https://via.placeholder.com/600x400",
  },
  {
    url: "https://via.placeholder.com/600x400",
  },

  {
    url: "https://via.placeholder.com/600x400",
  },
  {
    url: "https://via.placeholder.com/600x400",
  },
];

const SliderItem = ({ slide }: { slide: { url: string } }) => (
  <div className="flex items-center">
    <div className="flex items-center justify-center w-[50%] gap-4 px-5">
      <Image
        src={slideIMG}
        alt="arrowRight"
        width={600}
        height={600}
        className="w-screen h-[50%] rounded-xl"
      />
    </div>
    <div className="grid place-self-center  w-[50%]">
      <h1 className=" text-4xl">
        Татварын хуулийг хэн сайн мэдэх вэ? 2023 тэмцээний нэгдүгээр шатны
        нэгдсэн дүн гарлаа.
      </h1>
      <p className="text-xl-medium text-[#4a4343] pt-6">
        Татварын хуулийг хэн сайн мэдэх вэ? 2023 тэмцээний нэгдүгээр шатны
        шалгаруулалт видео контент, эсээ, тестийн даалгавартайгаар амжилттай
        зохион байгуулагдаж
      </p>
      <div className="flex items-center gap-3 pt-10">
        <button className="py-3.5 px-8 bg-[#3764EB] text-white rounded-md ">
          Дэлгэрэнгүй...
        </button>
      </div>
    </div>
  </div>
);

const SliderSection: FC = () => {
  return (
    <>
      <div className="h-[680px] w-full m-auto relative group bg-[#d9d9d9] grid place-items-center">
        <Swiper
          grabCursor={true}
          slidesPerView={1}
          className="w-[1299px]"
          navigation={{
            nextEl: ".hero-slider-next",
            prevEl: ".hero-slider-prev",
          }}
          modules={[Navigation]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <SliderItem slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="hero-slider-prev">
          <BsChevronCompactLeft />
        </button>

        <button className="hero-slider-next">
          <BsChevronCompactRight />
        </button>
      </div>
    </>
  );
};

export default SliderSection;
