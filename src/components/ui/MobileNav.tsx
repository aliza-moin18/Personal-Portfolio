"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; 
import { CiMenuFries } from "react-icons/ci";

const Links = [
    { name: "Home", path: '/' },
    { name: "About Me", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-[#d7a1de]" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                
    {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <Image
                            src="/logo.jpg"
                            alt="Aliza Logo"
                            width={115}   
                            height={60}   
                            className= "mx-auto transition-all"
                    />
                </Link>
         </div>

    {/* Navigation Links */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {Links.map((link, index) => (
                    <Link 
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname ? "text-white border-b-2 border-[#9d36ab]" : ""} text-xl capitalize hover:text-purple transition-all`}
                    >
                            {link.name}
                    </Link>
                ))}
            </nav>
        </SheetContent>
    </Sheet>
  );
};

export default MobileNav;