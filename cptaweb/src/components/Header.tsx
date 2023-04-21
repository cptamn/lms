import Link from "next/link";
import { FC } from "react";
import { MdKeyboardArrowDown, MdMail, MdPhone } from "react-icons/md";
import LogoMain from "../assets/MUTMZN_logo_PNG.png";
import Image from "next/image";

const Header: FC = () => (
  <div className="max-w-full bg-white ">
    {/* Top Header */}
    <div className="max-w-[1299px] mx-auto flex items-center justify-between text-[#9AA5B3] text-xs-medium py-4 border-b-2 ">
      <div className="flex  gap-4">
        <button className="flex items-center gap-2 hover:text-[#3764EB]">
          <MdPhone />
          <p>76118989</p>
        </button>
        <button className="flex items-center gap-2 hover:text-[#3764EB]">
          <MdMail />
          <p>info@cpta.mn</p>
        </button>
      </div>
      <div className="flex gap-3">
        <Link href="/" className="hover:text-[#3764EB]">
          Ажлын байр
        </Link>
        <button className="flex items-center hover:text-[#3764EB]">
          <p>English</p>
          <MdKeyboardArrowDown />
        </button>
      </div>
    </div>
    {/* Header center */}
    <div className="flex items-center justify-between max-w-[1299px] mx-auto ">
      <button className="flex items-center py-6 hover:text-[#3764EB]">
        <Image src={LogoMain} alt="logo" width={50} height={50} />
        <div className="flex flex-col items-baseline pl-2">
          <p className="uppercase ">Монгол улсын татварын</p>
          <p className="uppercase">мэргэшсэн зөвлөхийн нийгэмлэг</p>
        </div>
      </button>
      <div className="flex items-center gap-6 text-sl uppercase">
        <Link href="/" className="hover:text-[#3764EB]">
          Сургалтын төлөвлөгөө
        </Link>
        <Link href="/" className="hover:text-[#3764EB]">
          Судалгаа
        </Link>
        <Link href="/" className="hover:text-[#3764EB]">
          Tax bulletin
        </Link>
      </div>
      <button className="py-3 px-6 rounded-lg bg-[#3764EB] text-white hover:bg-[#FEE100] hover:text-[#3764EB]">
        Гишүүний програм
      </button>
    </div>
    {/* Header bottom */}
    <div className="bg-[#2F5ADD]">
      <ul className="flex max-w-[1299px] items-center justify-between mx-auto text-white text-xs-medium uppercase py-5">
        <Link href="/" className="flex items-center gap-1 hover:text-[#FEE100]">
          <li>Гишүүнчлэл</li>
          <MdKeyboardArrowDown />
        </Link>
        <Link href="/" className="flex items-center gap-1 hover:text-[#FEE100]">
          <li>мэдээ, мэдээлэл</li>
          <MdKeyboardArrowDown />
        </Link>
        <Link href="/" className="flex items-center gap-1 hover:text-[#FEE100]">
          <li>сургалт шалгалт</li>
          <MdKeyboardArrowDown />
        </Link>
        <Link href="/" className="flex items-center gap-1 hover:text-[#FEE100]">
          <li>татварын боловсрол</li>
          <MdKeyboardArrowDown />
        </Link>
        <Link href="/" className="flex items-center gap-1 hover:text-[#FEE100]">
          <li>судалгаа</li>
          <MdKeyboardArrowDown />
        </Link>
        <Link href="/" className="flex items-center gap-1 hover:text-[#FEE100]">
          <li>хууль тогтоомж</li>
          <MdKeyboardArrowDown />
        </Link>
        <Link href="/" className="flex items-center gap-1 hover:text-[#FEE100]">
          <li>олон нийт</li>
          <MdKeyboardArrowDown />
        </Link>
        <Link href="/" className="flex items-center gap-1 hover:text-[#FEE100]">
          <li>танилцуулга</li>
          <MdKeyboardArrowDown />
        </Link>
      </ul>
    </div>
  </div>
);

export default Header;
