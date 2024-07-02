import React from "react";
import Navbar from "../../Components/shared/navbar/Navbar";
import Hero from "../../Components/shared/hero/home";
import Section_One from "./sec_one";
import Footer from "../../Components/shared/footer/Footer";
import TopPicks from "./TrendingProducts";
import Shell from "./Shell";
import Social from "./social";
import Blogs from "./blogs";

export default function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Section_One /> */}
      <div className="text-center mt-10 font-bold text-[30px]">
        <div>Trending product</div>
        <TopPicks />
      </div>
      <Shell />
      <Blogs />
      <Social />
      <Footer />
    </div>
  );
}
