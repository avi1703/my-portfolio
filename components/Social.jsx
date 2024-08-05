import Link from "next/link";

import {FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const socials = [
    {icon: <FaGithub />, path: "https://github.com/avi1703"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/avinash-sharma-75aa54237/"},
    {icon: <MdEmail />, path: "mailto:avinashsharma301997@gmail.com"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) =>{
            return <Link href={item.path} key={index} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social