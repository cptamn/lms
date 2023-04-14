import Image from "next/image";
import { FC } from "react";
import React, { useRef, useState } from "react";
import logoTMZn from "../assets/MUTMZN_logo_23.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import zurag2 from "../assets/zurag1.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const MembershipFees: FC = () => (
  <>
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      preventClicksPropagation={false}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper flex flex-col items-center justify-center w-[1240px]"
    >
      <SwiperSlide>
        <div className="container">
          <div className="aspect-video">
            <Image
              src={zurag2}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative">
              <h1 className="text-white">Hello world!</h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <div className="aspect-video">
            <Image
              src={zurag2}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative">
              <h1 className="text-white">Hello world!</h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
);

export default MembershipFees;
