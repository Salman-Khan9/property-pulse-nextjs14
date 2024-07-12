"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo-white.png";
import defaultprofile from "../assets/images/profile.png";
import { Bell } from "lucide-react"; // Adjust according to your icon library

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-700 border-b border-blue-500 h-20 flex items-center justify-between   ">
      <div className="flex items-center space-x-4 lg:ms-40 ms-4   ">
        <button
          className="block lg:hidden px-5 py-2 rounded-md"
          onClick={toggleMenu}
        >
          |||
        </button>
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center me-2">
            <Image src={logo} alt="propertylogo" className="h-10 w-10" />
            <p className="font-bold text-2xl ms-2">PropertyPulse</p>
          </div>
          <Link className="bg-black p-2 rounded-md text-center" href="/">
            Home
          </Link>
          <Link className="rounded-md hover:bg-black p-2" href="/">
            Properties
          </Link>
          <Link
            className="rounded-md hover:bg-black p-2 whitespace-nowrap "
            href="/"
          >
            Add Property
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow lg:justify-start">
        <Image src={logo} alt="propertylogo" className="h-10 w-10 lg:hidden" />
      </div>
      <div className="flex items-center space-x-4 lg:me-44 me-8  ">
        <button className="bg-gray-700 px-6 py-2 rounded-md hidden lg:block text-center  whitespace-nowrap   ">
          <span>Login or Register</span>
        </button>
        <button className="bg-gray-800 rounded-full p-1 opacity-80">
          <Bell />
        </button>
        <Image src={defaultprofile} alt="profile" className="h-8 w-8" />
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white rounded-md shadow-lg z-10 lg:hidden">
          <Link className="block px-4 py-2 text-black" href="/">
            Home
          </Link>
          <Link className="block px-4 py-2 text-black" href="/">
            Properties
          </Link>
          <Link className="block px-4 py-2 text-black" href="/">
            Add Property
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
