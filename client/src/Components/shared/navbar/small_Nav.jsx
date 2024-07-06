import React, { useState } from "react";
import { Link } from "react-router-dom";

function SecondNavbar() {
  return (
    <header className="flex pt-4 pb-1 px-2 sm:px-6 lg:px-8 items-center justify-center">
      <nav className="flex items-center">
        <ul className="flex flex-1 items-center justify-end space-x-6">
          <Link
            to={"/home"}
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            to={"/shop"}
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Shop
          </Link>
          <Link
            to={"/page"}
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Pages +
          </Link>
          <Link
            to={"/blogs"}
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Blogs
          </Link>
          <Link
            to={"/contact"}
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Contact us
          </Link>
        </ul>
      </nav>

      <select className="ml-auto flex border p-3 text-[20px] items-center justify-center rounded-md">
        <option>Recently Viewed</option>
      </select>
    </header>
  );
}

export default SecondNavbar;
