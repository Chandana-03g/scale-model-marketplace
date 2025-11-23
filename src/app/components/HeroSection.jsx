"use client";
import { FiSearch } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <>
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/backdrop.png"
        alt="backdrop"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      <div className="absolute inset-0 bg-black/15 z-0"></div>

      <div className="relative z-20 max-w-[520px] w-full px-6 flex flex-col items-center  text-center  mx-auto ">
        <h1 className="text-4xl text-black md:text-5xl font-bold leading-tight h-[90px] ">
          <Typewriter
            words={["Discover detailed miniatures  crafted for collectors."]}
            loop={0}
            cursor
            cursorStyle="|"
            typespeed={30}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>

       
        <div className="mt-25 flex w-full max-w-xl bg-white/70 rounded-xl items-center shadow px-4 py-3 mx-auto md:mx-0">
          <FiSearch className="text-gray-600 text-lg mr-3" />
          <input
            type="text"
            placeholder="Search for models, brands, or categories..."
            className="flex-grow outline-none text-black"
          />
        </div>

        <div className="mt-5 flex justify-center  w-full">
          <button
            onClick={() => (window.location.href = "/#products")}
            className="w-[150px] py-3 bg-gray-900  text-white font-semibold rounded-xl shadow transition duration-300 hover:scale-105 hover:opacity-95 " >
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
