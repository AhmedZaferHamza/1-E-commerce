import React from "react";
import Image from "next/image";
function ProductBanner({ product }) {
  return (
    <div>
      {console.log(product)}
 <img
            className="w-full mb-4 rounded"
            src={product?.img?.formats?.thumbnail?.url}
            alt={product?.img?.alternativeText || "product image"}
          />
    </div>
  );
}

export default ProductBanner;
