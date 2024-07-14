import React from "react";
import Navbar from "../../Components/shared/Navbar/navbar";
import Footer from "../../Components/shared/Footer/footer";
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
