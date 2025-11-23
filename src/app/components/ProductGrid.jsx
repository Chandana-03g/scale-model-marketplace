import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <>
      <div className="w-full p-6 bg-white">
        <h2 className="text-2xl font-bold mb-5 text-gray-900">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center md:place-items-start">
          <ProductCard
            image="Porche.jpg"
            title="Porsche 911 Carrera 964"
            price="1,500"
          />
        </div>
      </div>
    </>
  );
}
