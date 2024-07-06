import React from "react";

function Section_Two() {
  return (
    <section className="flex w- py-[5em] md:py-[2em] mx-5 md:mx-24 md:flex-row flex-col gap-5 items-start justify-between">
      <div className="flex flex-row gap-3 p-5 bg-[#eeb88184] rounded-md items-start justify-center">
        <div className="font-bold">Ring in Yellow Gold with Diamonds</div>
        <img
          className="w-full h-[120px] relative"
          src="/assets/imgs/ring-1.png"
        />
      </div>

      <div className="flex flex-row gap-3 p-5 bg-[#eeb88184] rounded-md items-start justify-center">
        <div className="font-bold">Ring in Yellow Gold with Diamonds</div>
        <img
          className="w-full h-[120px] relative"
          src="/assets/imgs/ring-1.png"
        />
      </div>
    </section>
  );
}

export default Section_Two;
