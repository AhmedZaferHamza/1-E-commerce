import Link from "next/link";
import Image from "next/image";

function MinProductItem({ item, isLoading }) {
  // 1. حالة الـ Skeleton Loader عند التحميل
  if (isLoading || !item) {
    return (
      <div className="w-full flex flex-col gap-y-2 border border-gray-200 rounded-md p-4 shadow-sm animate-pulse">
        {/* هيكل الصورة (محجوز مساحته بنفس الأبعاد) */}
        <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-200" />

        {/* هيكل العنوان */}
        <div className="h-6 bg-gray-300 rounded-md w-3/4 mt-2" />

        {/* هيكل الوصف (سطرين) */}
        <div className="space-y-1.5 mt-1">
          <div className="h-3.5 bg-gray-200 rounded-md w-full" />
          <div className="h-3.5 bg-gray-200 rounded-md w-4/5" />
        </div>

        {/* هيكل السعر والزر */}
        <div className="flex items-center justify-between mt-3">
          <div className="h-5 bg-gray-300 rounded-md w-12" />
          <div className="h-8 bg-blue-200 rounded-md w-16" />
        </div>
      </div>
    );
  }

  // 2. المحتوى الحقيقي عند اكتمال البيانات
  return (
    <Link href={`/Product-details/${item?.id}`} className="w-full">
      <div className="flex flex-col gap-y-2 border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
        {/* حاوية الصورة لمنع الانزلاق (CLS) */}
        <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100">
          {item?.img?.url && (
            <Image
              src={item.img.url}
              alt={item?.title || "product image"}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>

        {/* العنوان والوصف والسعر */}
        <h2 className="font-bold text-lg mt-2">{item?.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          {item?.description?.[0]?.children?.[0]?.text}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold text-gray-800">${item?.price}</span>
          <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-xs font-medium">
            Add
          </button>
        </div>
      </div>
    </Link>
  );
}

export default MinProductItem;
