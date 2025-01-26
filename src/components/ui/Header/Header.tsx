"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black py-1 xl:py-5 text-white border-b border-gray-400">
      <div className="max-w-screen-xl mx-auto px-10 flex justify-between items-center">

        {/* Link with Logo Image */}
        <Link href="/" aria-label="Logo">
          <Image
            src="/logo.jpeg" 
            alt="Logo"
            width={115} 
            height={60}
            priority 
          />
        </Link>

        {/* Navbar (Desktop) */}
        <div className="hidden xl:flex items-center gap-10">
          <nav className="flex space-x-8 text-lg">
            <Link href="/" className="text-white hover:text-purple-500 transition-all">Home</Link>
            <Link href="/about" className="text-white hover:text-purple-500  transition-all"> About Me </Link>
            <Link href="/services" className="text-white hover:text-purple-500 transition-all"> Services </Link>
            <Link href="/work" className="text-white hover:text-purple-500 transition-all"> Work </Link>
            <Link href="/contact" className="text-white hover:text-purple-500 transition-all"> Contact </Link>
          </nav>
          <Link href="/contact">
            <Button className="text-white bg-[#BD59D3] border-[#9615DB] hover:border-[#932DAA] hover:bg-[#932DAA] transition-all">
              Hire me
            </Button>
          </Link>
        </div>

        {/* Mobile Nav Button */}
        <div className="xl:hidden items-center gap-8">
          <button
            className="text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? '✖️' : '☰'}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white p-6 space-y-4">
            <Link href="/" className="text-white hover:text-purple-500 text-xl transition-all"> Home </Link>
            <Link href="/about" className="text-white hover:text-purple-500 text-xl   transition-all"> About Me </Link>
            <Link href="/services" className="text-white hover:text-purple-500 text-xl transition-all"> Services </Link>
            <Link href="/work" className="text-white hover:text-purple-500 text-xl  transition-all"> Work </Link>
            <Link href="/contact" className="text-white hover:text-purple-500 text-xl transition-all">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
