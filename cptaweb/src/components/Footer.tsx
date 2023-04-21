import Link from "next/link";
import { FC } from "react";
import { MdKeyboardArrowDown, MdMail, MdPhone } from "react-icons/md";
import LogoMain from "../assets/MUTMZN_logo_PNG.png";
import Image from "next/image";

const Footer: FC = () => (
  <>
    <div className="max-w-full h-[562px] bg-[#142441] ">
      {/* Top Header */}
      <div className="max-w-[1299px] mx-auto text-white text-xs-medium pt-[120px] items-center pb-[102px]">
        <div className="grid grid-cols-4 ">
          <div className="col-span-1">
            <button className="flex items-center py-6 hover:text-[#3764EB]">
              <Image
                src={LogoMain}
                alt="logo"
                width={50}
                height={50}
                className="bg-white rounded-full my-2 mx-2"
              />
              <div className="flex flex-col text-left text-xl2-medium pl-2">
                <p className="uppercase ">Монгол улсын татварын</p>
                <p className="uppercase">мэргэшсэн зөвлөхийн нийгэмлэг</p>
              </div>
            </button>
            <p className="text-base-regular">
              Метро бизнес төв, Б блок 4 давхар, 402 тоот Д.Сүхбаатарын гудамж –
              13, Сүхбаатар дүүрэг, Улаанбаатар
            </p>
          </div>
          <div className="col-span-1">
            <h1>ТМЗ нийгэмлэг</h1>
            <ul>
              <Link href="/">
                <li>ТМЗН-ийн сүлд дуу</li>
              </Link>
              <Link href="/">
                <li>ТМЗН-ийн лого татах /монгол/</li>
              </Link>
              <Link href="/">
                <li>ТМЗН-ийн лого татах /англи/</li>{" "}
              </Link>
              <Link href="/">
                <li>FAQs</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-1">ДАНСНЫ МЭДЭЭЛЭЛ</div>
          <div className="col-span-1">ХОЛБОО БАРИХ</div>
        </div>
      </div>
    </div>
    <div className="border-t">
      <p className="text-white text-center">
        ©2010-2023 БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН. ТМЗ нийгэмлэг. www.cpta.mn
      </p>
    </div>
  </>
);

export default Footer;
