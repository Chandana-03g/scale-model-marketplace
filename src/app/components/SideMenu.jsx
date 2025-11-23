"use client";

import { FiUser, FiX } from "react-icons/fi";
import Link from "next/link";
export default function SideMenu({ open, onClose }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose}></div>
      )}

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-all duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <FiUser className="text-xl text-black" />
            <h2 className="text-lg font-semibold text-black">Login</h2>
          </div>

          <FiX
            className="text-2xl text-black cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="flex flex-col p-4 gap-4 text-gray-800 ">
          <Link href="/" onClick={onClose}>
            Home
          </Link>

          <Link href="/#products" onClick={onClose}>
            Shop
          </Link>

          <Link href="/#products" onClick={onClose}>
            Sale
          </Link>
        </div>
      </div>
    </>
  );
}
