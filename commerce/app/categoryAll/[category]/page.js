"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductApis from "../../_utils/ProductApis";
import ProductList from "../../_components/ProductList";
import BreadCrumb2 from "@/app/_components/BreadCrumb2";

export default function CategoryPage() {
  const params = useParams();
  const [product, setProduct] = useState([]);

  const category = params?.category ? decodeURIComponent(params.category) : "";
  console.log(category);

  useEffect(() => {
    getLatestProducts();
  }, []);

  const getLatestProducts = () => {
    ProductApis.getLatestProducts()
      .then((res) => {
        console.log(res.data);
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(product);

  const productList = product.filter((item, idx) => {
    return item?.Category === category;
  });
  console.log(productList);
  return (
    <div className="px-10 py-8 md:px-28">
      <div  >
        <BreadCrumb2 product={productList} />
      </div>
      <div className="flex flex-col items-center md:items-center md:flex-row gap-8 mt-12">
        <ProductList productList={productList} />
      </div>
    </div>
  );
}
