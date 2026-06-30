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
    <div>
      {console.log(product)}
      <Image className="rounded-xl"
        src={product?.[index]?.img?.url} // Use the dynamic index instead of hardcoded [1]
        width={400}
        height={400}
        alt={product?.[index]?.title || "product image"}
      />
    </div>
  );
}

export default ProductBanner;