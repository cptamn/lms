import axios from "axios";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const LatestNews: FC = ({ items }) => {
  return (
    <div className="max-w-[1299px] mx-auto flex flex-col  pt-16">
      <div className="flex flex-row items-center justify-between pb-14">
        <h1 className="text-28xl-bold">Мэдээ, Мэдээлэл</h1>
        <div className="flex items-center gap-3 ">
          <button className="text-[#9AA5B3] text-sm-regular">
            Бүгдийг харах
          </button>
          <HiOutlineArrowLongRight />
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 py-9">
        {items.map((item) => {
          return (
            <div className="bg-[#C4C4C4] rounded-md w-[416px] h-[517px] relative">
              <Image src={item.picUrl} alt="zurag" width={450} height={300} />

              <div className="bg-white rounded-md w-[416px] h-[255px] absolute bottom-0 border border-shadow-2xl px-8">
                <div className="flex items-center justify-between">
                  <p className="text-sm-regular py-3">
                    by <span className="text-[#3764EB]">Creativemela</span>
                  </p>
                  <p>April 21, 2020</p>
                </div>
                <h2 className="text-20x7-medium ">{item.title}</h2>
                <p className="py-7 line-clamp-2 pb-2">{item.description}</p>
                <button className="bg-[#EEEEEE] py-2 px-6 rounded-md ml-3">
                  Цааш унших...
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestNews;
