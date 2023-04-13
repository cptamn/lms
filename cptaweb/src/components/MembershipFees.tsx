import Image from "next/image";
import { FC } from "react";
import React from "react";

const MembershipFees: FC = () => (
  <div className="bg-[#E5E5E5] w-screen">
    <div className="max-w-[1240px] mx-auto h-[450px] pt-20">
      <div className="flex items-center grid-cols-2">
        <div className="border border-solid border-blue-800 w-[620px] h-[300px]"></div>
        <div className="flex flex-col justify-center border border-solid border-blue-800 w-[620px] h-[300px] gap-2 px-4">
          <h1 className="text-3xl-bold">
            “Татварын хуулийг хэн сайн мэдэх вэ? 2023” тэмцээний тестийн дүн
            гарлаа
          </h1>
          <p>
            Монголын татварын алба, Татварын мэргэшсэн зөвлөхийн нийгэмлэг
            хамтран зохион байгуулж буй ”Татварын хуулийг хэн сайн мэдэх вэ?
          </p>
          <p>2023-04-13</p>
        </div>
      </div>
    </div>
  </div>
);

export default MembershipFees;
