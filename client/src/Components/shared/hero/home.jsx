import React from "react";
import hero from "../../../assets/heros_bg/home_bg.png";

function HeroSection() {
  return (
    <div>
      <img
        className="w-full h-[30rem] -z-20 top-0 bottom-0"
        src={hero}
      />
      <section className="flex absolute top-[14rem] bottom-0 py-[5em] md:py-[4em] mx-5 md:mx-12 lg:flex-row flex-col items-center justify-center">
        <div className="mx-auto lg:text-left text-center">
          <h1 className="md:text-5xl text-4xl leading-normal text-black font-bold leading-[24px]">
            Diamond Jewelry <br/>
            <span className=""> Collection </span>
            <br />
          </h1>
          <div className="lg:text-lg text-md leading-normal mt-4 font-normal text-black">
            All Major Brands Available
          </div>
          <button className="font-bold bg-primary text-white hover:bg-white hover:text-primary py-3 mt-8 rounded-full text-center w-full lg:w-[15em]">
            View Details
          </button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
