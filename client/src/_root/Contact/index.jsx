import React from "react";
import ContactHero from "../../Components/shared/hero/hero";
import Navbar from "../../Components/shared/navbar/Navbar";
import Address from "./address";
import MessageBox from "./messageBox";
import Footer from "../../Components/shared/footer/Footer";

export default function ContactPage() {
  return (
    <div className="">
      <Navbar />
      <ContactHero title={"Contact Us"}/>
      <Address />
      <MessageBox />
      <Footer />
    </div>
  );
}
