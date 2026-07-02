import Link from "next/link";
import React from "react";

function MinProductItem({ item }) {
  console.log(item.id);
  return (
    <Link href={`/Product-details/${item.id}`} className="w-full">
      <div className="flex flex-col gap-y-2 border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer hover:scale-105 transform-gpu">
        <img src={item?.img?.url} alt={item?.title} />
        <h1>{item?.title}</h1>
        <p>{item.description?.[0]?.children?.[0]?.text}</p>
        <span>$ {item?.price}</span>
      </div>
    </Link>
  );
}

export default MinProductItem;
