"use client";

import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { usePathname } from "next/navigation";

import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { FaEnvelopeOpen } from "react-icons/fa";


const links = [
  {
    name: "Home",
    icon: <AiFillHome />,
    path: "/"
  },
  {
    name: "About",
    icon: <FaUser />,
    path: "/about"
  },
  {
    name: "Projects",
    icon: <IoBriefcase />,
    path: "/projects"
  },
  {
    name: "Contact",
    icon: <FaEnvelopeOpen />,
    path: "/contact"
  },
]

const Nav = () => {
  const pathname = usePathname();
  return <nav className="flex flex-col gap-8">
    {links.map((link,index)=>{
      return  <Link href={link.path} data-tooltip-id="my-tooltip" data-tooltip-content={link.name} key={index} className={`${link.path === pathname ? "text-white bg-accent" : "text-white/30 bg-[#27272c]"} capitalize text-2xl hover:text-white/80 mb-5 transition-all w-16 h-16 rounded-full flex items-center justify-center`}>{link.icon}</Link>
    })}
    <Tooltip id="my-tooltip" />
  </nav>
}

export default Nav
