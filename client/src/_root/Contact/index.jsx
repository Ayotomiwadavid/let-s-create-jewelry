import React from "react";
import ContactHero from "../../Components/shared/hero/hero";
import Navbar from "../../Components/shared/Navbar/navbar";
import Address from "./address";
import MessageBox from "./messageBox";
import Footer from "../../Components/shared/Footer/footer";

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
