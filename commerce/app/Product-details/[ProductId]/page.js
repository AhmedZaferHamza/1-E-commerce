"use client" 
import ProductApis from "../../_utils/ProductApis";
import BreadCrumb from "../../_components/BreadCrumb";
import React, { useEffect } from "react";

function ProductDetails({ params }) {
  
  useEffect(() => {

    const productId = params?.ProductId; 
    
    if (productId) {
      getProductById_(productId);
    }
  }, [params]);

  const getProductById_ = (id) => {
    ProductApis.getProductById(id).then((res) => {
      console.log('Product item', res?.data);
    }).catch((err) => {
      console.error("Error fetching product:", err);
    });
  };

  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumb/>
    </div>
  );
}

export default ProductDetails;