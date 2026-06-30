"use client";
import { useParams } from "next/navigation";
import React from "react";
function ProductInfo({product}) {
   const params = useParams();
    const id = Number(params.ProductId);
    // Change idToFind to id to match the variable declared above
    const index = product.findIndex((item) => item.id === id);
  return (
    <div>
      <h2>
        {product?.[index]?.title}
        <p>
          {product?.[index]?.description?.[0]?.}        
        </p>
      </h2>
    </div>
  )
}

export default ProductInfo