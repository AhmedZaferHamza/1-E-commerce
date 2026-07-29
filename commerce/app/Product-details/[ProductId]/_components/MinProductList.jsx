import React from "react";
import MinProductItem from "./MinProductItem";

function MinProductList({ productList, isLoading, category }) {
  // مصفوفة مؤقتة لتحديد عدد الـ Skeletons المطلوب عرضها أثناء التحميل (مثلاً 3)
  const dummySkeletons = [1, 2, 3];

  return (
    <div>
      <h3 className="mt-16 p-6 font-bold text-xl">{category}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
        {isLoading
          ? dummySkeletons.map((_, index) => (
              <MinProductItem key={index} isLoading={true} />
            ))
          : productList?.map((product) => (
              <MinProductItem key={product.id} item={product} />
            ))}
      </div>
    </div>
  );
}

export default MinProductList;
