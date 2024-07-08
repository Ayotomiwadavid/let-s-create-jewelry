import React from "react";
import { Link } from "react-router-dom";

function Social() {
  return (
    <div>
      <img className="w-full h-[30rem] -z-20" src="/assets/imgs/newletters.png" />
      <div className="flex absolute hidden mt-0 bottom-0 mx-5 md:mx-12 z-50 flex-col items-start justify-center">
        <div className="text-primary text-[35px] font-bold font-['Cormorant']">
          $20 discount for your first order
        </div>
        <div className="text-white text-6xl font-bold font-['Cormorant']">
          Join our newsletter and get...
        </div>
        <div className="text-white text-3xl font-bold font-['Cormorant']">
          We'll email you a voucher worth $10 off your first order over $50.
          <br />
        </div>
      </div>
    </div>
  );
}

export default Social;
