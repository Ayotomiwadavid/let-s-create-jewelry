import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/Auths/signin";
import SignUp from "./Components/Auths/signup";
import Home from "./Components/_root/home/index";
import Cart from "./Components/_root/cart/index";
import CheckOut from "./Components/_root/CheckOut/index";
import Contact from "./Components/_root/Contact/index";
import Shop from "./Components/_root/shop/index";
import ProductDetail from "./Components/_root/productDetail/index";
import ScrollToTop from "./BackToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
