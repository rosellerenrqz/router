import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <header className="text-gray-300  mb-5 py-4 w-full">
        <nav>
          <ul className="flex justify-center text-xl">
            <li className="mx-3 hover:text-blue-400  hover:underline active:text-blue-300">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline text-blue-400" : undefined
                }>
                Home
              </NavLink>
            </li>
            <li className="mx-3 hover:text-blue-400 hover:underline active:text-blue-300">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "underline text-blue-400" : undefined
                }>
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
