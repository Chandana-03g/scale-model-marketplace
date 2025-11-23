"use client";

import { useState } from "react"; // <-- Already imported
import Navbar from "../components/Navbar";
import TimelineGraph from "../components/TimelineGraph";

export default function ProductDetails() {
  const [tab, setTab] = useState("specification");
  const [variant, setVariant] = useState("1:18");
  const prices = {
    "1:18": "Rs.11,000",
    "1:24": "Rs.1,500",
    "1:43": "Rs,3000",
  };

  const scale = {
    "1:18": "1:18",
    "1:24": "1:24",
    "1:43": "1:43",
  };

  return (
    <div className="w-full min-h-screen bg-gray-100  p-6 rounded-xl  ">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-10 mt-24">
        <div className=" md:w-1/2 place-items-center">
          <img
            src="/Porche.jpg"
            className="w-130  shadow-lg shadow-gray-400 h-[380px] object-cover rounded-xl"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-900">
            Porsche 911 Carrera 964
          </h1>

          <p className="text-xl font-semibold mt-2 text-gray-600">
            {prices[variant]}
          </p>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold inline-block mt-2">
            In Stock
          </span>

          <p className="text-gray-700 mt-4 leading-6 text-[15px]">
            A die-cast model of the Porsche 911 Carrera (964) finished in deep
            green. This model includes a detailed exterior body, accurate wheel
            design, clear window parts and a molded interior.
          </p>

          <p className="font-semibold text-gray-900 mt-6">Select Variant</p>

          <div className="flex gap-3  text-gray-900 mt-2">
            <button
              onClick={() => setVariant("1:18")}
              className={`px-4 py-2 border rounded-lg transition ${
                variant === "1:18" ? "bg-black text-white shadow-md" : ""
              }`}
            >
              1:18
            </button>

            <button
              onClick={() => setVariant("1:24")}
              className={`px-4 py-2 border rounded-md ${
                variant === "1:24" ? "bg-black text-white" : ""
              }`}
            >
              1:24
            </button>

            <button
              onClick={() => setVariant("1:43")}
              className={`px-4 py-2 border rounded-md ${
                variant === "1:43" ? "bg-black text-white" : ""
              }`}
            >
              1:43
            </button>
          </div>

          <div className="flex gap-4 mt-10">
            <button className="flex-1 py-3 bg-gray-900 text-white rounded-2xl transition duration-300 hover:scale-105 hover:opacity-95">
              Add to Cart
            </button>

            <button className="flex-1 py-3 bg-blue-400 text-white rounded-2xl transition duration-300 hover:scale-105 hover:opacity-95">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white border rounded-xl shadow-sm">


  <div className="flex bg-gray-200 p-1 text-gray-900 rounded-full m-4 mt-2">
    {["specification", "material", "more"].map((t) => (
      <button
        key={t}
        onClick={() => setTab(t)}
        className={`flex-1 py-2 rounded-full ${
          tab === t ? "bg-white font-semibold shadow-sm" : ""
        }`}
      >
        {t === "specification" && "Specifications"}
        {t === "material" && "Material"}
        {t === "more" && "More Info"}
      </button>
    ))}
  </div>

  
  <div className="px-6 pb-6 text-gray-900">
    {tab === "specification" && (
      <>
        <p className="font-semibold mb-4 text-lg">Specifications</p>

        <div className="flex justify-between py-2 border-b border-gray-300">
          <span>Body Color</span>
          <span>Deep Green</span>
        </div>

        <div className="flex justify-between py-2 border-b border-gray-300">
          <span>Scale</span>
          <span>{scale[variant]}</span>
        </div>

        <div className="flex justify-between py-2 border-b border-gray-300">
          <span>Brand</span>
          <span>Premium Models</span>
        </div>

        <div className="flex justify-between py-2">
          <span>Material</span>
          <span>Die-Cast Metal</span>
        </div>
      </>
    )}

    {tab === "material" && (
      <>
        <p className="font-semibold mb-4 text-lg">Material</p>

        <div className="flex justify-between py-2 border-b border-gray-300">
          <span>Body</span>
          <span>Die-cast Metal</span>
        </div>

        <div className="flex justify-between py-2 border-b border-gray-300">
          <span>Interior</span>
          <span>ABS Plastic</span>
        </div>

        <div className="flex justify-between py-2">
          <span>Tires</span>
          <span>Rubber</span>
        </div>
      </>
    )}

    {tab === "more" && (
      <>
        <p className="font-semibold mb-4 text-lg">More Info</p>

        <div className="py-2 border-b border-gray-300">
          <span className="font-semibold">Opening Doors:</span>
          <span className="ml-2">None</span>
        </div>

        <div className="py-2 border-b border-gray-300">
          <span className="font-semibold">Precision Detailing:</span>
          <span className="ml-2">
            Includes authentic Porsche logos, emblems, and high-quality trim.
          </span>
        </div>

        <div className="py-2">
          <span className="font-semibold">Collector Packaging:</span>
          <span className="ml-2">
            Comes in a display-ready box for protection and presentation.
          </span>
        </div>
      </>
    )}
  </div>

</div>


      <TimelineGraph />
    </div>
  );
}
