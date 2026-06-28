"use client";
import React, { useEffect, useState } from 'react'; // 1. أضف useState
import ProductList from './ProductList';
import ProductApis from '../_utils/ProductApis';

function ProductSection() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts();
  }, []);

  const getLatestProducts = () => {
    ProductApis.getLatestProducts().then(res => {
      console.log(res.data);
      setProductList(res.data.data);
    }).catch(err => {
      console.error(err);
    });
  };

  return (
    <div className="bg-gray-100 py-8 justify-center items-center flex p-4">
      <ProductList productList={productList} />
    </div>
  );
}
export default ProductSection;