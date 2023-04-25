import Image from "next/image";
import React from "react";
const hMember = [
  {
    Name: "Ядмаагийн МИШИГЛҮНДЭН",
    image: "../assets/honoraryMembers/mishiglunden.jpg",
    history:
      " 1971 онд Сангийн яамнаас ажил хөдөлмөрийн гараагаа эхэлж, Үндэсний татварын ерөнхий газарт хэлтэс, газрын дарга, дэд дарга, Сургалтын төвийн захирал, Улсын бүртгэлийн албаны дарга, Дэд дарга гэсэн албуудыг хашиж санхүү, татварын албанд 41 жил ажилласан бөгөөд шинэ үеийн татварын тогтолцооны боловсон хүчнийг бэлтгэх, мэргэшүүлэх үйл хэргийг гардан хэрэгжүүлсэн.",
  },
];

const honoraryMember = () => {
  return (
    <>
      <div className="w-full h-[250px] bg-gradient-to-r from-Gray-600 via-Gray-400 to-Gray-200 ">
        <div className="w-[1299px] flex items-center mx-auto text-3xl py-24">
          Хүндэт гишүүн
        </div>
        <div>
          {hMember.map((utga, index)=>{
            <Image src={`${utga.image}`} alt="" width={400} height={600} />
            <h1>{utga.name}</h1>
            <p>{utga.history}</p>
          })}
          
        </div>
      </div>
    </>
  );
};

export default honoraryMember;
