import React, { useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "./small_Nav";

function Navbar() {
  return (
    <>
      <div className="bg-white sticky top-0 z-50">
        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className="bg-gray-100 px-2 sm:px-6 lg:px-8 shadow-xl "
          >
            <div className="flex flex-row h-20 justify-between items-center">
              {/* Logo */}
              <div className="flex lg:ml-0">
                <Link to={"/home"} className="flex">
                  <div className="flex ">
                    <h1 className=" text-2xl font-bold text-black  px-2 py-1 rounded">
                      E-Commerce
                    </h1>
                  </div>
                </Link>
              </div>

              <nav className="ml-auto flex gap-4 items-center justify-center">
                <button className="font-bold bg-primary text-white hover:bg-white hover:text-primary py-3 text-center w-full lg:w-[15em] rounded-md">
                  Browse Categories
                </button>
                <div>
                  <input className="border text-black p-3 w-full lg:w-[15em] rounded-sm" />
                </div>
              </nav>

              <div className="ml-auto flex bg-gray-200 px-4 pt-3 pb-2 text-[20px] items-center justify-center gap-3 rounded-md">
                <Link to={"/"} className="hidden">
                  <ion-icon name="person-outline"></ion-icon>
                </Link>
                <Link to={"/"} className="hidden">
                  <ion-icon name="search-outline"></ion-icon>
                </Link>
                <Link to={"/"}>
                  <ion-icon name="heart-outline"></ion-icon>
                </Link>
                <Link to={"/cart"}>
                  <ion-icon name="cart-outline"></ion-icon>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <SecondNavbar />
      </div>
    </>
  );
}

export default Navbar;
