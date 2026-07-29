"use client";
import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react"; // 1. استيراد signIn

const SumNum = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  
  // 2. استدعاء الجلسة
  const { data: session, status } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 3. التحقق من حالة تسجيل الدخول
    if (status === "unauthenticated") {
      // إذا لم يكن مسجلاً، نطلب تسجيل الدخول
      signIn(); // سيقوم بتحويله لصفحة تسجيل الدخول
      return;
    }

    if (status === "authenticated") {
      // 4. إذا كان مسجلاً، نفذ الوظيفة (الجمع)
      const s = num1 + num2;
      console.log( s);
      console.log( session.user.email);
      // هنا يمكنك أيضاً إرسال الطلب لـ Strapi باستخدام session.apiToken
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        placeholder="Number 1" 
        value={num1} 
        onChange={(e) => setNum1(Number(e.target.value))} 
      />
      <input 
        type="number" 
        placeholder="Number 2" 
        value={num2} 
        onChange={(e) => setNum2(Number(e.target.value))} 
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Loading..." : "Sum"}
      </button>
    </form>
  );
};

export default SumNum;