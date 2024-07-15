import React from "react";
import Navbar from "../../shared/Navbar/navbar";
import Footer from "../../shared/Footer/footer";
import ProductDisplay from "./product_display";
export default function CartPage() {
  return (
    <div>
      <Navbar />
      <ProductDisplay />
      <Footer />
    </div>
  );
}
