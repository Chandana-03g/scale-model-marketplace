"use client";

import { useState } from "react";
import { FiMenu, FiUser, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

import SideMenu from "./SideMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] bg-white/70 backdrop-blur-xl border border-gray/20 shadow-lg rounded-2xl px-6 py-3 z-50 text-black">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FiMenu
              className="text-2xl  md:hidden text-black"
              onClick={() => setOpen(true)}
            />
            <h1 className="text-2xl text-black ">Scale Models</h1>
          </div>

          <div className="hidden md:flex gap-10 ml-36 font-medium justify-end-safe text-black">
            <Link href="/">Home</Link>

            <Link href="/#products">Shop</Link>

            <Link href="/#products">Sale</Link>
          </div>

          <div className="flex items-center   gap-5 text-xl text-black">
            <FiUser className="hidden md:block " />
            <FiShoppingCart />
          </div>
        </div>
      </nav>

      <SideMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
