import React from 'react';
import ProductList from './ProductList';
import ProductApis from '../_utils/ProductApis';

export default async function ProductSection() {
  let productList = [];
  
  try {
    const res = await ProductApis.getLatestProducts();
    productList = res?.data?.data || [];
  } catch (error) {
    console.error("فشل جلب المنتجات:", error.message);
  }

  return (
    <div className='bg-gray-100 py-8 justify-center items-center flex p-4'>
      <ProductList productList={productList} />
    </div>
  );
}