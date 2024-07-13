import React from "react";
import Navbar from "../../Components/shared/navbar/Navbar";
import Hero from "../../Components/shared/hero/home";
import Section_One from "./sec_one";
import Section_Two from "./sec_two";
import Footer from "../../Components/shared/footer/Footer";
import TopPicks from "./TrendingProducts/";
import Categories from "./categories";
import Social from "../../Components/shared/footer/social";
import NewArrival from "./NewArrival";
import DealOfTheDay from "./DealOfTheDay";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section_One />
      <Section_Two />
      <div className="text-left mt-10 font-bold text-[30px]">
        <div className="border-b border-primary mx-4 md:mx-16">Deal Of The Day</div>
        <DealOfTheDay />
      </div>
      <div className="text-center mt-10 font-bold text-[30px]">
        <div>Trending product</div>
        <TopPicks />
      </div>
      <Categories />
      <NewArrival />
      <Social />
      <Footer />
    </div>
  );
}
