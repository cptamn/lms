import Link from "next/link";
import { FC } from "react";
import { MdKeyboardArrowDown, MdMail, MdPhone } from "react-icons/md";
import Image from "next/image";
import NavbarDropdown from "./NavbarDropdown";

const links = [
  {
    name: "Гишүүнчлэл",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublinks: [
          { name: "Хүндэт гишүүн", link: "/honorary-member" },
          {
            name: "Таны гишүүний хураамж юунд зарцуулагддаг вэ?",
            link: "/membersPrice",
          },
          {
            name: "Татварын итгэмжлэгдсэн хуулийн этгээд",
            link: "/tmz-company",
          },
          { name: "Монгол Улсын Татварын Мэргэшсэн зөвлөх", link: "/" },
          { name: "Татварын шинжээч", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Мэдээ, мэдээлэл",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublinks: [
          { name: "Мэдээ", link: "/" },
          { name: "Tax Bulletins", link: "/" },
          { name: "Видео мэдээ", link: "/" },
          { name: "Онцлох мэдээ", link: "/" },
          { name: "Ажлын байр", link: "/" },
          { name: "Шинэ хишигтэн цахим сонин", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Сургалт шалгалт",
    submenu: true,
    sublinks: [
      {
        Head: "СУРГАЛТ",
        sublinks: [
          { name: "Сургалтын төлөвлөгөө", link: "/" },
          { name: "Сорил шалгалтад бэлтгэх сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх олгох сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх сунгах сургалтын хуваарь", link: "/" },
          { name: "Захиалгат сургалт", link: "/" },
        ],
      },
      {
        Head: "Шалгалт",
        sublinks: [
          { name: "Сургалтын төлөвлөгөө", link: "/" },
          { name: "Сорил шалгалтад бэлтгэх сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх олгох сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх сунгах сургалтын хуваарь", link: "/" },
          { name: "Захиалгат сургалт", link: "/" },
        ],
      },
      {
        Head: "Дүрэм, журам",
        sublinks: [
          { name: "Сургалтын төлөвлөгөө", link: "/" },
          { name: "Сорил шалгалтад бэлтгэх сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх олгох сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх сунгах сургалтын хуваарь", link: "/" },
          { name: "Захиалгат сургалт", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Татварын боловсрол",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublinks: [
          {
            name: "Сургуулийн өмнөх насныхан болон бага ангийн сурагчид",
            link: "/",
          },
          { name: "Дунд, ахлах сургууль", link: "/" },
          { name: "Их дээд сургууль", link: "/" },
          { name: "Татвар төлөгчид", link: "/" },
          { name: "Судалгаа", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Судалгаа",
    submenu: true,
    sublinks: [
      {
        Head: "СУРГАЛТ",
        sublinks: [
          { name: "Сургалтын төлөвлөгөө", link: "/" },
          { name: "Сорил шалгалтад бэлтгэх сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх олгох сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх сунгах сургалтын хуваарь", link: "/" },
          { name: "Захиалгат сургалт", link: "/" },
        ],
      },
      {
        Head: "Шалгалт",
        sublinks: [
          { name: "Сургалтын төлөвлөгөө", link: "/" },
          { name: "Сорил шалгалтад бэлтгэх сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх олгох сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх сунгах сургалтын хуваарь", link: "/" },
          { name: "Захиалгат сургалт", link: "/" },
        ],
      },
      {
        Head: "Дүрэм, журам",
        sublinks: [
          { name: "Сургалтын төлөвлөгөө", link: "/" },
          { name: "Сорил шалгалтад бэлтгэх сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх олгох сургалтын хуваарь", link: "/" },
          { name: "ТМЗ-ийн эрх сунгах сургалтын хуваарь", link: "/" },
          { name: "Захиалгат сургалт", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Хууль тогтоомж",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublinks: [
          {
            name: "Монгол улсын хууль тогтоомжууд",
            link: "/",
          },
          { name: "ТМЗН-ийн дүрэм, журам", link: "/" },
          { name: "Tax bulletins", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Олон нийт",
    submenu: true,
    sublinks: [
      {
        Head: "Татварын бүртгэл олимпиад",
        sublinks: [
          { name: "Танилцуулга", link: "/" },
          { name: "Татварын бүртгэл олимпиадны удирдамж", link: "/" },
          { name: "Татварын бүртгэл IX олимпиадын 1-р шатны дүн", link: "/" },
          { name: "Татварын бүртгэл IX олимпиадын 2-р шатны дүн", link: "/" },
        ],
      },
      {
        Head: "Татварын хуулийг хэн сайн мэдэх вэ тэмцээн?",
        sublinks: [
          {
            name: "Татварын хуулийг хэн сайн мэдэх вэ? тэмцээний 1-р шатны тестийн дүн",
            link: "/",
          },
          {
            name: "Татварын хуулийг хэн сайн мэдэх вэ тэмцээний удирдамж",
            link: "/",
          },
          { name: "ИЛТГЭЛҮҮД /тэмцээн/", link: "/" },
          { name: "Шилдгүүд /тэмцээн/", link: "/" },
          {
            name: "ШТатварын хуулийг хэн сайн мэдэх вэ? тэмцээний өргөмжлөл",
            link: "/",
          },
        ],
      },
      {
        Head: "СПОРТЛОГ ТМЗ",
        sublinks: [
          { name: "Спортлог ТМЗ-2022", link: "/" },
          { name: "БУСАД", link: "/" },
          { name: "AXA", link: "/" },
          { name: "“Татвар та бид” радио нэвтрүүлэг", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Танилцуулга",
    submenu: true,
    sublinks: [
      {
        Head: "ТАНИЛЦУУЛГА",
        sublinks: [
          { name: "Бидний тухай", link: "/" },
          { name: "Мэндчилгээ", link: "/" },
          { name: "Бүтэц", link: "/" },
          { name: "Удирдах зөвлөл", link: "/" },
          { name: "Хяналтын зөвлөл", link: "/" },
          { name: "Ажлын алба", link: "/" },
        ],
      },
      {
        Head: "МЕЖЕЖМЕНТИЙН ХОРОО",
        sublinks: [
          {
            name: "Мэргэжлийн үйлчилгээ, бодлогын менежментийн хороо",
            link: "/",
          },
          {
            name: "Сургалтын менежментийн хороо",
            link: "/",
          },
          { name: "Судалгааны Менежментийн хороо", link: "/" },
          {
            name: "Мэргэжлийн хариуцлага ёс зүйн менежментийн хороо",
            link: "/",
          },
          { name: "Хууль эрх зүйн менежментийн хороо", link: "/" },
          {
            name: "ШТатварын хуулийг хэн сайн мэдэх вэ? тэмцээний өргөмжлөл",
            link: "/",
          },
        ],
      },
    ],
  },
];

const Header: FC = () => {
  return (
    <>
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
          <Link href="/">
            <button className="flex items-center py-6 hover:text-[#3764EB]">
              <Image
                src="/assets/MUTMZN_logo_PNG.png"
                alt="logo"
                width={50}
                height={50}
              />
              <div className="flex flex-col items-baseline pl-2">
                <p className="uppercase ">Монгол улсын татварын</p>
                <p className="uppercase">мэргэшсэн зөвлөхийн нийгэмлэг</p>
              </div>
            </button>
          </Link>
          <div className="flex items-center gap-6 text-sl uppercase">
            <Link
              href="/"
              className="hover:text-[#3764EB] hover:ease-in hover:duration-300"
            >
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
          <ul className="flex max-w-[1299px] items-center justify-between mx-auto text-white text-xs-medium py-5 relative">
            {links.map((link, index) => {
              const isFull = link.sublinks.length >= 2;
              return (
                <li
                  key={`menu-id-${index}`}
                  className={`flex items-center gap-1 hover:text-[#FEE100] group cursor-pointer uppercase ${
                    !isFull && "relative"
                  }`}
                >
                  {link.name}
                  {link.submenu && (
                    <NavbarDropdown links={link.sublinks} isFull={isFull} />
                  )}
                  <MdKeyboardArrowDown />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
