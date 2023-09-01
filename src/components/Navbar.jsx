import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { selectTotalQunatity, setOpenCart } from "../app/CartSlice.js";
const Navbar = () => {
  const [navBarSticky, setNavBarSticky] = useState();
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQunatity);
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 30) {
      setNavBarSticky(true);
    } else {
      setNavBarSticky(false);
    }
  });

  return (
    <>
      <header
        className={` ${
          navBarSticky
            ? "fixed top-0 left-0 h-[9vh] flex items-center justify-center opacity-100 blur-effect-theme z-[100]  w-full"
            : "absolute top-7 left-0 right-0 opacity-[200] z-50"
        }`}
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navBarSticky && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2 ">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navBarSticky && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navBarSticky && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                onClick={onCartToggle}
                type="button"
                className="border-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navBarSticky && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 w-4 h-4 text-[0.65rem] rounded-full leading-tight  font-medium  flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navBarSticky
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100 "
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
