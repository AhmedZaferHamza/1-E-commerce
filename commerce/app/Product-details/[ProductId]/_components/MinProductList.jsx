import React from "react";
import MinProductItem from "./MinProductItem";
function MinProductList({ productList , category }) {
  return (
    <div>
      <h3 className="mt-16 p-6">{category} other</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  ">
        {productList?.map((product) => (
          <MinProductItem key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
}

export default MinProductList;
