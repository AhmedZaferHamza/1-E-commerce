"use client";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";

function ProductBanner({ product }) {
  const params = useParams();
  const id = Number(params.ProductId);
  // Change idToFind to id to match the variable declared above
  const index = product.findIndex((item) => item.id === id);
  
  console.log(index);
  console.log(id);

  return (
    <div className="w-full max-w-[550px] aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white p-2">
    <Image 
      className="rounded-xl w-full h-full object-cover"
      src={product?.[index]?.img?.url}
      width={450}
      height={450}
      alt={product?. [index]?.title || "product image"}
      priority
    />
  </div>
  );
}

export default ProductBanner;