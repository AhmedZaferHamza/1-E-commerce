"use client" 
import ProductApis from "../../_utils/ProductApis";
import BreadCrumb from "../../_components/BreadCrumb";
import React, { useEffect, useState } from "react";
import ProductBanner from "./_components/ProductBanner"
import ProductInfo from "./_components/ProductInfo"

function ProductDetails({ params }) {
 const [productDetails, setproductDetails] = useState([]);
 
   useEffect(() => {
     getLatestProducts();
   }, []);
 
   const getLatestProducts = () => {
     ProductApis.getLatestProducts().then(res => {
       console.log(res.data);
       setproductDetails(res.data.data);
     }).catch(err => {
       console.error(err);
     });
   };
  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumb/>
      <ProductBanner product={productDetails} />
      <ProductInfo product={productDetails}/>
    </div>
  );
}

export default ProductDetails;