import React from "react";
import AddToCartBtn from "./AddToCartBtn";

export default function ProductInfo({ product, productId }) {
  const id = Number(productId);
  const index = product?.findIndex((item) => item.id === id);
  const currentProduct = product?.[index];

  return (
    <div className="flex flex-col gap-y-8 ml-6">
      <h2 className="text-center md:text-left text-[30px] font-bold">
        {currentProduct?.title}
      </h2>
      <p className="text-center md:text-left">
        {currentProduct?.description?.[0]?.children?.[0]?.text}
      </p>
      <div className="flex justify-between max-w-[440px]">
        <span className="text-[#2C4CFD] font-bold">
          Price: ${currentProduct?.price}
        </span>
      </div>
      <AddToCartBtn product={currentProduct} />
    </div>
  );
}