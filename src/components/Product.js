/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useProductContext } from "../context/productContext";
import Products from "./Products";
import Sort from "./Sort";
import Filter from "./Filter";
import { useFilterContext } from "../context/filter_context";


const Product = () => {
  const { products } = useProductContext();

  const {filter_products} = useFilterContext ();
  console.log(filter_products)

  return (
    <div className="text-left bg-slate-100 mt-2 pt-8 w-auto px-40 ">
      <div className="flex">

        <div className="w-1/4 bg-slate-50 h-full sticky table-column border-solid border-2  mx-5 ">
          {/* fliter section  */}

          <Filter />
        </div>

        <div className="flex-col w-3/4 bg-slate-50 h-fit border-solid border-2">
          {/* sort section  */}

          <Sort />

          {/* cart section  */}

          <div className=" flex flex-wrap">
            {filter_products.map((curElem) => {
              return <Products key={curElem.id} {...curElem} />;
            })}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Product;
