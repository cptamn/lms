import React from "react";

const HomeSectionTwo = () => {
  return (
    <>
      <div className="w-[1299px] mx-auto flex items-center justify-around border-t-2 border-solid py-14">
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
      <div className="w-[1299px] mx-auto flex items-center justify-around gap-4">
        <button className="w-full h-20 py-2 px-10 bg-[#3764EB] text-white hover:bg-slate-300 hover:text-[#3764EB] hover:border-blue-500 hover:border-solid">
          Татварын итгэмжлэгдсэн хуулийн этгээд
        </button>
        <button className="w-full h-20 py-2 px-10 bg-[#3764EB] text-white hover:bg-slate-300 hover:text-[#3764EB] hover:border-blue-500">
          Татварын Мэргэшсэн Зөвлөх
        </button>
      </div>
    </>
  );
};

export default HomeSectionTwo;
