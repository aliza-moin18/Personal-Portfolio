"use client"; 

import Link from "next/link";
import { Button } from "../button";
import Nav from "../Nav/Navbar";
import MobileNav from "../MobileNav";
import Image from "next/image"; 

const Header = () => {
  return (
    <header className="bg-black py-1 xl:py-5 text-white border-b border-gray-400"> 
      <div className="max-w-screen-xl mx-auto px-10 flex justify-between items-center">

        {/* Link with Logo Image */}
        <Link href="/">
          <Image
            src="/logo.jpeg" 
            alt="Aliza Logo"
            width={115} 
            height={60}
            priority 
          />
        </Link>

        {/* Navbar */}
        <div className="hidden xl:flex items-center gap-7">
          <Nav />
          <Link href='/contact'>
            <Button className="text-white bg-[#bd59d3]  border-[#9615db] hover:border-[#932daa] hover:bg-[#932daa] transition-all">Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden items-center gap-8"> 
           <MobileNav /> 
        </div>

      </div>
    </header>
  );
};

export default Header;