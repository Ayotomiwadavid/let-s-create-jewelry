import React from "react";

function Categories() {
  return (
    <section className="bg-primary bg-opacity-20  text-black p-4 px-5 md:px-12">
      <div className="flex flex-col text-center mx-auto mt-8 font-bold text-[30px] items-center justify-center">
        <div>Shop by categories</div>
        <img
          className="w-[220px] h-[165px] mt-[-5rem] items-center justify-center"
          src="/assets/icons/categories_ic.svg"
        />
      </div>

      <div className="flex py-[2em] md:py-0 lg:flex-row flex-col items-center justify-between">
        <div className="flex flex-col gap-3 items-start justify-start">
          <img
            className="w-[120px] h-[115px] bg-white rounded-full relative"
            src="/assets/icons/ring-1.svg"
          />
          <div>
            <span className="text-2xl font-bold font-['Cormorant']">
              Rings
              <br />
            </span>
            <span className="text-2xl font-bold font-['Cormorant']">
              7 products
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-start justify-start">
          <img
            className="w-[120px] h-[115px] bg-white rounded-full relative"
            src="/assets/icons/ring-1.svg"
          />
          <div>
            <span className="text-2xl font-bold font-['Cormorant']">
              Rings
              <br />
            </span>
            <span className="text-2xl font-bold font-['Cormorant']">
              7 products
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-start justify-start">
          <img
            className="w-[120px] h-[115px] bg-white rounded-full relative"
            src="/assets/icons/ring-1.svg"
          />
          <div>
            <span className="text-2xl font-bold font-['Cormorant']">
              Rings
              <br />
            </span>
            <span className="text-2xl font-bold font-['Cormorant']">
              7 products
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-start justify-start">
          <img
            className="w-[120px] h-[115px] bg-white rounded-full relative"
            src="/assets/icons/ring-1.svg"
          />
          <div>
            <span className="text-2xl font-bold font-['Cormorant']">
              Rings
              <br />
            </span>
            <span className="text-2xl font-bold font-['Cormorant']">
              7 products
            </span>
          </div>
        </div>
      </div>

      <div className="w-full text-white/opacity-60 text-[83px] font-bold font-['Cormorant']">
        WE ARE HERE, FOR{" "} YOU
      </div>
    </section>
  );
}

export default Categories;
