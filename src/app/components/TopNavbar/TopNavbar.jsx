"use client";
import React from "react";
import "./topnavbar.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { MdOutlineWhatsapp } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const TopNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="nav bg-black">
      <div className=" bg-black nav-wrapper flex justify-between items-center py-2 px-2 md:py-4 md:px-6">
        <div className="logo w-20 bg-transparent">
          <img
            src="https://demyto.com/HTML/images/demyto-r-logo.png"
            alt="iwash-auto-png"
          />
        </div>
        <div className=" bg-transparent navlinks md:flex hidden items-center">
          <ul className="flex bg-transparent">
            <li
              className={`px-4 text-lg bg-transparent font-bold hover:text-[#e81c2e] ${
                pathname === "/" ? "text-[#e81c2e]" : "#FFFFFF"
              }`}
            >
              <Link className="bg-transparent" href="/">
                Home
              </Link>
            </li>
            <li
              className={`px-4 bg-transparent text-lg font-bold hover:text-[#e81c2e] ${
                pathname === "/products" ? "text-[#e81c2e]" : "#FFFFFF"
              }`}
            >
              <Link className="bg-transparent text-white" href="/products">
                Products
              </Link>
            </li>
            <li
              className={`px-4 bg-transparent text-lg font-bold hover:text-[#e81c2e] ${
                pathname === "/blogs" ? "text-[#e81c2e]" : "#FFFFFF"
              }`}
            >
              <Link className="bg-transparent text-white" href="/blogs">
                Blogs
              </Link>
            </li>
            <li
              className={`bg-transparent px-4 text-lg font-bold hover:text-[#e81c2e] ${
                pathname === "/contact" ? "text-[#e81c2e]" : "#FFFFFF"
              }`}
            >
              <Link className="bg-transparent text-white" href="/contact">
                Contact us
              </Link>
            </li>
            <li
              className={`px-4 bg-transparent text-lg font-bold hover:text-[#e81c2e] ${
                pathname === "/about" ? "text-[#e81c2e]" : "#FFFFFF"
              }`}
            >
              <Link className="bg-transparent text-white" href="/about">
                About us
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact items-center ">
          <div className="flex
           bg-white  gap-2 p-1 items-center justify-center">
            <IoCallOutline
              className=" bg-transparent text-xl"
              onClick={() => (window.location.href = "tel:+1234567890")}
            />

            <a
              className="p-0 m-0 bg-transparent text-xl"
              target="blank"
              href="https://wa.me/918796968389"
            >
              <MdOutlineWhatsapp className="bg-transparent " />
            </a>
          </div>
        </div>
        <div className="md:hidden block">
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
