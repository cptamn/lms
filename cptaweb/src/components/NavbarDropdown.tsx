import Link from "next/link";
import React, { FC } from "react";

interface SubLinkChild {
  name: string;
  link: string;
}

interface SubLink {
  Head: string;
  sublinks: SubLinkChild[];
}

interface NavbarDropdownProps {
  links: SubLink[];
}

const NavbarDropdown: FC<NavbarDropdownProps> = ({ links }) => {
  return (
    <>
      <div>
        <div className="absolute top-30 hidden group-hover:block hover:block left-0 z-[999]">
          <div className="py-3">
            <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45" />
          </div>
          <div
            className="bg-white w-96 text-head p-3.5 lowercase shadow-shadow-1 rounded-xl"
            style={{ width: "max-content" }}
          >
            <ul className="flex gap-6 ">
              {links.map((mysublinks, index) => (
                <div
                  key={`dropdown-${index}`}
                  className="flex flex-col items-start justify-center gap-5 whitespace-nowrap "
                >
                  <h1 className="hover:text-white/70 duration-300">
                    {mysublinks.Head}
                  </h1>
                  {mysublinks.sublinks.map((slink, index) => (
                    <li
                      className="border-b-2 hover:duration-300 text-md-medium "
                      key={`mysublinks-${index}`}
                    >
                      <Link href={slink.link} className="hover:text-head">
                        {slink.name}
                      </Link>
                    </li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarDropdown;
