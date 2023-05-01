import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Idata } from "./interfaces/data";

// interface dataProps {
//   data: Idata;
// }

// const [data, setData] = useState<Idata[]>([]);

// useEffect(() => {
//   axios
//     .get("http://localhost:8080/todos")
//     .then((res) => {
//       // const data: Idata[] = res.data;
//       setData(res.data);
//       console.log("data", data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }, []);
const LatestNews: FC = () => (
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
      <div className="bg-[#C4C4C4] rounded-md w-[416px] h-[517px] relative">
        <div className="bg-white rounded-md w-[416px] h-[255px] absolute bottom-0 border border-shadow-2xl px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm-regular py-3">
              by <span className="text-[#3764EB]">Creativemela</span>
            </p>
            <p>April 21, 2020</p>
          </div>
          <h2 className="text-20x7-medium pt-3">
            sapien, quis porttitor ipsum et.
          </h2>
          <p className="py-7">
            Duis interdum ex lobortis, suscipit purus congue, euismod odio.
            Aenean tempor.
          </p>
          <button className="bg-[#EEEEEE] py-2 px-6 rounded-md ml-3">
            + Read More
          </button>
        </div>
      </div>
      <div className="bg-[#C4C4C4] rounded-md w-[416px] h-[517px] relative">
        <div className="bg-white rounded-md w-[416px] h-[255px] absolute bottom-0 border border-shadow-2xl px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm-regular py-3">
              by <span className="text-[#3764EB]">Creativemela</span>
            </p>
            <p>April 21, 2020</p>
          </div>
          <h2 className="text-20x7-medium pt-3">
            sapien, quis porttitor ipsum et.
          </h2>
          <p className="py-7">
            Duis interdum ex lobortis, suscipit purus congue, euismod odio.
            Aenean tempor.
          </p>
          <button className="bg-[#EEEEEE] py-2 px-6 rounded-md ml-3">
            + Read More
          </button>
        </div>
      </div>
      <div className="bg-[#C4C4C4] rounded-md w-[416px] h-[517px] relative">
        <div className="bg-white rounded-md w-[416px] h-[255px] absolute bottom-0 border border-shadow-2xl px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm-regular py-3">
              by <span className="text-[#3764EB]">Creativemela</span>
            </p>
            <p>April 21, 2020</p>
          </div>
          <h2 className="text-20x7-medium pt-3">
            sapien, quis porttitor ipsum et.
          </h2>
          <p className="py-7">
            Duis interdum ex lobortis, suscipit purus congue, euismod odio.
            Aenean tempor.
          </p>
          <button className="bg-[#EEEEEE] py-2 px-6 rounded-md ml-3">
            + Read More
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default LatestNews;
