"use client";
import React, { useState } from "react";
import Link from "next/link";
import { authSchemaRegister } from "../../../schemas/authSchemaRegister";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState(""); // اسم المتغير هنا userName
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState({ type: "", text: "" });

const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors({});
  setServerMessage({ type: "", text: "" });

  const dataValidation = {
    userName: userName, // تأكد أن هذه مطابقة للحقل في الـ Schema
    email: email,
    password: password,
  };

  const result = authSchemaRegister.safeParse(dataValidation);
  if (!result.success) {
    const validationErrors = {};
    result.error.issues.forEach((issue) => {
      validationErrors[issue.path[0]] = issue.message;
    });
    setErrors(validationErrors);
    return;
  }

  try {
    // تعريف المتغير res هنا
    const res = await fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userName, // Strapi يتوقع username
        email: email,
        password: password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setServerMessage({
        type: "error",
        text: data.error?.message || "An error occurred during registration."
      });
      return;
    }

    setServerMessage({ type: "success", text: "تم التسجيل بنجاح!" });
    setEmail(""); setPassword(""); setUserName("");
  } catch (error) {
    console.error("Error:", error);
    setServerMessage({
      type: "error",
      text: "Failed to connect to the server."
    });
  }
};
  
  // ... باقي الكود
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            انشاء حساب جديد
          </h2>
          <p className="text-sm text-slate-500">يرجى إدخال بياناتك للمتابعة</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label
              htmlFor="UserName"
              className="text-sm font-medium text-slate-700 block"
            >
              اسم المستخدم
            </label>
            <input
              className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-left"
              type="text"
              id="UserName"
              placeholder="UserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700 block"
            >
              البريد الإلكتروني
            </label>
            <input
              className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-left"
              type="email"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                كلمة المرور
              </label>
              <a
                href="#"
                className="text-xs font-semibold text-blue-600 hover:text-blue-500 hover:underline"
              >
                نسيت كلمة المرور؟
              </a>
            </div>
            <input
              className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-left"
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
      {errors.password}
    </p>
            )}
          </div>
          {serverMessage.text && (
            <div
              className={`p-3 text-sm rounded-lg text-center border ${
                serverMessage.type === "success"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-rose-50 text-rose-700 border-rose-200"
              }`}
            >
              {serverMessage.text}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-150"
          >
            انشاء حساب
          </button>
        </form>
        <div className="flex justify-center gap-4">
          <button className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-150">
            Google
          </button>
          <button className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-150">
            Facebook
          </button>
        </div>
        <p className="text-center text-sm text-slate-500">
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-500 hover:underline"
          >
            لديك حساب؟
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
