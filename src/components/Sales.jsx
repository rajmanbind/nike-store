import React from "react";
import Title from "../utils/Title";
import Items from "../utils/Items";

const Sales = ({ifExists, endpoint }) => {
  // console.log(endpoint);
  return (
    <>
      <div  className="nike-container">
        <Title title={endpoint.title} />
        <div className={`grid items-center justify-items-center sm:grid-cols-1 gap-7 lg:gap-5 mt-7 ${ifExists?"grid-cols-3 xl:grid-cols-2 sm:grid-cols-1":"grid-cols-4 xl:grid-cols-3 md:grid-cols-2 "}`}>
          {endpoint.items?.map((item, i) => (
            <Items key={i} {...item} ifExists={ifExists}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
