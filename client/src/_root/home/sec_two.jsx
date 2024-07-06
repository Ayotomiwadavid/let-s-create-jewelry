import React from "react";

function Section_Two() {
  return (
    <section className="flex w- py-[5em] md:py-[2em] mx-5 md:mx-24 md:flex-row flex-col gap-5 items-start justify-between">
      <div className="flex flex-row gap-3 p-5 bg-[#eeb88184] rounded-md items-start justify-center">
        <div className="flex flex-col md:mt-0 mt-6 justify-center items-start">
          <div className="font-bold">Ring in Yellow Gold with Diamonds</div>
        </div>
        <img
          className="w-full h-[120px] relative"
          src="/assets/imgs/ring-1.png"
        />
      </div>

      <div className="flex flex-row gap-3 p-5 bg-[#eeb88184] rounded-md items-center justify-center">
        <div className="flex flex-col md:mt-0 mt-6 justify-center items-start">
          <div className="font-bold">Flexible payment</div>
          <div>Diffirent finance opitons will be available</div>
        </div>
        <img
          className="w-[60px] h-[60px] relative"
          src="/assets/imgs/ring-1.png"
        />
      </div>
    </section>
  );
}

export default Section_Two;
