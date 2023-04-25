import Image from "next/image";
import React from "react";
const imageUrl = [
  { image: "/assets/membersPrice.png" },
  { image: "/assets/membersP2.png" },
];
const membersPrice = () => {
  return (
    <div className="w-[1299px] mx-auto">
      {imageUrl.map((zurag, index) => {
        return (
          <div>
            <Image
              src={zurag.image}
              alt=""
              width={400}
              height={600}
              className="w-full aspect-video object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default membersPrice;
