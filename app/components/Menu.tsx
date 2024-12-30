"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbFileSmile } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { PiFlipVerticalLight } from "react-icons/pi";


const menuItems = [
  {
    pathname: "/",
    name: "Home",
    icon:<HiHome />


  },
  {
    pathname: "/topics",
    name: "Topics",
    icon:<TbFileSmile />
  },
  {
    pathname: "/about",
    name: "About",
    icon:<BsPersonFill />

  },
  {
    pathname: "/contact",
    name: "Conatct",
    icon:<PiFlipVerticalLight />



  },
];

const Menu = () => {
  const path = usePathname();

  return (
    <div className="py-4 border-b flex flex-row items-center justify-center gap-6">
      {menuItems.map((item, i) => (
        <Link
          className={`flex flex-col items-center ${
            path === item.pathname && "text-orange-600 underline underline-offset-8 decoration-2"
          }`}
          key={i}
          href={item.pathname}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-sm">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
