import React from 'react';
import ProductList from './ProductList';
import ProductApis from '../_utils/ProductApis';

export default async function ProductSection() {
  // جلب البيانات على السيرفر قبل إرسال كود الـ HTML للمتصفح
  const res = await ProductApis.getLatestProducts();
  const productList = res?.data?.data || [];

  return (
    <div className='bg-gray-100 py-8 justify-center items-center flex p-4'>
      <ProductList productList={productList} />
    </div>
  );
}