import React from "react";
import Image from "next/image";

export default function ProductBanner({ product, productId }) {
  const id = Number(productId);
  const index = product?.findIndex((item) => item.id === id);
  const currentProduct = product?.[index];

  return (
    <div className="w-full max-w-[550px] aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white p-2">
      {currentProduct?.img?.url ? (
        <Image
          className="rounded-xl w-full h-full object-cover"
          src={currentProduct.img.url}
          width={450}
          height={450}
          alt={currentProduct?.title || "product image"}
          priority
        />
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
          لا توجد صورة
        </div>
      )}
    </div>
  );
}