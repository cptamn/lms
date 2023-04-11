import Link from "next/link";
import { FC } from "react";
import { RiMenu4Fill, RiSearchLine } from "react-icons/ri";

const Header: FC = () => (
  <div className="bg-[#E5E5E5] w-screen">
    <div className="w-full h-[90px] bg-[#140342] ">
      <div className="max-w-[1920px] text-white flex items-center justify-between mx-auto">
        <div className="pl-4">LOGO</div>
        <div className="flex flex-row items-center">
          <RiMenu4Fill />
          <h1>Ангилал</h1>
        </div>
        <div className="flex flex-row items-center gap-4 font-xl "></div>
        <div>
          <ul className="flex justify-between uppercase gap-4 ">
            <div className="bg-[#140342] py-6 px-3 cursor-pointer hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
              <Link href="/">Гишүүнчлэл</Link>
            </div>
            <div className="bg-[#140342] py-6 px-3 cursor-pointer hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
              <Link href="/">Мэдээ, мэдээлэл</Link>
            </div>
            <div className="bg-[#140342] py-6 px-3 cursor-pointer hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
              <Link href="/">Сургалт, шалгалт</Link>
            </div>
            <div className="bg-[#140342] py-6 px-3 cursor-pointer hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
              <Link href="/">Татварын боловсрол</Link>
            </div>
            <div className="bg-[#140342] py-6 px-3 cursor-pointer hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
              <Link href="/">Судалгаа</Link>
            </div>
            <div className="bg-[#140342] py-6 px-3 cursor-pointer hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
              <Link href="/">Хууль тогтоомж</Link>
            </div>
            <div className="bg-[#140342] py-6 px-3 cursor-pointer hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
              <Link href="/">Олон нийт</Link>
            </div>
            <div className="bg-[#140342] py-6 px-3 cursor-pointer hover:bg-[#00FF84] hover:text-[#140342] hover:transition delay-100 duration-300 ease-in hover:translate-y-2">
              <Link href="/">Танилцуулга</Link>
            </div>
          </ul>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <input type="search">
            <RiSearchLine />
          </input>

          <button className="bg-white text-[#140342] py-[10px] px-[10px] rounded-xl mr-[20px] origin-center hover:origin-top hover:bg-[#140342] hover:text-white hover:drop-shadow-xl">
            Гишүүний програм
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
