"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci' 

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
const MobileNav = () => {
    const pathname = usePathname();
  return(
    
        <nav className='flex justify-around'>
            {links.map((link,index)=>{
                return <Link href={link.path} key={index} className={`${link.path === pathname ? "text-white bg-accent" : "text-white/30 bg-white/30"} capitalize text-2xl relative top-4  mb-5 transition-all w-[50px] h-[50px] rounded-full flex items-center justify-center`}>{link.icon}</Link>
            })}
        </nav>
  ) 
}

export default MobileNav
