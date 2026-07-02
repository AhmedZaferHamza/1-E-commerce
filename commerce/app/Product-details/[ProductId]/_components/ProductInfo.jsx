"use client";
import { useParams } from "next/navigation";
import React from "react";
function ProductInfo({ product }) {
  const params = useParams();
  const id = Number(params.ProductId);
  // Change idToFind to id to match the variable declared above
  const index = product.findIndex((item) => item.id === id);
  return (
    <div className="flex flex-col gap-y-8 mt-6 ">
      <h2 className="text-center md:text-left text-[30px] font-bold">{product?.[index]?.title}</h2>
      <p className="text-center md:text-left">Description: {product?.[index]?.description?.[0]?.children?.[0]?.text}.</p>
      <div className="flex justify-between  max-[440px]:flex-col">
        <span className="text-[#2C4CFD] text-center">
          Price: ${product?.[index]?.price}
        </span>
        <button className="bg-[#2C4CFD] text-white py-2 px-4 rounded-md hover:bg-[#1a3ae0] cursor-pointer transition-colors duration-300 max-[440px]:mt-4">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
