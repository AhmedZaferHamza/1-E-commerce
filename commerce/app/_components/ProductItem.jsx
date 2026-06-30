import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductItem({ product }) {
  return (
    <div className="cursor-pointer bg-white p-4 rounded shadow flex flex-col h-150px w-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:z-10 relative">
      <Link href={`/Product-details/${product?.id}`}>
        <div>
          {console.log(
            "Full Image Path:",
            product?.attributes?.banner?.data?.attributes?.url,
          )}
          <img
            className="w-full mb-4 rounded"
            src={product?.img?.formats?.thumbnail?.url}
            alt={product?.img?.alternativeText || "product image"}
          />
          <div className="p-4 pt-2 flex flex-col flex-1 ">
            <h2 className="text-xl font-bold text-black mb-2 line-clamp-1">
              {product?.title}
            </h2>
            <p className="line-clamp-2 text-black text-sm mb-4">
              {product?.description?.[0]?.children?.[0]?.text}
            </p>

            <div className="flex justify-between items-center mt-auto gap-2 w-full">
              <span className="text-base md:text-lg font-semibold text-black shrink-0">
                ${product?.price}
              </span>
              <button className="bg-blue-500 text-white text-xs md:text-sm py-2 px-2 md:px-6 rounded hover:bg-blue-600 font-medium transition-colors flex-1 text-center min-w-0 truncate">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
