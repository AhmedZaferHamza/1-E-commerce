"use client";
import ProductApis from "../../_utils/ProductApis";
import BreadCrumb from "../../_components/BreadCrumb";
import React, { useEffect, useState } from "react";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import { useParams } from "next/navigation";
import MinProductList from "./_components/MinProductList";

function ProductDetails({}) {
  const [productDetails, setproductDetails] = useState([]);
  const params = useParams();
  const id = Number(params.ProductId);
  // Change idToFind to id to match the variable declared above
  const index = productDetails.findIndex((item) => item.id === id);

  console.log(index);
  const category1 = productDetails?.[index]?.Category;
  console.log(category1);

  useEffect(() => {
    getLatestProducts();
  }, []);

  const getLatestProducts = () => {
    ProductApis.getLatestProducts()
      .then((res) => {
        console.log(res.data);
        setproductDetails(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  console.log(productDetails);

 const currentCategory = productDetails[index]?.Category;

  const similarProducts = productDetails.filter((item, idx) => {
    return item?.Category === currentCategory && idx !== index;
  });

  console.log(similarProducts);

  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumb product={productDetails}/>
      <div className="flex flex-col items-center md:items-center md:flex-row gap-8 mt-12">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <MinProductList productList={similarProducts} category={category1}/>
    </div>
  );
}

export default ProductDetails;
