import Link from "next/link";
import React from "react";
import { FaPhoneSquareAlt, FaFacebookSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { BsFillCalendar2WeekFill, BsClockFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#142441] mt-28">
        <div className="w-[1299px] h-[270px] mx-auto text-white py-28 grid grid-cols-4">
          <div className="col-span-1">
            <h1 className="uppercase pb-3">Холбоо барих</h1>
            <div className="flex items-center gap-2">
              <FaPhoneSquareAlt />
              <Link href="/">76118989</Link>
            </div>
            <div className="flex items-center gap-2">
              <ImMail />
              <Link href="/">info@cpta.mn</Link>
            </div>
            <div className="flex items-center gap-2">
              <FaFacebookSquare />
              <Link href="/">FB/MACTConcalting</Link>
            </div>
          </div>
          <div className="col-span-1">
            <ul>
              <h1 className="uppercase pb-3">ТМЗ нийгэмлэг</h1>
              <li>
                <Link href="/">ТМЗ-ийн сүлд дуу</Link>
              </li>
              <li>
                <Link href="/">ТМЗН-ийн лого татах /Монгол/</Link>
              </li>
              <li>
                <Link href="/">ТМЗН-ийн лого татах /Англи/</Link>
              </li>
              <li>
                <Link href="/">Асуулт, хариулт</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h1 className="uppercase pb-3">Дансны мэдээлэл</h1>
          </div>
          <div className="col-span-1">
            <h1 className="uppercase pb-3">Хаяг</h1>
            <p>
              Метро бизнес төв, Б блок 4 давхар, 402 тоот Д.Сүхбаатарын гудамж –
              13, Сүхбаатар дүүрэг, Улаанбаатар
            </p>
            <div className="flex items-center gap-2 pt-4">
              <BsFillCalendar2WeekFill />
              <p>Даваа – Баасан</p>
              <div className="flex items-center gap-2">
                <BsClockFill />
                <p>09:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1299px] mx-auto text-white text-center border-t py-6 mt-8">
          <p className=" select-none ">
            ©2010-2023 БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН. ТМЗ нийгэмлэг. www.cpta.mn
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
