import React from "react";
import Navbar from "../../Components/shared/Navbar/navbar";
import Shop_Hero from "../../Components/shared/hero/hero";
import ProductListing from "./productListing";
import Footer from "../../Components/shared/Footer/footer";

export default function CartPage() {
  return (
    <div>
      <Navbar />
      <Shop_Hero title="Shop" />
      <ProductListing />
      <Footer />
    </div>
  );
}
