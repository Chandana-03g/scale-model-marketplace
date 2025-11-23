import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";


export default function Home() {
  return (
  <main className="">
      <Navbar />
      <HeroSection />
    <section id="products">
  <ProductGrid />
</section> 
    </main> 
  );
}
