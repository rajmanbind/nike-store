import React from "react";
import { useDispatch } from "react-redux";

import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice.js";
const Items = ({
  ifExists,
  id,
  price,
  color,
  shadow,
  title,
  btn,
  text,
  img,
  rating,
}) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch;
    dispatch(setAddItemToCart(item));
  };
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-lg px-5 py-4 transtion-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded">
              <h1 className="text-black text-sm font-medium blur-effect-theme">
                ${price}
              </h1>
            </div>
            <div className="flex items-center gap-1 ">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-900">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onAddToCart()}
              type="button"
              className="bg-white-90 blur-effect-theme button-theme p-0.5 shadow-slate-200"
            >
              <ShoppingBagIcon className="icon-style text-slate-900 " />
            </button>
            <button
              type="button"
              className="font-medium bg-white-90 blur-effect-theme button-theme px-2 py-1 shadow-slate-200 text-sm text-black"
              onClick={() => {
                onAddToCart();
                onCartToggle();
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justify-items-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-img${id}`}
            className={`transitions-theme hover:-rotate-12 ${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64 "
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Items;
