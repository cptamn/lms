import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  RiMenu4Fill,
  RiSearchLine,
  RiPhoneFill,
  RiMailFill,
} from "react-icons/ri";
import logoTMZn from "../assets/MUTMZN_logo_23.svg";

const Header: FC = () => (
  <div className="w-full bg-green">
    <div className="bg-[#E5E5E5] w-screen">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between grid-cols-2 ">
        <div className="flex gap-4">
          <div className="flex items-center cursor-pointer">
            <RiPhoneFill />
            <h1>76118989</h1>
          </div>
          <div className="flex items-center cursor-pointer">
            <RiMailFill />
            <h1>info@cpta.mn</h1>
          </div>
        </div>
        <div className="flex py-3 gap-4">
          <Link href="/">Ажлын байр</Link>
          <div className="flex items-center">
            <RiSearchLine className="absolute z-10 ml-40 cursor-pointer" />
            <input
              type="text"
              placeholder="хайх"
              className="flex relative rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#140342] ">
      <div className="flex items-center justify-between max-w-[1240px] mx-auto">
        <div className="pl-4 flex items-center w-[250px] cursor-pointer mt-6">
          <Image
            src={logoTMZn}
            alt="/"
            width={50}
            height={50}
            className="bg-white rounded-full mr-3"
          />
          <h1 className="text-xs-regular text-white">
            Монгол Улсын Татварын Мэргэшсэн зөвлөхийн нийгэмлэг
          </h1>
        </div>
        <div className="flex flex-row gap-4 items-center mt-6">
          <button className="bg-white text-[#140342] py-[10px] px-[10px] rounded-xl mr-[20px] origin-center hover:origin-top hover:bg-[#140342] hover:text-white hover:drop-shadow-xl hover:border border-white">
            Гишүүний програм
          </button>
        </div>
      </div>
      {/* menu section */}
      <div className="flex items-center justify-around max-w-[1240px] mx-auto bg-white translate-y-8 ">
        <ul className="flex uppercase text-xs-regular ">
          <div className="py-6 px-6 border border-l-2 cursor-pointer hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
            <Link href="/">Гишүүнчлэл</Link>
          </div>
          <div className=" py-6 px-6 border border-l-1 hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
            <Link href="/">Мэдээ, мэдээлэл</Link>
          </div>
          <div className=" py-6 px-6 border border-l-1 hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
            <Link href="/">Сургалт, шалгалт</Link>
          </div>
          <div className=" py-6 px-6 border border-l-1 hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
            <Link href="/">Татварын боловсрол</Link>
          </div>
          <div className=" py-6 px-6 border border-l-1 hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
            <Link href="/">Судалгаа</Link>
          </div>
          <div className=" py-6 px-6 border border-l-1 hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
            <Link href="/">Хууль тогтоомж</Link>
          </div>
          <div className=" py-6 px-6 border border-l-1 hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
            <Link href="/">Олон нийт</Link>
          </div>
          <div className=" py-6 px-6 border border-l-1 hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
            <Link href="/">Танилцуулга</Link>
          </div>
        </ul>
      </div>
    </div>
  </div>

  // <div className="bg-[#E5E5E5] w-screen">
  //   <div className="max-w-[1240px] mx-auto">
  //

  //   </div>
  // </div>
);

export default Header;
