"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


const Links = [
    {
        name: "Home",
        path: '/',
    },
    {
        name: "About Me",
        path: "/about",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <nav className="flex gap-12">  
        {Links.map((LinkItem, index) => {
             const isActive = pathname === LinkItem.path;
           return (
        <Link href={LinkItem.path} key={index}
            className={`${isActive ? "text-white border-b-2 border-purple" : ""} 
            capitalize= "text-[18px] hover:text-white transition-all`} >
          {LinkItem.name}
        </Link>

        );
    })}
    </nav>
  );
};

export default Nav;