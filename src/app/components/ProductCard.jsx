import Link from "next/link";

export default function ProductCard(props) {
  return (
    <>
    <Link href="/product-details">
      <div className="bg-white p-4 border border-gray-900 transition duration-300 hover:scale-105 hover:opacity-95 w-sm rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">

        <img
          src={props.image}
          className="w-full h-50 object-cover mb-3"
        />

        <h3 className="font-semibold text-gray-800">{props.title}</h3>

        <p className="text-gray-600 font-bold">₹{props.price}</p>
      </div>
    </Link>
    </>
  );
}
