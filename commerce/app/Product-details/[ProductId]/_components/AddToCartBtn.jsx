"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProtectedButton() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleClick = () => {
    if (status === "loading") return; // انتظار حتى يتم تحميل حالة الجلسة

    if (session) {
      // إذا كان مسجلاً للدخول، انقله للصفحة المطلوبة (مثلاً: لوحة التحكم أو صفحة الحساب)
      router.push("/dashboard");
    } else {
      // إذا لم يكن مسجلاً، انقله لصفحة تسجيل الدخول
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#2C4CFD] text-white py-2 px-4 rounded-md hover:bg-[#1a3ae0] cursor-pointer transition-colors duration-300 max-w-[440px] mt-4">
    Add to Cart
    </button>
  );
}
 