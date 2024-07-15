import React from "react";
import ContactHero from "../../shared/hero/hero";
import Navbar from "../../shared/Navbar/navbar";
import Address from "./address";
import MessageBox from "./messageBox";
import Footer from "../../shared/Footer/footer";

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
