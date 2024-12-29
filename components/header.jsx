"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto  md:py-3 md:flex justify-between items-center">
        <div className="flex justify-between items-center py-3">
          <div className="pl-2">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              PawRescue
            </Link>
          </div>

          <div
            className="flex flex-col md:hidden space-y-1 pl-2"
            onClick={toggleMenu}
          >
            <span className="w-8 h-1 bg-gray-700 rounded-md"></span>
            <span className="w-8 h-1 bg-gray-700"></span>
            <span className="w-8 h-1 bg-gray-700 rounded-md"></span>
          </div>
        </div>

        <div
          className={`space-x-4 space-y-7 md:space-y-0  md:flex ${
            menuOpen ? "flex md:flex-row flex-col absolute md:static justify-center items-center w-full h-full z-50 font-bold bg-white" : "hidden"
          }`}
        >
          <Link href="/" className="text-gray-700 hover:text-teal-600">
            Home
          </Link>
          <Link href="#gallery" className="text-gray-700 hover:text-teal-600">
            Our Dogs
          </Link>
          <Link
            href="#how-donations-help"
            className="text-gray-700 hover:text-teal-600"
          >
            How We Help
          </Link>
          <Button variant="outline" className="bg-teal-600 text-white">Donate Now</Button>
        </div>
      </nav>
    </header>
  );
}
