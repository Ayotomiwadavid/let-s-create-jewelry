import React, { useEffect, useState } from "react";
import ProductCard from "../shop/productCard";
import { Link } from "react-router-dom";
import fetchAllProducts from "../../utils/Products/GetAllProducts";

export default function DealOfTheDay() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const allProducts = await fetchAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching Products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  return (
    <>
      <div className="text-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-16 mt-20">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              sold="Sold: 26/67"
            />
          ))}
        </div>
        {isLoading ? (
          <div className="flex gap-3 my-12 justify-center items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-black"></div>
            Loading...
          </div>
        ) : null}

        <Link to="/shop">
          <button className="font-bold bg-primary text-white hover:bg-gray-50 hover:text-primary text-[15px] py-3 mt-8 mb-12 rounded-lg text-center w-[8em]">
            VEIW ALL
          </button>
        </Link>
      </div>
    </>
  );
}
